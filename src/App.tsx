import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-brand-500">
      <Nav/>
      <main className="bg-brand-500">
        Main
      </main>
      <Footer/>
    </div>
  )
}

export default App
