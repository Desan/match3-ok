import {Container} from "pixi.js"
import { App } from "../App"
import { GameBoard } from "../containers/GameBoard/GameBoard"

export class MainStage extends Container {
    private stageContainers: Map<string, Container> = new Map()

    constructor(private app: App) {
        super()
        this.init()
    }

    private init() {
        this.stageContainers.set(GameBoard.alias, new GameBoard(this.app))
        this.stageContainers.forEach(container => this.addChild(container))
    }
}
