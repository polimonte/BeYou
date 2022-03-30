package com.beyou.springboot.repository;

import com.beyou.springboot.model.CasasAcolhimento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CasasAcolhimentoRepository extends JpaRepository<CasasAcolhimento, Long> {
    //all crud database methods
}
