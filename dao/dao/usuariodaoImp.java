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
        Usuario Usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }
    @Override
    public void registrar(Usuario Usuario) {
        entityManager.merge(Usuariosuario);
    }
    @Override
    public usuario obtenerusuarioPorCredenciales(Usuario Usuario) {
        String query = "FROM usuario WHERE nombrepersona = :nombrepersona";
        List<usuario> lista = entityManager.createQuery(query)
                .setParameter("nombrepersona", usuario.getnombrepersona())
                .getResultList();
        @Override
        public void registrar(Usuario Usuario) {
            entityManager.merge(Usuario);
        }
        @Override
        public usuario obtenerusuarioPorCredenciales(Usuario Usuario) {
            String query = "FROM usuario WHERE apellidopersona = :correopersona";
            List<usuario> lista = entityManager.createQuery(query)
                    .setParameter("correopersona", usuario.getcorreopersona())
                    .getResultList();
    @Override
    public void registrar(usuario usuario) {
        entityManager.merge(usuario);
    }
    @Override
    public usuario obtenerusuarioPorCredenciales(usuario usuario) {
        String query = "FROM usuario WHERE correopersona = :correopersona";
        List<usuario> lista = entityManager.createQuery(query)
                .setParameter("correopersona", usuario.getcorreopersona())
                .getResultList();
        @Override
                public void registrar(usuario usuario) {
                    entityManager.merge(usuario);
        @Override
        public usuario obtenerusuarioPorCredenciales(usuario usuario) {
            String query = "FROM usuario WHERE telefonopersona = :telefonopersona";
            List<usuario> lista = entityManager.createQuery(query)
                    .setParameter("telefonopersona", usuario.gettelefonopersona())
                    .getResultList();
            @Override
                        public void registrar(usuario usuario) {
                            entityManager.merge(usuario);


    @Override
    public usuario obtenerusuarioPorCredenciales(usuario usuario) {
        String query = "FROM usuario WHERE contrasenapersona = :contrasenapersona";
        List<usuario> lista = entityManager.createQuery(query)
                .setParameter("contrasenapersona", usuario.getcontrasenapersona())
                .getResultList();
        @Override
                            public void registrar(usuario usuario) {
                                entityManager.merge(usuario);


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
