import AppSeguros from './components/AppSeguros'
import { CotizadorProvider } from './context/CotizadorProvider'

function App() {
  

  return (
    <div>
      <CotizadorProvider>
        <AppSeguros />
      </CotizadorProvider>
    </div>
  )
}

export default App
