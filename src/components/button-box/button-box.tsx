import React from 'react';
import '../button-box/button-box.css'

interface Props {
    increment(): void;
    decrement(): void;
    reset(): void;
}

const ButtonBox: React.FC<Props> = ({increment, decrement, reset}) => {
    return (
        <div className='button-box'>
            <button className='button' onClick={() => increment()} >Increment</button>
            <button className='button' onClick={() => decrement()}>Decrement</button>
            <button className='button' onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default ButtonBox;