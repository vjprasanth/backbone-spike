define([
    'jquery',
    'underscore',
    'backbone',
    'message',
    'models/car'
], function ($, _, Backbone, Message, Car) {

    var CarCollection = Backbone.Collection.extend({
        url: '/server/rest/cars',
        model : Car,
        initialize: function(){


            this.fetch();

        }
    });

    var carCollection = new CarCollection();

    carCollection.on("all", function(event){
        Message.trigger("refresh:cars", event);
    });

    return carCollection;
});