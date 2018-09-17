import { Container } from "pixi.js"
import { App } from "../../App"
import { Item } from "./objects/Item"
import { Part } from "./objects/Part"

export class GameBoard extends Container {

    public static alias = "GameBoard"

    private interactiveLayer: Container

    constructor(private app: App) {
        super()
        this.init()
        this.x = this.app.screen.width / 2 - (GameBoard.SIZE.w * GameBoard.CELL_SIZE) / 2
        this.y = this.app.screen.height - GameBoard.SIZE.h * GameBoard.CELL_SIZE
    }

    private init() {
        this.interactiveLayer = new Container()
        for (let width = 0; width < GameBoard.SIZE.w; width++) {
            for (let height = 0; height < GameBoard.SIZE.h; height++) {
                const boardItem = new Item(this.app, width * GameBoard.CELL_SIZE, height * GameBoard.CELL_SIZE)
                const burgerPart = new Part(
                    this.app,
                    Math.floor(Math.random() * 8),
                    width * GameBoard.CELL_SIZE,
                    height * GameBoard.CELL_SIZE
                )
                this.interactiveLayer.addChild(burgerPart)
                this.addChild(boardItem)
            }
        }
        this.addChild(this.interactiveLayer)
    }

}

export namespace GameBoard {
    export const CELL_SIZE = 42
    export const SIZE = {
        w: 8,
        h: 7
    }
}