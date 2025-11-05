import { useState, useEffect } from 'react';
import card1 from '../../assets/card-1.png'
import card2 from '../../assets/card-2.png'
import card3 from '../../assets/card-3.png'

function Trends() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const trends = [
    {
      id: 1,
      image: card1,
      alt: "Womens Shirt",
      year: "2024 Trend",
      title: "Womens Shirt",
      description: "Discover the latest shirt trends with modern cuts and premium fabrics",
      color: "#ec4899"
    },
    {
      id: 2,
      image: card2,
      alt: "Womens Dresses",
      year: "2024 Trend", 
      title: "Womens Dresses",
      description: "Elegant dresses for every occasion, from casual to formal events",
      color: "#8b5cf6"
    },
    {
      id: 3,
      image: card3,
      alt: "Womens Casuals",
      year: "2024 Trend",
      title: "Womens Casuals",
      description: "Comfortable and stylish casual wear for your everyday lifestyle",
      color: "#06b6d4"
    }
  ];

  return (
    <section className="trends__section">
      <div className="section__container trends__container">
        <div className="trends__header">
          <h2 className="section__header">Trending Now</h2>
          <p className="section__subheader">
            Discover the latest fashion trends and elevate your style with our curated collections
          </p>
        </div>
        
        <div className="trends__grid">
          {trends.map((trend, index) => (
            <div 
              key={trend.id}
              className={`trend__card ${isVisible ? 'fade-in' : ''}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                '--trend-color': trend.color
              }}
            >
              <div className="trend__image-wrapper">
                <img 
                  src={trend.image} 
                  alt={trend.alt}
                  className="trend__image"
                />
                <div className="trend__overlay">
                  <span className="trend__year">{trend.year}</span>
                </div>
              </div>
              
              <div className="trend__content">
                <h3 className="trend__title">{trend.title}</h3>
                <p className="trend__description">{trend.description}</p>
                <a href="#" className="trend__link">
                  <span>Discover More</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
              
              <div className="trend__decoration"></div>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        .trends__section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          position: relative;
          overflow: hidden;
        }

        .trends__section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .trends__container {
          position: relative;
          z-index: 1;
        }

        .trends__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .trends__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .trend__card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          opacity: 0;
          transform: translateY(30px);
        }

        .trend__card.fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .trend__card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .trend__image-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .trend__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .trend__card:hover .trend__image {
          transform: scale(1.1);
        }

        .trend__overlay {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.95);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--trend-color);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .trend__content {
          padding: 2rem;
          text-align: center;
        }

        .trend__title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.75rem;
          font-family: var(--header-font);
        }

        .trend__description {
          color: var(--text-light);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .trend__link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--trend-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .trend__link:hover {
          gap: 1rem;
          color: var(--trend-color);
        }

        .trend__link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--trend-color);
          transition: width 0.3s ease;
        }

        .trend__link:hover::after {
          width: 100%;
        }

        .trend__decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--trend-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .trend__card:hover .trend__decoration {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .trends__section {
            padding: 3rem 0;
          }

          .trends__grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .trend__card {
            max-width: 400px;
            margin: 0 auto;
          }

          .trend__image-wrapper {
            height: 240px;
          }

          .trend__content {
            padding: 1.5rem;
          }

          .trend__title {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .trends__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .trend__image-wrapper {
            height: 320px;
          }
        }
      `}</style>
    </section>
  )
}

export default Trends