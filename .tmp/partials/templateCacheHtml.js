angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"container\"><div><acme-navbar></acme-navbar></div><h1>Hirearchy Tree</h1><h3>Click on a name to select a category</h3><div class=\"row\"><div class=\"col-xs-6\"><tree-data data=\"vm.data\" mark=\"true\" handler=\"vm.selectCategoryHandler\" selected=\"vm.selectedCategory\" display-property-name=\"Name\" value-property-name=\"Id\" value-alt-property-name=\"TempId\" children-property-name=\"ChildCategories\"></tree-data></div><div class=\"col-xs-6\"><div class=\"component-row\" data-ng-show=\"vm.categorySelected\"><h3>Category Selected: {{vm.selectedCategory.Name}}</h3><div class=\"component-row\"><button class=\"btn btn-danger\" data-ng-click=\"vm.setCategoryStateToDelete()\">Delete!</button> <button class=\"btn btn-primary\" data-ng-click=\"vm.addChildToSelected()\">Add Child to Parent</button></div><div class=\"component-row\"><input type=\"text\" data-ng-model=\"vm.selectedCategory.Name\"></div></div></div></div></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar navbar-static-top navbar-inverse\"><div class=\"container-fluid\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\"><span class=\"glyphicon glyphicon-home\"></span> Data Hirearchy Component</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a ng-href=\"#\">Home</a></li></ul></div></div></nav>");
$templateCache.put("app/components/treeData/treeData.html","<ul class=\"treeDataComponent\"><li data-ng-repeat=\"item in vm.data | stateNotDeleted\" ng-include=\"\'itemTree\'\"></li></ul><script type=\"text/ng-template\" id=\"itemTree\"><div class=\"item\" data-ng-class=\"vm.ItemClass(item)\" > <div class=\"item_collapse\" data-ng-click=\"vm.SetChildrenVisibleState(item)\" data-ng-show=\"vm.HasChildren(item)\"> {{vm.ItemChildrenStateIndicator(item)}} </div> <div class=\"item_text\" data-ng-click=\"vm.ItemClickHandler(item)\"> {{item[vm.displayPropertyName]}} </div> </div> <ul data-ng-show=\"vm.AreChildrenVisible(item)\" ng-if=\"item[vm.childrenPropertyName]\"> <li data-ng-repeat=\"item in item[vm.childrenPropertyName] | stateNotDeleted\" ng-include=\"\'itemTree\'\"> </li> </ul></script>");}]);