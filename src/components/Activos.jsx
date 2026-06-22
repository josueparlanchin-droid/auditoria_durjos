import { Database, CreditCard, Users, Briefcase } from 'lucide-react';

function Activos() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-blue-600">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Briefcase className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Activos de Información y Riesgos
        </h2>
      </div>
      
      <p className="text-slate-600 mb-6">
        En el contexto de la Universidad del Pacífico, los activos críticos residen en la infraestructura digital de su portal web. Los principales identificados son:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4 bg-slate-50">
          <Database className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Sistema de Gestión Académica (SGA)</h3>
          <p className="text-sm text-slate-600 mt-2">Custodia el historial curricular y notas. Su compromiso implica la pérdida de la integridad académica.</p>
        </div>
        
        <div className="border rounded-md p-4 bg-slate-50">
          <CreditCard className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Pasarela de Aranceles</h3>
          <p className="text-sm text-slate-600 mt-2">Procesa matrículas y mensualidades. Un ataque aquí vulnera la continuidad financiera.</p>
        </div>

        <div className="border rounded-md p-4 bg-slate-50">
          <Users className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Datos Personales (PII)</h3>
          <p className="text-sm text-slate-600 mt-2">Información sensible de estudiantes y docentes (RUT, direcciones, contactos).</p>
        </div>
      </div>
    </div>
  );
}

export default Activos;