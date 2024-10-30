import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom"
import CardSidebar from "./components/CardSidebar";

function App() {
  
  useEffect(() => {
    setIsLoading(true);
      fetch('https://spotify-deploy-api.vercel.app/Artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
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