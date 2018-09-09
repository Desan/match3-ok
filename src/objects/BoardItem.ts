export class BoardItem extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
        super(scene, x, y, key)
        this.initImage()
    }

    private initImage(): void {
        this.setActive(true)
        this.setOrigin(0, 0)
        this.setTint(0xffffff)

        this.scene.add.existing(this)
    }

}