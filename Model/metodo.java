package dao.dao;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "metodo")
@ToString @EqualsAndHashCode
public class metodo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id")
    private Long id;

    @Getter @Setter @Column(name = "nombrepelicula")
    private String nombreplicula;

    @Getter @Setter @Column(name = "descripcionpelicula")
    private String descripcionpelicula;

    @Getter @Setter @Column(name = "generopelicula")
    private String generopelicula;

    @Getter @Setter @Column(name = "fechapelicula")
    private String fechapelicula;

    @Getter @Setter @Column(name = "duracionpelicula")
    private String duracionpelicula;

    @Getter @Setter @Column(name = "imagenpelicula")
    private String imagenpelicula;

    @Getter @Setter @Column(name = "videopelicula")
    private String videopelicula;



}
