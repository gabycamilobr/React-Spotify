import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom"
import CardSidebar from "./components/CardSidebar";
import { useEffect, useState } from "react"


function App() {
  const [artista, setArtista] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
      fetch('https://migspoty.vercel.app/artistas')
      .then(res => res.json())
      .then(data => {setArtista(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  },[])

  return (
    <>
      <Header />
      <Container>
        <Sidebar>
        <CardSidebar/>
        </Sidebar>
        <Outlet/>
      </Container>
    </>
  )
}

export default App