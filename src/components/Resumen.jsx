import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';

const Resumen = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="text-blue-600 w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">1. Resumen Ejecutivo</h2>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        El presente informe detalla los resultados de la auditoría de seguridad web realizada al portal de clientes de la <strong>Universidad del Pacífico</strong>. Este portal custodia información crítica propia del rubro de educación superior, incluyendo calificaciones, historial académico, datos personales de alumnos y docentes, además de gestionar los pagos de arancel y matrículas.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
        <ShieldCheck className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-blue-700">
          <strong>Objetivo:</strong> Identificar vulnerabilidades críticas en el entorno controlado para proponer medidas de mitigación inmediatas que aseguren la confidencialidad y la continuidad operativa institucional.
        </p>
      </div>
    </div>
  );
};

export default Resumen;