package com.beyou.springboot.controller;

import com.beyou.springboot.exception.ResourceNotFoundException;
import com.beyou.springboot.model.Cursos;
import com.beyou.springboot.repository.CursosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/cursos")
public class CursosController {

    @Autowired
    private CursosRepository cursosRepository;

    @GetMapping
    public List<Cursos> getAllCursos(){
        return cursosRepository.findAll();
    }

    //create Curso REST API
    @PostMapping
    public Cursos createCursos(@RequestBody Cursos cursos){
        return cursosRepository.save(cursos);
    }

    //get Curso por id REST API
    @GetMapping("{id}")
    public ResponseEntity<Cursos> getCursosPorId(@PathVariable long id){
        Cursos cursos = cursosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Curso com id: " + id + " não foi encontrado."));

        return ResponseEntity.ok(cursos);
    }

    //update Curso REST API
    @PutMapping("{id}")
    public ResponseEntity<Cursos> updateCursos(@PathVariable long id, @RequestBody Cursos cursoDetails){
        Cursos updateCurso = cursosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Curso com id: " + id + " não foi encontrado."));

        updateCurso.setNomeInstituicao(cursoDetails.getNomeInstituicao());
        updateCurso.setNomeCurso(cursoDetails.getNomeCurso());
        updateCurso.setEstadoCidade(cursoDetails.getEstadoCidade());
        updateCurso.setDuracao(cursoDetails.getDuracao());
        updateCurso.setTurno(cursoDetails.getTurno());

        cursosRepository.save(updateCurso);

        return ResponseEntity.ok(updateCurso);
    }

    //delete Curso REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCursos(@PathVariable long id){
        Cursos cursos = cursosRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Curso com id: " + id + " não foi encontrado."));

        cursosRepository.delete(cursos);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
