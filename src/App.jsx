import { Outlet } from "react-router-dom"
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <Header />
      <div className="container mx-auto py-16">
        <Outlet />
      </div>
    </div>
  )
}

export default App