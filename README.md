# Prueba Técnica para Aseuropa

Este proyecto consta de 3 partes:\
\- Una web simple donde poder ver, añadir, gestionar y filtrar productos.\
\- Consultas sql.\
\- Un programa Java que permite leer un archivo CSV y almacenarlo en una base de datos MySQL.

## 📌 Requisitos

- Java 8 o superior
- MySQL instalado y configurado
- Eclipse (opcional, pero recomendado)

###

## 🛠 Uso del Convertidos de CSV a MySQL

1. Coloca el archivo `productos.csv` en la misma carpeta del proyecto.
2. Ejecuta el programa en Eclipse.
3. El programa leerá el CSV e insertará los datos en MySQL.
4. Luego listará los productos almacenados en la base de datos.

## 📄 Formato del CSV

El archivo `productos.csv` debe tener el siguiente formato:

```csv
sku,nombre,precio
12345,Producto A,19.99
67890,Producto B,29.99
```

## 📝 Notas

- Asegúrate de que el archivo CSV esté en la misma carpeta donde se ejecuta el programa.
- Puedes modificar la consulta SQL para adaptarla a otras estructuras de base de datos.
- La base de datos por defecto del ejercicio no nos permitiría subir los datos, yo personalmente he optado por añadir una columna SKU\
