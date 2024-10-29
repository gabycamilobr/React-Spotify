import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Artista(children) {

    const { id } = useParams()

    const [artista, setArtista] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/artistas/${id}`)
            .then(res => res.json())
            .then(data => { setArtista(data); console.log(data) })
    }, []);

    return (
        <>
            <div className="bg-gray-600 w-3/4 grid grid-cols-2 pl-20 items-center">
               
            
                <h1 className="text-white font bold text-3xl ">{artista.nome}</h1>
                <p className="text-white text-xl text-justify mr-10" >{artista.bio}</p>
                <img className = "w-6/12 rounded-3xl " src={artista.imagem} alt="" />
           
            </div> 
        </>
    )
}