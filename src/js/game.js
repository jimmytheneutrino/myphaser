(function () {
    'use strict';

    function Game() {}

    var bmd;
    var colors;
    var i = 0;

    Game.prototype = {
        create: function () {
            //this.input.onDown.add(this.onInputDown, this);
            bmd = this.game.add.bitmapData(800, 600);
            bmd.addToWorld();
            
            colors = Phaser.Color.HSVColorWheel();

            this.game.input.addMoveCallback(this.paint, this);

        },

        update: function () {

        },

        paint: function (pointer, x, y) {
            if (pointer.isDown) {
                bmd.circle(x, y, 12, colors[i].rgba);

                i = this.game.math.wrapValue(i, 1, 359);

                bmd.dirty = true;
            }
        },

        onInputDown: function () {
            this.game.state.start('menu');
        }
    };

    window['myphaser'] = window['myphaser'] || {};
    window['myphaser'].Game = Game;
}());