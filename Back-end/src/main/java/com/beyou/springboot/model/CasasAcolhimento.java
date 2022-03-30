package com.beyou.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "casas_acolhimento")
public class CasasAcolhimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome_casa")
    private String nomeCasa;

    @Column(name = "site")
    private String site;

    @Column(name = "estado")
    private String estado;

    @Column(name = "cidade")
    private String cidade;
}
