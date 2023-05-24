package com.sistema.models.repository.query;

import java.util.Optional;

import com.sistema.models.model.Usuario;

public interface UsuarioQuery {
	
	Optional<Usuario> consultarUsuarioPorEmail(String email);

}
