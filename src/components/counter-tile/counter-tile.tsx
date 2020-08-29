import React, { useState } from 'react';
import '../counter-tile/counter-tile.css';
import ResultBox from '../result-box/result-box';
import ButtonBox from '../button-box/button-box';
// Components

const CounterTile = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        let currentCount = count;
        setCount(currentCount += 1);
    }

    const decrement = () => {
        let currentCount = count;
        if (count > 0 ) setCount(currentCount -= 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className='counter-tile'>
            <ButtonBox increment={increment} decrement={decrement} reset={reset}/>
            <ResultBox count={count} />
        </div>
    )
}

export default CounterTile;