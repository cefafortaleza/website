import { ChangeEvent, useState } from "react";
import Layout from "../components/Layout";

import Button from '../components/Button';

export default function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateForm = (field: string) => (value: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [field]: [value] });

  const submit = () => {
    console.log('submitted');
  }

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-4">
        <div className="rounded-lg border border-[#333] shadow-lg flex flex-col gap-8 p-8">
          <p className="text-center">Entre em contato!</p>
          <div className="name flex flex-col gap-2">
            <p className="font-[900]">Nome</p>
            <input
              className="input border border-[#333] w-full px-4 py-2"
              type="text"
              onChange={updateForm("name")}
            />
          </div>
          <div className="email flex flex-col gap-2">
            <p className="font-[900]">Email</p>
            <input
              className="input border border-[#333] w-full px-4 py-2"
              type="text"
              onChange={updateForm("email")}
            />
          </div>
          <div className="name flex flex-col gap-2">
            <p className="font-[900]">Mensagem</p>
            <input
              className="input border border-[#333] w-full min-h-[160px] px-4 py-2"
              type="textarea"
              onChange={updateForm("message")}
            />
          </div>
          <Button onClick={submit} className="mx-auto">Enviar mensagem!</Button>
        </div>
      </div>
    </Layout>
  );
}
