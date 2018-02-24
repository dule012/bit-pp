//shoping-list-practical


'use strict';

(function () {

    console.log("Hi");
    function Product(name, price, expirationDate) {
        this.id = function () {
            return Math.floor((90000 * Math.random() + 10000));
        }
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function () {
            var productAcr = this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();
            return productAcr + this.id() + ',' + this.price.toFixed(2);
        }
    }
    var a = new Product("Banana", 200.3454);
    console.log(a.getInfo());

    var coffeeExpirationDate = new Date(2018,7,13);
    var chockolateExpirationDate = new Date(2019, 10, 15);
    var chockolate = new Product("Cokolada Milka", 120.99,chockolateExpirationDate);
    var coffee = new Product("Grand Kafa", 102.50, coffeeExpirationDate);






    function ShoppingBag() {
        this.shoppingList = [];
        this.averagePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.shoppingList.length; i++) {
                sum += this.shoppingList[i];
            }
            var average = sum / this.shoppingList.length - 1;
            return average.toFixed(3);
        }
        this.getMostExpensive = function () {
            for (var i = 0; i < this.shoppingList; i++) {
                var max = this.shoppingList[1];
                if (this.shoppingList[i] > max) {
                    max = this.shoppingList[i];
                }
            }
            return max;
        }
            this.addProduct= function(p){ 
                return this.shoppingList.push(p);

            }

        this.totalPrice = function () {
            var total = 0;
            for (var i = 0; i < this.shoppingList.length; i++) {
                total += this.shoppingList[i];
            }
            return total;
        }

        var nekaLista= new ShoppingBag();
        nekaLista.addProduct(coffee);
        nekaLista.addProduct(chockolate);
        
    }

    function PaymentCard(accBalance,accStatus,accExpDate){
        this.accBalance= accBalance.toFixed(2);
        this.accStatus=accStatus;
        this.accExpDate=accExpDate;
 
    }



    function checkoutAndBuy(){
        if(PaymentCard.accBalance >= ShoppingBag.totalPrice){
           return console.log("purchase is successful");
        }else{
           return console.log("fuck off you dont have enough money");
        }
    }
    
     
})()