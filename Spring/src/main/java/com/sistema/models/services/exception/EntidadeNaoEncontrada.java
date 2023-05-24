package com.sistema.models.services.exception;

public class EntidadeNaoEncontrada extends RuntimeException {

	private static final long serialVersionUID = -5696276527167223576L;

	public EntidadeNaoEncontrada(String mensagem) {
		super(mensagem);
	}
	
}
