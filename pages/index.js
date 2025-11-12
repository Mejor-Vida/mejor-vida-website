import Layout from '../components/Layout'
import QuoteCalculator from '../components/QuoteCalculator'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero / Introduction */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left side text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-mvn-900">
              Protege a tu familia hoy — con planes simples y asequibles
            </h1>

            <p className="mt-4 text-gray-700">
              En <strong>Mejor Vida Insurance</strong>, Julie ayuda a familias hispanas a obtener
              seguros de gastos finales sin complicaciones y 100% en español.
            </p>

            <div className="mt-6 flex space-x-3">
              <Link href="/contacto">
                <a className="bg-mvn-gold text-mvn-900 px-4 py-2 rounded font-semibold">
                  Cotización Gratis
                </a>
              </Link>
              <Link href="/seguro-gastos-finales">
                <a className="px-4 py-2 border rounded text-gray-700">
                  Más información
                </a>
              </Link>
            </div>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔️ Proceso simple por teléfono</li>
              <li>✔️ Planes accesibles para cada presupuesto</li>
              <li>✔️ Atención personal en español</li>
            </ul>
          </div>

          {/* Right side: Quote calculator + contact info */}
          <div className="space-y-6">
            <QuoteCalculator defaultLang="es" />

            <div className="bg-gray-50 border p-4 rounded">
              <h3 className="font-semibold">¿Prefieres hablar ahora?</h3>
              <p className="text-sm mt-2">
                Llámanos: <strong>(402) 555-0100</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

