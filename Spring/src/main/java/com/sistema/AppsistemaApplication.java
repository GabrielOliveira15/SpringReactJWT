package com.sistema;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppsistemaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppsistemaApplication.class, args);
	}
	
    @PostConstruct
    public void init(){
      // Setting Spring Boot SetTimeZone
      TimeZone.setDefault(TimeZone.getTimeZone("GTM-3:00"));
    }

}
