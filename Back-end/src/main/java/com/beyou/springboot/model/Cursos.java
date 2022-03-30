package com.beyou.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vagas_cursos")
public class Cursos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nome_instituicao")
    private String nomeInstituicao;

    @Column(name = "nome_curso")
    private String nomeCurso;

    @Column(name = "estado_cidade")
    private String estadoCidade;

    @Column(name = "duracao")
    private String duracao;

    @Column(name = "turno")
    private String turno;
}
