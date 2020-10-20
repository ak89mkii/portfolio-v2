import React from 'react'


const Interest = (props) => {
    return (
        
        <div className='CircleSelector'>
            
            {props.ballNo.map((element, idx) =>
                <button
                    
                    className={props.ballIdx === idx ? 'selected' : ''}
                    onClick={() => props.handleSummon(idx)}
                >
                    {props.ballIdx === idx ? <img 
                        height='60'src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif' alt='Hadouken' /> : `Push for ` } {idx + 1}
                </button>
            )}
        </div>
    )
}

export default Interest