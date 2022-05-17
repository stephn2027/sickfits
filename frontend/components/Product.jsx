import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Item from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

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
    </Item>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
