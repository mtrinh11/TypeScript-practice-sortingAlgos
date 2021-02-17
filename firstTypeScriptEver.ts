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

const pizzaArray: IPizza[] = [];



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
}