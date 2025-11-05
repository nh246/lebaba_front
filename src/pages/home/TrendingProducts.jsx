import { useState, useEffect } from "react";
import { Link } from "react-router";
import products from "../../data/products.json";
import RatingStar from "../../components/RatingStar";

function TrendingProducts() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const loadMoreProducts = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleProducts(prevCount => prevCount + 4);
      setIsLoading(false);
    }, 800);
  };

  const remainingProducts = products.length - visibleProducts;

  return (
    <section className="trending__section">
      <div className="section__container trending__container">
        <div className="trending__header">
          <h2 className="section__header">Trending Products</h2>
          <p className="section__subheader">
            Discover the Hottest Picks: Elevate Your Style with Our Curated
            Collection of Trending Women's Fashion Products.
          </p>
        </div>

        <div className={`trending__content ${isVisible ? 'fade-in' : ''}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, visibleProducts).map((product, index) => (
              <Link key={index} to="/shop" className="trending__product-card">
                <div className="relative">
                  <div className="trending__product-image">
                    <img
                      src={product?.image}
                      alt={product?.name || "Product"}
                      className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <button className="trending__cart-btn">
                      <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
                    </button>
                  </div>
                </div>
                <div className="trending__product-content">
                  <h4>{product?.name}</h4>
                  <p>
                    ${product.price}
                    {product?.oldPrice ? <s>{product?.oldPrice}</s> : null}
                  </p>
                  <RatingStar rating={product?.rating} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {visibleProducts < products.length && (
          <div className="trending__load-more">
            <button 
              onClick={loadMoreProducts} 
              className={`btn trending__btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="btn__loading">
                  <i className="ri-loader-4-line loading__icon"></i>
                  Loading...
                </span>
              ) : (
                <span>
                  Load More Products ({remainingProducts} remaining)
                </span>
              )}
            </button>
          </div>
        )}

        {visibleProducts >= products.length && (
          <div className="trending__complete">
            <div className="complete__icon">
              <i className="ri-check-double-line"></i>
            </div>
            <p>You've viewed all trending products!</p>
          </div>
        )}
      </div>

      <style >{`
        .trending__section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .trending__section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(237, 56, 73, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .trending__container {
          position: relative;
          z-index: 1;
        }

        .trending__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .trending__content {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .trending__content.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .trending__load-more {
          text-align: center;
          margin-top: 3rem;
        }

        .trending__btn {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-width: 200px;
        }

        .trending__btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(237, 56, 73, 0.3);
        }

        .trending__btn:active {
          transform: translateY(0);
        }

        .trending__btn.loading {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn__loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .loading__icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .trending__complete {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border-radius: 16px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .complete__icon {
          width: 60px;
          height: 60px;
          background: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .trending__complete p {
          color: #065f46;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .trending__section {
            padding: 3rem 0;
          }

          .trending__header {
            margin-bottom: 2rem;
          }

          .trending__load-more {
            margin-top: 2rem;
          }

          .trending__btn {
            padding: 0.875rem 1.5rem;
            font-size: 0.9rem;
            min-width: 180px;
          }
        }

        @media (max-width: 480px) {
          .trending__btn {
            min-width: 160px;
            padding: 0.75rem 1.25rem;
          }
        }

        .trending__product-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .trending__product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .trending__product-image {
          overflow: hidden;
          border-radius: 12px 12px 0 0;
        }

        .trending__product-content {
          padding: 1rem;
        }

        .trending__product-content h4 {
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
        }

        .trending__product-content p {
          color: #ef4444;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .trending__product-content p s {
          color: #9ca3af;
          margin-left: 0.5rem;
          font-weight: 400;
        }

        .trending__cart-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s ease;
        }

        .trending__cart-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

export default TrendingProducts;
