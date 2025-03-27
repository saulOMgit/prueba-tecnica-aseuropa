-- Consulta 1: Obtener productos de productos24 con precio > 50€ y stock disponible
SELECT * FROM productos24
WHERE precio > 50 AND stock > 0;

-- Consulta 2: Obtener productos de productos24 y productos25 con precio < 100€, stock disponible y fecha de actualización > 29/02/2024
SELECT * FROM productos24
WHERE precio < 100 AND stock > 0 AND updated_at > '2024-02-29'
UNION
SELECT * FROM productos25
WHERE precio < 100 AND stock > 0 AND updated_at > '2024-02-29';

-- Consulta 3: Actualizar precio de un producto en productos25 por su ID
UPDATE productos25
SET precio = NUEVO_PRECIO
WHERE id = ID_DEL_PRODUCTO;
