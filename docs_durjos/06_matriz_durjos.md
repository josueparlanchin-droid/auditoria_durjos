# 6. Matriz de Riesgo y Mapa de Calor
Cruzando la probabilidad de que nos ataquen contra el impacto que tendría en la universidad, la matriz queda así:

* **Inyección SQL (SQLi):**
  - Probabilidad: Media
  - Impacto: Crítico (Podrían robar la base de datos entera o alterar las notas a voluntad).
  - Nivel de Riesgo: **EXTREMO (Rojo)**.

* **Cross-Site Scripting (XSS):**
  - Probabilidad: Alta (Es muy fácil enviar links manipulados por correo institucional).
  - Impacto: Alto (Permite robar sesiones y suplantar la identidad de un profesor o directivo).
  - Nivel de Riesgo: **ALTO (Naranja)**.

* **Inyección de Comandos:**
  - Probabilidad: Baja (Requiere condiciones muy específicas en la configuración del servidor web).
  - Impacto: Crítico (Toma de control total del servidor de la universidad, pudiendo borrar todo).
  - Nivel de Riesgo: **ALTO (Naranja)**.