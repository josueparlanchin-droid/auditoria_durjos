# 8. Plan de Recuperación ante Desastres (DRP)
Si los controles fallan y la universidad sufre una brecha, el plan de respuesta inmediata es el siguiente:

1. **Aislamiento y Contención:** Bajar el portal E05 principal de la red y levantar inmediatamente una página estática de "Mantenimiento Temporal" para no alarmar de más mientras se investiga el alcance del ataque.
2. **Restauración de Backups:** Contamos con copias de seguridad diarias guardadas en un servidor offline (Cold Backup). Se restaurará la base de datos de notas y pagos a su última versión íntegra de la noche anterior para asegurar que los registros estén limpios.
3. **Auditoría y Parche:** Identificar por qué vulnerabilidad entraron, aplicar el parche en el código, y forzar a todos los alumnos y docentes a restablecer sus contraseñas antes de volver a habilitar el portal.