'use strict';

angular.
    module('vesselList').
    component('vesselList', {
        templateUrl: 'vessel-list/vessel-list.template.html',
        controller: ['$http',
            function($http) {
                var self = this;

                $http.get('vessels/vessels.json').then(function(res) {
                    self.vessels = res.data;
                    console.log(self.vessels);
                });
            }
        ]
    });