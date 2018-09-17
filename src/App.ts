import {Application} from "pixi.js"
import {autobind} from "core-decorators"
import { MainStage } from "./stages/MainStage"
import * as assets from "./resourses"

@autobind
export class App extends Application {

    private currentStage: any

    constructor() {
        super()
        this.setup()
    }

    private setup() {
        this.loader
            .add(Object.values(assets))
            .load(this.startGame)
    }

    private startGame() {
        this.currentStage = new MainStage(this)
        this.stage.addChild(this.currentStage)
    }
}