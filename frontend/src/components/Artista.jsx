import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
 
export default function Artista(children) {
 
    const { id } = useParams()
 
    const [artista, setArtista] = useState({})
 
    useEffect(() => {
        fetch(`https://react-spotify-ukht.vercel.app/artistas/${id}`)
            .then(res => res.json())
            .then(data => { setArtista(data); console.log(data) })
    }, []);
 
    return (
    <div className="bg-black w-3/4 p-16 flex flex-col items-center">
        <img className="w-3/6 rounded-2xl mb-8" src={artista.imagem} />
        <h1 className="text-white underline font-bold text-3xl mb-6">{artista.nome}</h1>
        <p className="text-white text-xl text-justify mb-6">{artista.bio}</p>
    </div>
    )
}