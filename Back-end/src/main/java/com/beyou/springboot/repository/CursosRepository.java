package com.beyou.springboot.repository;

import com.beyou.springboot.model.Cursos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursosRepository extends JpaRepository<Cursos, Long> {
    //all crud database methods
}
