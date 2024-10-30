import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConteudoPrincipal() {
  const [artistas, setArtista] = useState([]);

  useEffect(() => {
    fetch('https://migspoty.vercel.app/artistas')
      .then(res => res.json())
      .then(res => setArtista(res))
      .catch(err => console.log(err))
      .finally(() => console.log("Acabou!"));
  }, []);

  return (

    <div className="bg-black w-11/12 py-12 px-7 ">

        <h1 className="font-bold text-white text-xl underline mb-9">Funk</h1>
        <div className="grid grid-cols-4 justify-items-center">
          {artistas
            .filter(artista => artista.genero === "Funk")
            .map(artista => (
              <Link key={artista._id} to={`/artistas/${artista._id}`}>
                <div className="w-28 h-28 flex flex-col justify-center items-center rounded-lg mb-12" 
                  style={{
                    backgroundImage: `url(${artista.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                  <p className="text-white font-bold text-center rounded-md p-1">{artista.nome}</p>
                </div>
              </Link>
            ))}
        </div>

        <h1 className="font-bold text-white text-xl underline mb-9">Pagode</h1>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {artistas
            .filter(artista => artista.genero === "Pagode")
            .map(artista => (
              <Link key={artista._id} to={`/artistas/${artista._id}`}>
                <div className="w-28 h-28 flex flex-col justify-center items-center rounded-lg mb-12"
                  style={{
                    backgroundImage: `url(${artista.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                  <p className="text-white font-bold text-center rounded-md p-1">
                    {artista.nome}
                  </p>
                </div>
              </Link>
            ))}
        </div>

        <h1 className="font-bold text-white text-xl underline mb-9">Sertanejo</h1>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {artistas
            .filter(artista => artista.genero === "Sertanejo")
            .map(artista => (
              <Link key={artista._id} to={`/artistas/${artista._id}`}>
                <div className="w-28 h-28 flex flex-col justify-center items-center rounded-lg mb-12"
                  style={{
                    backgroundImage: `url(${artista.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                  <p className="text-white font-bold text-center rounded-md p-1">
                    {artista.nome}
                  </p>
                </div>
              </Link>
            ))}
        </div>

    </div>
  );
}
