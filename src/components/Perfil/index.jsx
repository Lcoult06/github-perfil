import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src= {`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil;

// outra forma de exportar 
// export default() => {
//     const usuario = {
//         nome: 'Leonardo Coutinho',
//         avatar: 'https://github.com/Lcoult06.png'
//     }

//     return (
//         <div>
//             <img className="perfil-avatar" src= {usuario.avatar} />
//             <h3 className='perfil-titulo'>{usuario.nome}</h3>
//         </div>
//     )
// } ou
// export default function() {
//     const usuario = {
//         nome: 'Leonardo Coutinho',
//         avatar: 'https://github.com/Lcoult06.png'
//     }

//     return (
//         <div>
//             <img className="perfil-avatar" src= {usuario.avatar} />
//             <h3 className='perfil-titulo'>{usuario.nome}</h3>
//         </div>
//     )
// }