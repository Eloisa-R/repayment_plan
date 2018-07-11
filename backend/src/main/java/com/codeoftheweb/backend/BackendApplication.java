package com.codeoftheweb.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.List;

@SpringBootApplication
public class BackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(AnnuityRepository annuityRepository, InstallmentRepository installmentRepository){
		Annuity testAnnuity = new Annuity(5000,5.00,24,new Date());
		System.out.println("annuity is " + testAnnuity.getAnnuity());


		return (args) -> {

			annuityRepository.save(testAnnuity);
			double inputPrinc = testAnnuity.getLoanAmount();
			for (int i=0; i < testAnnuity.getDuration(); i++) {

				testAnnuity.addInstallment(new Installment(i,testAnnuity.getAnnuity(),testAnnuity.getStartDate(), inputPrinc,testAnnuity.getNominalIR()));
				List<Installment> allInst = testAnnuity.getRepaymentplan();
				Installment lastInstallment = allInst.get(allInst.size()-1);
				installmentRepository.save(lastInstallment);
				inputPrinc = lastInstallment.getRemainPrinc();
			}

			for (Installment installment: testAnnuity.getRepaymentplan()) {

				System.out.println(installment.getIndex());
				System.out.println(installment.getLoanAmount());
				System.out.println(installment.getPrincipal());
				System.out.println(installment.getRemainPrinc());
			}
		};

	}
}
