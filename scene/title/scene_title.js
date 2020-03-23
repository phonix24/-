class SceneTitle extends Scene {
    constructor(game) {
        super(game)
        game.registerAction('g', function(){
            var s = MainScene.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 g 进入游戏界面', 100, 290)
    }
}
