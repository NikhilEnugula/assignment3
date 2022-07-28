var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.inventory = [
    {
      category: "Thumbsup",
      id: 1,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/tb1.jpg",
      price: "60rs",
    },
    {
      category: "Thumbsup",
      id: 2,
      quntity: 1,
      desc: "2 ltr",
      Image: "../assignment3/tb2.jpg",
      price: "90rs",
    },
    {
      category: "Maaza",
      id: 3,
      quntity: 1,
      desc: "500ml",
      Image: "../assignment3/mz12.jpg",
      price: "40rs",
    },
    {
      category: "Maaza",
      id: 4,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/mz1.jpg",
      price: "70rs",
    },
    {
      category: "Sprite",
      id: 5,
      quntity: 1,
      desc: "500ml",
      Image: "../assignment3/sp12.jpg",
      price: "40rs",
    },
    {
      category: "Sprite",
      id: 6,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/sp1.jpg",
      price: "60rs",
    },
    {
      category: "Sprite",
      id: 7,
      quntity: 1,
      desc: "2.25 ltr",
      Image: "../assignment3/sp2.jpg",
      price: "90rs",
    },
    {
      category: "7Up",
      id: 8,
      quntity: 1,
      desc: "2.25 ltr",
      Image: "../assignment3/up2.jpg",
      price: "80rs",
    },
    {
      category: "7Up",
      image: "",
      id: 9,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/up1.jpg",
      price: "50rs",
    },
    {
      category: "7Up",
      image: "",
      id: 10,
      quntity: 1,
      desc: "500ml",
      Image: "../assignment3/up12.jpg",
      price: "35rs",
    },
    {
      category: "coca cola",
      image: "",
      id: 11,
      quntity: 1,
      desc: "500ml",
      Image: "../assignment3/cc1.jpg",
      price: "40rs",
    },
    {
      category: "coca cola",
      image: "",
      id: 12,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/cc1.jpg",
      price: "70rs",
    },
    {
      category: "coca cola",
      image: "",
      id: 13,
      quntity: 1,
      desc: "2 ltr",
      Image: "../assignment3/cc2.jpg",
      price: "90rs",
    },
    {
      category: "pepsi",
      image: "",
      id: 14,
      quntity: 1,
      desc: "500ml",
      Image: "../assignment3/ps12.jpg",
      price: "50rs",
    },
    {
      category: "pepsi",
      id: 15,
      quntity: 1,
      desc: "1 ltr",
      Image: "../assignment3/ps1.jpg",
      price: "70rs",
    },
  ];
  $scope.cart = [];
  $scope.message = "";
  $scope.isVisible = false;
  $scope.show = function (ite) {
    $scope.isVisible = $scope.isVisible ? false : true;
  };
  $scope.store = function (item) {
    if (item) {
      $scope.cart.push({
        category: item.category,
        desc: item.desc,
        quntity: item.quntity,
        price: item.price,
      });
    }
  };

  $scope.move = function (item) {
    if (item) {
      $scope.cart.push({
        category: item.category,
        quntity: item.quntity,
        desc: item.desc,
        price: item.price,
        Image: item.Image,
      });
      $scope.inventory.splice($scope.buyItems.indexOf(item), 1);
    }
  };

  $scope.clearCart = function () {
    $scope.cart.length = 0;
  };

  $scope.removeItem = function (item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };
});
/*
app.filter("searchFor", function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr;
    }
    var result = [];
    searchString = searchString.toLowerCase();
    angular.forEach(arr, (item) => {
      if (item.category.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }
    });
    return result;
  };
});*/
