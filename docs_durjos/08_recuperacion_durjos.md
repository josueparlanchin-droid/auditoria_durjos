# 8. Mejoras Tecnológicas y Plan de Recuperación (DR)

## Mejoras Tecnológicas Proyectadas
Para robustecer la arquitectura del portal universitario, se propone:
* **Implementación de un WAF (Web Application Firewall):** Para inspeccionar el tráfico HTTP y bloquear patrones de ataques conocidos (como payloads de SQLi y XSS) antes de que lleguen al servidor web.
* **Segmentación de Red:** Aislar el servidor de base de datos (que contiene notas y datos financieros) en una red interna separada, inaccesible directamente desde internet, permitiendo comunicación exclusiva con el servidor web.

## Plan de Recuperación ante Desastres (DR)
En caso de un incidente crítico (ej. borrado de la base de datos mediante Inyección SQL o secuestro por Ransomware):
1. **Política de Respaldos:** Implementar la regla 3-2-1 para las bases de datos académicas, con respaldos incrementales cada 4 horas y completos diarios.
2. **Restauración (RTO y RPO):** Establecer un Tiempo Objetivo de Recuperación (RTO) máximo de 4 horas para no afectar procesos críticos como la toma de ramos, y un Punto Objetivo de Recuperación (RPO) de 1 hora para minimizar la pérdida de registros.
3. **Protocolo de Notificación:** En caso de brecha, activar canales de comunicación oficiales para alertar a la comunidad estudiantil y docente sobre el restablecimiento temporal de contraseñas, cumpliendo con normativas de protección de datos.