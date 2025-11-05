import { Link } from "react-router";
import { useState, useEffect } from "react";
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import category4 from "../../assets/category-4.jpg";

function Categories() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 1, name: "Accessories", path: "accessories", image: category1 },
    { id: 2, name: "Dress Collection", path: "dress", image: category2 },
    { id: 3, name: "Jewellery", path: "jewellery", image: category3 },
    { id: 4, name: "Cosmetics", path: "cosmetics", image: category4 }
  ];

  return (
    <section className="categories__section">
      <div className="section__container categories__container">
        <div className="categories__header">
          <h2 className="section__header">Shop by Category</h2>
          <p className="section__subheader">
            Explore our curated collections and find the perfect style for every occasion
          </p>
        </div>
        
        <div className={`categories__grid ${isVisible ? 'fade-in' : ''}`}>
          {categories.map((category, index) => (
            <Link 
              key={index} 
              className="categories__card" 
              to={`/categories/${category.path}`}
            >
              <div className="categories__card-image">
                <img src={category.image} alt={category.name} />
                <div className="categories__overlay">
                  <span className="categories__view-btn">View Collection</span>
                </div>
              </div>
              <div className="categories__card-content">
                <h4>{category.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style >{`
        .categories__section {
          padding: 3rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .categories__section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(237, 56, 73, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .categories__container {
          position: relative;
          z-index: 1;
        }

        .categories__header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .categories__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .categories__grid.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .categories__card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: white;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
        }

        .categories__card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .categories__card-image {
          position: relative;
          overflow: hidden;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .categories__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .categories__card:hover .categories__card-image img {
          transform: scale(1.1);
        }

        .categories__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(237, 56, 73, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .categories__card:hover .categories__overlay {
          opacity: 1;
        }

        .categories__view-btn {
          background: white;
          color: var(--primary-color);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .categories__card:hover .categories__view-btn {
          transform: translateY(0);
        }

        .categories__card-content {
          padding: 1rem 0 0;
          text-align: center;
        }

        .categories__card-content h4 {
          color: #1f2937;
          font-weight: 700;
          font-size: 1.1rem;
          margin: 0 0 0.5rem 0;
          transition: color 0.3s ease;
        }

        .categories__card:hover .categories__card-content h4 {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .categories__section {
            padding: 3rem 0;
          }

          .categories__header {
            margin-bottom: 2rem;
          }

          .categories__grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }

          .categories__card {
            padding: 1.5rem 1rem;
          }

          .categories__card-image {
            width: 150px;
            height: 150px;
          }

          .categories__card-content {
            padding: 0.75rem 0 0;
          }

          .categories__card-content h4 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .categories__grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .categories__card {
            padding: 1.25rem 1rem;
          }

          .categories__card-image {
            width: 120px;
            height: 120px;
          }

          .categories__card-content {
            padding: 0.5rem 0 0;
          }

          .categories__card-content h4 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Categories;
