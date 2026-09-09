import { useState } from 'react';
import type { Squares } from '../types/type';
import Square from './Square'

const Board = () => {
    const initialSquares: Squares = Array(9).fill(null)
    // 9개의 Square 의 state 관리
    const [squares, setSquares] = useState(initialSquares)
    // X나 O 를 관리
    const [isNext, setIsNext] = useState(true)



    const handleclick = (idx:number) => {
        //이미 선택된 박스라면 선택 불가
        if(squares[idx]) return;

        // 기존 배열 복사
        // const copySquares = [...squares]
        const copySquares = squares.slice()

        if (isNext){
            copySquares[idx] = 'X'
        }else{
            copySquares[idx] = 'O'
        }
        // 사용자가 선택한 square 의 값 변경
        setIsNext(!isNext)
        setSquares(copySquares)
    }
    return (
        <div>
            <div className='board-row'>
                <Square value = {squares[0]} handleclick = {() => handleclick(0)}></Square>
                <Square value = {squares[1]} handleclick = {() => handleclick(1)}></Square>
                <Square value = {squares[2]} handleclick = {() => handleclick(2)}></Square>
            </div>
            <div className='board-row'>
                <Square value = {squares[3]} handleclick = {() => handleclick(3)}></Square>
                <Square value = {squares[4]} handleclick = {() => handleclick(4)}></Square>
                <Square value = {squares[5]} handleclick = {() => handleclick(5)}></Square>
            </div>
            <div className='board-row'>
                <Square value = {squares[6]} handleclick = {() => handleclick(6)}></Square>
                <Square value = {squares[7]} handleclick = {() => handleclick(7)}></Square>
                <Square value = {squares[8]} handleclick = {() => handleclick(8)}></Square>
            </div>


        </div>
    );
};

export default Board;