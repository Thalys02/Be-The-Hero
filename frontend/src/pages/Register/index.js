import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsApp] = useState('');
    const [cidade,setCidade] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function  handleRegister(event){
        event.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            cidade,
            uf
        };
        try {
            const response =  await api.post('ongs',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={event=>setName(event.target.value)}
                     />
                    <input 
                    type="email" placeholder="Email"
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                    />
                    <input
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={event=>setWhatsApp(event.target.value)}
                    />
                    <div className="input-group">
                        <input
                        placeholder="Cidade"
                        value={cidade}
                        onChange={event=>setCidade(event.target.value)}
                        />
                        <input
                        placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={event=>setUf(event.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}