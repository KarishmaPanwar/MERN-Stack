import React from "react";

const PlayerSingle = (props) => {
    return(
        <div class="row">
            <div class="col s12">
            <div class="card">
                <div class="card-image">
                    <img src="soccer.jpeg" alt="Soccer player"/>
                    <span class="card-title">{props.player.firstName} {props.player.lastName}</span>
                </div>
                <div class="card-content">
                    <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
                    <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
                </div>
                <div class="card-action">
                    Team: {props.player.team}
                </div>
            </div>
            </div>
        </div>
    )
}

export default PlayerSingle;