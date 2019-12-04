import React, {useState} from 'react'
import soccer from '../json/soccer'
import Player from './Player'

const Players = (props) => {

    const [players,
        setPlayers] = useState(soccer.players)
        const filterPlayer = (e) => {
        setPlayers(
            soccer.players.filter( player => player.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        )
        }

    return (
        <div className='spill'>
            <div className="filter">
                <input type='text' placeholder='Search player' onInput={filterPlayer}/>
            </div>
            <div className="england">
            {players.map((p, i) => <Player
                key={i}
                addFavs={props.addFavs}
                nummer={i}
                name={p.name}
                img={p.url}
                position={p.position}
                jerseyNumber={p.jerseyNumber}
                dateOfBirth={p.dateOfBirth}
                club={p.club}
                />)
            }           
            </div>
        </div>
    )
}

export default Players