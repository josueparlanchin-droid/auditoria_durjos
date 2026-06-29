# 9. Bitácora de Uso de Inteligencia Artificial

Durante el desarrollo de esta auditoría, se utilizaron asistentes de IA (como GitHub Copilot y Gemini) como apoyo operativo.

* **Prompt 1:** *"Genera un resumen ejecutivo para una auditoría web de una universidad ficticia llamada Universidad del Pacífico, enfocándote en la protección de notas y pagos."*
  * **Resultado/Corrección:** La IA entregó un texto muy largo. Se recortó y ajustó para que encajara con el tono técnico del informe y la brevedad requerida.
* **Prompt 2:** *"¿Cómo implemento consultas parametrizadas en Node.js para mitigar Inyección SQL?"*
  * **Resultado/Corrección:** Entregó un ejemplo claro, pero no especificó el motor de base de datos. Se le corrigió para que adaptara el código al contexto específico de nuestro stack tecnológico.

**Reflexión Final:**
La IA es una herramienta excelente para acelerar la creación de código base (como los componentes en React) y estructurar los informes en Markdown. Sin embargo, en el ámbito de la ciberseguridad, no se puede confiar ciegamente en ella; es imperativo auditar sus respuestas, ya que en ocasiones puede sugerir código que funcionalmente sirve, pero que estructuralmente sigue siendo vulnerable (como concatenar strings en vez de parametrizar).