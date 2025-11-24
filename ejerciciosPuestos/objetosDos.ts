// Interfaz base
interface User {
    id: number;
    name: string;
    email: string;
}

// Admin hereda de User
interface Admin extends User {
    role: string;
    permissions: string[];
}

// Función que imprime datos de User o Admin
function imprimirDatosUsuario(usuario: User | Admin): void {
    console.log(`ID: ${usuario.id}`);
    console.log(`Nombre: ${usuario.name}`);
    console.log(`Email: ${usuario.email}`);

    // Si el objeto también es Admin, imprimimos sus extras
    if ("role" in usuario) {
        console.log(`Rol: ${usuario.role}`);
        console.log(`Permisos: ${usuario.permissions.join(", ")}`);
    }
}

// Ejemplo de usuario normal
const usuarioNormal: User = {
    id: 1,
    name: "Jorge",
    email: "jorge@example.com"
};

// Ejemplo de admin
const usuarioAdmin: Admin = {
    id: 2,
    name: "Ana",
    email: "ana@example.com",
    role: "SuperAdmin",
    permissions: ["crear", "editar", "eliminar"]
};

// Imprimir datos
imprimirDatosUsuario(usuarioNormal);
imprimirDatosUsuario(usuarioAdmin);