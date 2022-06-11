/* eslint-disable react/prop-types */
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';
import CircularStatic from './helpers/LoadingProgress';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const UPDATE_SINGLE_PRODUCT = gql`
  mutation UPDATE_SINGLE_PRODUCT(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. get the exsisting product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  // 2. we need to get the mutation to update product

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_SINGLE_PRODUCT, {
    variables: {
      id,
      // TODO pass in updates to product here
    },
  });
  // 3. Create some state from the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(data?.Product);
  if (loading) return <CircularStatic value={100} />;
  if (error) return <p>There is an error: {error.message}</p>;
  // 4. we need the form to handle updates
  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: inputs.price,
            },
          });
          console.log(res);
          // todo: handle Update

          //   const res = await createProduct();

          //   clearForm();
          //   // Go to products page after submitting the form
          //   Router.push({
          //     pathname: `/products/${res.data.createProduct.id}`,
          //   });
        }}
      >
        <DisplayError error={error || updateError} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          <label htmlFor="name">
            {' '}
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              name="description"
              id="description"
              placeholder="About this item"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Update Product</button>
        </fieldset>
      </Form>
    </div>
  );
}
