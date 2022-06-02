import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Image from 'next/image';
import DisplayError from './ErrorMessage';

/* eslint-disable react/prop-types */
const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading</p>;
  if (error) return <DisplayError>GraphQL error:{error}</DisplayError>;
  const { name, description, price, photo } = data.Product;
  return (
    <div>
      <img src={photo.image.publicUrlTransformed} alt={photo.altText} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
