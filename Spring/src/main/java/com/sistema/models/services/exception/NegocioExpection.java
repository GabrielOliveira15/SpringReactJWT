package com.sistema.models.services.exception;

public class NegocioExpection extends RuntimeException {

	private static final long serialVersionUID = -291337797087893417L;
	
	public NegocioExpection(String mensagem) {
		super(mensagem);
	}

}
