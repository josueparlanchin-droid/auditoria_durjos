# 3. Vulnerabilidad: Cross-Site Scripting (XSS Reflejado)
**Gravedad CVSS v3.1:** Media (6.1)

## Descripción Técnica
Se detectó una vulnerabilidad de XSS Reflejado en el portal. El problema radica en que el servidor web toma los datos ingresados por el usuario y los "refleja" o devuelve a la pantalla sin aplicar ninguna codificación de seguridad. Al ingresar un payload como `<script>alert('Universidad del Pacifico Hackeada')</script>`, el navegador confunde ese texto con código legítimo de la página y lo ejecuta.

## Impacto en Universidad del Pacífico
Aunque parece inofensivo porque ocurre en el navegador, el impacto para la universidad es altísimo a nivel de suplantación de identidad. Un atacante podría enviarle un correo falso con un link malicioso a un profesor o a un directivo. Si el profesor hace clic, el script oculto podría robar la "cookie" de su sesión activa. Con esto, el atacante entraría al portal como si fuera el docente, teniendo vía libre para modificar las notas de los ramos sin levantar sospechas.

## Prevención y Mitigación
La regla de oro aquí es jamás confiar en lo que ingresa el usuario. Para solucionarlo a nivel de código, se debe aplicar **Codificación de Salida (HTML Entity Encoding)** antes de mostrar cualquier dato en pantalla. Esto convierte caracteres peligrosos como `<` y `>` en su equivalente seguro (`&lt;` y `&gt;`), obligando al navegador a leerlos como simple texto y no como código ejecutable.