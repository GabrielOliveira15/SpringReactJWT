package com.sistema.models.services.components;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CriptografarSenha {

	private BCryptPasswordEncoder encoder;
	
	public PasswordEncoder encodePassword() {
		return new BCryptPasswordEncoder();
	}
	
	public PasswordEncoder getPasswordEncoder() {
		return encoder;
	}

}
