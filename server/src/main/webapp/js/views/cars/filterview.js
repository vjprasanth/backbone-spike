define([
    'jquery',
    'underscore',
    'backbone',
    'message',
    'text!templates/cars/filterview.html',
    'collections/filterstate'
], function ($, _, Backbone, Message, carsFilterViewTemplate, filterState) {

    return Backbone.View.extend({
            el: $('#filterlist'),
            initialize: function(){

                _.bindAll(this, 'deleteFilter');
            },
            events : {
                "click #delete_filter" : 'deleteFilter'
            },
            deleteFilter: function(ev){

                var filter = $(ev.target).data('filter');
                filterState.remove(filter);
                Message.trigger('refresh:filterstate',null);

            },
            render: function () {
                var compiledTemplate = _.template(carsFilterViewTemplate, {model: filterState.list()});
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