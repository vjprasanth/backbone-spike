define([
    'jquery',
    'underscore',
    'backbone',
    'message'

], function ($, _, Backbone, Message) {

    var FilterState = function(){
        this.filters = [];
    };

    var filterState = new FilterState();

    return {
        add: function(item){
           filterState.filters.push(item);
            Message.trigger("refresh:filterstate", filterState.filters);
        },
        remove: function(item){
            filterState.filters = _.without(filterState.filters, "" + item);
            Message.trigger("refresh:filterstate", filterState.filters);
        },
        list: function(){
            return filterState.filters;
        }
    };

});