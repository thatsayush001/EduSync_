package com.hello.hewwbf.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="alumniformdata")
@Builder
public class Alumni {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int alId;
    private String alumniName;
    private String alumniEmail;
    private String alumniGradYear;
    private String alumniPosition;
    private String alumniAch;

    @Column(length = 1000000000)
    private String alumniPic;
    
    // @Lob
    // @Column(name="pic",length = 1000)
    // private byte[] alumniPic;
    // @OneToOne(mappedBy = "al", cascade = CascadeType.ALL)
    // private Image img;

}
