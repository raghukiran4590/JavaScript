let name = {
    firstName : "Raghu", 
    lastName : "Kiran",
    printFullName : function() {
        console.log(this.firstName+" "+this.lastName);
    }
}

let printFullName = function(homeTown, cityName) {
    console.log(this.firstName+" "+this.lastName+" from "+homeTown+" and "+cityName);
}

let name2 = {
    firstName : "Sachin", 
    lastName : "Tendulkar",
    printFullName : function() {
        console.log(this.firstName+" "+this.lastName);
    }
}

name.printFullName();

//Function borrowing
//Call Method
name.printFullName.call(name2);

printFullName.call(name, "Mumbai");

//Apply Method

printFullName.apply(name2, ["Hyderabad", "Telagana"]);

//Bind Method

let printMyName = printFullName.bind(name2, "Goa", "Goa State");

printMyName();

