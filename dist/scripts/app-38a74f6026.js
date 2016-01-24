!function(){"use stirct";function e(){var e={scope:{data:"=",mark:"=",selected:"=",displayPropertyName:"@",valuePropertyName:"@",valueAltPropertyName:"@",childrenPropertyName:"@",handler:"&"},restrict:"E",templateUrl:"app/components/treeData/treeData.html",controller:t,controllerAs:"vm",bindToController:!0};return e}function t(){function e(e){l.selected=e,void 0!=l.handler()&&l.handler()(e)}function t(e){return"undefined"==typeof e.ChildrenVisible||e.ChildrenVisible?"-":"+"}function a(e){"undefined"==typeof e.ChildrenVisible||e.ChildrenVisible?e.ChildrenVisible=!1:e.ChildrenVisible=!0}function n(e){return"undefined"!=typeof e.ChildrenVisible?e.ChildrenVisible:!0}function i(e){var t=e[l.childrenPropertyName];return"undefined"!=typeof t&&null!=t&&t.length>0?!0:!1}function r(e){function t(t){return l.selected[t]===e[t]?"selected":""}if(l.mark)if("undefined"!=typeof e[l.valuePropertyName]&&0!=e[l.valuePropertyName]){if(l.selected[l.valuePropertyName]==e[l.valuePropertyName])return t(l.valuePropertyName)}else if("undefined"!=typeof e[l.valueAltPropertyName]&&0!=e[l.valueAltPropertyName])return t(l.valueAltPropertyName);return""}var l=this;l.selected={},l.CollapsedState={},l.ItemClickHandler=e,l.ItemClass=r,l.HasChildren=i,l.AreChildrenVisible=n,l.SetChildrenVisibleState=a,l.ItemChildrenStateIndicator=t}angular.module("treeDataModule",[]),angular.module("treeDataModule").directive("treeData",e)}(),function(){"use strict";function e(){return function(e){var t=[];return angular.forEach(e,function(e){"undefined"!=typeof e.State&&null!=e.State?4!=e.State&&t.push(e):t.push(e)}),t}}angular.module("treeDataModule").filter("stateNotDeleted",e)}(),function(){"use strict";angular.module("app",["treeDataModule","ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("app").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(){}function a(e){null!=e&&(r.categorySelected=!0)}function n(){r.selectedCategory.State=4}function i(){var e=l+o;o+=1;var t={Name:"New Category",Description:null,ChildCategories:[],State:1,TempId:e};"undefined"==typeof r.selectedCategory.ChildCategories&&(r.selectedCategory.ChildCategories=[]),r.selectedCategory.ChildCategories.push(t)}var r=this,l="intId",o=1;r.data=[{Name:"Product",Description:null,ParentId:null,ChildCategories:[{Name:"Bikes",Description:null,ParentId:1,ChildCategories:[{Name:"Mountain Bikes",Description:"Des MTB",ParentId:2,ChildCategories:[{Name:"Hardtail",Description:null,ParentId:5,ChildCategories:[],Id:22,State:1},{Name:"Full Suspension",Description:null,ParentId:5,ChildCategories:[],Id:49,State:1}],Id:5,State:1},{Name:"Hybrid Bikes",Description:null,ParentId:2,ChildCategories:[],Id:7,State:1},{Name:"Cross Bikes",Description:null,ParentId:2,ChildCategories:[],Id:8,State:1}],Id:2,State:1},{Name:"Bike Equipment",Description:null,ParentId:1,ChildCategories:[{Name:"Forks",Description:null,ParentId:3,ChildCategories:[],Id:14,State:1},{Name:"Front Gearsets",Description:null,ParentId:3,ChildCategories:[],Id:15,State:1},{Name:"Back Gearsets",Description:null,ParentId:3,ChildCategories:[],Id:16,State:1},{Name:"Inner Tubes",Description:null,ParentId:3,ChildCategories:[],Id:17,State:1},{Name:"Wheels",Description:null,ParentId:3,ChildCategories:[],Id:18,State:1}],Id:3,State:1},{Name:"Bike Clothing",Description:null,ParentId:1,ChildCategories:[{Name:"Biking Bottoms",Description:null,ParentId:4,ChildCategories:[],Id:9,State:1},{Name:"Biking Tops",Description:null,ParentId:4,ChildCategories:[],Id:10,State:1},{Name:"Biking Wind Jackets",Description:null,ParentId:4,ChildCategories:[],Id:11,State:1},{Name:"Biking Helmets",Description:null,ParentId:4,ChildCategories:[],Id:12,State:1},{Name:"Biking Shoes",Description:null,ParentId:4,ChildCategories:[],Id:13,State:1}],Id:4,State:1}],Id:1,State:1}],r.selectedCategory=null,r.categorySelected=!1,r.selectCategoryHandler=a,r.setCategoryStateToDelete=n,r.addChildToSelected=i,t()}e.$inject=["$log"],angular.module("app").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app")}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><h1>Hirearchy Tree</h1><h3>Click on a name to select a category</h3><div class="row"><div class="col-xs-6"><tree-data data="vm.data" mark="true" handler="vm.selectCategoryHandler" selected="vm.selectedCategory" display-property-name="Name" value-property-name="Id" value-alt-property-name="TempId" children-property-name="ChildCategories"></tree-data></div><div class="col-xs-6"><div class="component-row" data-ng-show="vm.categorySelected"><h3>Category Selected: {{vm.selectedCategory.Name}}</h3><div class="component-row"><button class="btn btn-danger" data-ng-click="vm.setCategoryStateToDelete()">Delete!</button> <button class="btn btn-primary" data-ng-click="vm.addChildToSelected()">Add Child to Parent</button></div><div class="component-row"><input type="text" data-ng-model="vm.selectedCategory.Name"></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#"><span class="glyphicon glyphicon-home"></span> Data Hirearchy Component</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li></ul></div></div></nav>'),e.put("app/components/treeData/treeData.html",'<ul class="treeDataComponent"><li data-ng-repeat="item in vm.data | stateNotDeleted" ng-include="\'itemTree\'"></li></ul><script type="text/ng-template" id="itemTree"><div class="item" data-ng-class="vm.ItemClass(item)" > <div class="item_collapse" data-ng-click="vm.SetChildrenVisibleState(item)" data-ng-show="vm.HasChildren(item)"> {{vm.ItemChildrenStateIndicator(item)}} </div> <div class="item_text" data-ng-click="vm.ItemClickHandler(item)"> {{item[vm.displayPropertyName]}} </div> </div> <ul data-ng-show="vm.AreChildrenVisible(item)" ng-if="item[vm.childrenPropertyName]"> <li data-ng-repeat="item in item[vm.childrenPropertyName] | stateNotDeleted" ng-include="\'itemTree\'"> </li> </ul></script>')}]);
//# sourceMappingURL=../maps/scripts/app-38a74f6026.js.map