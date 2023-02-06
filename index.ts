interface ClaseA {
    foo: string;
    bar: string;
} 

let getParametros = (obj: ClaseA): Array<string> => Object.values(obj);  

// ejemplo 
const exampleClaseA: ClaseA = { 
    foo: "foo",
    bar: "bar",

};

console.log(getParametros(exampleClaseA));


interface ClaseC {
    nom: string;
    nom2: string;
} 

// ejemplo 
const exampleClaseC: ClaseC = { 
    nom: "1234",
    nom2: "5678",
};


interface ClaseB {
    at1: number;
    at2: number;
} 

// ejemplo 
const exampleClaseB: ClaseB = { 
    at1: 1,
    at2: 2,
};


