package com.sistema.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistema.models.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
