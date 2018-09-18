
// Product proproties

class Product {
	
	//Fields
	name : string ; 
	price : number;
	stock : number; 
	
	//ctor
	constructor (name : string , price : number, stock: number ) {
		this.name = name; 
		this.price = price;
		this.stock = stock;
	}

	toString = ()=> {
		console.log( " // " + this.stock + " of "+ this.name + " / and the price of 1 unit: " + this.price + " Dt");
	}
	
}

export class Library {

	//Fields of Library 
	adress : string;
	value : number;
	

	
	//ctor by Adress
	constructor (adress:string) {
		
		this.adress = adress; 
		for (let key in this.stock) {
			this.value += this.stock[key].price * this.stock[key].stock;
		}
	}

	// Stock entries
	stock : {[p:string] : Product} = {
		"cahier" : new Product("cahier",2, 50),
		"stylo":   new Product("stylo", 4, 70)
	}

	// Value of library DT
	val = () => {
		return this.value ;
	}

	// Buy function
	buy = (p:string, count:number) => {
		
		if (this.stock[p].stock >= count)
		{ this.stock[p].stock = this.stock[p].stock -  count;  
		//Value return
		this.value -= this.stock[p].price * count; 
		}
		else {
			console.log("Not enough of this " + this.stock.name + "!")
		}

	}

	//Add function 
	add = (p:string, count:number) => {
		let sum : number = this.stock[p].stock += count;
		console.log("Added in Sock: " + (sum - count) + " of " + this.stock[p].name)
		console.log("the stock of library, Now is : " + sum + " Dt");
	}


	//Show the stock 
	showStock = () => {
		console.log(this.stock);
	}


	//Describe function 
	describe = () => {
        console.log("Library " + this.adress + " has (" + this.value + " DT) value, contains:");
        for (let x in this.stock) {
            console.log(this.stock[x].toString());
		}
	}

}
