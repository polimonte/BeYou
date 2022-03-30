package com.beyou.springboot;

import com.beyou.springboot.model.Empregos;
import com.beyou.springboot.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeyouBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BeyouBackendApplication.class, args);
	}

	@Autowired
	private EmpregosRepository empregosRepository;

	@Autowired
	private CursosRepository cursosRepository;

	@Autowired
	private CasasAcolhimentoRepository casasAcolhimentoRepository;

	@Autowired
	private ParceirosRepository parceirosRepository;

	@Autowired
	private VoluntariosRepository voluntariosRepository;

	@Override
	public void run(String... args) throws Exception {
//		Empregos emprego1 = new Empregos();
//		emprego1.setNomeEmpresa("Google");
//		emprego1.setCargo("Desenvolvedor Jr.");
//		emprego1.setEstadoCidade("São Paulo/SP");
//		emprego1.setSalario("R$ 4.950,00");
//		emprego1.setBeneficios("VT/VR/VA/Assis. Méd...");
//		empregosRepository.save(emprego1);
	}
}
