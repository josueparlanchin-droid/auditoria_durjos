import React from 'react';
import { Code, ShieldAlert } from 'lucide-react';

const Xss = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Code className="text-yellow-600 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">3. Cross-Site Scripting (XSS Reflejado)</h2>
        </div>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Gravedad: Alta (7.1)</span>
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">
        El portal refleja la entrada del usuario directamente en la interfaz sin codificar los caracteres especiales, permitiendo la inyección y ejecución de scripts arbitrarios de JavaScript en el navegador de la víctima.
      </p>

      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <span className="text-xs font-bold text-gray-400 uppercase block mb-2">Evidencia de Explotación</span>
        <img 
          src="/img_durjos/xss_durjos.png" 
          alt="Evidencia XSS" 
          className="w-full rounded-lg shadow-sm border border-gray-200 max-h-96 object-contain bg-black"
        />
        <p className="text-xs text-gray-500 mt-2 italic text-center">Inyección de payload reflejando alerta interactiva dirigida al docente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
          <h4 className="font-semibold text-orange-800 mb-1 flex items-center gap-1">
            <ShieldAlert className="w-4 h-4" /> Riesgo de Secuestro
          </h4>
          <p className="text-sm text-orange-700">
            Robo de cookies de sesión activa corporativa, suplantación de identidad de docentes dentro del portal, y redirecciones a portales clonados para phishing financiero.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-green-800 mb-1">Mitigación Técnica</h4>
          <p className="text-sm text-green-700">
            Aplicar <strong>Context-Aware Output Encoding</strong> (escapar caracteres HTML) y configurar las cookies de sesión con las directivas de protección <code>HttpOnly</code> y <code>Secure</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Xss;