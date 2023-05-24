package com.sistema.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sistema.models.model.Usuario;
import com.sistema.models.repository.query.UsuarioQuery;

public interface UsuarioRepository 
       extends JpaRepository<Usuario, Long>, UsuarioQuery{
	@Query(value="SELECT obj FROM Usuario obj WHERE obj.email = :keyword")
	Usuario findByEmail(String keyword);
}
