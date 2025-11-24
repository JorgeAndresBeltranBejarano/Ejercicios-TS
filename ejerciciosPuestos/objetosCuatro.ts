// Interfaz base
interface BaseObject {
    id: number;
}

// Interfaces que heredan de BaseObject
interface User extends BaseObject {
    name: string;
    email: string;
}

interface Product extends BaseObject {
    name: string;
    price: number;
}

interface Order extends BaseObject {
    productId: number;
    quantity: number;
}

// Función genérica para imprimir datos
function imprimirDatos<T extends BaseObject>(obj: T): void {
    console.log("Datos del objeto:", obj);
}

// ------------------- Ejemplo de uso -------------------

// Usuario
const usuario: User = {
    id: 1,
    name: "Jorge",
    email: "jorge@example.com"
};

// Producto
const producto: Product = {
    id: 2,
    name: "Laptop",
    price: 3500
};

// Orden
const orden: Order = {
    id: 3,
    productId: 2,
    quantity: 5
};

// Imprimir datos
imprimirDatos(usuario);
imprimirDatos(producto);
imprimirDatos(orden);