let productos = [
    { sku: "P001", nombre: "Producto 1", precio: 45 },
    { sku: "P002", nombre: "Producto 2", precio: 60 },
    { sku: "P003", nombre: "Producto 3", precio: 75 },
    { sku: "P004", nombre: "Producto 4", precio: 30 },
    { sku: "P005", nombre: "Producto 5", precio: 90 },
    { sku: "P006", nombre: "Producto 6", precio: 50 },
    { sku: "P007", nombre: "Producto 7", precio: 20 },
    { sku: "P008", nombre: "Producto 8", precio: 110 },
    { sku: "P009", nombre: "Producto 9", precio: 55 },
    { sku: "P010", nombre: "Producto 10", precio: 40 }
];

function mostrarProductos(filtro = "") {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = "";
    productos.filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(producto => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.innerHTML = `${producto.sku} - ${producto.nombre} - ${producto.precio} €
                <button class="btn btn-danger btn-sm" onclick="eliminarProducto('${producto.sku}')">Eliminar</button>`;
            lista.appendChild(li);
        });
}

document.getElementById("busqueda").addEventListener("input", (e) => {
    mostrarProductos(e.target.value);
});

function agregarProducto() {
    const modal = new bootstrap.Modal(document.getElementById("modalProducto"));
    modal.show();
}

document.getElementById("guardarProducto").addEventListener("click", () => {
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    if (sku && nombre && !isNaN(precio)) {
        productos.push({ sku, nombre, precio });
        mostrarProductos();
        bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
    }
});

function eliminarProducto(sku) {
    productos = productos.filter(p => p.sku !== sku);
    mostrarProductos();
}

mostrarProductos();
//
//Mostrar si falta algun campo al añadir 
document.getElementById("guardarProducto").addEventListener("click", () => {
    let sku = document.getElementById("sku");
    let nombre = document.getElementById("nombre");
    let precio = document.getElementById("precio");
    let valid = true;

    if (!sku.value.trim()) {
        sku.classList.add("is-invalid");
        valid = false;
    } else {
        sku.classList.remove("is-invalid");
    }

    if (!nombre.value.trim()) {
        nombre.classList.add("is-invalid");
        valid = false;
    } else {
        nombre.classList.remove("is-invalid");
    }

    if (!precio.value.trim() || isNaN(parseFloat(precio.value))) {
        precio.classList.add("is-invalid");
        valid = false;
    } else {
        precio.classList.remove("is-invalid");
    }

    if (valid) {
        productos.push({ sku: sku.value, nombre: nombre.value, precio: parseFloat(precio.value) });
        mostrarProductos();
        bootstrap.Modal.getInstance(document.getElementById("modalProducto")).hide();
        sku.value = "";
        nombre.value = "";
        precio.value = "";
    }
});