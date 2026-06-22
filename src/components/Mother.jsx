import Groove from './Groove';
import Resumen from './Resumen';
import InyeccionSQL from './InyeccionSQL';
import Xss from './Xss';
import Comandos from './Comandos';
import Activos from './Activos';
import Matriz from './Matriz';
import Controles from './Controles';
import Recuperacion from './Recuperacion';

function Mother() {
  return (
    <div className="w-full animation-fade-in">
      {/* El Groove inicia la auditoría visual */}
      <Groove />
      
      <div id="resumen" className="scroll-mt-32">
        <Resumen />
      </div>
      
      {/* Al agrupar estos 3 bajo el ID "ataques", el botón saltará directo a esta zona */}
      <div id="ataques" className="scroll-mt-32">
        <InyeccionSQL />
        <Xss />
        <Comandos />
      </div>
      
      <div id="activos" className="scroll-mt-32">
        <Activos />
      </div>
      
      <div id="matriz" className="scroll-mt-32">
        <Matriz />
      </div>
      
      <div id="controles" className="scroll-mt-32">
        <Controles />
      </div>
      
      <div id="recuperacion" className="scroll-mt-32">
        <Recuperacion />
      </div>
    </div>
  );
}

export default Mother;