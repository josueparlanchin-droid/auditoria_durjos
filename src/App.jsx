import { Shield } from 'lucide-react';
import Mother from './components/Mother'; // Importamos a la madre de todos los componentes

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-900 text-white py-10 px-6 shadow-lg border-b-4 border-red-600">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={44} className="text-red-500" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Auditoría de Seguridad - Unidad 3
            </h1>
            <p className="text-slate-400 mt-1 font-medium">
              T13034 Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">
        {/* Aquí insertamos el contenedor maestro que trae todo el contenido */}
        <Mother />
      </main>

      <footer className="bg-slate-900 text-slate-400 text-sm py-8 px-6 border-t-4 border-slate-800 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-semibold text-slate-300">
            Auditor a cargo: Josué Alexander Durand Palacios
          </span>
          <span className="text-slate-500">
            Docente: Rubén Schnettler - INACAP Valparaíso
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;