package com.beyou.springboot.repository;

import com.beyou.springboot.model.Voluntarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoluntariosRepository extends JpaRepository<Voluntarios, Long> {
    //all crud database methods
}
