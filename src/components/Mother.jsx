import Groove from './Groove';
import Resumen from './Resumen';
import InyeccionSQL from './InyeccionSQL';
import Xss from './Xss';
import Comandos from './Comandos';

function Mother() {
  return (
    <div className="w-full animation-fade-in">
      {/* El Groove va primero para marcar el estilo de la auditoría */}
      <Groove />
      
      {/* Aquí cargamos a todos los hijos técnicos que ya creaste */}
      <Resumen />
      <InyeccionSQL />
      <Xss />
      <Comandos />
      
      {/* Más adelante, cuando armemos los de gestión (Activos, Matriz, etc.), 
          los agregaremos justo aquí abajo */}
    </div>
  );
}

export default Mother;