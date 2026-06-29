# Matriz de Riesgo y Mapa de Calor
Si cruzamos la probabilidad de sufrir un ataque con el daño que causaría, el panorama para la universidad es el siguiente:

* **Inyección SQL (SQLi):**
  - **Probabilidad:** Media.
  - **Impacto:** Crítico (Nos pueden robar toda la base de datos o cambiar las notas).
  - **Nivel de Riesgo:** **EXTREMO (Rojo)**. Hay que arreglarlo ya.

* **Cross-Site Scripting (XSS):**
  - **Probabilidad:** Alta (Es muy fácil engañar a un profe con un link falso por correo).
  - **Impacto:** Alto (Permite robar la sesión de los docentes).
  - **Nivel de Riesgo:** **ALTO (Naranja)**.

* **Inyección de Comandos:**
  - **Probabilidad:** Baja (Es más difícil de ejecutar).
  - **Impacto:** Crítico (El atacante se adueña del servidor completo).
  - **Nivel de Riesgo:** **ALTO (Naranja)**.