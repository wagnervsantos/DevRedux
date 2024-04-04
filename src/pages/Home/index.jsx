import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import  { useSelector, useDispatch }  from 'react-redux'
import { deleteAdress, fetchUsers } from '../../redux/user/slice'

export function Home() {
  const { user, users, loading } = useSelector((rootReducer) => rootReducer.user)
    const dispatch = useDispatch();

  function handleDeleteAddress(){
    dispatch(deleteAdress())
    alert("Endereço deletado com sucesso!")
  }

  function handleFetchUsers(){
    dispatch(fetchUsers())
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : 'Visitante' }, Bem vindo!
            </h1>

           { user && (
             <span>Email: {user.email}</span>
           )}


            { user && user.address && (
              <>
              <strong className={styles.addressLabel}>Endereço atual:</strong>
              <div className={styles.address}>
                <p>{user.address.location}, n°{user.address.number}</p>
                
                <button onClick={handleDeleteAddress}>Deletar endereço</button>
              </div>
              </>
              
            )}

              <hr/>
              <br/>

              <h2>Lista de usuários</h2>
              <button onClick={handleFetchUsers}>Buscar Usuário</button>
              <br/>
              
              {loading && <strong>Carregando Usuário...</strong>}
              
              {!loading && users.map( (user) => (
                <div key={user.id}>
                  <p>ID: {user.id} | {user.name}</p>
                </div>
              ))}
          </div>

        </main>
      </div>
    </>
  )
}
