interface IPizza {
    name: string;
    slices: number;
    toppigs: string;
    price: number;
    cheescrust: boolean;
}

const pizza: IPizza {
    name: 'Pizza BBQ',
    slices: 6,
    toppigs: 'Tomatosauce, BBQ sauce',
    price: 15,
    cheescrust: true
}

console.log(pizza)