'use strict';

var app = angular.module('navy', []);

app.controller('asideCtrl', ['$scope', function($scope) {
    $scope.articles = [
        {title: 'halifax', subtitle: 'multi-role patrol frigate (ffh)', img: 'halifax', tonnes: 4770, length: 134.1, beam: 16.4, pers: 225, armament: 'Phalanx 20mm CIWS, ESSM SAMs, Bofors 57 mm gun, Harpoon SSMs, twin KM 46 torpedo tubes, heavy (.50 cal) machine guns'},
        {title: 'victoria', subtitle: 'long-range patrol submarine (ssk)', img: 'victoria', tonnes: 2400,length: 134.1, beam: 7.6, pers: 48, armament: 'Mk 48 Heavyweight torpedoes'},
        {title: 'kingston', subtitle: 'maritime coastal defence vessel (mm)', img: 'kingston', tonnes: 970, length: 55.3, beam: 11.3, pers: 37, armament: 'NRWS (sea trials), heavy (.50 cal) machine guns'},
        {title: 'orca', subtitle: 'patrol craft training vessel (pct)', img: 'orca', tonnes: 210, length: 33, beam: 8.6, pers: 25, armament: 'Heavy (.50 cal) machine guns'},
        {title: 'harry dewolf', subtitle: 'arctiv and offshore patrol vessel (aopv)', img: 'dewolf', tonnes: 6440, length: 103, beam: 19, pers: 65, armament: 'BAE Mk 38 Mod 2 gun, heavy (.50 cal) machine guns'},
        {title: 'queenston', subtitle: 'joint support ship (jss)', img: 'queenston', tonnes: 20240, length: 173.7, beam: 24, pers: 150, armament: '2x Phalanx 20mm CIWS, 4x NRWS, heavy (.50 cal) machine guns'},
        {title: 'iaor', subtitle: 'interim auxiliary oiler replenishment ship (mv)', img: 'iaor', tonnes: 26000, length: 183, beam: 25, pers: 150, armament: 'Heavy (.50 cal) machine guns and small arms for use exclusively by embarked RCN mission specialists.'}
    ];
}]);

app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.toggleModal = function() {

    };
}]);