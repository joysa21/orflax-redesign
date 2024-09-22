import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import products from '../../data/products'; // Assuming you have a products data file
import { Product } from '../../data/products';

const ProductsPage = () => {
  return (
    <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <nav className="text-secondaryGray mb-4">
          <Link to="/" className="hover:underline">Home</Link> /  <span className="text-secondaryGray">  Products</span>
        </nav>
        <h1 className="text-4xl font-bold text-secondaryGray mb-2 font-secondary">Our Products</h1>
        <p className="text-secondaryGray mb-8">
          Our brand of wires & cables matches highest international standards for quality and dependability each Cable/Wire undergoes rigorous quality check at every stage right from purchasing of raw materials to designing, manufacturing & dispatching.
        </p>
        <div className="flex justify-between items-center mb-4">
          <button className="text-secondaryGray">Hide Filters</button>
          <span className="text-secondaryGray">24 items</span>
          <button className="text-secondaryGray">Sort ⇅</button>
        </div>
        <div className="flex flex-wrap">
          <aside className="w-full md:w-1/4 pr-4">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondaryGray">Type</h2>
              {/* Add filter options here */}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondaryGray">Metal</h2>
              {/* Add filter options here */}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondaryGray">Style</h2>
              {/* Add filter options here */}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondaryGray">Length</h2>
              {/* Add filter options here */}
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-secondaryGray">Price</h2>
              {/* Add filter options here */}
            </div>
          </aside>
          
          <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product: Product, index: number) => (
              <div key={index} className="p-2 rounded-lg shadow-md border border-4 border-white">
                <div className="relative mb-4 rounded overflow-hidden bg-gradient-to-b from-white/0 to-white">
                  <img 
                    src={`${product.image}`} 
                    alt={product.name} 
                    className="object-contain z-20" 
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-secondaryGray">from Rs.{product.price}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
