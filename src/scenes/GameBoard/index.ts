import { BoardItem } from "../../objects/BoardItem"

const BOARD_WIDTH = 8
const BOARD_HEIGHT = 8
const ITEM_SIZE = 32

type Position = { x: number, y: number }

export default class GameBoard extends Phaser.Scene {

    private items: Phaser.GameObjects.Group

    constructor() {
        super({ key: "GameBoard" })
    }

    public preload() {
        this.load.image(
            "tile",
            require('../../../assets/tile.png')
          )
    }
    
    public init(): void {
        this.items = this.add.group()
    }

    public create(): void {
        for (let h = 0; h < BOARD_HEIGHT; h++) {
            for (let w = 0; w < BOARD_WIDTH; w++) {
                const position: Position = {x: ITEM_SIZE * w, y: ITEM_SIZE * h}
                this.items.add(new BoardItem(
                    this,
                    position.x,
                    position.y,
                    "tile"
                ))
            }
        }
    }

}