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
@Table(name = "vagas_emprego")
public class Empregos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome_empresa")
    private String nomeEmpresa;

    @Column(name = "cargo")
    private String cargo;

    @Column(name = "estado_cidade")
    private String estadoCidade;

    @Column(name = "salario")
    private String salario;

    @Column(name = "beneficios")
    private String beneficios;
}
