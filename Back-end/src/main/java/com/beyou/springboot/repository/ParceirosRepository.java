package com.beyou.springboot.repository;

import com.beyou.springboot.model.Parceiros;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParceirosRepository extends JpaRepository<Parceiros, Long> {
    //all crud database methods
}
