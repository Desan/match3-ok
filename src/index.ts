/// <reference path="../typings/phaser.d.ts" />
import { Game as PhaserGame } from "phaser"
import { config } from "./config"

class Game extends PhaserGame {
}

export default new Game(config)