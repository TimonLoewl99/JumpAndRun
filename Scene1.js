class Scene1 extends Phaser.Scene {
  constructor() {
    super("startScreen");
  }

  preload() {
    this.load.image("startscreen", "/assets/space3.png");
    this.load.image("button", "/assets/button-bg.png");
    this.load.image("btnText", "/assets/button-text.png");
  }
  create() {
    var btnBG;
    var btnTxt;
    this.add.image(400, 300, "startscreen");

    btnBG = this.add.image(
      game.config.width / 2,
      game.config.height / 2,
      "button"
    );
    btnTxt = this.add.image(
      game.config.width / 2,
      game.config.height / 2,
      "btnText"
    );
    btnBG.setInteractive();
    this.input.on("pointerdown", () => {
      console.log("started");
      btnBG.destroy();
      btnTxt.destroy();
      this.scene.start("runGame");
    });
  }

  update() {}
}
