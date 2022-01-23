class Player {

    moving = false;
    dirMove = "";

    moveSpeed = 5;

    frames = [1, 2];

    x = 0;
    y = 0;

    currentTileX = 0;
    currentTileY = 0;

    targetTileX = 0;
    targetTileY = 0;

    width = 16;
    height = 16;

    targetX = 0;
    targetY = 0;

    constructor(m, d) {
        this.moving = m;
        this.dirMove = d;
    }

    SetDirMove(b, s) {
        this.moving = b;
        this.dirMove = s;
    }

    onUpdate() {
        if (this.moving) {
            switch (this.dirMove) {
                case "Left":
                    this.targetTileX = this.currentTileX - 1;
                    break;
                case "Right":
                    this.targetTileX = this.currentTileX + 1;
                    break;
                case "Up":
                    this.targetTileY = this.currentTileY - 1;
                    break;
                case "Down":
                    this.targetTileY = this.currentTileY + 1;
                    break;
            }
            // switch (this.dirMove) {
            //     case "Left":
            //         this.x = this.x - 1 * this.moveSpeed;
            //         break;
            //     case "Right":
            //         this.x = this.x + 1 * this.moveSpeed;
            //         break;
            //     case "Up":
            //         this.y = this.y - 1 * this.moveSpeed;
            //         break;
            //     case "Down":
            //         this.y = this.y + 1 * this.moveSpeed;
            //         break;
            // }
        }

        if (this.targetTileX != this.currentTileX || this.targetTileY != this.currentTileY) {
            switch (this.dirMove) {
                case "Left":
                    if (this.x > this.targetTileX * 32) {
                        this.x = this.x - 4;
                    }
                    else if (this.x == this.targetTileX * 32) {
                        this.currentTileX = this.targetTileX;
                    }
                    break;
                case "Right":
                    if (this.x < this.targetTileX * 32) {
                        this.x = this.x + 4;
                    }
                    else if (this.x == this.targetTileX * 32) {
                        this.currentTileX = this.targetTileX;
                    }
                    break;
                case "Up":
                    if (this.y > this.targetTileY * 32) {
                        this.y = this.y - 4;
                    }
                    else if (this.y == this.targetTileY * 32) {
                        this.currentTileY = this.targetTileY;
                    }
                    break;
                case "Down":
                    // console.log(this.currentTileY + ":" + this.targetTileY);
                    if (this.y < this.targetTileY * 32) {
                        this.y = this.y + 4;
                    }
                    else if (this.y == this.targetTileY * 32) {
                        this.currentTileY = this.targetTileY;
                    }
                    break;
            }
        }
    }

    SetFrames(f) {
        switch (this.dirMove) {
            case "Left":
                if (this.moving) {
                    this.frames = [3, 7, 3, 11];
                    // this.frames = [12, 13, 14];
                }
                else {
                    this.frames = [3, 3, 3, 3];
                    // this.frames = [12, 12, 12];
                }
                break;
            case "Right":
                if (this.moving) {
                    this.frames = [1, 5, 1, 9];
                    // this.frames = [24, 25, 26];
                }
                else {
                    this.frames = [1, 1, 1, 1];
                    // this.frames = [24, 24, 24];
                }
                break;
            case "Up":
                if (this.moving) {
                    this.frames = [2, 6, 2, 10];
                    // this.frames = [36, 37, 38];
                }
                else {
                    this.frames = [2, 2, 2, 2];
                    // this.frames = [36, 36, 36];
                }
                break;
            case "Down":
                if (this.moving) {
                    this.frames = [0, 4, 0, 8];
                    // this.frames = [0, 1, 2];
                }
                else {
                    this.frames = [0, 0, 0, 0];
                    // this.frames = [0, 0, 0];
                }
                break;
        }
    }

    SetInputMove() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyA":
                    this.SetDirMove(true, "Left");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyA":
                    this.SetDirMove(false, "Left");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyD":
                    this.SetDirMove(true, "Right");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyD":
                    this.SetDirMove(false, "Right");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyW":
                    this.SetDirMove(true, "Up");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyW":
                    this.SetDirMove(false, "Up");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyS":
                    this.SetDirMove(true, "Down");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyS":
                    this.SetDirMove(false, "Down");
                    break;
            }
        });
    }
}

var at = require("@akashic-extension/akashic-tile");
var co = require("@akashic-extension/collision-js");
var collision_js_1 = require("@akashic-extension/collision-js");

