import React from 'react';
import { Database, AlertTriangle } from 'lucide-react';

const Sqli = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Database className="text-red-600 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">2. Inyección SQL (SQLi)</h2>
        </div>
        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Gravedad: Crítica (9.8)</span>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 leading-relaxed mb-3">
          La aplicación web concatena directamente la entrada del usuario en las sentencias SQL sin sanitización previa, permitiendo alterar la lógica de las consultas a la base de datos de la universidad.
        </p>
      </div>

      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Evidencia de Explotación</span>
        {/* Ruta apuntando a public/img_durjos/sqli_durjos.png */}
        <img 
          src="/img_durjos/sqli_durjos.png" 
          alt="Evidencia SQL Injection" 
          className="w-full rounded-lg shadow-sm border border-gray-200 max-h-96 object-contain bg-black"
        />
        <p className="text-xs text-gray-500 mt-2 italic text-center">Captura del ataque exitoso mostrando la extracción de datos curriculares.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
          <h4 className="font-semibold text-orange-800 mb-1 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4" /> Impacto Académico
          </h4>
          <p className="text-sm text-orange-700">
            Acceso no autorizado a registros de calificaciones, alteración de actas académicas, fugas de bases de datos de matrículas y exposición de información financiera de estudiantes.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-green-800 mb-1">Mitigación Técnica</h4>
          <p className="text-sm text-green-700">
            Implementar obligatoriamente <strong>Consultas Parametrizadas (Prepared Statements)</strong> o el uso de un ORM seguro para neutralizar la interpretación de comandos SQL maliciosos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sqli;