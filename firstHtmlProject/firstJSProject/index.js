// Single line comment
/*
alert("Welcome to js project");
*/

console.log("Users cannot see this by default")

// String
console.log("String")
// Numbers
console.log(200)
console.log(2.00)
console.log(20.30905948954)
// Boolean
console.log(true || false);

/* Objects */
console.log(Object.create({}))
//undefined null
// functions
function myFunction(value1, value2) {
    console.log("Some thing happens ")
}

myFunction("value1", 200)

class Zino {
    constructor() {

    }

    goHome(){

    }
}

let zino = new Zino()

zino.goHome()

let product = {
    name: "Rice",
    price: 200.54,
    quantity: 34,
    calculateDiscount: function () {
        return this.price * 100 / 20
    }
}

console.log(product.name)
let discount = product.calculateDiscount()

/*
class ZinosCousin extends Zino{
    constructor() {
        super(information);
    }
}

counsole.log(ZinoCOusin instanceof Zino)
*/

/* variables */
let name = "zino";
let notAvailable = undefined;
let nullifiedValue = null;
let weight = 170.40;
let phoneNo =  56067670;

/* cannot change */
const constantName = "zino";
const constantNotAvailable = undefined;
const constantNullifiedValue = null;
const constantWeight = 170.40;
const constantPhoneNo =  56067670;

/* can change value inside but not data type */
const listOfStudents = [
    new Zino(),
    'Sarah',
    'John',
    2020,
    6007,
    8957
];
listOfStudents.push("Mary")
listOfStudents.push("James")
listOfStudents.push("Mary")
listOfStudents.pop()
listOfStudents.shift()

console.log(listOfStudents[3])
console.log(listOfStudents[1])
console.log(listOfStudents[4])
console.log(listOfStudents[0])

const product1 = {
    name: "Rice",
    price: 200.54,
    quantity: 34,
    calculateDiscount: function () {
        return this.price * 100 / 20
    }
}

var changablePhoneNo = 56067670;
let changableName = "Zino";

console.log("changableName before:", typeof changableName);
console.log("ChangeableNumber before:", typeof changablePhoneNo);

changableName = 2501;
changablePhoneNo = "Zino";

console.log("changableName After:", typeof changableName);
console.log("ChangeableNumber After:", typeof changablePhoneNo);

