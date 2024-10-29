import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ConteudoPrincipal() {
  const [artistas, setArtistas] = useState([])

  useEffect(() => {

    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(res => setArtistas(res))
      .catch(err => console.log(err))
      .finally(() => console.log("Acabou!"))

  }, [])

  return (
    <>


      <div className="bg-black w-3/4 grid grid-cols-4 pl-20 items-center">
        <h1 className="font-bold text-white text-xl">Funk:</h1>

        {
          artistas
            .filter(artistas => artistas.genero === "Funk")
            .map(artistas => (
            <Link to={`/artistas/${artistas._id}`}>
            <div
              className="bg-black w-28 h-28 flex flex-col justify-around items-center"
              style={{
                backgroundImage: `url('https://img.freepik.com/fotos-premium/fundo-preto-com-gradiente-radial-cinza-suave-no-meio_380557-325.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              <p className="text-white">{artistas.nome}</p>
            </div>
          </Link>
              

            ))
        }




<h1 className="font-bold text-white text-xl">Pagode:</h1>

{
  artistas
    .filter(artistas => artistas.genero === "Pagode")
    .map(artistas => (
    <Link to={`/artistas/${artistas._id}`}>
    <div
      className="bg-black w-28 h-28 flex flex-col justify-around items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/fotos-premium/fundo-preto-com-gradiente-radial-cinza-suave-no-meio_380557-325.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <p className="text-white">{artistas.nome}</p>
    </div>
  </Link>
      

    ))
}







<h1 className="font-bold text-white text-xl">Sertanejo:</h1>

{
  artistas
    .filter(artistas => artistas.genero === "Sertanejo")
    .map(artistas => (
    <Link to={`/artistas/${artistas._id}`}>
    <div
      className="bg-black w-28 h-28 flex flex-col justify-around items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/fotos-premium/fundo-preto-com-gradiente-radial-cinza-suave-no-meio_380557-325.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <p className="text-white">{artistas.nome}</p>
    </div>
  </Link>
      

    ))
}

      </div>
    </>

  )

}