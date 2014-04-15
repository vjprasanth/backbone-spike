define([
    'jquery',
    'underscore',
    'backbone',
    'message',
    'views/cars/list',
    'views/customers/list',
    'views/cars/deletecarform',
    'views/cars/addcarform',
    'views/cars/updatecarform',
    'views/cars/filterform',
    'views/cars/filterview'
], function ($, _, Backbone, Message, CarListView, CustomerListView, DeleteCarForm, AddCarView, UpdateCarView, FilterFormView, FilterView) {

    var unRegisterView = function () {
    };


    var AppRouter = Backbone.Router.extend({
        routes: {
            'customers': 'showCustomers',
            'cars': 'showCars',
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;

        app_router.on('route:showCars', function () {
            unRegisterView();

            var filterFormView = new FilterFormView();
            var filterView = new FilterView();
            var carListView = new CarListView();
            var editView = {removeSelf: function(){ }};

            filterFormView.render();
            filterView.render();
            carListView.render();


            Message.on('refresh:cars', function (event) {
                carListView.render();
                editView.removeSelf();
            });
            Message.on('refresh:filterstate', function(list){
                filterView.render();
                Message.trigger('refresh:cars',null);
            });
            Message.on('refresh:addCar', function (event) {
                editView.removeSelf();
                editView = new AddCarView();
                editView.render();
            });
            Message.on('refresh:updateCar', function (id) {
                editView.removeSelf();
                editView = new UpdateCarView();
                editView.render(id);
            });

            Message.on('refresh:deleteCar', function (id) {
                editView.removeSelf();
                editView = new DeleteCarForm();
                editView.render(id);
            });

            unRegisterView = function () {
                filterFormView.removeSelf();
                filterView.removeSelf();
                carListView.removeSelf();
                editView.removeSelf();

                Message.off('refresh:cars');
                Message.off('refresh:filterstate');
                Message.off('refresh:addCar');
                Message.off('refresh:updateCar');
            }
        });


        app_router.on('route:defaultAction', function (actions) {
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});