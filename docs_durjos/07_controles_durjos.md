<<<<<<< HEAD
# 7. Controles de Mitigación

Para proteger los activos de la Universidad del Pacífico frente a las vulnerabilidades encontradas, se deben implementar los siguientes controles técnicos:

1. **Mitigación para Inyección SQL:** Implementar el uso estricto de **consultas parametrizadas (Prepared Statements)** o un ORM (Object-Relational Mapping) en el backend del portal de alumnos. Esto asegura que la base de datos trate las entradas (como el rut para ver las notas) como datos literales y nunca como sentencias ejecutables.
2. **Mitigación para XSS:** Aplicar **codificación de salida (Output Encoding)** en todas las variables que se renderizan en el HTML (convertir caracteres especiales en entidades HTML). Además, configurar las cookies de sesión con las banderas `HttpOnly` y `Secure` para evitar que un script malicioso pueda robar los identificadores de sesión de los docentes o estudiantes.
3. **Mitigación para Command Injection:** Reemplazar la ejecución directa de comandos del sistema operativo (como `exec()` o `system()`) por **APIs nativas del lenguaje de programación**. Adicionalmente, implementar validación de entrada mediante listas blancas (Whitelisting), asegurando que solo se acepten formatos estrictos (ej. solo números y puntos para una dirección IP).
=======
# Prevención y Controles
Para que no nos pase nada de lo anterior, los desarrolladores de la universidad tienen que aplicar estas reglas de seguridad sí o sí:

* **Usar Consultas Parametrizadas:** Nada de armar consultas SQL juntando textos. Hay que separar los comandos de los datos que escribe el usuario para matar la Inyección SQL desde el código.
* **Filtrar y Codificar:** Todo lo que el usuario escriba debe ser limpiado (sanitizado) antes de mostrarse en pantalla usando *HTML Entity Encoding*. Así evitamos que los navegadores ejecuten scripts XSS maliciosos.
* **Poner un WAF:** Necesitamos un Web Application Firewall que bloquee ataques extraños y comandos de sistema antes de que lleguen al servidor de la universidad.
>>>>>>> bfdf7dfb703594feeb5f9f171222363e6a022319
