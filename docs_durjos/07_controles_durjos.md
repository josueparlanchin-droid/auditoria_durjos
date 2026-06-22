# 7. Políticas de Prevención y Mitigación
Para evitar quedar expuestos, la universidad debe implementar estas políticas de seguridad en su ciclo de desarrollo de forma obligatoria:

* **Consultas Parametrizadas:** Queda estrictamente prohibido concatenar texto directo en el código fuente. Se deben usar *Prepared Statements* para separar los comandos SQL de lo que escribe el usuario, matando la inyección SQL de raíz.
* **Sanitización y Codificación:** Todo dato que ingrese por formulario debe ser filtrado, y todo lo que se muestre en pantalla debe usar *HTML Entity Encoding*. Así el navegador no ejecutará scripts XSS maliciosos.
* **Implementación de WAF:** Colocar un Web Application Firewall por delante del portal para que detecte y bloquee tráfico anómalo, como intentos de ejecutar comandos del sistema operativo.