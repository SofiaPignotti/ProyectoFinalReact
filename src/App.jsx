import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import About from "./components/About";
import './styles/App.css'
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ItemList from "./components/ItemList";
import Firebase from "./components/Firebase";

function App() {

  return (
    <ChakraProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/products" element={<ItemList />} />
            {/* <Route exact path="/firebase" element={<Firebase />} />  ruta para probar firebase*/}
            <Route exact path="/products/:category" element={<ItemList />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </ShoppingCartProvider>
    </ChakraProvider>
  )
}

export default App
