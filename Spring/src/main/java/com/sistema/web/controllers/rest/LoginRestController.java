package com.sistema.web.controllers.rest;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.sistema.models.dto.UsuarioLogadoOutput;
import com.sistema.models.model.Login;
import com.sistema.models.model.Usuario;
import com.sistema.models.services.UsuarioService;

public class LoginRestController {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(value="/login", 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public UsuarioLogadoOutput login(@RequestBody @Valid Login login) {
		
		Optional<Usuario> usuario = usuarioService.consultarUsuarioPorEmail(login.getEmail());
		
		if (!usuario.isPresent()) {
			throw new UsernameNotFoundException("Usuário não cadastrado!");
		}
		
		if (login.getEmail().equals(usuario.get().getEmail()) && usuario.get().isAtivo() == false) {
		    throw new LockedException("Usuário bloqueado no sistema!");	
		}
		
		if (login.getEmail().equals(usuario.get().getEmail()) && BCrypt.checkpw( login.getPassword(),usuario.get().getPassword())) {
	        new UsernamePasswordAuthenticationToken(usuario.get(), usuario.get().getPassword(), usuario.get().getAuthorities()); 		
		} else  {
			throw new BadCredentialsException("A senha informada não está correta");
		}

		
		UsuarioLogadoOutput usuarioLogado = new UsuarioLogadoOutput();
		
		usuarioLogado.setEmail(usuario.get().getEmail());
		usuarioLogado.setUsername(usuario.get().getUsername());
		usuarioLogado.setRoles(usuario.get().getListaRoles());
		usuarioLogado.setToken("0123456789");
		return usuarioLogado;
	}
	
	
}
