import "./sass/main.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
