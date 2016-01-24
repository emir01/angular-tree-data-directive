(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    // two values used to generate internal id values
    var internalIdPrefix = "intId";
    var internalIdNumber = 1;

    vm.data = 
    [{
        "Name": "Product",
        "Description": null,
        "ParentId": null,
        "ChildCategories": [{
            "Name": "Bikes",
            "Description": null,
            "ParentId": 1,
            "ChildCategories": [{
                "Name": "Mountain Bikes",
                "Description": "Des MTB",
                "ParentId": 2,
                "ChildCategories": [{
                    "Name": "Hardtail",
                    "Description": null,
                    "ParentId": 5,
                    "ChildCategories": [],
                    "Id": 22,
                    "State": 1
                }, {
                    "Name": "Full Suspension",
                    "Description": null,
                    "ParentId": 5,
                    "ChildCategories": [],
                    "Id": 49,
                    "State": 1
                }],
                "Id": 5,
                "State": 1
            }, {
                "Name": "Hybrid Bikes",
                "Description": null,
                "ParentId": 2,
                "ChildCategories": [],
                "Id": 7,
                "State": 1
            }, {
                "Name": "Cross Bikes",
                "Description": null,
                "ParentId": 2,
                "ChildCategories": [],
                "Id": 8,
                "State": 1
            }],
            "Id": 2,
            "State": 1
        }, {
            "Name": "Bike Equipment",
            "Description": null,
            "ParentId": 1,
            "ChildCategories": [{
                "Name": "Forks",
                "Description": null,
                "ParentId": 3,
                "ChildCategories": [],
                "Id": 14,
                "State": 1
            }, {
                "Name": "Front Gearsets",
                "Description": null,
                "ParentId": 3,
                "ChildCategories": [],
                "Id": 15,
                "State": 1
            }, {
                "Name": "Back Gearsets",
                "Description": null,
                "ParentId": 3,
                "ChildCategories": [],
                "Id": 16,
                "State": 1
            }, {
                "Name": "Inner Tubes",
                "Description": null,
                "ParentId": 3,
                "ChildCategories": [],
                "Id": 17,
                "State": 1
            }, {
                "Name": "Wheels",
                "Description": null,
                "ParentId": 3,
                "ChildCategories": [],
                "Id": 18,
                "State": 1
            }],
            "Id": 3,
            "State": 1
        }, {
            "Name": "Bike Clothing",
            "Description": null,
            "ParentId": 1,
            "ChildCategories": [{
                "Name": "Biking Bottoms",
                "Description": null,
                "ParentId": 4,
                "ChildCategories": [],
                "Id": 9,
                "State": 1
            }, {
                "Name": "Biking Tops",
                "Description": null,
                "ParentId": 4,
                "ChildCategories": [],
                "Id": 10,
                "State": 1
            }, {
                "Name": "Biking Wind Jackets",
                "Description": null,
                "ParentId": 4,
                "ChildCategories": [],
                "Id": 11,
                "State": 1
            }, {
                "Name": "Biking Helmets",
                "Description": null,
                "ParentId": 4,
                "ChildCategories": [],
                "Id": 12,
                "State": 1
            }, {
                "Name": "Biking Shoes",
                "Description": null,
                "ParentId": 4,
                "ChildCategories": [],
                "Id": 13,
                "State": 1
            }],
            "Id": 4,
            "State": 1
        }],
        "Id": 1,
        "State": 1
    }]

    vm.selectedCategory = null;
    vm.categorySelected = false;

    vm.selectCategoryHandler = selectCategoryHandler;
    vm.setCategoryStateToDelete = setCategoryStateToDelete;
    vm.addChildToSelected = addChildToSelected;

    activate();

    function activate() {
    }

    function selectCategoryHandler(item){
        if(item != null){
        vm.categorySelected = true;
      }
    }

    function setCategoryStateToDelete(){
        vm.selectedCategory.State = 4;
    }

    function addChildToSelected(){
        var tempId = internalIdPrefix+internalIdNumber;
        internalIdNumber = internalIdNumber + 1;

        var newCategory = {
            "Name": "New Category",
            "Description": null,
            "ChildCategories": [],
            "State": 1,
            "TempId":tempId
        };

        if (typeof vm.selectedCategory.ChildCategories == "undefined" ){
            vm.selectedCategory.ChildCategories = [];
        }

        vm.selectedCategory.ChildCategories.push(newCategory);
    }
}
})();
