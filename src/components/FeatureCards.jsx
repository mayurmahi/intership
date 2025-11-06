import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#8064A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="#8064A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#8064A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#8064A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'People',
      description: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.',
      buttonText: 'Connect',
      color: '#8064A2'
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#77933C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="#77933C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Place',
      description: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue',
      buttonText: 'Meet up',
      color: '#77933C'
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="21" r="1" stroke="#C0504D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="21" r="1" stroke="#C0504D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="#C0504D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Product',
      description: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.',
      buttonText: 'Get it',
      color: '#C0504D'
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="#0096C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="#0096C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#0096C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Program',
      description: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.',
      buttonText: 'Attend',
      color: '#0096C8'
    }
  ];

  return (
    <section className="feature-cards-section py-5">
      <div className="container">
        <div className="row g-4">
          {features.map(feature => (
            <div key={feature.id} className="col-12 col-md-6">
              <div className="feature-card">
                <div className="feature-icon mb-3">
                  {feature.icon}
                </div>
                <h3 className="feature-title mb-3">{feature.title}</h3>
                <p className="feature-description mb-4">{feature.description}</p>
                <button
                  className="btn btn-outline-feature"
                  style={{ borderColor: feature.color, color: feature.color }}
                >
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
