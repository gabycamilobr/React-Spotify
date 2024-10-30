import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom"
import CardSidebar from "./components/CardSidebar";

function App() {

  const [artistas, setArtistas] = useState([]);

  
  useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data); console.log})
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
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