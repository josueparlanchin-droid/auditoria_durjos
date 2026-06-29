import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';

const BitacoraIA = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <Bot className="text-indigo-600 w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">9. Bitácora de Uso de IA</h2>
      </div>

      <div className="space-y-4">
        <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
          <h4 className="font-bold text-indigo-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Prompt: Resumen Ejecutivo
          </h4>
          <p className="text-sm text-gray-700 mt-1">"Crea un componente React con Tailwind para el Resumen de la Universidad del Pacífico. Usa un icono de FileText y un diseño de tarjeta profesional."</p>
          <span className="text-xs text-indigo-600 font-semibold mt-1 block">Resultado: Aceptado para definir el layout base.</span>
        </div>

        <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
          <h4 className="font-bold text-indigo-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Prompt: Vulnerabilidades
          </h4>
          <p className="text-sm text-gray-700 mt-1">"Explica técnicamente la inyección de comandos en DVWA usando el payload 127.0.0.1; cat /etc/passwd y sugiere mitigaciones basadas en OWASP."</p>
          <span className="text-xs text-indigo-600 font-semibold mt-1 block">Resultado: Aceptado con ajuste manual en la mitigación contextualizada.</span>
        </div>

        <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50">
          <h4 className="font-bold text-indigo-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Prompt: Depuración
          </h4>
          <p className="text-sm text-gray-700 mt-1">"Tengo un error 'Failed to resolve import' en App.jsx, revisa la estructura de directorios."</p>
          <span className="text-xs text-indigo-600 font-semibold mt-1 block">Resultado: Corrección de rutas de importación exitosa.</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600 italic">
        <strong>Reflexión Final:</strong> El uso de IA fue un acelerador de desarrollo. Sin embargo, la validación técnica fue constante; la IA es útil para estructurar código, pero no reemplaza el criterio del auditor para implementar controles de seguridad efectivos frente a amenazas reales.
      </div>
    </div>
  );
};

export default BitacoraIA;