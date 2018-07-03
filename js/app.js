'use strict';

var app = angular.module('navy', []);

app.controller('appCtrl', ['$scope', function($scope) {
    $scope.articles = [
        {id: 0, title: 'halifax', subtitle: 'multi-role patrol frigate (ffh)', img: 'halifax', tonnes: 4770, length: 134.1, beam: 16.4, pers: 225, armament: 'Phalanx 20mm CIWS, ESSM SAMs, Bofors 57 mm gun, Harpoon SSMs, twin KM 46 torpedo tubes, heavy (.50 cal) machine guns'},
        {id: 1, title: 'victoria', subtitle: 'long-range patrol submarine (ssk)', img: 'victoria', tonnes: 2400,length: 134.1, beam: 7.6, pers: 48, armament: 'Mk 48 Heavyweight torpedoes'},
        {id: 2, title: 'kingston', subtitle: 'maritime coastal defence vessel (mm)', img: 'kingston', tonnes: 970, length: 55.3, beam: 11.3, pers: 37, armament: 'NRWS (sea trials), heavy (.50 cal) machine guns'},
        {id: 3, title: 'orca', subtitle: 'patrol craft training vessel (pct)', img: 'orca', tonnes: 210, length: 33, beam: 8.6, pers: 25, armament: 'Heavy (.50 cal) machine guns'},
        {id: 4, title: 'harry dewolf', subtitle: 'arctiv and offshore patrol vessel (aopv)', img: 'dewolf', tonnes: 6440, length: 103, beam: 19, pers: 65, armament: 'BAE Mk 38 Mod 2 gun, heavy (.50 cal) machine guns'},
        {id: 5, title: 'queenston', subtitle: 'joint support ship (jss)', img: 'queenston', tonnes: 20240, length: 173.7, beam: 24, pers: 150, armament: '2x Phalanx 20mm CIWS, 4x NRWS, heavy (.50 cal) machine guns'},
        {id: 6, title: 'iaor', subtitle: 'interim auxiliary oiler replenishment ship (mv)', img: 'iaor', tonnes: 26000, length: 183, beam: 25, pers: 150, armament: 'Heavy (.50 cal) machine guns and small arms for use exclusively by embarked RCN mission specialists.'}
    ];
    $scope.showModal = function(index) {
        if (!isModal) $scope.createModal(index);
        backdrop.style.display = 'block';
        isModal = true;
        articleID = index;
    };
    $scope.createModal = function(index) {
        var mymodal = document.createElement('div');
        var myclose = document.createElement('button');
        mymodal.setAttribute('id', 'modal');
        myclose.setAttribute('id', 'close');
        myclose.innerHTML = 'X';
        mymodal.appendChild(myclose);
        $scope.fetchArticle(index, mymodal);
        $scope.close(myclose);
        document.getElementById('root').appendChild(mymodal);
    };
    $scope.destroyModal = function() {
        var target = document.getElementById('modal');
        $scope.returnArticle();
        backdrop.style.display = 'none';
        target.remove();
        isModal = false;
    };
    $scope.fetchArticle = function(index, modal) {
        var article = document.getElementById('article_' + index);
        modal.appendChild(article);
    };
    $scope.returnArticle = function() {
        var article = document.getElementById('article_' + articleID);
        var aside = document.getElementById('placeholder_' + articleID);
        aside.appendChild(article);
    };
    $scope.close = function(buttonElement) {
        buttonElement.addEventListener('click', function() {
            $scope.destroyModal();
        });
    };
    var isModal = false;
    var articleID;
    var backdrop = document.getElementById('backdrop');
}]);