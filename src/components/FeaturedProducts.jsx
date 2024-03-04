import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

export default function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle title={'featured products'} />
      <ProductsGrid />
    </div>
  );
}
