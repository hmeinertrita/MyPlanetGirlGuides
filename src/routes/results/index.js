import React from 'react';
import Layout from '../../components/Layout';
import Results from './Results';

const title = 'swag';

function action() {
  return {
    chunks: ['welcome'],
    title: 'Welcome',
    component: (
      <Layout>
        <Results title={title} />
      </Layout>
    ),
  };
}

export default action;
