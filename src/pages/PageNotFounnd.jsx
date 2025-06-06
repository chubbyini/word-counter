import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-testid="pnfText">Oops - Page Not Found!</p>
        IMG
          <Link to="/">
            <button data-testid="homeBtn">Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
