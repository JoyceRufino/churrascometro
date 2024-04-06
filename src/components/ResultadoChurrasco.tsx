import { useLocation, useNavigate } from "react-router-dom";

import { Alimento, nomesAlimento, quantidadePessoas } from "../types";

import styles from './ResultadoChurrasco.module.css'

type ResultadosChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimento[];
};

const ResultadoChurrasco = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const state = location.state as ResultadosChurrasco;
  //const state: ResultadosChurrasco = location.state;

  const reiniciar = () => {
    navigation("/");
  };

  const totalPorAlimento = state.alimentosSelecionados.reduce((acc, alimento) => {
    acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000;
    return acc
  }, {} as Record<Alimento, number>)


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultado para {state.pessoas} pessoas:</h2>
      {state.alimentosSelecionados.map((alimento) => (
        <p key={alimento} className={styles.resultText}> {nomesAlimento[alimento]}: {totalPorAlimento[alimento]} kg</p>
      ))}
      <button onClick={reiniciar} className={styles.resetButton}>Reiniciar </button>
    </div>
  );
};

export default ResultadoChurrasco;
