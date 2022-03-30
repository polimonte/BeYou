package com.beyou.springboot.controller;

import com.beyou.springboot.exception.ResourceNotFoundException;
import com.beyou.springboot.model.Voluntarios;
import com.beyou.springboot.repository.VoluntariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/voluntarios")
public class VoluntariosController {

    @Autowired
    private VoluntariosRepository voluntariosRepository;

    @GetMapping
    public List<Voluntarios> getAllVoluntarios(){
        return voluntariosRepository.findAll();
    }

    //create Voluntarios REST API
    @PostMapping
    public Voluntarios createVoluntarios(@RequestBody Voluntarios voluntarios){
        return voluntariosRepository.save(voluntarios);
    }

    //get Voluntarios por id REST API
    @GetMapping("{id}")
    public ResponseEntity<Voluntarios> getVoluntariosPorId(@PathVariable long id){
        Voluntarios voluntarios = voluntariosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Voluntario com id: " + id + " não foi encontrado."));

        return ResponseEntity.ok(voluntarios);
    }

    //update Voluntarios REST API
    @PutMapping("{id}")
    public ResponseEntity<Voluntarios> updateVoluntarios(@PathVariable long id, @RequestBody Voluntarios voluntarioDetails){
        Voluntarios updateVoluntario = voluntariosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Voluntario com id: " + id + " não foi encontrado."));

        updateVoluntario.setNomeVoluntario(voluntarioDetails.getNomeVoluntario());
        updateVoluntario.setIdade(voluntarioDetails.getIdade());
        updateVoluntario.setEmail(voluntarioDetails.getEmail());
        updateVoluntario.setTelefone(voluntarioDetails.getTelefone());
        updateVoluntario.setMensagem(voluntarioDetails.getMensagem());

        voluntariosRepository.save(updateVoluntario);

        return ResponseEntity.ok(updateVoluntario);
    }

    //delete Voluntarios REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteVoluntarios(@PathVariable long id){
        Voluntarios voluntarios = voluntariosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Voluntario com id: " + id + " não foi encontrado."));

        voluntariosRepository.delete(voluntarios);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
