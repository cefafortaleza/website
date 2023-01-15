import Link from "next/link";
import Button from "../components/Button";

import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const instagramList = [
    {
      url: "https://www.instagram.com/p/CgC43S8OuCn/",
      image: "/instagram-01.jpeg",
    },
    {
      url: "https://www.instagram.com/p/CkdaqITr_Ng/",
      image: "/instagram-02.jpeg",
    },
    {
      url: "https://www.instagram.com/p/CSIHD3mrUX9/",
      image: "/instagram-03.jpeg",
    },
    {
      url: "https://www.instagram.com/p/CYE_P6xr3xi/",
      image: "/instagram-04.jpeg",
    },
  ];

  return (
    <Layout>
      {/* 1 - slider */}

      {/* 2 - instagram */}
      <div className="container mx-auto flex flex-col gap-4 mb-8">
        {/* Section Title */}
        <SectionTitle as="h2">Redes Sociais</SectionTitle>
        <div className="grid gap-4 grid-cols-2 max-w-xl ">
          {instagramList.map(({ url, image }) => (
            <a href={url} target="_top" rel="noopener" key={url}>
              <img src={image} className="w-64 h-64 block " />
            </a>
          ))}
        </div>
      </div>
      {/* 3 - latest posts */}
      <div className="container mx-auto flex flex-col gap-4">
        {/* Section Title */}
        <SectionTitle as="h2">Fique Ligado</SectionTitle>

        {/* Posts Wrapper */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Post */}
          <div className="flex gap-10">
            {/* Image */}
            <div className="w-64 h-64 bg-red-400" />
            {/* Content */}
            <div className="max-w-xs flex flex-col gap-4  justify-center">
              <div className="flex flex-col gap-2 max-w-fit">
                <h2 className="font-bold text-md">
                  Assembléia Geral Ordinária 2020
                </h2>
                <span className="w-4 h-1 block bg-black" />
              </div>
              <p className="text-gray-600 font-thin text-sm mb-4">
                A Diretoria do CEFA convoca os sócios efetivos, aptos a votar, a
                participarem da Assembleia Geral Ordinária, que acontecera na
                data e formato descrito na imagem.
              </p>
              <Button asLink href="/grupo-musical">
                Clique aqui
              </Button>
            </div>
          </div>
          {/* Post */}
          <div className="flex gap-10">
            {/* Image */}
            <div className="w-64 h-64 bg-red-400" />
            {/* Content */}
            <div className="max-w-xs flex flex-col gap-4  justify-center">
              <div className="flex flex-col gap-2 max-w-fit">
                <h2 className="font-bold text-md">
                  Aniversário 79 Anos do CEFA
                </h2>
                <span className="w-4 h-1 block bg-black" />
              </div>
              <p className="text-gray-600 font-thin text-sm mb-4">
                Em 02.12.2020 a nossa casa Espírita comemorou 79 anos de
                atuação, promovendo o ideal Espírita, esclarecendo por meio dos
                estudos e consolando e acolhendo os corações que procuram Jesus.
                Somos gratos, Senhor, pela oportunidade de servir! Parabéns
                CEFA!!!
              </p>
              <Link href="#">
                <span className="rounded-sm bg-black font-bold text-white py-3 px-8">
                  Saiba mais
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 4 - banner - musical group */}
      <div className="w-full min-h-32 bg-bannerGrupoMusical bg-cover mb-4">
        <div className="container justify-center flex items-center mx-auto flex-col gap-6 py-28">
          <h2 className="text-[32px] leading-[32px] font-[900] text-black">
            Conheça o grupo musical francisco de assis
          </h2>
          <Link href="#">
            <span className="rounded-sm bg-black font-bold text-white py-3 px-8">
              Clique Aqui
            </span>
          </Link>
        </div>
      </div>
      {/* 5 - more from cefa */}
      <div className="container mx-auto flex flex-col gap-4 mb-4">
        {/* Section Title */}
        <SectionTitle size="large">Mais do Cefa</SectionTitle>
        <SectionTitle size="small">Doações Voluntárias</SectionTitle>
        <div className="flex flex-col gap-2 w-full">
          <p>
            O CEFA trabalha diversas atividades na Ação Social, voltadas ao
            atendimento de pessoas em condição de vulnerabilidade. São
            desenvolvidos quatro programas sociais: Coração Fraterno, Arte
            Feliz, Renascer e Mão Amiga. Para que essas atividades possam
            acontecer, a sua contribuição é muito importante.
          </p>
          <p>
            Preferencialmente, são bem-vindas doações de alimentos não
            perecíveis; materiais de higiene e limpeza; brinquedos; roupas;
            acessórios e utensílios em bom estado de conservação, que possam ser
            colocados em bazares ou para doação direta, além de roupas;
            utensílios de enxovais e mobiliários para atender às gestantes.
          </p>
          <p>
            Na impossibilidade desse tipo de contribuição, também é possível a
            realização de doações financeiras, por meio de depósito na seguinte
            Conta Poupança:
          </p>
          <p className="font-[900]">Centro Espírita Francisco de Assis</p>
          <div className="flex flex-col gap-1">
            <p>CNPJ: 07.130.297/0001-59</p>
            <p>Banco do Brasil (001)</p>
            <p>Agência: 8076-4</p>
            <p>Conta: 4520-9</p>
            <p>Variação: 51</p>
          </div>
        </div>
      </div>
      {/* 6 - banner - would you like to rent a book */}
      <div className="w-full min-h-32 bg-bannerBiblioteca bg-cover mb-4">
        <div className="container justify-center flex items-center mx-auto flex-col gap-6 py-28">
          <h2 className="text-[32px] font-[900] text-white">
            Gostaria de alugar um livro?
          </h2>
          <Link href="/biblioteca">
            <span className="rounded-sm bg-black font-bold text-white py-3 px-8">
              Conheça nossa biblioteca
            </span>
          </Link>
        </div>
      </div>
      {/* 7 - bookstore */}
      <div className="container mx-auto flex flex-col gap-4 mb-4">
        {/* Section Title */}

        <SectionTitle size="small">Livraria</SectionTitle>
        <div className="flex flex-col gap-2 w-full">
          <p>
            A Livraria Bezerra de Menezes, do Centro Espirita Francisco de Assis
            (CEFA), tem como principal objetivo a divulgação da Doutrina
            Espírita.
          </p>
          <p>
            Na Livraria do CEFA podem ser encontrados à venda diversos títulos
            da Literatura Espírita, voltados desde o público infantojuvenil até
            o público adulto.
          </p>
          <p>
            As vendas podem ser feitas tanto em dinheiro como no cartão (débito
            ou crédito), com parcelamento a partir de R$ 100,00. A livraria
            funciona diariamente, nos seguintes horários:
          </p>
          <Link href="/horarios">
            <span className="text-primary text-lg transition hover:underline">
              Clique aqui para ver os horários de funcionamento
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
