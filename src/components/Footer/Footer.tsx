import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="mono">
          © {new Date().getFullYear()} Tudor Nicoară · Built with React + Vite
        </span>
      </div>
    </footer>
  )
}
