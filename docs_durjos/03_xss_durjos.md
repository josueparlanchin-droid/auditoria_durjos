# 3. Vulnerabilidad: Cross-Site Scripting (XSS Reflejado)
<<<<<<< HEAD
**Gravedad CVSS v3.1:** Alta (7.1) o Media (dependiendo del vector).

![Evidencia XSS](/img/XSS.png)

## Descripción Técnica
La aplicación refleja la entrada del usuario dentro del código HTML de la página sin realizar una sanitización previa. Al ingresar el payload `<script>alert('XSS')</script>`, el navegador no lo interpreta como texto plano, sino que ejecuta el código JavaScript inyectado. 

## Impacto en Universidad del Pacífico
En el contexto del portal universitario, un atacante podría enviar un enlace manipulado a estudiantes o profesores (por ejemplo, a través de correos institucionales). Si la víctima hace clic, el atacante podría robar su sesión activa, suplantar su identidad para modificar notas, o redirigir a los alumnos a una pasarela de pago fraudulenta para robar el dinero de sus aranceles.

## Prevención y Mitigación
La medida preventiva fundamental es **escapar la salida** (convertir caracteres como `<` en `&lt;`) para que el navegador lo renderice como texto visual y no como código ejecutable. Como control de mitigación adicional, se debe implementar una estricta política CSP (Content Security Policy) que limite desde qué orígenes se pueden ejecutar scripts.
=======
**Gravedad CVSS v3.1:** Media (6.1)

## Descripción Técnica
Se detectó una vulnerabilidad de XSS Reflejado en el portal. El problema radica en que el servidor web toma los datos ingresados por el usuario y los "refleja" o devuelve a la pantalla sin aplicar ninguna codificación de seguridad. Al ingresar un payload como `<script>alert('Universidad del Pacifico Hackeada')</script>`, el navegador confunde ese texto con código legítimo de la página y lo ejecuta.

## Impacto en Universidad del Pacífico
Aunque parece inofensivo porque ocurre en el navegador, el impacto para la universidad es altísimo a nivel de suplantación de identidad. Un atacante podría enviarle un correo falso con un link malicioso a un profesor o a un directivo. Si el profesor hace clic, el script oculto podría robar la "cookie" de su sesión activa. Con esto, el atacante entraría al portal como si fuera el docente, teniendo vía libre para modificar las notas de los ramos sin levantar sospechas.

## Prevención y Mitigación
La regla de oro aquí es jamás confiar en lo que ingresa el usuario. Para solucionarlo a nivel de código, se debe aplicar **Codificación de Salida (HTML Entity Encoding)** antes de mostrar cualquier dato en pantalla. Esto convierte caracteres peligrosos como `<` y `>` en su equivalente seguro (`&lt;` y `&gt;`), obligando al navegador a leerlos como simple texto y no como código ejecutable.
>>>>>>> bfdf7dfb703594feeb5f9f171222363e6a022319
