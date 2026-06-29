<<<<<<< HEAD
# 4. Vulnerabilidad: Inyección de Comandos (Command Injection)
**Gravedad CVSS v3.1:** Crítica (9.8 o 10.0)

![Evidencia Comandos](/img/comandos.png)

## Descripción Técnica
El servidor toma un dato de entrada (como una dirección IP) y lo pasa directamente a la terminal del sistema operativo. Al utilizar el carácter `;` en el payload `127.0.0.1; cat /etc/passwd`, se encadenan dos comandos. El servidor ejecuta el ping legítimo y, acto seguido, ejecuta la lectura del archivo de usuarios del sistema, exponiendo la configuración interna del servidor.

## Impacto en Universidad del Pacífico
Esta es la vulnerabilidad más devastadora. Permite tomar control total del servidor web de la universidad. Un atacante podría borrar por completo la base de datos curricular, encriptar el servidor exigiendo un rescate (Ransomware), o instalar software malicioso, deteniendo por completo las operaciones de la institución.

## Prevención y Mitigación
A nivel de código, **nunca se debe transferir la entrada del usuario directamente al sistema operativo**. Se debe implementar una "Lista Blanca" (Whitelist) que valide estrictamente que el formato ingresado sea exclusivamente una IP válida. Además, se deben utilizar APIs seguras propias del lenguaje de programación en lugar de invocar comandos de la terminal.
=======
# 4. Vulnerabilidad: Inyección de Comandos (OS Command Injection)
**Gravedad CVSS v3.1:** Crítica (9.8)

## Descripción Técnica
La plataforma cuenta con una función para realizar diagnósticos de red (Ping), pero sufre de una inyección de comandos a nivel del sistema operativo. La aplicación toma la dirección IP ingresada y se la pasa directamente a la consola del servidor (a través de funciones como `shell_exec`). Al agregar operadores lógicos como `&&` o `;` junto a la IP, logramos encadenar instrucciones adicionales, como se evidencia al ejecutar `127.0.0.1 && dir`, lo que nos devolvió un listado completo de los archivos internos del servidor.

## Impacto en Universidad del Pacífico
Este es el escenario más destructivo posible. El atacante logra saltarse la aplicación web y obtiene control directo sobre el servidor físico o virtual que aloja el portal de la universidad. Desde aquí, podría leer los archivos de configuración para robar las contraseñas reales de la base de datos, descargar copias de los registros financieros de los alumnos, o simplemente ejecutar un comando para borrar toda la infraestructura, botando el portal de E05 de forma indefinida.

## Prevención y Mitigación
La mejor defensa es evitar por completo el uso de funciones que invoquen directamente la terminal o consola del sistema operativo. Si la función de "Ping" es estrictamente necesaria para el negocio, se debe implementar una **Lista Blanca (Whitelist)** estricta, validando que el texto ingresado por el usuario contenga única y exclusivamente el formato de una dirección IP numérica, rechazando cualquier otro carácter o letra.
>>>>>>> bfdf7dfb703594feeb5f9f171222363e6a022319
