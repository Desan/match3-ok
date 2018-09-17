import { Sprite } from "pixi.js"
import { App } from "../../../App"
import { tile } from "../../../resourses"
import { GameBoard } from "../GameBoard"

export class Item extends Sprite {
    constructor(
        private app: App,
        x: number,
        y: number
    ) {
        super()
        this.anchor.set(0.5, 0.5)
        this.x = x
        this.y = y
        this.texture = this.app.loader.resources[tile].texture
        this.width = GameBoard.CELL_SIZE
        this.height = GameBoard.CELL_SIZE
    }

}
