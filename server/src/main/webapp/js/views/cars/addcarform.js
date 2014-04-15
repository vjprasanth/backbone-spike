define([
    'jquery',
    'underscore',
    'backbone',
    'collections/cars',
    'text!templates/cars/editcarform.html'
], function ($, _, Backbone, cars, editCarTemplate) {

    return Backbone.View.extend({
            el: $('#edit'),
            initialize: function () {
                _.bindAll(this, 'submit');
            },
            events: {
                'click input#editCarForm': 'submit'
            },
            submit: function (e) {
                console.log("adding car");
                e.preventDefault();
                cars.create({ name: $('#editCarName').val()});
            },
            render: function () {
                var compiledTemplate = _.template(editCarTemplate, {caption: 'Add' });
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