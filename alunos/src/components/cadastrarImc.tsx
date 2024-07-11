import React, { useState } from 'react';

const NovoImc: React.FC = () => {
  const [imc, setimc] = useState('');
  const [classificao, setclassificao] = useState('');
  const [grau, setgrau] = useState('');

  const handleCadastroimc = async () => {
    try {
      const response = await fetch('http://localhost:5292/aluno/cadastrarimc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imc,
          classificao,
          grau,
        })
      });

      if (response.ok) {
        console.log('cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar :', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Cadastrar Novo imc</h2>
      <form onSubmit={handleCadastrarimc}>
        <label>
          imc:
          <input type="text" value={imc} onChange={(e) => setimc(e.target.value)} />
        </label>
        <br />
        <label>
          classificao:
          <input type="text" value={classificao} onChange={(e) => setclassificao(e.target.value)} />
        </label>
        <br />
        <label>
          grau:
          <input type="text" value={grau} onChange={(e) => setgrau(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar imc</button>
      </form>
    </div>
  );
};

export default NovoImc;