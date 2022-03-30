package com.beyou.springboot.repository;

import com.beyou.springboot.model.Empregos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpregosRepository extends JpaRepository<Empregos, Long> {
    //all crud database methods
}
