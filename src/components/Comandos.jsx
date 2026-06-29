import React from 'react';
import { Terminal, ShieldX } from 'lucide-react';

const Comandos = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Terminal className="text-purple-600 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">4. Inyección de Comandos (Command Injection)</h2>
        </div>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Gravedad: Crítica (10.0)</span>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        El backend ejecuta comandos del sistema operativo concatenando directamente texto provisto por el cliente, permitiendo a un atacante ejecutar código arbitrario con los privilegios del servidor web.
      </p>

      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Evidencia de Explotación</span>
        <img 
          src="/img_durjos/comandos_durjos.png" 
          alt="Evidencia Command Injection" 
          className="w-full rounded-lg shadow-sm border border-gray-200 max-h-96 object-contain bg-black"
        />
        <p className="text-xs text-gray-500 mt-2 italic text-center">Ejecución remota de comandos logrando la lectura del archivo de cuentas del sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
          <h4 className="font-semibold text-orange-800 mb-1 flex items-center gap-1">
            <ShieldX className="w-4 h-4" /> Compromiso Total
          </h4>
          <p className="text-sm text-orange-700">
            Control total sobre el servidor web de la universidad, despliegue potencial de Ransomware, alteración completa del sistema de archivos y caída total del servicio educativo.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-green-800 mb-1">Mitigación Técnica</h4>
          <p className="text-sm text-green-700">
            Evitar funciones de ejecución directa en el sistema operativo. Utilizar APIs internas del lenguaje y aplicar validación estricta de entradas basándose en listas blancas (Whitelisting).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comandos;