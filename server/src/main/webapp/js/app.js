define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'message',

], function($, _, Backbone, Router, Message, FilterFormView, FilterView){

    var initialize = function(){
        Router.initialize();



    };

    return {
        initialize: initialize
    };
});