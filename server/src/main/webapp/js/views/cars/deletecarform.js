define([
    'jquery',
    'underscore',
    'backbone',
    'collections/cars',
    'text!templates/cars/deletecarform.html',
    'message'
], function ($, _, Backbone, cars, deleteCarTemplate, Message) {

    return Backbone.View.extend({
            el: $('#edit'),
            initialize: function () {
                _.bindAll(this, 'yes');
            },
            events: {
                'click input#yesDeleteCar': 'yes',
                'click input#noDeleteCar': 'no'
            },
            yes: function (e) {
                cars.get(this.currentId).destroy();
            },
            no: function (e) {
                this.removeSelf();
            },
            render: function (id) {
                this.currentId = id;
                var compiledTemplate = _.template(deleteCarTemplate);
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