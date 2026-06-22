# Prevención y Controles
Para que no nos pase nada de lo anterior, los desarrolladores de la universidad tienen que aplicar estas reglas de seguridad sí o sí:

* **Usar Consultas Parametrizadas:** Nada de armar consultas SQL juntando textos. Hay que separar los comandos de los datos que escribe el usuario para matar la Inyección SQL desde el código.
* **Filtrar y Codificar:** Todo lo que el usuario escriba debe ser limpiado (sanitizado) antes de mostrarse en pantalla usando *HTML Entity Encoding*. Así evitamos que los navegadores ejecuten scripts XSS maliciosos.
* **Poner un WAF:** Necesitamos un Web Application Firewall que bloquee ataques extraños y comandos de sistema antes de que lleguen al servidor de la universidad.