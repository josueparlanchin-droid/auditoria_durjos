# 4. Vulnerabilidad: Inyección de Comandos (Command Injection)
**Gravedad CVSS v3.1:** Crítica (9.8 o 10.0)

![Evidencia Comandos](/img/comandos.png)

## Descripción Técnica
El servidor toma un dato de entrada (como una dirección IP) y lo pasa directamente a la terminal del sistema operativo. Al utilizar el carácter `;` en el payload `127.0.0.1; cat /etc/passwd`, se encadenan dos comandos. El servidor ejecuta el ping legítimo y, acto seguido, ejecuta la lectura del archivo de usuarios del sistema, exponiendo la configuración interna del servidor.

## Impacto en Universidad del Pacífico
Esta es la vulnerabilidad más devastadora. Permite tomar control total del servidor web de la universidad. Un atacante podría borrar por completo la base de datos curricular, encriptar el servidor exigiendo un rescate (Ransomware), o instalar software malicioso, deteniendo por completo las operaciones de la institución.

## Prevención y Mitigación
A nivel de código, **nunca se debe transferir la entrada del usuario directamente al sistema operativo**. Se debe implementar una "Lista Blanca" (Whitelist) que valide estrictamente que el formato ingresado sea exclusivamente una IP válida. Además, se deben utilizar APIs seguras propias del lenguaje de programación en lugar de invocar comandos de la terminal.