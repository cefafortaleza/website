import Layout from "../components/Layout";

import SectionTitle from "../components/SectionTitle";

export default function Palestras() {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        <SectionTitle size='large'>Palestras</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-fit">
          <img src="/palestra-1-thumbnail.jpg" className="w-[300px] h-[300px]"/>
          <img src="/palestra-2-thumbnail.jpg" className="w-[300px] h-[300px]"/>
          <img src="/palestra-3-thumbnail.jpg" className="w-[300px] h-[300px]"/>
          <img src="/palestra-4-thumbnail.jpg" className="w-[300px] h-[300px]"/>
        </div>
        </div>
    </Layout>
  );
}
