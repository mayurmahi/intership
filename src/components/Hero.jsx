import React, { useState } from 'react';
import groupImg from './group.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="hero-content">
              <h1 className="hero-title mb-4">
                Explore your <span className="text-hobby">hobby</span> or <span className="text-passion">passion</span>
              </h1>
              <p className="hero-description mb-3">
                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              </p>
              <p className="hero-description">
                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
              </p>
            </div>
            <img src={groupImg} alt="Hobby people"  style={{ maxWidth: "420px", width: "100%", height: "auto", marginTop: "20px" }} />
          </div>

          <div className="col-lg-6">
            <div className="signin-card">
              <ul className="nav nav-tabs signin-tabs" role="tablist">
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className={`nav-link w-100 ${activeTab === 'signin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('signin')}
                    type="button"
                  >
                    Sign In
                  </button>
                </li>
                <li className="nav-item flex-fill" role="presentation">
                  <button
                    className={`nav-link w-100 ${activeTab === 'joinin' ? 'active' : ''}`}
                    onClick={() => setActiveTab('joinin')}
                    type="button"
                  >
                    Join In
                  </button>
                </li>
              </ul>

              <div className="tab-content p-4">
<form onSubmit={handleSubmit}>

  {/* Social buttons first */}
  <button type="button" className=" btn btn-social btn-google w-100 mb-2">
   <svg width="20" height="20" viewBox="0 0 24 24" className="me-2">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
  <p className='p-l'>
   Continue with Google
  </p>
    
  </button>

  <button type="button" className="btn btn-social btn-facebook w-100 mb-3 ">
   <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24" className="me-2 ">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
   <p className='p-l'>
  Continue with Facebook
 </p>
  </button>

  {/* Divider */}
  <div className="divider-text mb-3">
    <span>Or connect with</span>
  </div>

  {/* Email */}
  <div className="mb-3">
    <input
      type="email"
      className="form-control"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />
  </div>

  {/* Password */}
  <div className="mb-3 position-relative">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleInputChange}
      required
    />
    <button
      type="button"
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {/* eye icon */}
    </button>
  </div>

  {/* Remember + Forgot */}
  <div className="mb-3 d-flex justify-content-between align-items-center">
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="rememberMe"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={handleInputChange}
      />
      <label className="form-check-label" htmlFor="rememberMe">
        Remember me
      </label>
    </div>
    <a href="#" className="forgot-password">
      Forgot password?
    </a>
  </div>

  {/* Terms text before button */}
  <div className="terms-text mb-3">
    By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
  </div>

  {/* Continue button LAST */}
  <button type="submit" className="btn btn-primary w-100 btn-continue">
    Continue
  </button>

</form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
