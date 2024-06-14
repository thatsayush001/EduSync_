package com.hello.hewwbf.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="imageAlumni")
@Builder
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int imageId;
    @Lob
    @Column(length = 1000)
    private byte[] imgarr;

    // @OneToOne
    // @JoinColumn(name="alId")
    // private Alumni al;

}
