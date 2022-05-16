import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There is an error: {error.message}</p>;
  return (
    <div>
      Products!
      <div>
        {data.allProducts.map((product) => (
          <>
            <p key={product.id}>{product.name}</p>
            <img
              src={product.photo.image.publicUrlTransformed}
              alt=""
              width="250px"
              height="250px"
            />
          </>
        ))}
      </div>
    </div>
  );
}
