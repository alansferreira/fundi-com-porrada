/// <reference path="../lib/requirejs/require.js" />
/// <reference path="../deps/iioengine/core/iioEngine.min.js" />

require(["iio"], function () {

    iio.start(main);

});

function main(app, settings) {
    // Create a loader with a base path at ".assets"
    var loader = new iio.Loader('assets');

    // Define assets in a hash, with each asset associated with a asset ID.
    // in the form:
    //   assetId: 'path/to/asset'
    var assets = {
        starSmall: 'images/starSmall.png',
        starBig: 'images/starBig.png',
        meteorBig: 'images/meteorBig.png',
        meteorSmall: 'images/meteorSmall.png',
        laserSound: 'sounds/laser.wav',
        explode: 'sounds/explode.wav',
        player: 'images/player.png',
        playerLeft: 'images/playerleft.png',
        playerRight: 'images/playerRight.png',
        laser: 'images/laserRed.png',
        laserFlash: 'images/laserRedShot.png',
        theme: 'sounds/theme.mp3',
    }
    alert('asdf');

}