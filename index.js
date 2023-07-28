import LetsPlay from './modules/lets_play.js';
import { Reset } from './modules/winner.js';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');

rock.addEventListener('click', () => LetsPlay('piedra'));
paper.addEventListener('click', () => LetsPlay('papel'));
scissors.addEventListener('click', () => LetsPlay('tijeras'));
reset.addEventListener('click', () => Reset());

