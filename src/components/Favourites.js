import React from 'react'

const Favourites = (props) => {       
    return (
        <div>
            <h2>Create your squad</h2>
            <div className="england soccer">
            {
                props.favs.map(
                    (p, i) => <div key={i}><img onClick={ () => props.deleteMe(i) } src={p} alt={p}/></div>
                    
                )
            }           
            </div>

        </div>
    )
}

export default Favourites