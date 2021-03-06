(function () {
    "use stirct";

    // define the module first 
    angular.module("treeDataModule", []);

    angular
        .module("treeDataModule")
        .directive("treeData", treeData);

    function treeData() {
        var directive = {
            scope: {
                data: "=",
                mark: "=",
                selected: "=",
                displayPropertyName: "@",
                valuePropertyName: "@",
                valueAltPropertyName: "@",
                childrenPropertyName: "@",
                
                handler: "&"
            },

            restrict: "E",
            templateUrl: 'app/components/treeData/treeData.html',

            controller: treeDataController,
            controllerAs: "vm",
            bindToController: true
        };

        return directive;
    }

    function treeDataController() {
        var vm = this;

        // internal tracking of what is selected
        vm.selected = {};

        vm.CollapsedState = {};

        vm.ItemClickHandler = itemClickHandler;
        vm.ItemClass = itemClass;

        vm.HasChildren = hasChildren;
        vm.AreChildrenVisible = areChildrenVisible;
        vm.SetChildrenVisibleState = setChildrenVisibleState;
        vm.ItemChildrenStateIndicator = itemChildrenStateIndicator;

        function itemClickHandler(item) {
            vm.selected = item;

            // make sure a handler has been specified first
            if (vm.handler() != undefined) {
                vm.handler()(item);
            }
        }

        /*
            Return the open/close indicator based on the Children 
            Visible property on the item.
        */
        function itemChildrenStateIndicator(item) {
            if (typeof item.ChildrenVisible == "undefined" 
                    || item.ChildrenVisible) {
                return "-";
            } else {
                return "+";
            }
        }
        /*
            Set state on the item for the visibility of the children
        */

        function setChildrenVisibleState(item) {
            if (typeof item.ChildrenVisible == "undefined" 
                    || item.ChildrenVisible) {
                item.ChildrenVisible = false;
            } else {
                item.ChildrenVisible = true;
            }
        }

        /*
            Determine if the children of the given item should be visible
        */

        function areChildrenVisible(item) {
            // we do not want to populate item with 
            if (typeof item.ChildrenVisible != "undefined") {
                return item.ChildrenVisible;
            } else {
                return true;
            }
        }

        /*
            Determine if the item has children for the given children property name
        */

        function hasChildren(item) {
            var itemChildrenCollection = item[vm.childrenPropertyName];
            if (typeof itemChildrenCollection != "undefined" 
                && itemChildrenCollection != null 
                && itemChildrenCollection.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        /*
            Determine if the item should have the selected class
        */

        function itemClass(item) {
            if (vm.mark) {
                if (typeof item[vm.valuePropertyName] != "undefined" 
                        && item[vm.valuePropertyName] != 0) {
                    if (vm.selected[vm.valuePropertyName] == item[vm.valuePropertyName]) {
                        return decideClass(vm.valuePropertyName);
                    }
                } else if (typeof item[vm.valueAltPropertyName] != "undefined" 
                               && item[vm.valueAltPropertyName] != 0) {
                    return decideClass(vm.valueAltPropertyName);
                }
            }

            return "";

            function decideClass(valuePropertySelector) {
                if (vm.selected[valuePropertySelector] === item[valuePropertySelector]) {
                    return "selected";
                } else {
                    return "";
                }
            }
        }
    }
})();