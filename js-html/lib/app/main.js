/// <reference path="../lib/requirejs/require.js" />
/// <reference path="../deps/iioengine/iio-1.4.0.min.js" />

require(["iio"], function () {

    iio.start(main);

});

function main(app, settings) {
    // Create a loader with a base path at ".assets"
    var loader = new iio.Loader('assets');

    var oWidth = 15;
    var oSpeed = .8;
    
    // reverse the given velocity
    function reverse(o, p) { o[p] *= -1 };

    function reverseX(o) { reverse(o.vel, 'x'); };
    function reverseY(o) { reverse(o.vel, 'y'); };


    // input controller object
    var input = {
        left: false, // state of left input
        right: false,// state of right input
        up: false,   // state of up input
        down: false, // state of down input
        // update input states
        update: function (key, state) {
            if (this.isUp(key))
                this.up = state;
            else if (this.isRight(key))
                this.right = state;
            else if (this.isDown(key))
                this.down = state;
            else if (this.isLeft(key))
                this.left = state;
        },
        // return true if key maps to left input
        isLeft: function (key) {
            return key == 'left arrow' || key == 'a'
        },
        // return true if key maps to right input
        isRight: function (key) {
            return key == 'right arrow' || key == 'd'
        },
        // return true if key maps to up input
        isUp: function (key) {
            return key == 'up arrow' || key == 'w'
        },
        // return true if key maps to down input
        isDown: function (key) {
            return key == 'down arrow' || key == 's'
        }
    }
    app.onKeyDown = function (event, key) {
        input.update(key, true);
        if (input.isLeft(key)) player.walkLeft();
        if (input.isRight(key)) player.walkRight();
    };

    // commonChar object properties
    var commonChar = {
        width: oWidth * 2,
        bounds: {
            left: {
                bound: 0,
            },
            right: {
                bound: app.width,
            },
        }
    }
    
    var background = app.add(new iio.Quad({
        pos: [0, app.center.y - 10],
        img: 'assets/images/world1-1.png',
    }));

    //// add a red quad
    var player = app.add(new iio.Quad(commonChar, {
        color: 'red',
        speed: 1, 
        pos: [
          (app.width / 2) - commonChar.width,
          app.center.y + 60,
        ],// make mario walk left
        walkLeft: function () {
            this.set({
                flip: 'x',
                walking: true,
                vel: [-this.speed, 0],
            });
        },
        // make mario walk right
        walkRight: function () {
            this.set({
                flip: false,
                walking: true,
                vel: [this.speed, 0],
            });
        },
    }));

    var enemyT1 = function () {
        var side = iio.randomInt(0, 1);

        return new iio.Quad(commonChar, {
            color: 'black',
            speed: 1,
            vel: [(side == 0 ? 1 : -1), 0],
            pos: [(side == 0 ? -commonChar.width : app.width), app.center.y + 60],
        });
    };

    app.add(new enemyT1());

    //// add a collision callback
    //app.collision(square0, square1,
    //  function (s0, s1) {
    //      // switch object velocities
    //      var temp = s0.vel;
    //      s0.vel = s1.vel;
    //      s1.vel = temp;
    //      // reverse rotational velocities
    //      reverse(s0, 'rVel');
    //      reverse(s1, 'rVel');
    //  });

}