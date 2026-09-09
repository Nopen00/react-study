import { useState } from "react";

type SquareProp = {
    value:string|null;
    handleclick:() => void;
}

const Square = ({value, handleclick}:SquareProp) => {
    // const [input, setInput] = useState('')
    // const handleclick = () => setInput('X')

    return (
        <div>
            <button className='square' onClick={handleclick}>{value}</button>
        </div>
    );
};

export default Square;