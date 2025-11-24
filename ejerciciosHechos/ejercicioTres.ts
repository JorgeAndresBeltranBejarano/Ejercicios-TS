function add(a:string, b:string):string ;

function add(a:number, b:number):number ;

function add(a:any, b:any):any {
	return a + b;
}

console.log(add(10, 20));
console.log(add("Hello, ", "TypeScript!"));

function display(a:string, b:string):void ;

function display(a:number, b:number):void ;

function display(a:any, b:any):void {
    console.log(a + b);
}