require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        bootstrap: 'libs/bootstrap/bootstrap'
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});

require([
    'app'
], function (App) {
    App.initialize();
});