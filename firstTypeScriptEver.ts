let a = 5;
let b = 6;
let c = a + b;

console.log(c)

let d: string = 'Hello W'

console.log(d);

// 3 types in TypeScript: any, Built-in, User-defined
// self explanatory

//Built-in types: boolean, string, number, undefined, null, void
//User-defined: enum, class, interface, array, tuple

//classes : (template of objects - defines how an object would look like in
//terms of that object’s features and functionalities. A class also encapsulates
//data for the object.) 
//interfaces : (allows you to define the structure of
//variables. An interface is like a syntactical contract to which an object
//should conform.)

enum PizzaToppings {
    TOMATO, // value = 0
    BBQ, // value = 1
    NONE, // value = 2
    CREAM // value = 3
}

enum PizzaSizes {
    S = 's', // value = 's'
    M = 'm', // value = 'm'
    L = 'l', // value = 'l'
    XL = 'xl', // value = 'xl'
    XXL = 'xxl' // value = 'xxl'
}

interface IPizza {
    name: string;
    slices: number;
    toppings: PizzaToppings[];
    price: number;
    cheesecrust: boolean;
    optionalProperty?: string;
    sizes?: PizzaSizes[],
    vegan?: boolean;
    vegeterian?: boolean;
}

const pizza: IPizza = {
    name: 'Pizza BBQ',
    slices: 6,
    toppings: [PizzaToppings.TOMATO, PizzaToppings.BBQ],
    price: 15,
    cheesecrust: true
}

interface IPizzaPrice {
	size: string;
	price: number;
}

const pizzaArray: IPizza[] = [];

//looks like you have to declare type of the class attribute before the constructor
class Pizza {
    name: string = '';
    slices: number = 8;
    toppings: PizzaToppings[] = [];
    price: number = 0;
    cheesecrust: boolean = false;
    sizes: PizzaSizes[] = [];
    vegan?: boolean = false;
    vegeterian?: boolean = false;

    constructor(data: IPizza) {
        this.name = data.name;
        this.slices = data.slices;
        this.toppings = data.toppings;
        this.price = data.price;
        this.cheesecrust = data.cheesecrust;
        this.sizes = data.sizes;

        if(data.vegan) {
            this.vegan = data.vegan;
        }
        if(data.vegeterian) {
            this.vegeterian = data.vegeterian;
        }
     }

     private getPizzaPrices(): IPizzaPrice[] {
        return this.sizes.map((item, index) => {
          const addition = (this.price / 100) * 15 * index;
          console.log(this.price + addition);
          return {
            size: PizzaSizes[item],
            price: this.price + addition
          };
        });
      }
}

//With TypeScript, you can create complex types by combining simple ones. There
//are two popular ways to do so: with Unions, and with Generics.

//Unions
type MyBool = true | false;

//Unions help us handle different types
function getLength(obj: string | string[]) {
    return obj.length;
  }

//Generics provide variables to types. A common example is an array. An array
//without generics could contain anything. An array with generics can describe
//the values that the array contains.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


//You can declare your own types that use generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);

//One of TypeScript’s core principles is that type checking focuses on the shape
//that values have. This is sometimes called “duck typing” or “structural
//typing”.
//The shape-matching only requires a subset of the object’s fields to match.
