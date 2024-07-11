import React from 'react';
import './App.css';
import basketballImage from '/images/logan-weaver-lgnwvr-xtPs2_MlPYc-unsplash.jpg';
import teamOneImage from '/images/equipe1.jpg';
import teamTwoImage from '/images/equipe2.png';
import ballImage from '/images/basketball.png';
import hoopImage from '/images/panier.png';
import jerseyImage from '/images/maillot-de-basket.png';
import trophyImage from '/images/prix-de-basket-ball.png';
import contactImage from '/images/image_2.jpg';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">Basketball</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">A propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nos membres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Planning</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
      </div>
      </nav>

      <section className="main" style={{ backgroundImage: `url(${basketballImage})` }}>
        <div className="container-fluid py-5">
          <div className="row py-4">
            <div className="col-lg-7">
              <div className="d-flex flex-column justify-content-end align-items-start h-800">
                <h1 className="pt-5 text-left main-title">AUTHENTICITY IN THE BASKETBALL COURT</h1>
                <a href="#" className="btn-learn-more mt-3 ms-3">S'inscrire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-12 text-center">
              <h5 style={{ color: 'orange' }}>latest game</h5>
              <h1>LATEST MATCH RESULTS</h1>
            </div>
            <div className="col-lg-4 text-center">
              <img src={teamOneImage} className="equipe1" alt="Team Basketone" />
            </div>
            <div className="col-lg-4 text-center my-auto">
              <div className="score-container">
                <div className="score score-orange">97 pts</div>
                <div className="vs-text">vs</div>
                <div className="score score-black">85 pts</div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <img src={teamTwoImage} className="equipe2" alt="Toulouse basket club" />
            </div>
          </div>
        </div>
      </section>

      <section className="icons-strip">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={ballImage} className="icon" alt="ball" />
                <div className="d-flex flex-column">
                  <span className="icon-number">24</span>
                  <span className="icon-text" style={{ color: 'orange' }}>Basketball</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={hoopImage} className="icon" alt="panier" />
                <div className="d-flex flex-column">
                  <span className="icon-number">89</span>
                  <span className="icon-text" style={{ color: 'orange' }}>Basket Hoop</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={jerseyImage} className="icon" alt="maillot" />
                <div className="d-flex flex-column">
                  <span className="icon-number">30</span>
                  <span className="icon-text" style={{ color: 'orange' }}>Jersey</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={trophyImage} className="icon" alt="trophee" />
                <div className="d-flex flex-column">
                  <span className="icon-number">230</span>
                  <span className="icon-text" style={{ color: 'orange' }}>Trophy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule py-5">
        <div className="container-fluid text-white ">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4 mb-lg-0">Inscription à une séance de basket</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">Prénom</label>
                      <input type="text" className="form-control" id="firstName" placeholder="Entrez votre prénom" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">Nom</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Entrez votre email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
                      <input type="tel" className="form-control" id="phone" placeholder="Entrez votre numéro de téléphone" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message (optionnel)</label>
                      <textarea className="form-control" id="message" rows="4" placeholder="Entrez votre message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Soumettre</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h6 style={{ color: 'orange' }}>the old fashioned rules</h6>
              <h1 className="font-weight-bold py-3 text-left">BASKETBALL RULES ARE STUNTING THE MODERN GAME</h1>
              <a href="#" className="btn-learn-more">Planning</a>
            </div>
          </div>
        </div>
      </section>

      <section className="success-story">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="success-story-title">Notre histoire</h2>
        <p className="success-story-text">
          Aliquip tempor dolore reprehenderit enim occaecat mollit ea laborum esse sint cupidatat est.
          Adipisicing Lorem laboris culpa velit do nisi exercitation. Nostrud culpa id consectetur enim
          in aliquip sint incididunt Lorem cupidatat sunt culpa nisi aliquip.Ut voluptate laborum labore consectetur in cupidatat consectetur fugiat enim voluptate minim magna. Cillum nulla id ex aliqua occaecat anim elit nulla cillum consequat pariatur enim Lorem. Eiusmod laboris ullamco deserunt commodo est magna. Adipisicing quis cupidatat cillum cillum officia adipisicing. Reprehenderit non voluptate incididunt occaecat irure. Aliqua anim ullamco et excepteur. Et cupidatat proident ex commodo esse elit id quis eiusmod aliquip.Veniam consectetur nulla eu culpa in aute aliquip et sunt ad. Est et Lorem exercitation commodo ut consectetur nulla ut ut dolor. Officia officia minim in id magna commodo enim voluptate do veniam tempor ad quis incididunt. Aute cupidatat duis irure deserunt ea deserunt duis in pariatur excepteur velit officia. Cupidatat do amet laborum tempor. Ut laboris deserunt esse nisi veniam.
        </p>
        <a href="#" className="btn-learn-more">voir +</a>
      </div>
      <div className="col-lg-6 success-images">
        <div className="image-container">
          <img src="/images/joel-muniz-Ue5MJoavkIc-unsplash.jpg" className="large-image" alt="Large" />
          <img src="/images/markus-spiske-BfphcCvhl6E-unsplash.jpg" className="small-image" alt="Small" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact-section">
  
  <div class="contact-bg">
    <h3>Get in Touch with Us</h3>
    <h2>Contact</h2>
    <div class="line">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="contact-body">
    <div class="contact-form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name"/>
        <input type="text" class="form-control" placeholder="Last Name"/>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="E-mail"/>
        <input type="text" class="form-control" placeholder="Phone"/>
      </div>
      <textarea rows="5" placeholder="Message" class="form-control"></textarea>
      <a href="#" class="btn-learn-more send-btn">Envoyer</a>
    </div>
    <div class="contact-info">
      <div>
        <span><i class="fas fa-mobile-alt"></i></span>
        <span>Tel</span>
        <span class="text">06 07 08 09 21</span>
      </div>
      <div>
        <span><i class="fas fa-envelope-open"></i></span>
        <span>E-mail</span>
        <span class="text">mail@company.com</span>
      </div>
      <div>
        <span><i class="fas fa-map-marker-alt"></i></span>
        <span>Address</span>
        <span class="text">2939 Patrick Street, Vicotria TX, United States</span>
      </div>
      <div>
        <span><i class="fas fa-clock"></i></span>
        <span>Horaires d'ouverture</span>
        <span class="text">Lundi - Vendredi (10h00 à 17h00)</span>
      </div>
    </div>
  </div>
  <div class="contact-footer">
    <div class="social-links">
      <a href="#" class="fab fa-facebook-f"></a>
      <a href="#" class="fab fa-twitter"></a>
      <a href="#" class="fab fa-instagram"></a>
      <a href="#" class="fab fa-youtube"></a>
    </div>
  </div>
</section>
</div>
  );
}

export default App;

 
