import AllRoutes from "./Componants/AllRoutes"
import Navbar from "./Componants/Navbar"

import Home from "./Pages/Home";

function App() {


  return (
    <>
      <Navbar />
      <AllRoutes>
        <Home />
      </AllRoutes>
    </>
  )
}

export default App
