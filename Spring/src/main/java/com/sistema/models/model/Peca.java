package com.sistema.models.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Peca")
public class Peca {

	private Long id_peca;
	private String codigo_peca;
	private String descricao_peca;
	private Long preco_peca;
	// private Integer grupo_peca; Usar depois como chave estrangeira

	public Peca(Long id_peca, String descricao_peca, Long preco_peca, String codigo_peca) {
		this.id_peca = id_peca;
		this.codigo_peca = codigo_peca;
		this.descricao_peca = descricao_peca;
		this.preco_peca = preco_peca;
	}

	public Peca() {

	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_PECA")
	public Long getId_peca() {
		return id_peca;
	}

	public void setId_peca(Long id_peca) {
		this.id_peca = id_peca;
	}

	@Column(name = "DESCRICAO_PECA")
	public String getDescricao_peca() {
		return descricao_peca;
	}

	public void setDescricao_peca(String descricao_peca) {
		this.descricao_peca = descricao_peca;
	}

	@Column(name = "PRECO_PECA")
	public Long getPreco_peca() {
		return preco_peca;
	}

	public void setPreco_peca(Long preco_peca) {
		this.preco_peca = preco_peca;
	}

	@Column(name = "CODIGO_PECA")
	public String getCodigo_peca() {
		return codigo_peca;
	}

	public void setCodigo_peca(String codigo_peca) {
		this.codigo_peca = codigo_peca;
	}

}
