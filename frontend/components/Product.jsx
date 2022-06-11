import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import Item from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <Item>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />

      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link href={{ pathname: 'update', query: { id: product.id } }}>
          Edit 🖌
        </Link>
        <DeleteProduct>Delete</DeleteProduct>
      </div>
    </Item>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
