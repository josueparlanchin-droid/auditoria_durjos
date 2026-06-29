import { ShieldCheck, CheckCircle2 } from 'lucide-react';

function Controles() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-emerald-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <ShieldCheck className="text-emerald-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Políticas de Prevención y Mitigación
        </h2>
      </div>

      <div className="space-y-4 text-slate-600">
        <div className="flex gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
          <p><strong>Consultas Parametrizadas:</strong> Prohibida la concatenación dinámica. La adopción de <em>Prepared Statements</em> aislará los comandos SQL, erradicando la inyección SQL.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
          <p><strong>Sanitización y Codificación:</strong> Toda entrada debe ser validada y cualquier dato renderizado debe aplicar <em>HTML Entity Encoding</em> para neutralizar ataques XSS.</p>
        </div>
        <div className="flex gap-3">
          <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
          <p><strong>Despliegue de WAF:</strong> Integrar un Web Application Firewall para analizar el tráfico entrante e interceptar comandos anómalos hacia el servidor.</p>
        </div>
      </div>
    </div>
  );
}

export default Controles;