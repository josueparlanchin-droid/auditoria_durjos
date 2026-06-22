import { MonitorOff, AlertTriangle } from 'lucide-react';

function Xss() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-orange-500">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center gap-3">
          <MonitorOff className="text-orange-500" size={28} />
          <h2 className="text-2xl font-bold text-slate-800">
            Cross-Site Scripting (XSS Reflejado)
          </h2>
        </div>
        <span className="bg-orange-100 text-orange-800 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <AlertTriangle size={16} /> Gravedad CVSS: Media (6.1)
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Evidencia del Ataque en Navegador</h3>
        {/* Aquí llamamos a la imagen del XSS */}
        <img 
          src="/img_durjos/xss_durjos.png" 
          alt="Evidencia XSS Reflejado" 
          className="rounded-md border shadow-sm w-full max-w-3xl mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-5 rounded-md border">
          <h3 className="text-md font-bold text-slate-800 mb-2">Descripción Técnica</h3>
          <p className="text-sm text-slate-600">
            El servidor web refleja los datos ingresados por el usuario sin aplicar codificación de seguridad. Al inyectar un payload como <code className="bg-slate-200 px-1 rounded text-orange-600">&lt;script&gt;alert('Hackeado')&lt;/script&gt;</code>, el navegador confunde la entrada con código legítimo y lo ejecuta en el entorno del cliente.
          </p>
        </div>

        <div className="bg-orange-50 p-5 rounded-md border border-orange-100">
          <h3 className="text-md font-bold text-orange-800 mb-2">Impacto en Universidad del Pacífico</h3>
          <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
            <li>Robo de "cookies" de sesión mediante links maliciosos.</li>
            <li>Suplantación de identidad de docentes y directivos.</li>
            <li>Modificación no autorizada de notas desde cuentas comprometidas.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-green-50 p-5 rounded-md border border-green-100">
        <h3 className="text-md font-bold text-green-800 mb-2">Prevención y Mitigación</h3>
        <p className="text-sm text-green-700">
          Se debe implementar estrictamente la <strong>Codificación de Salida (HTML Entity Encoding)</strong> antes de renderizar cualquier dato en pantalla, convirtiendo caracteres peligrosos en su equivalente seguro para evitar su ejecución.
        </p>
      </div>
    </div>
  );
}

export default Xss;