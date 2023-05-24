package com.sistema.models.repository.query;

import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.sistema.models.model.Usuario;

public class UsuarioQueryImpl implements UsuarioQuery {
    
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public Optional<Usuario> consultarUsuarioPorEmail(String email) {
		
		TypedQuery<Usuario> consultarPorEmail = 
				em.createQuery("SELECT u FROM Usuario u "
						+ "LEFT JOIN FETCH u.listaRoles "
						+ "WHERE u.email=:email", Usuario.class)
				        .setParameter("email", email); 
		return consultarPorEmail.setMaxResults(1)
				                .getResultList()
				                .stream()
				                .findFirst();
	}

}
