define([
    'jquery',
    'underscore',
    'backbone',
    'message',
    'text!templates/cars/list.html',
    'collections/cars',
    'collections/filterstate',
], function ($, _, Backbone, Message, carsListTemplate, carCollection, filterState) {



    return Backbone.View.extend({
            el: $('#list'),

            initialize: function () {
                _.bindAll(this, 'displayAddForm');
                _.bindAll(this, 'updateCar');
                _.bindAll(this, 'deleteCar');
            },
            events: {
                'click input#addCarForm': 'displayAddForm',
                'click input#updateCar': 'updateCar',
                'click input#deleteCar': 'deleteCar'

            },

            updateCar: function (e) {
                var carToUpdate = $(e.target).data('id');
                Message.trigger('refresh:updateCar', carToUpdate);
            },

            deleteCar: function (e) {
                var carToDelete = $(e.target).data('id');
                Message.trigger('refresh:deleteCar', carToDelete);
            },

            displayAddForm: function (e) {
                Message.trigger('refresh:addCar', null);
            },

            render: function () {

                var cars = carCollection.toJSON();
                _.each(filterState.list(), function (filter) {
                    cars = _.filter(cars, function (car) {
                        return car.name.indexOf(filter) > -1;
                    });

                });


                var compiledTemplate = _.template(carsListTemplate, {model: cars});
                this.$el.html(compiledTemplate);
            },
            removeSelf: function () {
                this.$el.empty();
                this.undelegateEvents();
                return this;
            }
        }
    );
});