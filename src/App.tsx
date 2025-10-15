import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="min-h-screen flex flex-col ">
      <Nav/>
      <main className="">
        <Hero/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
