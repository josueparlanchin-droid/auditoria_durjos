import { FileText } from 'lucide-react';

function Resumen() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-slate-800">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <FileText className="text-slate-700" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Resumen Ejecutivo
        </h2>
      </div>
      
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          <strong>Institución:</strong> Universidad del Pacífico (Caso E05)<br/>
          <strong>Auditor:</strong> Josué Alexander Durand Palacios
        </p>
        <p>
          ¡Bienvenidos al informe de auditoría! En esta evaluación me enfoqué en analizar la seguridad del portal web de la <strong>Universidad del Pacífico</strong>. Como esta plataforma maneja datos críticos (fichas académicas, notas y pagos de aranceles), cualquier vulnerabilidad puede ser fatal para la institución.
        </p>
        <p>
          El objetivo de este trabajo es demostrar cómo un atacante podría aprovechar fallas comunes para vulnerar el sistema. Todo el análisis se realizó en un entorno de pruebas controlado (DVWA), simulando ser el portal de la universidad para identificar los riesgos reales y proponer remediaciones a nivel de código.
        </p>
      </div>
    </div>
  );
}

export default Resumen;