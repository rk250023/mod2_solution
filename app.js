(function () {
'use strict';

angular.module('buyListcheckoff', [])
.controller('tobuyController', tobuyController)
.controller('boughtlListController', boughtListSController)
.service('buyListService', buyListService);

tobuyController.$inject = ['buyListService'];
function tobuyController(buyListService) {
  var itemsbuy = this;

      itemsbuy.itemsarr=buyListService.getItemstobuy();
      

  }


boughtListSController.$inject = ['buyListService'];
function boughtListSController(buyListService) {
  var boughtList = this;
      boughtlist.itemName="";
      boughtlist.itemQuantity = "";
  
  boughtList.addtoboughtlist = function () {
    ShoppingListService.add(boughtlist.itemName,boughtlist.itemQuantity);
  };
}


function buyListService() {
  var service = this;

  // List of shopping items
  var itemstobuy = [{name: "cookie",quantity: 5},{name: "apple", quantity: 10},{name: "milk", quantity: 2}];
  
  var itemsbought= [];
  
  service.add = function (itemName, quantity) {
   var item = {
      name: itemName,
      quantity: quantity
    };
      itemsbought.push(item);
    };

  service.getItemsbought = function () {
    return itemsbought;
  };
  
  service.getItemstobuy = function () {
   return itemstobuy;
  }
}

})();
