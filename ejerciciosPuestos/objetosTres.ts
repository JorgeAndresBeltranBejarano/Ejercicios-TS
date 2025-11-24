// Interfaz base para productos
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

// Interfaz para inventario
interface Inventory {
    products: Product[];

    addProduct(product: Product): void;
    findProductByName(name: string): Product | undefined;
}

// Clase que implementa la interfaz Inventory
class StoreInventory implements Inventory {
    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    findProductByName(name: string): Product | undefined {
        return this.products.find(
            p => p.name.toLowerCase() === name.toLowerCase()
        );
    }
}

// ------------------- Ejemplo de uso -------------------

// Crear inventario
const inventory = new StoreInventory();

// Agregar productos
inventory.addProduct({ id: 1, name: "Laptop", price: 3500, category: "Electronics" });
inventory.addProduct({ id: 2, name: "Mouse", price: 50, category: "Accessories" });
inventory.addProduct({ id: 3, name: "Teclado", price: 120, category: "Accessories" });

// Buscar producto
const buscado = inventory.findProductByName("Mouse");

if (buscado) {
    console.log("Producto encontrado:", buscado);
} else {
    console.log("Producto no encontrado");
}