import dealsImg from '../../assets/deals.png'
import { useState, useEffect } from 'react'

function DealsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="deals__section">
      <div className={`deals__container ${isVisible ? 'visible' : ''}`}>
        <div className="deals__image">
          <img src={dealsImg} alt="Special deals" />
          <div className="deals__badge">
            <span>Save 20%</span>
          </div>
        </div>
        <div className="deals__content">
          <div className="deals__header">
            <span className="deals__subtitle">Limited Time Offer</span>
            <h2 className="deals__title">Deals Of This Month</h2>
          </div>
          <p className="deals__description">
            Our Women's Fashion Deals of the Month are here to make your style
            dreams a reality without breaking the bank. Discover a curated
            collection of exquisite clothing, accessories, and footwear, all
            handpicked to elevate your wardrobe.
          </p>
          <div className="deals__countdown">
            <div className="countdown__item">
              <span className="countdown__number">14</span>
              <span className="countdown__label">Days</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">20</span>
              <span className="countdown__label">Hours</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">15</span>
              <span className="countdown__label">Mins</span>
            </div>
            <div className="countdown__item">
              <span className="countdown__number">05</span>
              <span className="countdown__label">Secs</span>
            </div>
          </div>
          <button className="deals__cta">Shop Now</button>
        </div>
      </div>
      
      <style >{`
        .deals__section {
          padding: 3rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .deals__section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }

        .deals__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          position: relative;
          z-index: 1;
        }

        .deals__container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .deals__image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transform: perspective(1000px) rotateY(-5deg);
          transition: transform 0.3s ease;
        }

        .deals__image:hover {
          transform: perspective(1000px) rotateY(0deg) scale(1.02);
        }

        .deals__image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .deals__image:hover img {
          transform: scale(1.1);
        }

        .deals__badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .deals__content {
          padding: 2rem;
        }

        .deals__header {
          margin-bottom: 1.5rem;
        }

        .deals__subtitle {
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

        .deals__title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }

        .deals__description {
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .deals__countdown {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .countdown__item {
          background: white;
          border-radius: 12px;
          padding: 1rem;
          text-align: center;
          min-width: 80px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .countdown__item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .countdown__number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .countdown__label {
          display: block;
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .deals__cta {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .deals__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }

        .deals__cta:active {
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .deals__container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .deals__image {
            transform: perspective(1000px) rotateY(0deg);
            max-width: 500px;
            margin: 0 auto;
          }

          .deals__content {
            padding: 1rem;
          }

          .deals__title {
            font-size: 2rem;
          }

          .deals__countdown {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .deals__section {
            padding: 2rem 0;
          }

          .deals__container {
            padding: 0 1rem;
            gap: 1.5rem;
          }

          .deals__title {
            font-size: 1.75rem;
          }

          .deals__description {
            font-size: 1rem;
          }

          .deals__countdown {
            gap: 0.5rem;
          }

          .countdown__item {
            min-width: 70px;
            padding: 0.75rem 0.5rem;
          }

          .countdown__number {
            font-size: 1.25rem;
          }

          .deals__cta {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .deals__title {
            font-size: 1.5rem;
          }

          .deals__countdown {
            flex-wrap: wrap;
          }

          .countdown__item {
            flex: 1;
            min-width: 60px;
          }

          .deals__badge {
            top: 1rem;
            right: 1rem;
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}

export default DealsSection