function main(param) {
    g.game.pushScene(createSceneLevel1());
    // g.game.pushScene(scene);
}

function aabbToAABBDemo(scene) {

    var aabb1 = new g.Sprite({
        scene: scene,
        x: 0,
        y: 0,
        width: 64,
        height: 64,
        cssColor: "green",
        src: scene.asset.getImageById("mouse"),
        touchable: true
    });

    var aabb2 = new g.FilledRect({
        scene: scene,
        x: 10,
        y: 63,
        width: 128,
        height: 128,
        cssColor: "green",
        touchable: true,
    });

    scene.append(aabb1);
    scene.append(aabb2);

    aabb1.onPointMove.add(function (ev) {
        // var w = aabb1.width;
        // var h = aabb1.height;
        // console.log(aabb1.x + ":"+aabb1.y + "-" + aabb1.x+w+":"+aabb1.y+h);

        // var minX1 = aabb1.x;
        // var maxX1 = aabb1.y + w;
        // var minY1 = aabb1.y;
        // var maxY1 = aabb1.y + h;

        // var minX2 = aabb2.x;
        // var maxX2 = aabb2.y + w;
        // var minY2 = aabb2.y;
        // var maxY2 = aabb2.y + h;

        if (co.aabbToAABB(aabb1, aabb2)) {
            console.log("A");
        }
        else {
            console.log("B");
        }
    });


    // var root = new g.E({ scene: scene });
    // var halfExtend = { x: g.game.width / 8, y: g.game.height / 8 };
    // var position = new collision_js_1.Vec2(g.game.width / 2, g.game.height / 2);
    // var aabb1 = {
    //     min: position.clone().sub(halfExtend),
    //     max: position.clone().add(halfExtend)
    // };
    // var aabb2 = {
    //     min: { x: 0, y: 0 },
    //     max: { x: 128, y: 96 }
    // };
    // var aabbe1 = createAABBE(scene, aabb1, "green");
    // var aabbe2 = createAABBE(scene, aabb2, "blue", true);
    // aabbe2.onPointMove.add(function (ev) {
    //     collision_js_1.Vec2.add(aabb2.min, ev.prevDelta);
    //     collision_js_1.Vec2.add(aabb2.max, ev.prevDelta);
    //     collision_js_1.Vec2.add(aabbe2, ev.prevDelta);
    //     aabbe2.cssColor = co.aabbToAABB(aabb1, aabb2) ? "red" : "blue";
    //     aabbe2.modified();
    // });
    // root.append(aabbe1);
    // root.append(aabbe2);
    // return root;
}

module.exports = main;


function CreateTilemap(scene, groupParent) {
    var tile = new at.Tile({
        scene: scene,
        src: scene.asset.getImageById("map"),
        tileWidth: 32,
        tileHeight: 32,
        tileData: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        ],
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        parent: groupParent,
        touchable: true,
    });
}

