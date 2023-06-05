import TheRestaurantSource from '../../data/younghealth-source';
import { createArtikelHome } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="container">
      <div class="jumbotron mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="jumbotron-body">
              <h1><b>Bukan Sekedar Gaya</b></h1>
              <h1><b>Saatnya Hidup</b></h1>
              <h1 style="margin-bottom: 25px"><b>Lebih Sehat</b></h1>
              <p>Waktunya ngasih perhatian lebih ke hidup sehat, biar makin kece dan oke.
              Gak cuma gaya, tapi bikin badan sehat dan pikiran segar. Mulai dari 
              pola makan yangg nyambung, rajin olahraga, tidur yang cukup
              dan jauhin diri dari kebiasaan negatif</p>
              <button class="btn button"><b>Pusat Kesehatan</b></button>
              </div>
          </div>
          <div class="col-md-6">
            <img src="/images/heros/avatar.png" class="img-fluid rounded-end" alt="Ilustrasi-Anak-Muda-Sehat">
          </div>
        </div>
      </div>
    </div>

    <div class="container text-center" id="quote">
      <div class="quote-header">
        Quote
      </div>
      <div class="quote-body">
        <blockquote class="blockquote mb-0">
          <p>Sehat itu investasi masa depanmu. Jaga kesehatanmu dan nikmati kehidupan sebagai anak muda yang berdaya.</p>
          <footer class="blockquote-footer">From <b>YoungHealth</b> For <b>You</b></footer>
        </blockquote>
      </div>
    </div>

    <div class="container main-artikel">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="card-body title-artikel">
              <h1 class="card-title"><Wajib><b>Enggak Gampang Sakit <br> Mantepin Sistem Imun Kamu Dengan Buah Nanas</b></h1>
              <p class="card-text">Nanas mengandung zat besi, vitamin C, dan enzim bromelain yang mampu dukung kebugaran tubuh. Salah satu manfaat nanas yakni memperkuat otot.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/05/17041831/X-Alasan-Lidah-Gatal-Setelah-Makan-Nanas.jpg" class="img-fluid rounded-end" alt="...">
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="list-artikel">
    <h1>Artikel</h1>
    <div class="row">
      <div class="col-md-8" id="home-post">

      </div>
      <div class="col-md-4">
      <div class="card" id="bmi">
        <div class="card-header bmi-header">
          <h1>Kalkulator BMI</h1>
        </div>
        <div class="card-body">
          <form action="">
          <div class="mb-3">
            <label for="berat" class="form-label">Berapa Berat Anda? (kg)</label>
            <input type="text" class="form-control" id="berat" placeholder="Berat Badan">
          </div>
          <div class="mb-3">
            <label for="tinggi" class="form-label">Berapa Tinggi Anda? (cm)</label>
            <input type="text" class="form-control" id="tinggi" placeholder="Berat Badan">
          </div>
          <div class="container d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary">Hitung</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>

        `;
  },

  async afterRender() {
    const healthPost = await TheRestaurantSource.PageHome();
    const healthContainer = document.querySelector('#home-post');
    healthPost.forEach((healhty) => {
      healthContainer.innerHTML += createArtikelHome(healhty);
    })
  },
};

export default Home;
