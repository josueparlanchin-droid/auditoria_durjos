import { Shield, Github, Building } from 'lucide-react';
import Mother from './components/Mother'; // La Madre que contiene todo

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800">
      
      {/* HEADER STICKY: Se queda pegado arriba al hacer scroll */}
      <header className="bg-slate-900 text-white shadow-lg border-b-4 border-red-600 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={44} className="text-red-500" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Auditoría de Seguridad - Unidad 3
              </h1>
              <p className="text-slate-400 mt-1 font-medium text-sm flex items-center gap-2">
                <Building size={16} /> INACAP Valparaíso - T13034
              </p>
            </div>
          </div>
          
          {/* BOTONES DE NAVEGACIÓN */}
          <nav className="flex flex-wrap gap-2 text-sm font-semibold">
            <a href="#ataques" className="bg-slate-800 hover:bg-red-600 px-4 py-2 rounded-md transition-colors">Ataques en DVWA</a>
            <a href="#activos" className="bg-slate-800 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors">Activos</a>
            <a href="#matriz" className="bg-slate-800 hover:bg-slate-600 px-4 py-2 rounded-md transition-colors">Matriz de Riesgo</a>
            <a href="#controles" className="bg-slate-800 hover:bg-emerald-600 px-4 py-2 rounded-md transition-colors">Prevención</a>
            <a href="#recuperacion" className="bg-slate-800 hover:bg-indigo-600 px-4 py-2 rounded-md transition-colors">Plan DRP</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">
        {/* Aquí llamamos a la Mother, que carga el Groove y los componentes */}
        <Mother />
      </main>

      {/* MARCA DE AGUA / FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm py-8 px-6 border-t-4 border-slate-800 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-semibold text-slate-300 flex flex-col md:flex-row md:items-center gap-2">
              Auditor a cargo: 
              {/* LINK A TU GITHUB */}
              <a 
                href="https://github.com/josueparlanchin-droid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700"
              >
                <Github size={16} /> Josué Alexander Durand Palacios
              </a>
            </span>
            <span className="text-slate-500 mt-2">© 2026 - Universidad del Pacífico (E05)</span>
          </div>

          <div className="flex flex-col items-center md:items-end text-slate-500 font-medium">
            <span>Docente: Rubén Schnettler</span>
            <span>Ingeniería en Informática</span>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;