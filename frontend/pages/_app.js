/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Nprogress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.func,
};
// tell next.js that it needs to fetch all of the queries that is in all of the children components//
// MyApp.getInitialProps is a next method that is asynchronous //
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    // eslint-disable-next-line no-unused-vars
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default withData(MyApp);
