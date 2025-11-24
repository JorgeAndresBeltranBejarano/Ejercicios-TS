function display () {
    console.log('Hello, World!');
}
display();

function Sum(x: number, y: number): number {
    return x + y;
}

console.log(Sum(5, 10));

let greeting = function() {
    console.log("Hello TypeScript!");
}
greeting();

let Sum2 = function(x: number, y: number): number {
    return x + y;
}
console.log(Sum2(20, 30));

function Greet(greeting: string, name: string): string {
    return greeting + ' ' + name + '!';
}

Greet('Hello', 'Estudents');
Greet('Good morning', 'Everyone');
Greet('Welcome', 'Developers');
console.log(Greet('Hello', 'Estudents'));
console.log(Greet('Good morning', 'Everyone'));
console.log(Greet('Welcome', 'Developers'));