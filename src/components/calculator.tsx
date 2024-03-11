'use client';

import { useState } from 'react';

export default function Calculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  function handleIMC() {
    const alturaMetros = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(total);
  }

  function printReferenceValue(imc: number) {
    const categories = {
      'Abaixo do peso': { min: 0, max: 18.5 },
      'Peso normal': { min: 18.5, max: 24.9 },
      'Levemente acima do peso': { min: 25, max: 29.9 },
      'Obesidade grau I': { min: 30, max: 34.9 },
      'Obesidade grau II': { min: 35, max: 39.9 },
      'Obesidade grau III': { min: 40, max: 100 },
      'Valor inválido': { min: -Infinity, max: Infinity },
    };

    for (const [category, range] of Object.entries(categories)) {
      if (imc >= range.min && imc < range.max) {
        return category;
      }
    }

    return '';
  }

  return (
    <main>
      <label htmlFor="altura">Altura (em centímetros)</label>
      <input
        id="altura"
        type="text"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <label htmlFor="altura">Peso (em quilos)</label>
      <input
        id="peso"
        type="text"
        placeholder="Peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button onClick={handleIMC}>Calcular</button>
      <p>Seu IMC é: {imc}</p>
      {imc ? (
        <p>O valor de referência é: {printReferenceValue(Number(imc))}</p>
      ) : null}
    </main>
  );
}
