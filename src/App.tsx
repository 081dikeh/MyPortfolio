import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Nav from "./components/Nav"
import Footer from "./components/Footer"




function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
