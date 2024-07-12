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
            <div className="text-container">
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
            <div className="col-lg-12 text-center last-match-container">
              <h5 className="last-match-title">Dernier match jouée</h5>
              <h1 className="results-title">RESULTATS</h1>
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
                  <span className="icon-text" style={{ color: 'orange' }}>évenement</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={hoopImage} className="icon" alt="panier" />
                <div className="d-flex flex-column">
                  <span className="icon-number">89</span>
                  <span className="icon-text" style={{ color: 'orange' }}>match</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={jerseyImage} className="icon" alt="maillot" />
                <div className="d-flex flex-column">
                  <span className="icon-number">30</span>
                  <span className="icon-text" style={{ color: 'orange' }}>équipe</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 icon-container">
              <div className="d-flex flex-row">
                <img src={trophyImage} className="icon" alt="trophee" />
                <div className="d-flex flex-column">
                  <span className="icon-number">230</span>
                  <span className="icon-text" style={{ color: 'orange' }}>Trophé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule py-5">
      <div className="container-fluid text-white">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 title-container">
            <h6 className="highlight-text">viens évoluer a nos coté</h6>
            <h1 className="title-text">REJOINS LA TEAM ET INSCRIT-TOI A T'AS PREMIERE SEANCE</h1>
          </div>
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0 form-container">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" />
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="E-mail" />
                    <input type="text" className="form-control" placeholder="Phone" />
                  </div>
                  <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                  <a href="#" className="btn-learn-more send-btn">Envoyer</a>
                </form>
              </div>
            </div>
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
    <iframe
  style={{ border: 0, borderRadius: 15 }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5252.217615976449!2d2.3763265759603645!3d48.837063202207865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6723e74a2b8dd%3A0x8f0582c6046a888f!2s210%20Quai%20de%20Bercy%2C%2075012%20Paris!5e0!3m2!1sfr!2sfr!4v1720774242110!5m2!1sfr!2sfr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe> 
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

 
