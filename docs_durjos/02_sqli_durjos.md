# 2. Vulnerabilidad: Inyección SQL (SQLi)
**Gravedad CVSS v3.1:** Crítica (9.8)

## Descripción Técnica
El portal web presenta una vulnerabilidad de Inyección SQL en sus formularios de entrada. El sistema toma lo que escribe el usuario y lo concatena directamente en la consulta de la base de datos sin sanitizar. Esto permite ingresar cargas útiles (payloads) como `1' or '1'='1` para saltarse la autenticación o extraer tablas completas.

## Impacto en Universidad del Pacífico
Al ser una institución de educación superior, el impacto de negocio es catastrófico. Un atacante podría:
* Extraer o secuestrar la base de datos completa.
* Alterar el registro curricular y modificar notas de los alumnos.
* Acceder a información financiera confidencial sobre los pagos de aranceles y matrículas.

## Prevención y Mitigación
A nivel de código, la solución definitiva es reescribir las consultas utilizando **Consultas Parametrizadas (Prepared Statements)**, lo que separa estrictamente la estructura SQL de los datos ingresados por el usuario. Como medida complementaria, se debe implementar un WAF (Web Application Firewall).