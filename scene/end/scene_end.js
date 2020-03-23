class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
        var score = Score.new(game)
        this.addElement(score)
    }
    draw() {
        super.draw()
        // draw labels
        this.game.context.fillText('游戏结束, 按 r 返回游戏首页', 100, 290)
    }
}
