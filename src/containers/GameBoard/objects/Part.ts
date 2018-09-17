import { Sprite, loaders } from "pixi.js"
import { App } from "../../../App"
import { beef, onion, cheese, head, tail, pickles, salad, tomato } from "../../../resourses"
import { GameBoard } from "../GameBoard"

export class Part extends Sprite {

    constructor(
        private app: App,
        private type: Part.Type,
        x: number,
        y: number
    ) {
        super()
        this.anchor.set(0.5, 0.5)
        this.x = x
        this.y = y
        this.width = GameBoard.CELL_SIZE
        this.height = GameBoard.CELL_SIZE
        this.initTexture()
    }

    private initTexture() {
        let resourse: loaders.Resource
        switch (this.type) {
            case Part.Type.BEEF:
                resourse = this.app.loader.resources[beef]
                break
            case Part.Type.ONION:
                resourse = this.app.loader.resources[onion]
                break
            case Part.Type.CHEESE:
                resourse = this.app.loader.resources[cheese]
                break
            case Part.Type.HEAD:
                resourse = this.app.loader.resources[head]
                break
            case Part.Type.TAIL:
                resourse = this.app.loader.resources[tail]
                break
            case Part.Type.PICKLES:
                resourse = this.app.loader.resources[pickles]
                break
            case Part.Type.SALAD:
                resourse = this.app.loader.resources[salad]
                break
            case Part.Type.TOMATO:
                resourse = this.app.loader.resources[tomato]
                break
            default:
                throw new Error("dafaq")
        }
        this.texture = resourse.texture
    }

}

export namespace Part {
    export enum Type {
        BEEF = 0,
        ONION,
        CHEESE,
        HEAD,
        TAIL,
        PICKLES,
        SALAD,
        TOMATO
    }
}
