# 3. Vulnerabilidad: Cross-Site Scripting (XSS Reflejado)
**Gravedad CVSS v3.1:** Alta (7.1) o Media (dependiendo del vector).

![Evidencia XSS](/img/XSS.png)

## Descripción Técnica
La aplicación refleja la entrada del usuario dentro del código HTML de la página sin realizar una sanitización previa. Al ingresar el payload `<script>alert('XSS')</script>`, el navegador no lo interpreta como texto plano, sino que ejecuta el código JavaScript inyectado. 

## Impacto en Universidad del Pacífico
En el contexto del portal universitario, un atacante podría enviar un enlace manipulado a estudiantes o profesores (por ejemplo, a través de correos institucionales). Si la víctima hace clic, el atacante podría robar su sesión activa, suplantar su identidad para modificar notas, o redirigir a los alumnos a una pasarela de pago fraudulenta para robar el dinero de sus aranceles.

## Prevención y Mitigación
La medida preventiva fundamental es **escapar la salida** (convertir caracteres como `<` en `&lt;`) para que el navegador lo renderice como texto visual y no como código ejecutable. Como control de mitigación adicional, se debe implementar una estricta política CSP (Content Security Policy) que limite desde qué orígenes se pueden ejecutar scripts.