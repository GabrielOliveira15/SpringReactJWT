package com.sistema.models.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistema.models.model.Peca;
import com.sistema.models.repository.PecaRepository;
import com.sistema.models.services.PecaService;


@Service
public class PecaServiceImpl implements PecaService {
	
	@Autowired
	public PecaRepository pecaRepository;
	
	@Override
	public List<Peca> lista() {
		return pecaRepository.findAll();
	}

	@Override
	public Peca incluir(Peca peca) {
		return pecaRepository.save(peca);
	}

	@Override
	public Peca alterar(Long id, Peca peca) {
		
		Peca pecaCadastrada = pecaRepository.findById(id).get();
		
		pecaCadastrada.setCodigo_peca(peca.getCodigo_peca());
		pecaCadastrada.setDescricao_peca(peca.getDescricao_peca());
		pecaCadastrada.setPreco_peca(peca.getPreco_peca());
		
		return pecaRepository.save(pecaCadastrada);
	}

	@Override
	public void excluir(Long id) {
		pecaRepository.deleteById(id);
	}

	@Override
	public Peca consultarPorId(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Peca> lista(String keyword) {
		// TODO Auto-generated method stub
		return null;
	}

}
