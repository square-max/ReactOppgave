import React from 'react'
import './Player.css'
import {IoIosFootball} from 'react-icons/io';


const Player = (props) => {
    return (
        <div className="players">
            <div className='bilde'>
                <img onClick={() => props.addFavs(props)} src={props.img} alt={"The players: " + props.name} />
            </div>
            <h3>{props.name} <IoIosFootball/></h3>
            
            <p>
                {props.jerseyNumber} <br />
                {props.position} <br />
                {props.club} <br />
                {props.dateOfBirth} <br />
            </p>
        </div>
    )
}

export default Player