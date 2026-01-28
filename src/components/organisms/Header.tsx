import { NavLink } from "react-router"

const Header = () => {
  return (
    <header>
        <h1 className="sr-only">Healthy Recipes website</h1>
        <div className="logo">
            <img src="/Medias/Images/logo.svg" alt="Healthy Recipes Logo" />
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/recipes">Recipes</NavLink>
                </li>
            </ul>
            <NavLink to="/browse-recipes"></NavLink>
        </nav>
    </header>
  )
}

export default Header
