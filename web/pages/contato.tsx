import {ChangeEvent, useState} from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import classNames from 'classnames';

export default function Contato() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false); // Add sending state

  const updateForm =
    (field: string) => (value: ChangeEvent<HTMLInputElement>) =>
      setForm({...form, [field]: value.target.value});

  const submit = async () => {
    setSending(true); // Set sending state to true when button is clicked
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Email sent successfully!');
        setForm({name: '', email: '', message: ''});
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }

    setSending(false); // Set sending state back to false when message is sent
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-4 px-8 lg:px-0">
        <div className="rounded-lg border border-[#333] shadow-lg flex flex-col gap-8 p-8">
          <p className="text-center">Entre em contato!</p>
          <div className="name flex flex-col gap-2">
            <p className="font-[900]">Nome</p>
            <input
              className="input border border-[#333] w-full px-4 py-2"
              type="text"
              value={form.name}
              onChange={updateForm('name')}
            />
          </div>
          <div className="email flex flex-col gap-2">
            <p className="font-[900]">Email</p>
            <input
              className="input border border-[#333] w-full px-4 py-2"
              type="text"
              value={form.email}
              onChange={updateForm('email')}
            />
          </div>
          <div className="name flex flex-col gap-2">
            <p className="font-[900]">Mensagem</p>
            <textarea
              className="input border border-[#333] w-full min-h-[160px] px-4 py-2"
              value={form.message}
              onChange={updateForm('message')}
            />
          </div>
          <Button
            onClick={submit}
            className={classNames('mx-auto', {'opacity-50 hover:not-allowed': sending})}
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar mensagem!'}{' '}
            {/*Conditional rendering based on sending state*/}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
