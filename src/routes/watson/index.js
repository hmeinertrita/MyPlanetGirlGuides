import React from 'react';
import Layout from '../../components/Layout';
import WatsonApp from './WatsonApp';

const title = 'Watson';

function action() {
  return {
    chunks: ['welcome'],
    title,
    component: (
      <Layout>
        <WatsonApp title={title} />
      </Layout>
    ),
  };
}

export default action;
