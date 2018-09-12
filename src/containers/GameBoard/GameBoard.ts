import { Container } from "pixi.js"
import { App } from "../../App"
import { Item } from "./objects/Item"

const GAME_BOARD_SIZE = {
    w: 7,
    h: 10
}
const TILE_SIZE = 32

export class GameBoard extends Container {

    public static alias = "GameBoard"

    constructor(private app: App) {
        super()
        this.init()
        this.x = 100
        this.y = 200
    }

    private init() {
        for (let width = 0; width < GAME_BOARD_SIZE.w; width++) {
            for (let height = 0; height < GAME_BOARD_SIZE.h; height++) {
                const boardItem = new Item(this.app, width * TILE_SIZE, height * TILE_SIZE)
                this.addChild(boardItem)
            }
        }
    }

}