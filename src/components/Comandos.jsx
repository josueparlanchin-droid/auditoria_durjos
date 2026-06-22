import { Terminal, AlertTriangle } from 'lucide-react';

function Comandos() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-red-800">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <Terminal className="text-red-800" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">
            Inyección de Comandos (OS Command Injection)
          </h2>
        </div>
        <span className="bg-red-100 text-red-900 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <AlertTriangle size={16} /> Gravedad CVSS: Crítica (9.8)
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Evidencia de Ejecución en Servidor</h3>
        {/* Aquí llamamos a la imagen de Comandos */}
        <img 
          src="/img_durjos/comandos_durjos.png" 
          alt="Evidencia Inyección de Comandos" 
          className="rounded-md border shadow-sm w-full max-w-3xl mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-5 rounded-md border">
          <h3 className="text-md font-bold text-slate-800 mb-2">Descripción Técnica</h3>
          <p className="text-sm text-slate-600">
            La función de diagnóstico de red pasa la entrada del usuario directamente a la consola del sistema (ej: <code className="bg-slate-200 px-1 rounded">shell_exec</code>). Usando operadores lógicos es posible encadenar instrucciones, como <code className="bg-slate-200 px-1 rounded text-red-800">127.0.0.1 && dir</code>, obteniendo acceso a la terminal subyacente.
          </p>
        </div>

        <div className="bg-red-50 p-5 rounded-md border border-red-200">
          <h3 className="text-md font-bold text-red-900 mb-2">Impacto en Universidad del Pacífico</h3>
          <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
            <li>Toma de control total del servidor web (E05).</li>
            <li>Acceso a archivos de configuración y contraseñas maestras.</li>
            <li>Capacidad de destruir toda la infraestructura virtual de la universidad.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-green-50 p-5 rounded-md border border-green-100">
        <h3 className="text-md font-bold text-green-800 mb-2">Prevención y Mitigación</h3>
        <p className="text-sm text-green-700">
          Se debe evitar el uso de funciones que invoquen la consola del OS. De ser estrictamente necesario, implementar una <strong>Lista Blanca (Whitelist)</strong> estricta que valide únicamente formatos numéricos de IP.
        </p>
      </div>
    </div>
  );
}

export default Comandos;