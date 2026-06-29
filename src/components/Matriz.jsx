import { Activity } from 'lucide-react';

function Matriz() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-slate-700">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Activity className="text-slate-700" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Matriz de Riesgo y Mapa de Calor
        </h2>
      </div>

      <p className="text-slate-600 mb-6">
        Evaluación de impacto operacional y probabilidad de explotación en la Universidad del Pacífico:
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-md border-red-200 bg-red-50">
          <div>
            <h3 className="font-bold text-red-900">Inyección SQL (SQLi)</h3>
            <p className="text-sm text-red-700">Probabilidad: Media | Impacto: Crítico (Compromiso total de la base de datos curricular)</p>
          </div>
          <span className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">EXTREMO</span>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-md border-orange-200 bg-orange-50">
          <div>
            <h3 className="font-bold text-orange-900">Cross-Site Scripting (XSS)</h3>
            <p className="text-sm text-orange-700">Probabilidad: Alta | Impacto: Alto (Suplantación de identidad de docentes)</p>
          </div>
          <span className="bg-orange-500 text-white px-3 py-1 rounded font-bold text-sm">ALTO</span>
        </div>

        <div className="flex items-center justify-between p-4 border rounded-md border-orange-200 bg-orange-50">
          <div>
            <h3 className="font-bold text-orange-900">Inyección de Comandos</h3>
            <p className="text-sm text-orange-700">Probabilidad: Baja | Impacto: Crítico (Control total del servidor)</p>
          </div>
          <span className="bg-orange-500 text-white px-3 py-1 rounded font-bold text-sm">ALTO</span>
        </div>
      </div>
    </div>
  );
}

export default Matriz;