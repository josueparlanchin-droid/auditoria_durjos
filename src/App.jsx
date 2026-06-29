import React from 'react';
import { Shield } from 'lucide-react';
import Mother from './components/Mother';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header Corporativo */}
      <header className="bg-slate-900 text-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Shield className="text-blue-500 w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold tracking-tight">Portal de Auditoría Web</h1>
              <p className="text-xs text-slate-400">Asignatura: Fundamentos de Seguridad de la Información</p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            {/* Enlace a tu GitHub añadido aquí */}
            <a 
              href="https://github.com/josueparlanchin-droid/auditoria_durjos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
            >
              Auditor: Josué Durand P.
            </a>
            <p className="text-xs text-slate-400">Evaluación N°3 • INACAP Valparaíso</p>
          </div>
        </div>
      </header>

      {/* Cuerpo Principal del Informe */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-slate-800 text-slate-100 p-4 rounded-xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 shadow-inner">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Entidad Evaluada:</span>
            <h3 className="text-lg font-bold text-white">E05 - Universidad del Pacífico</h3>
          </div>
          <div className="text-xs md:text-sm bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300">
            Docente: <strong className="text-white font-medium">Rubén Schnettler</strong>
          </div>
        </div>

        {/* Renderizado de Secciones */}
        <section className="space-y-6">
          <Mother />
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-500 text-center py-6 border-t border-slate-800 text-xs">
        <p>© 2026 Auditoría de Seguridad de la Información - Aplicación Académica</p>
      </footer>
    </div>
  );
}

export default App;