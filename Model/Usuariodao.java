package Model;

package dao.dao;

import com.cursojava.curso.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class usuariodaoImp implements usuarioDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<usuario> getusuario() {
        String query = "FROM usuario";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario Usuario) {
        entityManager.merge(Usuario);
    }
    @Override
    public usuario obtenerusuarioPorCredenciales(Usuario Usuario) {
        String query = "FROM usuario WHERE nombrepersona = :nombrepersona";
        List<usuariodaoImp> lista = entityManager.createQuery(query)
                .setParameter("nombrepersona", Usuariosuario.getnombrepersona())
                .getResultList();

        @Override
        public void registrar(Usuariosuario Usuario) {
            entityManager.merge(Usuario);
        }

            }
            @Override
            public Usuario obtenerusuarioPorCredenciales(Usuario Usuario) {
                String query = "FROM usuario WHERE nombrepersona = :nombrepersona";
                List<usuariodaoImp> lista = entityManager.createQuery(query)
                        .setParameter("nombrepersona", Usuariosuario.getnombrepersona())
                        .getResultList();

                @Override
                public void registrar(Usuariosuario Usuario) {
                    entityManager.merge(Usuario);
                }
                @Override
                public Usuariosuario obtenerusuarioPorCredenciales(Usuariosuario Usuario) {
                    String query = "FROM usuario WHERE nombrepersona = :nombrepersona";
                    List<usuariodaoImp> lista = entityManager.createQuery(query)
                            .setParameter("nombrepersona", Usuariosuario.getnombrepersona())
                            .getResultList();
                    @Override
                    public void registrar(Usuario Usuario) {
                        entityManager.merge(Usuario);
                    }
                    @Override
                    public usuario obtenerusuarioPorCredenciales(Usuariosuario Usuario) {
                        String query = "FROM usuario WHERE nombrepersona = :nombrepersona";
                        List<usuariodaoImp> lista = entityManager.createQuery(query)
                                .setParameter("nombrepersona", Usuariosuario.getnombrepersona())
                                .getResultList();


                    if (lista.isEmpty()) {
                        return null;
                    }

                    String passwordHashed = lista.get(0).getPassword();

                    Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
                    if (argon2.verify(passwordHashed, usuario.getPassword())) {
                        return lista.get(0);
                    }
                    return null;
                }

            }

