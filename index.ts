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