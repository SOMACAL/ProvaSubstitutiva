import React, { useState } from 'react';

const AlteracaoLivro: React.FC = () => {
  const [cpf, setcpf] = useState('');
  const [grau, setgrau] = useState('');
  const [imc, setimc] = useState('');

  const handleAlterarimc = async () => {
    try {
      const response = await fetch(`http://localhost:5124/imc/alterar/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cpf,
          grau,
          imc,
        })
      });

      if (response.ok) {
        console.log('Alterado com sucesso!');
      } else {
        console.error('Erro ao alterar :', await response.text());
      }
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
    }
  };

  return (
    <div>
      <h2>Alteração de Imc</h2>
      <form onSubmit={handleAlterarimc}>
       
        <label>
          cpf:
          <input type="text" value={cpf} onChange={(e) => getcpf(e.target.value)} />
        </label>
        <br />
        <label>
          Novo grau :
          <input type="text" value={grau} onChange={(e) => setgrau(e.target.value)} />
        </label>
        <br />
        <label>
          Novo imc:
          <input type="text" value={imc} onChange={(e) => setImc(e.target.value)} />
        </label>
        <br />
        <button type="submit">Alterar Imc</button>
      </form>
    </div>
  );
};

export default Alterarimc;