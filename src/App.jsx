import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

function App (){

  return(
  <div>
    <Navbar/>
    <ItemListContainer greeting= "¡Bienvenidos a TCG Store!"/>
    <Footer/>
  </div>
)
}

export default App