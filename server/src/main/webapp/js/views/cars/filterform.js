define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/cars/filterform.html',
    'collections/filterstate'

], function($, _, Backbone, carsFilterTemplate, filterState){

    return Backbone.View.extend({
            el: $('#filter'),
            initialize: function(){
                _.bindAll(this, 'submit');
            },
            events: {
                'click input#filter_submit': 'submit'
            },
            submit: function(e){
                e.preventDefault();
                filterState.add($('#name').val());
            },
            render: function () {

                var compiledTemplate = _.template(carsFilterTemplate, {model : {name: "test"}});
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