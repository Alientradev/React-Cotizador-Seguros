import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'
import { useCallback, useMemo } from 'react'
import { useRef } from 'react/cjs/react.production.min'

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { plan, marca, year} = datos
    
    
    if(resultado === 0) return null
    
    const [nombreMarca] = useCallback(
        MARCAS.filter( m => m.id === Number(marca)),
        [resultado]
        )
        
        // Nota: UseMemo es igual a useCallback solo que el useMemo lleva un arrow function y da el retutn por implicito

    const [nombrePlan] = useMemo( () =>
        PLANES.filter( m => m.id === Number(plan)),
        [resultado]
        )
        
    const yearRef = useRef(year)

    return ( 
        <div className='bg-gray-100 text-center mt-5 p-5 shadow-md'>
            <h2 className='font-black'>Resumen de la Cotización</h2>
            <p className='my-2'>Marca: <span className='font-bold'>{nombreMarca.nombre}</span></p>
            <p className='my-2'>Plan: <span className='font-bold'>{nombrePlan.nombre}</span></p>
            <p className='my-2'>Año: <span className='font-bold'>{yearRef.current}</span></p>
            <p className='my-2 text-2xl'>Precio del Seguro: <span className='font-bold'>{resultado}</span></p>
        </div>
    )
}

export default Resultado