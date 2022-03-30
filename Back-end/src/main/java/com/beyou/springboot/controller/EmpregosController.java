package com.beyou.springboot.controller;


import com.beyou.springboot.exception.ResourceNotFoundException;
import com.beyou.springboot.model.Empregos;
import com.beyou.springboot.repository.EmpregosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/empregos")
public class EmpregosController {

    @Autowired
    private EmpregosRepository empregosRepository;

    //get empregos REST API
    @GetMapping
    public List<Empregos> getAllEmpregos(){
        return empregosRepository.findAll();
    }

    //create empregos REST API
    @PostMapping
    public Empregos createEmprego(@RequestBody Empregos empregos){
        return empregosRepository.save(empregos);
    }

    //get empregos por id REST API
    @GetMapping("{id}")
    public ResponseEntity<Empregos> getEmpregoPorId(@PathVariable long id){
        Empregos empregos = empregosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Emprego com id: " + id + " não foi encontrado."));
        return ResponseEntity.ok(empregos);
    }

    //update emprego REST API
    @PutMapping("{id}")
    public ResponseEntity<Empregos> updateEmprego(@PathVariable long id, @RequestBody Empregos empregoDetails){
        Empregos updateEmpregos = empregosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Emprego com id: " + id + " não foi encontrado."));

        updateEmpregos.setNomeEmpresa(empregoDetails.getNomeEmpresa());
        updateEmpregos.setCargo(empregoDetails.getCargo());
        updateEmpregos.setEstadoCidade(empregoDetails.getEstadoCidade());
        updateEmpregos.setSalario(empregoDetails.getSalario());
        updateEmpregos.setBeneficios(empregoDetails.getBeneficios());

        empregosRepository.save(updateEmpregos);

        return ResponseEntity.ok(updateEmpregos);
    }

    //delete emprego REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmprego(@PathVariable long id){
        Empregos empregos = empregosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Emprego com id: " + id + " não foi encontrado."));

        empregosRepository.delete(empregos);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
