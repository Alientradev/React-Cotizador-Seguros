import { MARCAS, YEARS, PLANES } from "../constants/Index"
import { Fragment } from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const { handleChangeDatos, datos, error, setError, cotizarSeguro }  = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        cotizarSeguro()
    }

    return (
        <>
            { error && <Error /> }
            <form
                onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-700">Marca</label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-gray-100 border border-gray-200"
                        onChange={ e => handleChangeDatos(e) }
                        value={datos.marca}>
                        <option className="text-center" value=""> --- Selecciona la Marca --- </option>
                        {MARCAS.map( marca => (
                            <option
                                key={marca.id} 
                                value={marca.id}    
                            >{marca.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-700">Año</label>
                    <select
                        name="year"
                        className="w-full p-3 bg-gray-100 border border-gray-200"
                        onChange={ e => handleChangeDatos(e) }
                        value={datos.marca}>
                        <option className="text-center" value=""> --- Selecciona el Modelo --- </option>
                        {YEARS.map( year => (
                            <option
                                key={year} 
                                value={year}    
                            >{year}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-700">Elije un Plan</label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map( plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>
                                <input 
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeDatos(e) }
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input 
                    type="submit" 
                    className="w-full cursor-pointer bg-green-900 hover:bg-green-500 transition-colors text-white rounded-lg p-3 font-bold" 
                    value="Cotizar"/>
            </form>
        </>
    )
}

export default Formulario