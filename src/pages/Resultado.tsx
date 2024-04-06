import ResultadoChurrasco from "../components/ResultadoChurrasco"
import bgImage from '../assets/bg2.jpg'

const Resultado = () => {
  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className="page-container">
      <h1>Resultado do Churrasco</h1>
      <ResultadoChurrasco />
    </div>
  )
}

export default Resultado