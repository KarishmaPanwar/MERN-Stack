import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
  const newPlayer = new Player(req.body);
  newPlayer.save()
    .then(player => res.status(201).json(player))
    .catch(error => res.status(400).json({ message: error.message }));
};

export const getPlayers = (req, res) => {
    Player.find()
      .then(players => res.json(players))
      .catch(error => res.status(500).json({ message: error.message }));
};

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId)
      .then(player => res.json(player))
      .catch(error => res.status(500).json({ message: error.message }));
};

export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId}, req.body, {new: true} )
      .then(player => res.json(player))
      .catch(error => res.status(500).json({ message: error.message }));
};

export const deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.PlayerId} )
      .then(() => res.json({message: "Successfully deleted player"}))
      .catch(error => res.status(500).json({ message: error.message }));
};