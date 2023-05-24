package com.sistema.models.services.impl;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sistema.models.model.Usuario;
import com.sistema.models.repository.UsuarioRepository;
import com.sistema.models.services.RoleService;
import com.sistema.models.services.components.CriptografarSenha;
import com.sistema.models.services.exception.EmailCadastrado;
import com.sistema.models.services.exception.SenhaNaoConfirmada;

@Service
@Transactional
public class UsuarioServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private RoleService roleService;

	@Autowired
	private CriptografarSenha cripto;

	public Usuario incluir(Usuario entity) {
		entity = validarUsuario(entity);
		return usuarioRepository.save(entity);
	}
//
//	@Override
//	public Usuario alterar(Long id, Usuario entity) {
//		
//		entity = validarUsuario(entity);
//		
//		Usuario usuarioCadastrado = consultarPorId(id);
//		usuarioCadastrado.setEmail(entity.getEmail());
//		usuarioCadastrado.setFoto(entity.getFoto());
//		usuarioCadastrado.setListaRoles(entity.getListaRoles());
//		usuarioCadastrado.setPassword(entity.getPassword());
//		usuarioCadastrado.setUsername(entity.getUsername());
//		
//		return usuarioRepository.save(usuarioCadastrado);
//	}
//
//	@Override
//	public void excluir(Long id) {
//		usuarioRepository.deleteById(id);
//	}
//
//	@Override
//	public Usuario consultarPorId(Long id) {
//		return usuarioRepository.findById(id)
//                .orElseThrow(()->new EntidadeNaoEncontrada("Entidade não Cadastrada!"));
//	}
//

	public Optional<Usuario> consultarUsuarioPorEmail(String email) {
		return usuarioRepository.consultarUsuarioPorEmail(email);
		                 //.orElseThrow(()->new EmailCadastrado("Email já Cadastrado!"));
	}
	
	
	private Usuario validarUsuario(Usuario entity) {
		Optional<Usuario> usuarioCadastrado = consultarUsuarioPorEmail(entity.getEmail());
		
		if (usuarioCadastrado.isPresent() && !usuarioCadastrado.equals(entity)) {
			throw new EmailCadastrado("O E-mail já está cadastrado");
		}
		
		if ( entity.getConfirmePassword().equals("")) {
			throw new SenhaNaoConfirmada("A confirmação da senha deve ser informada!");
		}
		
		if ( !entity.getConfirmePassword().equals(entity.getPassword())) {
		   	throw new SenhaNaoConfirmada("Senha não está validada!");
		}
		
		entity.getListaRoles()
		      .forEach(role->roleService.consultarPorId(role.getId())); 
		
		entity.setPassword(cripto.encodePassword().encode(entity.getPassword()));
		
		entity.setAtivo(true);
		
		return entity;
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario obUsuario = usuarioRepository.findByEmail(username);
		
		if (obUsuario == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		
		return new User(obUsuario.getEmail(), obUsuario.getPassword(),
				new ArrayList<>());
	}


}
