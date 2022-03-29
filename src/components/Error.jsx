import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const { error } = useCotizador()

    return (
        <div className="border text-center border-red-600 bg-red-400 text-white font-bold rounded-lg shadow-md p-3">
            <p>{error}</p>
        </div>
    )
}

export default Error