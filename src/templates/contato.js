import React, { useState } from 'react';

import Container from '../components/Container';

import Layout from '../components/Layout';

const ContatoPage = () => {
  const [contactForm, setContactForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleInput = (field) => (event) =>
    setContactForm({ ...contactForm, [field]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Aconteceu um problema, por favor tente novamente mais tarde!');
  };

  return (
    <Layout>
      <Container>
        <div className="form-wrapper" id="contato">
          <h3>Entre em contato!</h3>
          <form onSubmit={handleSubmit} className="formulario">
            <div className="input-wrapper">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                value={contactForm.nome}
                onChange={handleInput('nome')}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="nome">Email</label>
              <input
                id="email"
                type="text"
                value={contactForm.email}
                onChange={handleInput('email')}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="nome">Mensagem</label>
              <textarea
                id="mensagem"
                value={contactForm.mensagem}
                onChange={handleInput('mensagem')}
              />
            </div>
            <button type="submit" className="button">
              Enviar mensagem!
            </button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default ContatoPage;
