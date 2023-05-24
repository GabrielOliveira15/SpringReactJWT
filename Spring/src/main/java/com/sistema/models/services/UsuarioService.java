package com.sistema.models.services;

import java.util.Optional;

import com.sistema.models.model.Usuario;

public interface UsuarioService extends GenericService<Usuario, Long>{

	Optional<Usuario> consultarUsuarioPorEmail(String email);
}
