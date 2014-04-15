define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'models/customer'
], function ($, _, Backbone, Router, Car) {

    var CustomersCollection = Backbone.Collection.extend({
        url: '/server/rest/cars',
        model : Car,
        initialize: function(){
            this.fetch();
        }
    });
    return new CustomersCollection();
});