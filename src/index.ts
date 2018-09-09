/// <reference path="../typings/phaser.d.ts" />
import "phaser"
import { config } from "./config"

class Game extends Phaser.Game {
}

// when the page is loaded, create our game instance
window.onload = () => {
    new Game(config)
}