import { Database, AlertTriangle } from 'lucide-react';

function InyeccionSQL() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-red-600">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <Database className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">
            Inyección SQL (SQLi)
          </h2>
        </div>
        <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <AlertTriangle size={16} /> Gravedad CVSS: Crítica (9.8)
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Evidencia del Ataque</h3>
        {/* Aquí es donde llama a la imagen de tu carpeta public */}
        <img 
          src="/img_durjos/sqli_durjos.png" 
          alt="Evidencia Inyección SQL" 
          className="rounded-md border shadow-sm w-full max-w-3xl mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-5 rounded-md border">
          <h3 className="text-md font-bold text-slate-800 mb-2">Descripción Técnica</h3>
          <p className="text-sm text-slate-600">
            El portal web presenta una vulnerabilidad de Inyección SQL en sus formularios. El sistema concatena directamente la entrada del usuario en la consulta de la base de datos sin sanitizar, permitiendo ingresar cargas útiles como <code className="bg-slate-200 px-1 rounded text-red-600">1' or '1'='1</code> para saltarse la autenticación.
          </p>
        </div>

        <div className="bg-red-50 p-5 rounded-md border border-red-100">
          <h3 className="text-md font-bold text-red-800 mb-2">Impacto en Universidad del Pacífico</h3>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            <li>Extracción completa de la base de datos académica.</li>
            <li>Alteración ilegal de registros de notas de alumnos.</li>
            <li>Acceso a información financiera y pagos de aranceles.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-green-50 p-5 rounded-md border border-green-100">
        <h3 className="text-md font-bold text-green-800 mb-2">Prevención y Mitigación</h3>
        <p className="text-sm text-green-700">
          A nivel de código, la solución es reescribir las consultas utilizando <strong>Consultas Parametrizadas (Prepared Statements)</strong>. Como medida complementaria perimetral, se debe implementar un WAF (Web Application Firewall).
        </p>
      </div>
    </div>
  );
}

export default InyeccionSQL;