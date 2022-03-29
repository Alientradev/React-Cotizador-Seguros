import Formulario from "./Formulario"
import useCotizador from '../hooks/useCotizador'
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguros = () => {

    const { resultado, cargando } = useCotizador()

    return (
        <div>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl">
                    Cotizador de Seguros Para Auto
                </h1>
                
                <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-sm rounded-lg p-10 mt-10">
                    <Formulario />
                {cargando ? <Spinner /> : <Resultado />}
                </main>
            </header>
        </div>
    )
}

export default AppSeguros