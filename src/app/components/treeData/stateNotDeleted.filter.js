(function () {
    "use strict";
    
    angular
        .module("treeDataModule")
        .filter("stateNotDeleted", stateNotDeletedFilter);

    function stateNotDeletedFilter() {
        return function (items) {
            var filtered = [];
            angular.forEach(items, function(item) {
                if (typeof item.State != "undefined" 
                        && item.State != null) {
                    if (item.State != 4) {
                        filtered.push(item);
                    }
                } else {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    }
})();