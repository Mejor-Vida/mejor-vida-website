export default function Layout({ children }) {
  return (
    <div>
      <header className="p-4 bg-mvn-900 text-white text-center font-bold">
        Mejor Vida Insurance
      </header>
      <main>{children}</main>
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Mejor Vida Insurance LLC
      </footer>
    </div>
  )
}