function createSceneLevel1() {
    var scene = new g.Scene({
        game: g.game,
        assetIds: ["map", "mouse", "character", "character_v2", "shot"],
    });


    var index0 = new g.E({
        scene: scene,
    });

    var index1 = new g.E({
        scene: scene,
    });

    var index2 = new g.E({
        scene: scene,
    });

    var endGame = false;

    scene.onLoad.add(function () {

        scene.append(index0);
        scene.append(index1);
        scene.append(index2);

        // aabbToAABBDemo(scene);

        var currentPhomai = 0;
        var totalPhomai = 3;

        var phomai = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 16,
            height: 16,
            srcWidth: 16,
            srcHeight: 16,
            x: 100,
            y: 100,
        });

        var phomai2 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 300,
            y: 100,
        });
        var phomai3 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 300,
            y: 300,
        });

        scene.append(phomai);
        scene.append(phomai2);
        scene.append(phomai3);


        // CreateTilemap(scene, index0);

        var p = new Player(false, "Left", scene, index1);

        var player = new g.FrameSprite({
            scene: scene,
            src: scene.asset.getImageById("mouse"),
            width: 48,
            height: 48,

            srcWidth: 48,
            srcHeight: 48,

            frames: [0, 1],

            loop: true,

            interval: 100,

            x: 500,
            y: 500,

            scaleX: 1,
            scaleY: 1,
            parent: index1,
        });
        player.start();
        var font = new g.DynamicFont({
            game: g.game,
            fontFamily: "sans-serif",
            size: 15
        });
        var labelLevel = new g.Label({
            scene: scene,
            font: font,
            text: "Level 1",
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 25
        });
        var label = new g.Label({
            scene: scene,
            font: font,
            text: currentPhomai + "/" + totalPhomai,
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 50
        });
        scene.append(labelLevel);
        scene.append(label);

        phomai.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai)) {
                phomai.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel2());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai2.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai2)) {
                phomai2.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel2());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai3.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai3)) {
                phomai3.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel2());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });


        scene.onPointDownCapture.add(function (ev) {
            if (!endGame) {
                p.targetX = ev.point.x - 24;
                p.targetY = ev.point.y - 24;
            }

            // var dirX = (p.targetX - player.x);
            // var dirY = (p.targetY - player.y);

            // var maxX = dirX;
            // var maxY = dirY;
            // if (maxX < 0) {
            //     maxX *= -1;
            // }
            // if (maxY < 0) {
            //     maxY *= -1;
            // }
            // var max = maxX;
            // if (maxX < maxY) {
            //     max = maxY;
            // }

            // dirX = dirX / max;
            // dirY = dirY / max;
            // console.log(dirX +";"+dirY);
        });


        // scene.append(rect);

        // scene.append(player);

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyF":
                    // console.log("F");
                    break;
            }
        });

        p.SetInputMove();

        scene.onUpdate.add(function () {

            p.onUpdate();

            if (p.targetX != 0 || p.targetY != 0) {

                var dirX = (p.targetX - player.x);
                var dirY = (p.targetY - player.y);
                var speed = 5;

                var maxX = dirX;
                var maxY = dirY;
                if (maxX < 0) {
                    maxX *= -1;
                }
                if (maxY < 0) {
                    maxY *= -1;
                }
                var max = maxX;
                if (maxX < maxY) {
                    max = maxY;
                }

                dirX = dirX / max;
                dirY = dirY / max;

                // console.log(dirX + ";" + dirY);

                dirX = dirX * speed;
                dirY = dirY * speed;

                player.x = player.x + dirX;
                player.y = player.y + dirY;

                var distX = p.targetX - player.x;
                var distY = p.targetY - player.y;

                if (distX < 0) {
                    distX *= -1;
                }
                if (distY < 0) {
                    distY *= -1;
                }

                if (distX < 5 && distY < 5) {
                    p.targetX = 0;
                    p.targetY = 0;
                }
                // player.x = p.x;
                // player.y = p.y;

                p.SetFrames(player);
                player.frames = p.frames;

                player.modified();
            }
        });
    });

    // var scene = new g.Scene({ game: g.game });
    // scene.onLoad.add(function () {
    //     scene.append(createRect(scene, "red"));
    //     scene.onPointDownCapture.add(function () {
    //         g.game.replaceScene(createSceneB());
    //     });
    // });
    return scene;
}

