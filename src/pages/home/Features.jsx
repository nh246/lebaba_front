

import { useState, useEffect } from 'react';

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 1,
      icon: "ri-truck-line",
      title: "Free Delivery",
      description: "Get your orders delivered to your doorstep with our fast and reliable free shipping service.",
      color: "#3b82f6",
      bgColor: "#eff6ff"
    },
    {
      id: 2,
      icon: "ri-money-dollar-circle-line",
      title: "100% Money Back Guarantee",
      description: "Shop with confidence knowing that your purchase is protected with our money-back guarantee.",
      color: "#10b981",
      bgColor: "#ecfdf5"
    },
    {
      id: 3,
      icon: "ri-user-voice-fill",
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always ready to help you with any questions or concerns.",
      color: "#f59e0b",
      bgColor: "#fffbeb"
    },
    {
      id: 4,
      icon: "ri-shield-check-line",
      title: "Secure Payment",
      description: "Your payment information is encrypted and protected with the highest security standards.",
      color: "#8b5cf6",
      bgColor: "#f5f3ff"
    }
  ];

  return (
    <section className="section__container features__section">
      <div className="features__header">
        <h2 className="section__header">Why Choose Us</h2>
        <p className="section__subheader">
          Experience the best online shopping with our exceptional services and customer-first approach
        </p>
      </div>
      
      <div className="features__grid">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={`feature__card ${isVisible ? 'fade-in' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--feature-color': feature.color,
              '--feature-bg': feature.bgColor
            }}
          >
            <div className="feature__icon-wrapper">
              <i className={`${feature.icon} feature__icon`}></i>
            </div>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__description">{feature.description}</p>
            <div className="feature__decoration"></div>
          </div>
        ))}
      </div>

      <style >{`

        .features__section {
          padding: 6rem 1rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .features__section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(237, 56, 73, 0.05) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .features__header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .feature__card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
        }

        .feature__card.fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .feature__card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .feature__card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s;
        }

        .feature__card:hover::before {
          left: 100%;
        }

        .feature__icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--feature-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .feature__card:hover .feature__icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .feature__icon {
          font-size: 2.5rem;
          color: var(--feature-color);
          transition: all 0.3s ease;
        }

        .feature__card:hover .feature__icon {
          transform: scale(1.2);
        }

        .feature__title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-family: var(--header-font);
        }

        .feature__description {
          color: var(--text-light);
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .feature__decoration {
          width: 40px;
          height: 3px;
          background: var(--feature-color);
          border-radius: 2px;
          margin: 0 auto;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .feature__card:hover .feature__decoration {
          width: 60px;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .features__grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .feature__card {
            padding: 2rem 1.5rem;
          }
          
          .features__section {
            padding: 4rem 1rem;
          }
        }

        @media (min-width: 1200px) {
          .features__grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

export default Features