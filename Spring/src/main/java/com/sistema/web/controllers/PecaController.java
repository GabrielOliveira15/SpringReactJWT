package com.sistema.web.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistema.models.model.Peca;
import com.sistema.models.services.PecaService;

@RestController
@RequestMapping(value = "/peca")
public class PecaController {
	
	@Autowired
	public PecaService pecaService;
	
//  ROTINAS DE CONSULTA
	
	@GetMapping(value = "/lista")
	public List<Peca> lista(Model model) {
		
		List<Peca> peca = new ArrayList<>();
		peca = pecaService.lista();
		
		return peca;
	}
	
//  ROTINAS DE INCLUSÃO
	
	@PostMapping(value = "/incluir")
	public void incluir(@RequestBody Peca peca) {
		pecaService.incluir(peca);
	}
	
//  ROTINAS DE ALTERAR
	
	@PostMapping(value = "/alterar/{id}")
	public void alterar(@PathVariable("id") Long id,@RequestBody Peca peca) {
		pecaService.alterar(id, peca);
	}
	
// ROTINAS DE EXCLUSÃO
	
	@DeleteMapping(value = "/excluir/{id}")
	public void excluir(@PathVariable("id") Long id) {
		pecaService.excluir(id);
	}

}
