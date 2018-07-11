package com.codeoftheweb.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(){
		Annuity testAnnuity = new Annuity(5000,5.00,24,new Date());
		System.out.println("annuity is " + testAnnuity.getAnnuity());
		testAnnuity.setRepayPlan();
		System.out.println(testAnnuity.getRepayPlan());
		return (args) -> {};

	}
}
