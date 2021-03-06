import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

    const { usuarios, paginaAnteriror, paginaSiguiente } = useUsuarios();


    const renderItem = ( { id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={ id.toString() }>
                <th>
                    <img 
                        src={ avatar }
                        alt={ first_name} 
                        style={{
                            width: 35,
                            borderRadius:100
                        }}
                    />
                </th>
                <th>{ first_name } { last_name }</th>
                <th>{ email }</th>
            </tr>
        )
    }
    
    return (
        <>
            <h3>Usuario:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button
                className='btn btn-primary'
                onClick= { paginaAnteriror }
            >
                Anteriores
            </button>

            <button
                className='btn btn-primary'
                onClick= { paginaSiguiente }
            >
                Siguientes
            </button>
        </>
    )
}
