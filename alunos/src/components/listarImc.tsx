import React, { useEffect, useState } from 'react';

type EstatisticasLivro = {
  id: number;
  nome: string;
  imc: string;
};

const listarimc: React.FC = () => {
  const [listarimc, setlistarimc] = useState<listarimc[]>([]);

  useEffect(() => {
    const fetchlistarimc = async () => {
      try {
        const response = await fetch(`http://localhost:5124/aluno/listarimc`);

        if (response.ok) {
          const data = await response.json();
          setlistarimc(data);
        } else {
          console.error('Erro ao listar:', await response.text());
        }
      } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
      }
    };

    fetchlistarimc();
  }, []);

  return (
    <div>
      <h2>Listar imc</h2>
      {listarimc.map((nome) => (
        <div key={nome.imc}>
          <h3>{nome.imc}</h3>
          <p>lista : {nome.imc}</p>
        </div>
      ))}
    </div>
  );
};

export default listarimc;