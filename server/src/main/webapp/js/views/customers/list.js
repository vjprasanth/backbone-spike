define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/customers/list.html',
    'collections/customers'
], function($, _, Backbone, customersListTemplate, customersCollection){

    var CustomerListView = Backbone.View.extend({
            el: $('#content'),
            initialize : function() {
            },
            render: function () {

                var compiledTemplate = _.template(customersListTemplate, {model : customersCollection.toJSON()});
                this.$el.html(compiledTemplate);
            }}
    );


    return CustomerListView;
});