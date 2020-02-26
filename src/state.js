import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const StateShema = new Schema({
  timeRunning: String,
  counter: Number,
  canAddTask: Boolean,
  error: Boolean,
  tasks: Array,
  tabValue: Number,
  chartData: Array,
  startLastTask: Number,
  modalIsOpen: Boolean
});

const State = model("state", StateShema);


export default State;
