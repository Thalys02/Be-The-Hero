import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [titulo,setTitulo] = useState('');
  const [descricao,setDescricao] = useState('');
  const [valor,setValor] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncidenst(e){
    e.preventDefault();
    const data = {
      titulo,
      descricao,
      valor
    };
    try {
      await api.post('incidents',data,{
        headers:{
          Authorization:ongId,
        }
      });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }

  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncidenst}>
          <input 
            placeholder="Título do caso" 
            value={titulo}
            onChange={e=>setTitulo(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={descricao}
            onChange={e=>setDescricao(e.target.value)}
          />
          <input 
            placeholder="Valor em reais" 
            value={valor}
            onChange={e=>setValor(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
