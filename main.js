var __main = function() {
    var images = {
        background: 'img/background.png',
        player: 'img/hero1.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        bullet1: 'img/bullet1.png',
        bullet2: 'img/bullet2.png',
        particle1: 'img/particle1.png',
        particle2: 'img/particle2.png',
        particle3: 'img/particle3.png',
        // paddle: 'img/paddle.png',
    }
    var game = GuaGame.instance(30, images, function(g) {
        var s = MainScene.new(g)
        // var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

}

__main()
