import React, { useState } from 'react';

const Novousuario: React.FC = () => {
  const [nome, setnome] = useState('');
  const [cpf, setcpf] = useState('');

  const handleCadastroimc = async () => {
    try {
      const response = await fetch('http://localhost:5292/aluno/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          cpf,
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
      <h2>Cadastrar Novo usuario</h2>
      <form onSubmit={handleCadastrar}>
        <label>
          nome:
          <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} />
        </label>
        <br />
        
        <label>
          cpf:
          <input type="text" value={cpf} onChange={(e) => setcpf(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar usuario</button>
      </form>
    </div>
  );
};

export default Novousuario;