function createSceneLevel2() {
    var scene = new g.Scene({
        game: g.game,
        assetIds: ["map", "mouse", "character", "character_v2", "shot"],
    });


    var index0 = new g.E({
        scene: scene,
    });

    var index1 = new g.E({
        scene: scene,
    });

    var index2 = new g.E({
        scene: scene,
    });

    var endGame = false;

    scene.onLoad.add(function () {

        scene.append(index0);
        scene.append(index1);
        scene.append(index2);

        // aabbToAABBDemo(scene);

        var currentPhomai = 0;
        var totalPhomai = 3;

        var phomai = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 16,
            height: 16,
            srcWidth: 16,
            srcHeight: 16,
            x: 700,
            y: 200,
        });

        var phomai2 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 650,
            y: 350,
        });
        var phomai3 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 350,
            y: 350,
        });

        scene.append(phomai);
        scene.append(phomai2);
        scene.append(phomai3);


        // CreateTilemap(scene, index0);

        var p = new Player(false, "Left", scene, index1);

        var player = new g.FrameSprite({
            scene: scene,
            src: scene.asset.getImageById("mouse"),
            width: 48,
            height: 48,

            srcWidth: 48,
            srcHeight: 48,

            frames: [0, 1],

            loop: true,

            interval: 100,

            x: 500,
            y: 500,

            scaleX: 1,
            scaleY: 1,
            parent: index1,
        });
        player.start();
        var font = new g.DynamicFont({
            game: g.game,
            fontFamily: "sans-serif",
            size: 15
        });
        var labelLevel = new g.Label({
            scene: scene,
            font: font,
            text: "Level 2",
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 25
        });
        var label = new g.Label({
            scene: scene,
            font: font,
            text: currentPhomai + "/" + totalPhomai,
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 50
        });
        scene.append(labelLevel);
        scene.append(label);

        phomai.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai)) {
                phomai.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel3());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai2.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai2)) {
                phomai2.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel3());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai3.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai3)) {
                phomai3.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel3());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });


        scene.onPointDownCapture.add(function (ev) {
            if (!endGame) {
                p.targetX = ev.point.x - 24;
                p.targetY = ev.point.y - 24;
            }

            // var dirX = (p.targetX - player.x);
            // var dirY = (p.targetY - player.y);

            // var maxX = dirX;
            // var maxY = dirY;
            // if (maxX < 0) {
            //     maxX *= -1;
            // }
            // if (maxY < 0) {
            //     maxY *= -1;
            // }
            // var max = maxX;
            // if (maxX < maxY) {
            //     max = maxY;
            // }

            // dirX = dirX / max;
            // dirY = dirY / max;
            // console.log(dirX +";"+dirY);
        });


        // scene.append(rect);

        // scene.append(player);

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyF":
                    // console.log("F");
                    break;
            }
        });

        p.SetInputMove();

        scene.onUpdate.add(function () {

            p.onUpdate();

            if (p.targetX != 0 || p.targetY != 0) {

                var dirX = (p.targetX - player.x);
                var dirY = (p.targetY - player.y);
                var speed = 5;

                var maxX = dirX;
                var maxY = dirY;
                if (maxX < 0) {
                    maxX *= -1;
                }
                if (maxY < 0) {
                    maxY *= -1;
                }
                var max = maxX;
                if (maxX < maxY) {
                    max = maxY;
                }

                dirX = dirX / max;
                dirY = dirY / max;

                // console.log(dirX + ";" + dirY);

                dirX = dirX * speed;
                dirY = dirY * speed;

                player.x = player.x + dirX;
                player.y = player.y + dirY;

                var distX = p.targetX - player.x;
                var distY = p.targetY - player.y;

                if (distX < 0) {
                    distX *= -1;
                }
                if (distY < 0) {
                    distY *= -1;
                }

                if (distX < 5 && distY < 5) {
                    p.targetX = 0;
                    p.targetY = 0;
                }
                // player.x = p.x;
                // player.y = p.y;

                p.SetFrames(player);
                player.frames = p.frames;

                player.modified();
            }
        });
    });

    // var scene = new g.Scene({ game: g.game });
    // scene.onLoad.add(function () {
    //     scene.append(createRect(scene, "red"));
    //     scene.onPointDownCapture.add(function () {
    //         g.game.replaceScene(createSceneB());
    //     });
    // });
    return scene;
}

