import GameBoard from "./scenes/GameBoard"

export const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [new GameBoard()],
    backgroundColor: "#ffffff"
}