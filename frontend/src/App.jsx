import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom"
import CardSidebar from "./components/CardSidebar";

function App() {

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