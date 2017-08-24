import React from 'react';
import Layout from '../../components/Layout';
import TweetsApp from './TweetsApp';

const title = 'Tweets';

function action() {
  return {
    chunks: ['welcome'],
    title,
    component: (
      <Layout>
        <TweetsApp title={title} />
      </Layout>
    ),
  };
}

export default action;
