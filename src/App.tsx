import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import ThemaPrincipal from './themes/principal'

import './global.css'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={ThemaPrincipal}>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
