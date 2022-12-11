import Link from "next/link";

export default function Home() {
  return (
    <div className="border-4 border-red-900">
      {/* navbar */}
      <div className="container mx-auto flex justify-between py-8">
        {/* Logo */}
        <div></div>
        {/* Navbar */}
        <div className="flex gap-4">
          {[
            { label: "Sobre o Cefa", url: "/sobre" },
            { label: "Atividades", url: "/sobre" },
            { label: "Palestras", url: "/sobre" },
            { label: "Contato", url: "/contato" },
            {
              label: "Mais",
              subItems: [
                { label: "Horários", url: "/horarios" },
                { label: "Biblioteca", url: "/biblioteca" },
              ],
            },
          ].map(({ url, label, subItems }) => {
            if (url) {
              return (
                <Link href={url} passHref>
                  <span className="font-light text-xl transition hover:text-primary">
                    {label}
                  </span>
                </Link>
              );
            }

            if (Array.isArray(subItems)) {
              <p>{label}</p>;
            }
          })}
        </div>
      </div>
      {/* slider */}

      {/* instagram */}
      <div className="container mx-auto flex flex-col gap-4 mb-8">
        {/* Section Title */}
        <div className="flex flex-col gap-2 max-w-fit">
          <h2 className="font-black text-lg">Redes Sociais</h2>
          <span className="w-8 h-1 block bg-black" />
        </div>
        <div className="grid gap-4 grid-cols-2 max-w-xl border border-blue-400">
          <div className="w-64 h-64 block border border-red-400" />
          <div className="w-64 h-64 block border border-red-400" />
          <div className="w-64 h-64 block border border-red-400" />
          <div className="w-64 h-64 block border border-red-400" />
        </div>
      </div>
      {/* latest posts */}
      <div className="container mx-auto flex flex-col gap-4">
        {/* Section Title */}
        <div className="flex flex-col gap-2 max-w-fit">
          <h2 className="font-black text-lg">Fique ligado</h2>
          <span className="w-8 h-1 block bg-black" />
        </div>
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
              <Link href="#">
                <span className="rounded-sm bg-black font-bold text-white py-3 px-8">
                  Saiba mais
                </span>
              </Link>
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
      {/* banner - musical group */}
      <div className="w-full min-h-32 bg-blue-200">
        <div className="container justify-center flex items-center mx-auto flex-col gap-6 py-36">
          <h2 className="text-3xl font-bold">Conheça o grupo musical francisco de assis</h2>
          <Link href="#">
            <span className="rounded-sm bg-black font-bold text-white py-3 px-8">
              Clique Aqui
            </span>
          </Link>
        </div>
      </div>
      {/* more from cefa */}
      {/* banner - would you like to rent a book */}
      {/* bookstore */}
      {/* footer */}
    </div>
  );
}
