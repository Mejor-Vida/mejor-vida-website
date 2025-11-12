import { useState } from 'react'

export default function QuoteCalculator() {
  const [age, setAge] = useState('')
  const [result, setResult] = useState(null)

  const handleCalc = () => {
    if (!age) return
    const min = Math.round(Number(age) * 0.8)
    const max = Math.round(Number(age) * 1.1)
    setResult(`Su prima estimada es de $${min} a $${max} por mes.`)
  }

  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold mb-2">Calculadora de Cotización</h3>
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleCalc}
        className="bg-mvn-gold text-mvn-900 px-3 py-1 rounded"
      >
        Calcular
      </button>
      {result && <p className="mt-3 text-sm text-gray-700">{result}</p>}
    </div>
  )
}
