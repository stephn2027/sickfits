import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import CircularStatic from './helpers/LoadingProgress';
import PaginationStyles from './styles/PaginationStyles';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <CircularStatic value={100} />;
  if (error) return <DisplayError error={error} />;
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - Page {page} of ____</title>
      </Head>
      <Link href="/">← Prev</Link>
      <p>Page __ of ___</p>
      <p>{data._allProductsMeta.count} Total Items</p>
      <Link href="/">Next →</Link>
    </PaginationStyles>
  );
}
