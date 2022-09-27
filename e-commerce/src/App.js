import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import { Route, Routes } from "react-router-dom";
import Grocery from "./Components/Catogories/grocery/grocery";
import MyContext from "./context";
import { useState } from "react";


function App() {

  const [cart, setCart] = useState([]);

  const addItems = (items)=>{
    setCart((prev)=>{
      return [items,...prev]
    })
  }

  return (

    <div>
      <MyContext.Provider value={{cart, addItems}}>
        <Header></Header>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="grocery" element={<Grocery></Grocery>}></Route>
        </Routes>
        <Footer></Footer>
      </MyContext.Provider>
    </div>

  )
}
export default App;
