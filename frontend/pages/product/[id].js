/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
