import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const InstagramAuthPage = () => {
  const [fetchedData, setFetchedData] = useState();

  const fetchData = async () => {
    await fetch(
      'https://graph.instagram.com/3929361093829058/media?&access_token=IGQVJXalFkOHE3ZAURWUjE2S0pxWFJyaDFELWlhZA3pISFFsaXB2SDRaXzY5UzdJdGtKa1p2VlFPU21VS21ELVo3VDVpbUJNZAVhvTnJ1TGpESEhFZADNYdUlzd1pPVjBDYWRxa0VQTTZAwaEp2Y1E2Vk1BRwZDZD'
    ).then((response) => setFetchedData(response.data));
  };

  useEffect(() => {
    console.log('Fetched', fetchedData);
  }, [fetchedData]);

  useEffect(() => {
    fetchData();
    console.log('fetching..');
  }, []);
  return (
    <Layout>
      <Container>
        <SectionTitle>Instagram auth page</SectionTitle>
        <p>Conectar à conta do CEFA para apresentar o feed.</p>
        <p>
          Este app irá fazer uma varredura do perfil @cefafortaleza para
          apresentar fotos e vídeos com a hashtag #cefasite
        </p>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0&appId=245681733639256&autoLogAppEvents=1"
          nonce="sT51tqzn"
        ></script>
        <div
          class="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>
      </Container>
    </Layout>
  );
};

export default InstagramAuthPage;
