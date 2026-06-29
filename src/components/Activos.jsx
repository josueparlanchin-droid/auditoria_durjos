import { Database, CreditCard, Users, BookOpen } from 'lucide-react';

function Activos() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-blue-600">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <BookOpen className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Activos de Información y Riesgos (Empresa E05)
        </h2>
      </div>
      
      <p className="text-slate-600 mb-6">
        Para la <strong>Universidad del Pacífico</strong>, los activos críticos son los que mantienen la continuidad académica y financiera. Los 4 principales son:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-md p-4 bg-slate-50">
          <Database className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Sistema de Gestión Académica (SGA)</h3>
          <p className="text-sm text-slate-600 mt-2">Custodia notas e historial curricular. Su compromiso implica la pérdida de integridad académica y legal.</p>
        </div>
        
        <div className="border rounded-md p-4 bg-slate-50">
          <CreditCard className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Pasarela de Aranceles</h3>
          <p className="text-sm text-slate-600 mt-2">Procesa matrículas y mensualidades. Un ataque aquí vulnera la continuidad financiera y confianza del alumno.</p>
        </div>

        <div className="border rounded-md p-4 bg-slate-50">
          <Users className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Base de Datos de Identidad</h3>
          <p className="text-sm text-slate-600 mt-2">Almacena RUT, direcciones y datos de contacto de toda la comunidad universitaria (profesores y alumnos).</p>
        </div>

        <div className="border rounded-md p-4 bg-slate-50">
          <BookOpen className="text-blue-500 mb-2" />
          <h3 className="font-bold text-slate-700">Repositorios de Investigación</h3>
          <p className="text-sm text-slate-600 mt-2">Contiene propiedad intelectual, tesis y proyectos científicos. Su exposición degrada la reputación de la institución.</p>
        </div>
      </div>
    </div>
  );
}

export default Activos;