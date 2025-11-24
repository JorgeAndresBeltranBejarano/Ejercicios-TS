function Greet(greeting:string, ...names:string[]){
    return greeting + ' ' + names.join(' ') + '!';
}

Greet('Hello', 'Estudents', 'from', 'TypeScript');
Greet("Hello");

console.log(Greet('Hello', 'Estudents', 'from', 'TypeScript'));
console.log(Greet("Hello"));