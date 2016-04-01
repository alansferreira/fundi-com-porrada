/// <reference path="../lib/requirejs/require.js" />

require.config({
    baseUrl: "lib/",
    paths: {
        "iio": "deps/iioengine/core/iioEngine.min",
        "main": "app/main"
    },
    waitSeconds: 15
});

requirejs(['app/main']);