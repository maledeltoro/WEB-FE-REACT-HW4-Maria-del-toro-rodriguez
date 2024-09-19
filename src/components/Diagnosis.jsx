const Diagnosis = () => {
  const data = [
    { id: 1, type: "Debilidades", items: [
      { id: 1, description: "Falta de recursos económicos para financiar proyectos a gran escala." },
      { id: 2, description: "Poca visibilidad en redes sociales y plataformas digitales." },
      { id: 3, description: "Dependencia de un número reducido de líderes para la organización de actividades." },
    ]},
    { id: 2, type: "Oportunidades", items: [
      { id: 1, description: "Crecimiento del interés por la Inteligencia Artificial y la Programación entre los estudiantes." },
      { id: 2, description: "Posibilidad de colaboración con empresas tecnológicas locales para proyectos y talleres." },
      { id: 3, description: "Acceso a plataformas online para cursos gratuitos o de bajo costo." },
    ]},
    { id: 3, type: "Fortalezas", items: [
      { id: 1, description: "Equipo comprometido y apasionado por la tecnología y la innovación." },
      { id: 2, description: "Experiencia en la organización de talleres y hackathons exitosos." },
      { id: 3, description: "Red de contactos con profesionales del sector tecnológico." },
    ]},
    { id: 4, type: "Amenazas", items: [
      { id: 1, description: "Competencia de otros grupos estudiantiles bien establecidos dentro de la universidad." },
      { id: 2, description: "Dificultades para retener a miembros activos debido a la carga académica." },
      { id: 3, description: "Riesgo de desinterés si no se renuevan actividades y temas de los talleres." },
    ]},
  ];

  return (
    <section className="p-4 sm:p-8 bg-white text-lightblue">
      <h2 className="text-2xl font-bold mb-4 text-pink">1. Diagnóstico Actual - Grupo Estudiantil Innova</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((section) => (
          <div key={section.id} className="border p-4 bg-lightblue rounded-lg">
            <h3 className="font-bold mb-2 text-lg text-pink">{section.type}</h3>
            <ul className="list-disc list-inside space-y-2 text-black">
              {section.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diagnosis;
