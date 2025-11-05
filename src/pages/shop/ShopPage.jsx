import { useState, useEffect } from "react";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";
import ProductsCart from "./ProductsCart";
import ShopFiltering from "./ShopFiltering";
import Loading from "../../components/Loading";

const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const { category, color, priceRange } = filtersState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  const [productsPerPage] = useState(8);

  const {
    data: productsData = {},
    isLoading,
    error,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productsPerPage,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  const { products, totalPages, totalProducts } = productsData?.data || {};

  // handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // clear filters
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "",
    });
    setCurrentPage(1);
  };

  const startingPoint = (currentPage - 1) * productsPerPage + 1;
  const endProducts = startingPoint + products.length - 1;

  return (
    <>
      <section className="shop__hero">
        <div className={`shop__hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="shop__hero-text">
            <span className="shop__hero-subtitle">Premium Collection</span>
            <h1 className="shop__hero-title">Shop Women's Fashion</h1>
            <p className="shop__hero-description">
              Discover the Hottest Picks: Elevate Your Style with Our Curated
              Collection of Trending Women's Fashion Products
            </p>
          </div>
          <div className="shop__hero-stats">
            <div className="shop__stat">
              <span className="shop__stat-number">{totalProducts || 0}</span>
              <span className="shop__stat-label">Products</span>
            </div>
            <div className="shop__stat">
              <span className="shop__stat-number">{filters.categories.length - 1}</span>
              <span className="shop__stat-label">Categories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="shop__main">
        <div className={`shop__container ${isVisible ? 'visible' : ''}`}>
          {/* Filters Sidebar */}
          <aside className="shop__filters">
            <div className="shop__filters-header">
              <h3 className="shop__filters-title">Filters</h3>
              <button 
                onClick={clearFilters}
                className="shop__filters-clear"
              >
                Clear All
              </button>
            </div>
            <ShopFiltering
              filters={filters}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Products Section */}
          <div className="shop__products">
            <div className="shop__products-header">
              <div className="shop__results-info">
                <span className="shop__results-text">
                  Showing {startingPoint} to {endProducts} of {totalProducts} products
                </span>
              </div>
            </div>
            
            <ProductsCart products={products} />

            {/* Pagination */}
            {products.length > 0 && totalPages > 1 && (
              <div className="shop__pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="shop__pagination-btn shop__pagination-btn--prev"
                >
                  Previous
                </button>
                
                <div className="shop__pagination-numbers">
                  {[...Array(Math.min(totalPages, 7))].map((_, index) => {
                    const pageNum = index + 1;
                    let displayNum = pageNum;
                    
                    // Handle ellipsis for large page numbers
                    if (totalPages > 7) {
                      if (currentPage <= 4) {
                        displayNum = pageNum;
                      } else if (currentPage >= totalPages - 3) {
                        displayNum = totalPages - 6 + index;
                      } else {
                        displayNum = currentPage - 3 + index;
                      }
                    }
                    
                    return (
                      <button
                        key={displayNum}
                        onClick={() => handlePageChange(displayNum)}
                        className={`shop__pagination-number ${
                          currentPage === displayNum ? 'active' : ''
                        }`}
                      >
                        {displayNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="shop__pagination-btn shop__pagination-btn--next"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style >{`
        .shop__hero {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .shop__hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }

        .shop__hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          position: relative;
          z-index: 1;
        }

        .shop__hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .shop__hero-subtitle {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .shop__hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }

        .shop__hero-description {
          color: #6b7280;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .shop__hero-stats {
          display: flex;
          gap: 2rem;
          justify-content: flex-end;
        }

        .shop__stat {
          text-align: center;
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 120px;
        }

        .shop__stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .shop__stat-label {
          display: block;
          font-size: 0.875rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .shop__main {
          padding: 3rem 0;
          background: white;
        }

        .shop__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }

        .shop__container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .shop__filters {
          background: #f8fafc;
          border-radius: 16px;
          padding: 1.5rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .shop__filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .shop__filters-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .shop__filters-clear {
          background: none;
          border: none;
          color: #3b82f6;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }

        .shop__filters-clear:hover {
          background: #dbeafe;
        }

        .shop__products {
          min-height: 600px;
        }

        .shop__products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .shop__results-info {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .shop__results-text {
          font-weight: 500;
        }

        .shop__pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 3rem;
          padding: 2rem 0;
        }

        .shop__pagination-btn {
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 80px;
        }

        .shop__pagination-btn:hover:not(:disabled) {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .shop__pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .shop__pagination-btn--prev::before {
          content: '← ';
        }

        .shop__pagination-btn--next::after {
          content: ' →';
        }

        .shop__pagination-numbers {
          display: flex;
          gap: 0.25rem;
        }

        .shop__pagination-number {
          background: white;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 36px;
          text-align: center;
        }

        .shop__pagination-number:hover {
          background: #f3f4f6;
          border-color: #9ca3af;
        }

        .shop__pagination-number.active {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border-color: #3b82f6;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .shop__hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .shop__hero-stats {
            justify-content: center;
          }

          .shop__hero-title {
            font-size: 2.5rem;
          }

          .shop__container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .shop__filters {
            position: static;
            order: 1;
          }

          .shop__products {
            order: 2;
          }

          .shop__products-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .shop__hero {
            padding: 2rem 0;
          }

          .shop__hero-title {
            font-size: 2rem;
          }

          .shop__hero-description {
            font-size: 1.1rem;
          }

          .shop__hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .shop__stat {
            min-width: 100px;
            padding: 1rem;
          }

          .shop__main {
            padding: 2rem 0;
          }

          .shop__container {
            padding: 0 1rem;
          }

          .shop__filters {
            padding: 1rem;
          }

          .shop__pagination {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .shop__pagination-numbers {
            order: -1;
            width: 100%;
            justify-content: center;
          }

          .shop__pagination-btn {
            min-width: 70px;
            padding: 0.375rem 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .shop__hero-title {
            font-size: 1.75rem;
          }

          .shop__stat-number {
            font-size: 1.5rem;
          }

          .shop__filters-header {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .shop__products-header {
            align-items: stretch;
          }

          .shop__pagination-numbers {
            flex-wrap: wrap;
          }

          .shop__pagination-number {
            min-width: 32px;
            padding: 0.375rem 0.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default ShopPage;
