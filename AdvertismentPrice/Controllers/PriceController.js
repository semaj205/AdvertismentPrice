var app = angular.module("AdvertismentPrice", ["type-selection", "station-selection", "xml"]);
var type = angular.module("type-selection", []);
var station = angular.module("station-selection", []);

//type controller
type.config(function($httpProvider) {
        $httpProvider.interceptors.push("xmlHttpInterceptor");
    })
    .controller("TypeCtrl",
        function($scope, $http) {
            $http.get("PriceData.xml").then(function(response) {
                var types = [],
                    els = response.xml.find("Type"),
                    type,
                    i;

                for (i = 0; i < els.length; i += 1) {
                    type = angular.element(els[i]);
                    types.push({
                        name: type.attr("Name"),
                        id: type.attr("id")
                    });
                }
                $scope.types = types;
            });
        });

//station controller
station.config(function($httpProvider) {
        $httpProvider.interceptors.push("xmlHttpInterceptor");
    })
    .controller("StationCtrl",
        function($scope, $http) {
            $http.get("PriceData.xml").then(function (response) {
                var stations = [],
                    els = response.xml.find("Station"),
                    station,
                    i;

                for (i = 0; i < els.length; i += 1) {
                    station = angular.element(els[i]);
                    stations.push({
                        name: station.attr("Name"),
                        id: station.attr("id")
                    });
                }
                $scope.stations = stations;
            });
        });