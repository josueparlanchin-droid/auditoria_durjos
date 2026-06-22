# Plan de Recuperación ante Desastres (DRP)
Si todo sale mal y nos hackean, este es el plan de emergencia para levantar el portal:

1. **Apagar y Aislar:** Bajar el portal principal inmediatamente y poner una página de "Mantenimiento" para que no sigan robando datos.
2. **Restaurar el Backup:** Tomar la copia de seguridad de la noche anterior (que guardamos en un servidor sin conexión a internet) y restaurar las bases de datos de notas y pagos para asegurar que no estén alteradas.
3. **Parchear y Resetear:** Arreglar el código que causó la falla y obligar a todos los alumnos y profes a cambiar sus contraseñas antes de volver a abrir el sitio.