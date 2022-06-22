import { useRouter } from 'next/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

export default function OrderPage() {
  const { query } = useRouter();
  return (
    <div>
      <Pagination page={Number(query.page) || 1} />

      <Products />
      <Pagination page={Number(query.page) || 1} />
    </div>
  );
}
