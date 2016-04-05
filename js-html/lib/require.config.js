/// <reference path="../lib/requirejs/require.js" />

require.config({
    baseUrl: "lib/",
    paths: {
        "iio": "deps/iioengine/iio-1.4.0.min",
        "main": "app/main"
    },
    waitSeconds: 15
});

requirejs(['app/main']);