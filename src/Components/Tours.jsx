import React from 'react'
import Card from './Card.jsx';

const Tours = (props) => {
    function getId(id)
    {
        props.removeTour(id);
    }

    return (
        <div className='container'>
            <div>
                <h2 className="title">Plan For Travelling</h2>
            </div>

            <div className="cardsContainer">
                {
                    props.tours.map((tour) => {
                        return <Card key = {tour.id}tour={tour} getRemoveId = {getId}/>  // when ever you used map function then we can share the key
                    })
                }
            </div>
        </div>
    )
}

export default Tours