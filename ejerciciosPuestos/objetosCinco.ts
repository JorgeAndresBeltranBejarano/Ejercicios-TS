// Interfaz base para una base de datos
interface Database {
    connect(): void;
    find(query: string): any;
    update(id: number, data: any): void;
    disconnect(): void;
}

// Clase que implementa la interfaz para MySQL
class MySQLDatabase implements Database {
    connect(): void {
        console.log("Conectando a la base de datos MySQL...");
    }

    find(query: string): any {
        console.log(`Buscando en MySQL con la consulta: ${query}`);
        return { id: 1, result: "Resultado desde MySQL" };
    }

    update(id: number, data: any): void {
        console.log(`Actualizando registro con id ${id} en MySQL con datos:`, data);
    }

    disconnect(): void {
        console.log("Desconectando de la base de datos MySQL...");
    }
}

// Clase que implementa la interfaz para SQLite
class SQLiteDatabase implements Database {
    connect(): void {
        console.log("Conectando a la base de datos SQLite...");
    }

    find(query: string): any {
        console.log(`Buscando en SQLite con la consulta: ${query}`);
        return { id: 2, result: "Resultado desde SQLite" };
    }

    update(id: number, data: any): void {
        console.log(`Actualizando registro con id ${id} en SQLite con datos:`, data);
    }

    disconnect(): void {
        console.log("Desconectando de la base de datos SQLite...");
    }
}

// ------------------- Ejemplo de uso -------------------

// Usando MySQL
const mysqlDB = new MySQLDatabase();
mysqlDB.connect();
console.log(mysqlDB.find("SELECT * FROM users"));
mysqlDB.update(1, { name: "Jorge" });
mysqlDB.disconnect();

// Usando SQLite
const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();
console.log(sqliteDB.find("SELECT * FROM products"));
sqliteDB.update(2, { price: 3500 });
sqliteDB.disconnect();