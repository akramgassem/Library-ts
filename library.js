"use strict";
// Product proproties
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    //ctor
    function Product(name, price, stock) {
        var _this = this;
        this.toString = function () {
            console.log(" // " + _this.stock + " of " + _this.name + " / and the price of 1 unit: " + _this.price + " Dt");
        };
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    return Product;
}());
var Library = /** @class */ (function () {
    //ctor by Adress
    function Library(adress) {
        var _this = this;
        // Stock entries
        this.stock = {
            "cahier": new Product("cahier", 2, 50),
            "stylo": new Product("stylo", 4, 70)
        };
        // Value of library DT
        this.val = function () {
            return _this.value;
        };
        // Buy function
        this.buy = function (p, count) {
            if (_this.stock[p].stock >= count) {
                _this.stock[p].stock = _this.stock[p].stock - count;
                //Value return
                _this.value -= _this.stock[p].price * count;
            }
            else {
                console.log("Not enough of this " + _this.stock.name + "!");
            }
        };
        /*Add function
        add = (p:string, count:number) => {
            let sum : number = this.stock[p].stock += count;
            console.log("Added in Sock: " + (sum - count) + " of " + this.stock[p].name)
            console.log("the stock of library, Now is : " + sum + " Dt");
        } */
        //Show the stock 
        this.showStock = function () {
            console.log(_this.stock);
        };
        //Describe function 
        this.describe = function () {
            console.log("Library " + _this.adress + " has (" + _this.value + " DT) value, contains:");
            for (var x in _this.stock) {
                console.log(_this.stock[x].toString());
            }
        };
        this.adress = adress;
        for (var key in this.stock) {
            this.value += this.stock[key].price * this.stock[key].stock;
        }
    }
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=library.js.map