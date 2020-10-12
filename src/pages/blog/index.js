import React from 'react';

import Layout from '../../components/Layout';
import PostList from '../../components/PostList';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <PostList />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
