import { NavLink } from "react-router"
import BurgerMenu from "../molecules/BurgerMenu"

const Header = () => {
  return (
    <header className="container--big py-[1.25rem] border-b-neutral-300 border-b-4 lg:flex lg:justify-between lg:items-center">
        <h1 className="sr-only">Healthy Recipes website</h1>
        <div className="logo">
            <img src="/Medias/Images/logo.svg" alt="Healthy Recipes Logo" />
        </div>
        <BurgerMenu />
        <nav aria-label="Primary Navigation" className="mobile-nav pb-[0.5rem] z-900 fixed top-17 px-4 left-[50%] translate-x-[-50%] w-full max-w-[330rem]  bg-white rounded-16 shadow-lg">
            <ul className="lg:flex lg:items-center lg:gap-8">
                <li>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "current" : ""}mb-[0.5rem] block font-semibold text-caption px-[0.5rem] py-[0.75rem]`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => `${isActive ? "current" : ""} mb-[0.5rem] block font-semibold text-caption px-[0.5rem] py-[0.75rem]`} >About</NavLink>
                </li>
                <li>
                    <NavLink to="/recipes" className={({isActive}) => `${isActive ? "current" : ""} mb-[0.5rem] block font-semibold text-caption px-[0.5rem] py-[0.75rem]`}>Recipes</NavLink>
                </li>
            </ul>
            <NavLink className="call block text-center" to="/browse-recipes">Browse recipes</NavLink>
        </nav>
    </header>
  )
}

export default Header
