import { Contador } from './components/Contador';
import { ContadorConHook } from './components/ContadorConHook';
import { Formularios } from './components/Formularios';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Funciones } from './typescript/Funciones';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos';

export const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr/>
      <TiposBasicos />
      <hr/>
      <ObjetosLiterales/>
      <hr/>
      <Funciones/>
      <hr/>
      <Contador/>
      <hr/>
      <ContadorConHook/>
      <hr/>
      <Login/>
      <hr/>
      <Usuarios/>
      <hr/>
      <Formularios/>
      <hr/>
      <footer>Gonzalo Marin - 2022</footer>
    </div>
  )
}

export default App;