import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer } from '../controllers/playerControllers';

//creating a var to hold the routes and passing app as an argument
const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        .get(getPlayerWithID)

        .put(updatePlayer)

        .delete(deletePlayer)
}

export default routes;