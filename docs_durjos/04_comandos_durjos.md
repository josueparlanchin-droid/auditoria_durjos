# 4. Vulnerabilidad: Inyección de Comandos (OS Command Injection)
**Gravedad CVSS v3.1:** Crítica (9.8)

## Descripción Técnica
La plataforma cuenta con una función para realizar diagnósticos de red (Ping), pero sufre de una inyección de comandos a nivel del sistema operativo. La aplicación toma la dirección IP ingresada y se la pasa directamente a la consola del servidor (a través de funciones como `shell_exec`). Al agregar operadores lógicos como `&&` o `;` junto a la IP, logramos encadenar instrucciones adicionales, como se evidencia al ejecutar `127.0.0.1 && dir`, lo que nos devolvió un listado completo de los archivos internos del servidor.

## Impacto en Universidad del Pacífico
Este es el escenario más destructivo posible. El atacante logra saltarse la aplicación web y obtiene control directo sobre el servidor físico o virtual que aloja el portal de la universidad. Desde aquí, podría leer los archivos de configuración para robar las contraseñas reales de la base de datos, descargar copias de los registros financieros de los alumnos, o simplemente ejecutar un comando para borrar toda la infraestructura, botando el portal de E05 de forma indefinida.

## Prevención y Mitigación
La mejor defensa es evitar por completo el uso de funciones que invoquen directamente la terminal o consola del sistema operativo. Si la función de "Ping" es estrictamente necesaria para el negocio, se debe implementar una **Lista Blanca (Whitelist)** estricta, validando que el texto ingresado por el usuario contenga única y exclusivamente el formato de una dirección IP numérica, rechazando cualquier otro carácter o letra.