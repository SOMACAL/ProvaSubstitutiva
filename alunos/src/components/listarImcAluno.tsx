import React, { useEffect, useState } from 'react';

type EstatisticasLivro = {
  id: number;
  nome: string;
  cpf: string;
};

const listarimc: React.FC = () => {
  const [listarAluno, setlistarAluno] = useState<listarAluno[]>([]);

  useEffect(() => {
    const fetchlistarAluno = async () => {
      try {
        const response = await fetch( 'http://localhost:5124/aluno/listar');

        if (response.ok) {
          const data = await response.json();
          setlistarAluno(data);
        } else {
          console.error('Erro ao listar:', await response.text());
        }
      } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
      }
    };

    fetchlistarAluno();
  }, []);

  return (
    <div>
      <h2>Listar imc</h2>
      {listarAluno.map((nome) => (
        <div key={nome.cpf}>
          <h3>{nome.cpf}</h3>
          <p>lista : {nome.cpf}</p>
        </div>
      ))}
    </div>
  );
};

export default listarAluno;