function createSceneLevel3() {
    var scene = new g.Scene({
        game: g.game,
        assetIds: ["map", "mouse", "character", "character_v2", "shot"],
    });


    var index0 = new g.E({
        scene: scene,
    });

    var index1 = new g.E({
        scene: scene,
    });

    var index2 = new g.E({
        scene: scene,
    });

    var endGame = false;

    scene.onLoad.add(function () {

        scene.append(index0);
        scene.append(index1);
        scene.append(index2);

        // aabbToAABBDemo(scene);

        var currentPhomai = 0;
        var totalPhomai = 3;

        var phomai = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 16,
            height: 16,
            srcWidth: 16,
            srcHeight: 16,
            x: 450,
            y: 200,
        });

        var phomai2 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 600,
            y: 250,
        });
        var phomai3 = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("shot"),
            width: 48,
            height: 48,
            srcWidth: 48,
            srcHeight: 48,
            x: 200,
            y: 150,
        });

        scene.append(phomai);
        scene.append(phomai2);
        scene.append(phomai3);


        // CreateTilemap(scene, index0);

        var p = new Player(false, "Left", scene, index1);

        var player = new g.FrameSprite({
            scene: scene,
            src: scene.asset.getImageById("mouse"),
            width: 48,
            height: 48,

            srcWidth: 48,
            srcHeight: 48,

            frames: [0, 1],

            loop: true,

            interval: 100,

            x: 500,
            y: 500,

            scaleX: 1,
            scaleY: 1,
            parent: index1,
        });
        player.start();
        var font = new g.DynamicFont({
            game: g.game,
            fontFamily: "sans-serif",
            size: 15
        });
        var labelLevel = new g.Label({
            scene: scene,
            font: font,
            text: "Level 3",
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 25
        });
        var label = new g.Label({
            scene: scene,
            font: font,
            text: currentPhomai + "/" + totalPhomai,
            fontSize: 15,
            textColor: "blue",
            x: 25,
            y: 50
        });
        scene.append(labelLevel);
        scene.append(label);

        phomai.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai)) {
                phomai.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel1());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai2.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai2)) {
                phomai2.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel1());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });

        phomai3.onUpdate.add(function () {
            if (co.aabbToAABB(player, phomai3)) {
                phomai3.destroy();
                currentPhomai++;

                if (currentPhomai >= totalPhomai) {
                    endGame = true;

                    var button = createButtonNextLevel(scene);
                    
                    button.onPointDown.add(function (ev) {
                        g.game.replaceScene(createSceneLevel1());
                    });
                    scene.append(button);

                    var nextlevel = new g.Label({
                        scene: scene,
                        font: font,
                        text: "NEXT LEVEL",
                        fontSize: 15,
                        textColor: "blue",
                        x: 502,
                        y: 505
                    });
                    scene.append(nextlevel);
                }

                label.text = currentPhomai + "/" + totalPhomai;
                label.invalidate();
            }
        });


        scene.onPointDownCapture.add(function (ev) {
            if (!endGame) {
                p.targetX = ev.point.x - 24;
                p.targetY = ev.point.y - 24;
            }

            // var dirX = (p.targetX - player.x);
            // var dirY = (p.targetY - player.y);

            // var maxX = dirX;
            // var maxY = dirY;
            // if (maxX < 0) {
            //     maxX *= -1;
            // }
            // if (maxY < 0) {
            //     maxY *= -1;
            // }
            // var max = maxX;
            // if (maxX < maxY) {
            //     max = maxY;
            // }

            // dirX = dirX / max;
            // dirY = dirY / max;
            // console.log(dirX +";"+dirY);
        });


        // scene.append(rect);

        // scene.append(player);

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyF":
                    // console.log("F");
                    break;
            }
        });

        p.SetInputMove();

        scene.onUpdate.add(function () {

            p.onUpdate();

            if (p.targetX != 0 || p.targetY != 0) {

                var dirX = (p.targetX - player.x);
                var dirY = (p.targetY - player.y);
                var speed = 5;

                var maxX = dirX;
                var maxY = dirY;
                if (maxX < 0) {
                    maxX *= -1;
                }
                if (maxY < 0) {
                    maxY *= -1;
                }
                var max = maxX;
                if (maxX < maxY) {
                    max = maxY;
                }

                dirX = dirX / max;
                dirY = dirY / max;

                // console.log(dirX + ";" + dirY);

                dirX = dirX * speed;
                dirY = dirY * speed;

                player.x = player.x + dirX;
                player.y = player.y + dirY;

                var distX = p.targetX - player.x;
                var distY = p.targetY - player.y;

                if (distX < 0) {
                    distX *= -1;
                }
                if (distY < 0) {
                    distY *= -1;
                }

                if (distX < 5 && distY < 5) {
                    p.targetX = 0;
                    p.targetY = 0;
                }
                // player.x = p.x;
                // player.y = p.y;

                p.SetFrames(player);
                player.frames = p.frames;

                player.modified();
            }
        });
    });

    // var scene = new g.Scene({ game: g.game });
    // scene.onLoad.add(function () {
    //     scene.append(createRect(scene, "red"));
    //     scene.onPointDownCapture.add(function () {
    //         g.game.replaceScene(createSceneB());
    //     });
    // });
    return scene;
}

function createRect(scene, color) {
    return new g.FilledRect({
        scene: scene,
        cssColor: color,
        width: 32,
        height: 32
    });
}

function createButtonNextLevel(scene) {
    return new g.FilledRect({
        scene: scene,
        cssColor: "#66d9ff",
        width: 96,
        height: 32,
        x: 500,
        y: 500,
        touchable: true,
    });
}


  //tao tilemap --done
  //check va cham (collsion)
  //di chuyen va clear stage
  //