package com.beyou.springboot.controller;

import com.beyou.springboot.exception.ResourceNotFoundException;
import com.beyou.springboot.model.Parceiros;
import com.beyou.springboot.repository.ParceirosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/parceiros")
public class ParceirosController {

    @Autowired
    private ParceirosRepository parceirosRepository;

    @GetMapping
    public List<Parceiros> getAllParceiros(){
        return parceirosRepository.findAll();
    }

    //create Parceiro REST API
    @PostMapping
    public Parceiros createParceiros(@RequestBody Parceiros parceiros){
        return parceirosRepository.save(parceiros);
    }

    //get Parceiros por id REST API
    @GetMapping("{id}")
    public ResponseEntity<Parceiros> getParceirosPorId(@PathVariable long id){
        Parceiros parceiros = parceirosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Parceiro com id: " + id + " não foi encontrado."));

        return ResponseEntity.ok(parceiros);
    }

    //update Parceiros REST API
    @PutMapping("{id}")
    public ResponseEntity<Parceiros> updateParceiros(@PathVariable long id, @RequestBody Parceiros parceiroDetails){
        Parceiros updateParceiro = parceirosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Parceiro com id: " + id + " não foi encontrado."));

        updateParceiro.setNomeParceiro(parceiroDetails.getNomeParceiro());
        updateParceiro.setEmail(parceiroDetails.getEmail());
        updateParceiro.setTelefone(parceiroDetails.getTelefone());
        updateParceiro.setMensagem(parceiroDetails.getMensagem());

        parceirosRepository.save(updateParceiro);

        return ResponseEntity.ok(updateParceiro);
    }

    //delete Parceiros REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteParceiros(@PathVariable long id){
        Parceiros parceiros = parceirosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Parceiro com id: " + id + " não foi encontrado."));

        parceirosRepository.delete(parceiros);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
