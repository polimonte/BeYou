package com.beyou.springboot.controller;

import com.beyou.springboot.exception.ResourceNotFoundException;
import com.beyou.springboot.model.CasasAcolhimento;
import com.beyou.springboot.model.Empregos;
import com.beyou.springboot.repository.CasasAcolhimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/casasacolhimento")
public class CasasAcolhimentoController {

    @Autowired
    private CasasAcolhimentoRepository casasAcolhimentoRepository;

    @GetMapping
    public List<CasasAcolhimento> getAllCasas(){
        return casasAcolhimentoRepository.findAll();
    }

    //create CasasAcolhimento REST API
    @PostMapping
    public CasasAcolhimento createCasa(@RequestBody CasasAcolhimento casasAcolhimento){
        return casasAcolhimentoRepository.save(casasAcolhimento);
    }

    //get CasasAcolhimento por id REST API
    @GetMapping("{id}")
    public ResponseEntity<CasasAcolhimento> getCasasPorId(@PathVariable long id){
        CasasAcolhimento casasAcolhimento = casasAcolhimentoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Casa com id: " + id + " não foi encontrada."));

        return ResponseEntity.ok(casasAcolhimento);
    }

    //update CasasAcolhimento REST API
    @PutMapping("{id}")
    public ResponseEntity<CasasAcolhimento> updateCasa(@PathVariable long id, @RequestBody CasasAcolhimento casasDetails){
        CasasAcolhimento updateCasa = casasAcolhimentoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Casa com id: " + id + " não foi encontrada."));

        updateCasa.setNomeCasa(casasDetails.getNomeCasa());
        updateCasa.setSite(casasDetails.getSite());
        updateCasa.setEstado(casasDetails.getEstado());
        updateCasa.setCidade(casasDetails.getCidade());

        casasAcolhimentoRepository.save(updateCasa);

        return ResponseEntity.ok(updateCasa);
    }

    //delete CasasAcolhimento REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCasa(@PathVariable long id){
        CasasAcolhimento casasAcolhimento = casasAcolhimentoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Casa com id: " + id + " não foi encontrada."));

        casasAcolhimentoRepository.delete(casasAcolhimento);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
