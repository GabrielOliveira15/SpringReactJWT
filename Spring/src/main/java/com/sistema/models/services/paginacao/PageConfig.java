package com.sistema.models.services.paginacao;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class PageConfig {
	
	public static Pageable gerarPagina(Integer page, Integer pageSize, String ordem, String props) {
		return PageRequest.of(page,pageSize,getDirection(ordem, props));
	}

	private static Sort getDirection(String ordem, String props) {
		Sort sort = ordem.equalsIgnoreCase(Sort.Direction.ASC.name())
				    ? Sort.by(props).ascending()
				    : Sort.by(props).descending();
		return sort;
	}

}
