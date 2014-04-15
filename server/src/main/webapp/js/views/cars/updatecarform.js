define([
    'jquery',
    'underscore',
    'backbone',
    'collections/cars',
    'text!templates/cars/editcarform.html'
], function($, _, Backbone, cars, editCarTemplate){



    return Backbone.View.extend({
            el: $('#edit'),
            initialize: function(){
                _.bindAll(this, 'submit');
            },
            events: {
                'click input#editCarForm': 'submit'
            },
            submit: function(e){

                e.preventDefault();

                var car = cars.get(this.currentId)
                car.set('name',$('#editCarName').val());
                car.save();

            },
            render: function (id) {
                this.currentId = id;
                var car = cars.get(id).toJSON();
                car.caption = "Update";
                var compiledTemplate = _.template(editCarTemplate, car);
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