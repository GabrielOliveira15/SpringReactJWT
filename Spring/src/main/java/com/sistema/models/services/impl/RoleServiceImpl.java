package com.sistema.models.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sistema.models.model.Role;
import com.sistema.models.repository.RoleRepository;
import com.sistema.models.services.RoleService;
import com.sistema.models.services.exception.EntidadeNaoEncontrada;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public Role incluir(Role entity) {
		return roleRepository.save(entity);
	}

	@Override
	public Role alterar(Long id, Role entity) {
		Role roleCadastrada = consultarPorId(id);
	    roleCadastrada.setNome(entity.getNome());	
		return roleRepository.save(roleCadastrada);
	}

	@Override
	public void excluir(Long id) {
		roleRepository.deleteById(id);
	}

	@Override
	public Role consultarPorId(Long id) {
		return roleRepository.findById(id)
				.orElseThrow(()->new EntidadeNaoEncontrada("Role não Cadastrada!"));
	}

	@Override
	public List<Role> lista() {
		return roleRepository.findAll();
	}

	@Override
	public List<Role> lista(String keyword) {
		return null;
	}

}
