import { NavLink } from "react-router"

const Header = () => {
  return (
    <header className="lg:flex lg:justify-between lg:items-center container--big">
        <h1 className="sr-only">Healthy Recipes website</h1>
        <div className="logo">
            <img src="/Medias/Images/logo.svg" alt="Healthy Recipes Logo" />
        </div>
        <nav aria-label="Primary Navigation">
            <ul className="lg:flex lg:items-center lg:gap-8">
                <li>
                    <NavLink to="/" className={`${({isActive}: {isActive: boolean}) => isActive ? "current":""} font-semibold text-caption`}  >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={`${({isActive}: {isActive: boolean}) => isActive ? "current":""} font-semibold text-caption`} >About</NavLink>
                </li>
                <li>
                    <NavLink to="/recipes" className={`${({isActive}: {isActive: boolean}) => isActive ? "current":""} font-semibold text-caption`} >Recipes</NavLink>
                </li>
            </ul>
        </nav>
        <NavLink className="call" to="/browse-recipes">Browse recipes</NavLink>
    </header>
  )
}

export default Header
