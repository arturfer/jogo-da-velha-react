import { useState } from "react"

export default function Item({pos, jogador, setJogador, setGameX, gameX, setGameY, gameY}) {
    
    const [value, setValue] = useState(' ')
    const handleClick = () => {
        if(value === " " ) {
            setValue(jogador)
            jogador === "❌" ? setJogador("⭕️") : setJogador("❌")
        
            if(jogador ==="❌") {
                setGameX([...gameX, pos])
            }

            if(jogador ==="⭕️") {
                setGameY([...gameY, pos])
            }

        }
    }

    return (
        <th className="border-4 border-gray-200 min-w-[33%] min-h-[33%] h-[33%] w-[33%]" onClick={()=> handleClick()} >
            <span className="text-white text-5xl">{value}</span>
        </th>
    )
}