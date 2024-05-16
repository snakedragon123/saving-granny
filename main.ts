namespace SpriteKind {
    export const Title = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart == 1) {
        Granny.setImage(img`
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            . . . . . . . . . . . . . . . . 
            `)
        animation.runImageAnimation(
        Granny,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    Dungeon1floor += 1
    tiles.placeOnTile(Granny, tiles.getTileLocation(2, 12))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart == 0) {
        StartTheFrigginGame()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart == 1) {
        Granny.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        animation.runImageAnimation(
        Granny,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
})
function StartTheFrigginGame () {
    GameStart = 1
    Granny = sprites.create(img`
        . . . . . f f f f f . . . . . . 
        . . . . f b b b b b f . . . . . 
        . . . f b b b b b b b f . . . . 
        . . f b b f f f f f f f . . . . 
        . . f b f d d d d d d f . . . . 
        . . f b f d f d d f d f . . . . 
        . . f b f d d d d d d f . . . . 
        . . . f f d d d d d f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 8 8 8 8 8 f . . . . . 
        . . f 8 8 8 8 8 8 8 8 f . . . . 
        . . f 8 8 8 8 8 8 8 8 f . . . . 
        . . d f f f f f f f f d . . . . 
        . . . . f . . . . f e e e e e . 
        . . . . f . . . . f . . . . e . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Granny, 100, 100)
    scene.cameraFollowSprite(Granny)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart == 1) {
        Granny.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            `)
        animation.runImageAnimation(
        Granny,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . f b b b b b b b f . . . . 
            . . f b b f f f f f f f . . . . 
            . . f b f d d d d d d f . . . . 
            . . f b f d f d d f d f . . . . 
            . . f b f d d d d d d f . . . . 
            . . . f f d d d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 8 8 8 8 8 f . . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 8 8 8 8 f . . . . 
            . . d f f f f f f f f d . . . . 
            . . . . f . . . . f e e e e e . 
            . . . . f . . . . f . . . . e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameStart == 1) {
        Granny.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        animation.runImageAnimation(
        Granny,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f b b b b b f . . . . 
            . . . . f b b b b b b b f . . . 
            . . . . f f f f f f f b b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . f d f d d f d f b f . . 
            . . . . f d d d d d d f b f . . 
            . . . . . f d d d d d f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f 8 8 8 8 8 8 f . . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . f 8 8 8 8 8 8 8 8 f . . 
            . . . . d f f f f f f f f d . . 
            . e e e e e f . . . . f . . . . 
            . e . . . . f . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    }
})
let Floor1: Sprite = null
let Granny: Sprite = null
let GameStart = 0
let Dungeon1floor = 0
GameStart = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999911111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999
    9999999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999
    9999999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999991111111111111111111111119999999999999999999999999999999999
    9999999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999
    9999999999999999991111111111111111111111199999999999999999999999999999999999999999999999999999999911111111111111111111111111111111199999999999999999999999999999
    9999999999999999991111111111111111111111999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111119999999999999999999999999999
    9999999999999999991111111111111111111111999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111999999999999999999999999999
    9999999999999999991111111111111111111119999999999999999999999999999999999999999999999111119999911111111111111111111111111111111111111199999999999999999999999999
    9999999999999999991111111111111111111199999999999999999999999999999999999999999999111111111199111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999111111111111111111999999999999999999999999999999999999999999911111111111119111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999111111111111111199999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111199999999999999999999999999
    9999999999999999999911111111111999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111119999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999ffff99fffff99ffff11fff11fff11111111111111111111111111111111111111111111119999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99f99f999f99f99999f1111f1111111111f11111111111111111111111111111111111119999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99f99f999f99f99999f9991f111111111f1f1111111111111111111111111111111111119999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99f99f999f99f99999fff99fff111111f111f111111111111111111111111111111111199999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999ffff99fffff99f9999999f9999f99999f11111f11111111111111111111111111111111999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99999ff99999ffff9999f9999f99999fffffff11111111111111111111111111111199999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99999f9f9999f9999999f9999f99999f99999f99999999911111111111111111119999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99999f99f999f9999999f9999f99999f99999f99999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f99999f999f99ffff99fff99fff99999f99999f99999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999997999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999997799999999999999999999999999999999fffff9ffff9999fffff99fffff999f9999fff999fffff9999999999999999999999999999999999999999999999999999
    99999999999999999999999999999779999999999999999999999999999999999f999f99f9999f99999999f9999f9f999f99f9999f999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999777999999999999999999999999999999999f999f99f9999f99999999f999f999f99fff99999f999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999777999999999999999999999999999999999f999f99f9999fffff9999f999fffff99ff999999f999999999999999999999999999999999999999999999999999999
    99999999999999999999999999997777799999999999999999999999999999999f999f99f99999999f9999f999f999f99f9f99999f999999999999999999999999999999999999999999999999999999
    99999999999999999999999999997777799999999999999999999999999999999f999ffff9999fffff9999f999f999f99f99f9999f999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999997777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999997777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999997777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999977777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999997777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999977777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999997777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999997779997777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999997777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997
    9999999999999999999999999977777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997
    9999999999999999999999999777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977
    9999999999999999999999997777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777
    9999999999999999999999977777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777
    999999999999999999999977777777ee77779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777
    9999999999999999999999777777eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999977777
    9999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777777
    9999999999999999999999999999eeeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999997777777
    9999999999999999999999999999eeeeee999999977777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999977777777
    9999999999999999999999999999eeeeee777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999997777777777
    9999999999999999999999999977eeeeee777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999977777777777
    9999999999999999999999777777eeeeee777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999777777777777
    9999999999999999999777777777eeeeee777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999997777777777777
    99999999999999777777777777777eeee7777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999977777777777777
    9999999999997777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999777777777777777
    9999999999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999997777777777777777
    9999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999977777777777777777
    9999777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999997777777777777777777
    9977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999997777777777777777777777
    9777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.onUpdate(function () {
    if (Dungeon1floor == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        Floor1 = sprites.create(img`
            ............................................................................................................................................
            .111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            ...............111111111111...1..........111111...111111..1111111111........................................................................
            ...............1..............1..........1....1...1....1..1........1........................................................................
            ...............1..............1..........1....1...1....1..1........1.......................1111111..........................................
            ...............1..............1..........1....1...1....1..1........1......................1......1..........................................
            ...............1..............1..........1....1...1....1..1........1.....................1.......1..........................................
            ...............1..............1..........1....1...1....1..1........1.....................1.......1..........................................
            ...............1..............1..........1....1...1....1..1........1.............................1..........................................
            ...............1..............1..........1....1...1....1..1........1.............................1..........................................
            ...............1..............1..........1....1...1....1..1111111111.............................1..........................................
            ...............111111111111...1..........1....1...1....1..11.....................................1..........................................
            ...............1..............1..........1....1...1....1..11.....................................1..........................................
            ...............1..............1..........1....1...1....1..1.1....................................1..........................................
            ...............1..............1..........1....1...1....1..1.1....................................1..........................................
            ...............1..............1..........1....1...1....1..1..1...................................1..........................................
            ...............1..............1..........1....1...1....1..1...1..................................1..........................................
            ...............1..............1..........1....1...1....1..1...1..................................1..........................................
            ...............1..............1..........1....1...1....1..1....1.................................1..........................................
            ...............1..............1..........1....1...1....1..1....1.................................1..........................................
            ...............1..............1..........1....1...1....1..1.....1................................1..........................................
            ...............1..............1..........1....1...1....1..1.....1................................1..........................................
            ...............1..............1..........1....1...1....1..1......1...............................1..........................................
            ...............1..............1..........1....1...1....1..1.......1..............................1..........................................
            ...............1..............1..........1....1...1....1..1.......1..............................1..........................................
            ...............1..............1..........1....1...1....1..1........1.............................1..........................................
            ...............1..............1..........1....1...1....1..1........1.............................1..........................................
            ...............1..............11111111...111111...111111..1.........1............................1..........................................
            ..........................................................................................111111111111111...................................
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            ............................................................................................................................................
            .111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.
            ............................................................................................................................................
            `, SpriteKind.Title)
        Floor1.setPosition(79, 26)
    }
})
