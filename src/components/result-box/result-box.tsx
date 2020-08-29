import React from 'react';
import '../result-box/result-box.css';

interface Props {
    count: number;
}

const ResultBox: React.FC<Props> = ({count}) => {
    return (
        <div className='result-box'>
            <div>You have clicked: </div>
            <div>{count}</div>
            <div>{count === 1 ? 'time!' : 'times!'}</div>
        </div>
    )
}

export default ResultBox;