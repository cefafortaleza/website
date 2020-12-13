import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PalestraWrapper from '../components/PalestraWrapper';
import Palestra from '../components/Palestra';
import PalestraDetails from '../components/PalestraDetails';

import Layout from '../components/Layout';

const PalestrasPage = () => {
  return (
    <Layout>
      <>
        <Container>
          <SectionTitle big>Palestras</SectionTitle>
          <div className="social-media-posts-wrapper">
            <div className="post-wrapper">
              <div className="post" style={{
              background: `url(../img/palestra-1-thumbnail.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              }} />
            </div>
            <div className="post-wrapper">
              <div className="post" style={{
              background: `url(../img/palestra-2-thumbnail.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              }} />
            </div>
            <div className="post-wrapper">
              <div className="post" style={{
              background: `url(../img/palestra-3-thumbnail.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              }} />
            </div>
            <div className="post-wrapper">
              <div className="post" style={{
              background: `url(../img/palestra-4-thumbnail.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              }} />
            </div>
          </div>
        </Container>
      </>
    </Layout>
  );
};

export default PalestrasPage;
