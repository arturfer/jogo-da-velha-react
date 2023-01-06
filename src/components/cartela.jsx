import { useEffect, useState } from "react"
import Item from "./item"

export default function Cartela() {
    const [jogador, setJogador] = useState('❌')
    const [gameX, setGameX] = useState([])
    const [gameY, setGameY] = useState([])

    function testWin(array, winner) {
        if(array.includes(1) && array.includes(2) && array.includes(3)){
           alert(`vitória do ${winner}`)
        }
        else if(array.includes(4) && array.includes(5) && array.includes(6)){
            alert(`vitória do ${winner}`)
        }
        else if(array.includes(7) && array.includes(8) && array.includes(9)){

            alert(`vitória do ${winner}`)
        }
        else if(array.includes(1) && array.includes(4) && array.includes(7)){
            alert(`vitória do ${winner}`)
        }
        else if(array.includes(2) && array.includes(5) && array.includes(8)){
            alert(`vitória do ${winner}`)
        }
        else if(array.includes(3) && array.includes(6) && array.includes(9)){
            alert(`vitória do ${winner}`)
        }
        else if(array.includes(1) && array.includes(5) && array.includes(9)){
            alert(`vitória do ${winner}`)
        }
        else if(array.includes(7) && array.includes(5) && array.includes(3)){
            alert(`vitória do ${winner}`)
        }
    }
    useEffect(()=> {
        testWin(gameX, '❌')
        testWin(gameY, '⭕️')

        if((gameX.length === 4 && gameY.length === 5) || (gameX.length === 5 && gameY.length === 4)) {
            alert('deu Velha')
        }
    },[gameX, gameY])


    return (
        <div className="w-[500px] h-[500px] m-auto mt-20 overflow-hidden flex justify-center items-center ">
            <table className="min-w-[510px] h-[105%] ">
                <tr>
                    <Item pos={1}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY} />
                    <Item pos={2}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                    <Item pos={3}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                </tr>
                <tr>
                    <Item pos={4}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                    <Item pos={5}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                    <Item pos={6}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                </tr>
                <tr>
                    <Item pos={7}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                    <Item pos={8}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                    <Item pos={9}  jogador={jogador} setJogador={setJogador} setGameX={setGameX} gameX={gameX} setGameY={setGameY} gameY={gameY}/>
                </tr>

            </table>
        </div>
    )
}