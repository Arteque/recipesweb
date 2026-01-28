import { Outlet } from "react-router"
import MainHeader from "./Layouts/MainHeader"

const Template = () => {
  return (
    <>
    <MainHeader />
    <main><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}

export default Template
