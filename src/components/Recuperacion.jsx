import { RotateCcw } from 'lucide-react';

function Recuperacion() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-indigo-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <RotateCcw className="text-indigo-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Plan de Recuperación ante Desastres (DRP)
        </h2>
      </div>

      <div className="space-y-4 text-slate-600">
        <p className="mb-4">Si los controles preventivos son superados y se confirma una brecha en la plataforma, el protocolo inmediato es:</p>
        
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Contención y Aislamiento:</strong> Desconexión del portal afectado y redirección a un sitio estático de "Mantenimiento Programado" para evitar exfiltración.</li>
          <li><strong>Restauración (Cold Backup):</strong> Ejecución de la restauración a partir del último respaldo offline de la noche anterior, garantizando registros limpios.</li>
          <li><strong>Análisis Forense y Parcheo:</strong> Remediación del código vulnerable e invalidación forzosa de las contraseñas de toda la comunidad universitaria.</li>
        </ol>
      </div>
    </div>
  );
}

export default Recuperacion;