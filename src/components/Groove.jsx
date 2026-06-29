import { ShieldAlert } from 'lucide-react';

function Groove() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-1 rounded-lg shadow-md mb-8 border-b-4 border-red-600">
      <div className="border border-slate-600 border-dashed rounded-md p-3 flex items-center justify-center gap-3">
        <ShieldAlert className="text-red-500 animate-pulse" size={24} />
        <span className="font-mono text-sm tracking-widest uppercase font-semibold text-slate-200">
          Flujo de Auditoría Activo - Entorno Universidad del Pacífico (E05)
        </span>
      </div>
    </div>
  );
}

export default Groove;