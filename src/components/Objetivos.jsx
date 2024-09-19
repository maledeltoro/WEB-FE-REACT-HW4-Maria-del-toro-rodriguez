const Objetivos= () => {
  const objectives = [
    { id: 2000, goal: 'Ampliar la membresía estudiantil', target: '20%', progress: '8%', compliance: 40 },
    { id: 2001, goal: 'Organizar talleres técnicos', target: '5 talleres', progress: '3 talleres', compliance: 60 },
    { id: 2002, goal: 'Desarrollar un proyecto colaborativo anual', target: '100%', progress: '50%', compliance: 50 },
    { id: 2003, goal: 'Fomentar alianzas con empresas de tecnología', target: '3 alianzas', progress: '1 alianza', compliance: 33 },
  ];

  const getStatusColor = (compliance) => {
    if (compliance <= 35) return 'text-red-500';
    if (compliance <= 75) return 'text-orange-500';
    return 'text-green-500';
  };

  return (
    <section className="p-8 bg-white text-lightpink">
      <h2 className="text-2xl font-bold mb-4 text-pink">3. Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-white">
              <th className="border px-4 py-2 text-lightblue">Código</th>
              <th className="border px-4 py-2 text-lightblue">Objetivo</th>
              <th className="border px-4 py-2 text-lightblue">Meta</th>
              <th className="border px-4 py-2 text-lightblue">Avance</th>
              <th className="border px-4 py-2 text-lightblue">Cumplimiento</th>
              <th className="border px-4 py-2 text-lightblue">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id} className="bg-white">
                <td className="border px-4 py-2 text-lightpink">{obj.id}</td>
                <td className="border px-4 py-2 text-lightpink">{obj.goal}</td>
                <td className="border px-4 py-2 text-lightpink">{obj.target}</td>
                <td className="border px-4 py-2 text-lightpink">{obj.progress}</td>
                <td className="border px-4 py-2 text-lightpink">{obj.compliance}%</td>
                <td className={`border px-4 py-2 ${getStatusColor(obj.compliance)}`}>
                  {obj.compliance <= 35 ? 'Crítico' : obj.compliance <= 75 ? 'Aceptable' : 'Exitoso'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Objetivos;


  