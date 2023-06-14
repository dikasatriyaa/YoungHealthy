import { createrekomenartikeltemplate } from '../templates/template-creator';
import YoungHealthSource from '../../data/younghealth-source';

const AlatKesehatan = {
  async render() {
    return `
      <section class="content-kalkulator-bmi">
        <div class="container-kalkulator-bmi" id="container-kalkulator-bmi">
          <div class="kalkulator-bmi">
            <h2>Kalkulator BMI (IMT)</h2>

            <div id="content-kalkulator">
              <p>Apa Jenis Kelamin Anda?</p>
              <div class="input_inline">
                <label class="container">
                  <input type="radio" name="radio" id="lk">
                  <p class="text">Male</p>
                  <span class="checkmark"></span>
                </label>

                <label class="container">
                  <input type="radio" name="radio" id="pr">
                  <p class="text">Female</p>
                  <span class="checkmark"></span>
                </label>
              </div>

              <div class="input">
                <input type="text" class="effect-input" id="umur" placeholder="Berapa Usia Anda?" required>
              </div>

              <div class="input">
                <input type="number" class="effect-input" id="bb" placeholder="Berapa berat badan Anda?" required>
              </div>

              <div class="input">
                <input type="number" class="effect-input" id="tt" placeholder="Berapa tinggi Anda?" required>
              </div>
            
              <button id="bmiSubmit" type="submit">Hitung</button>
            </div>
          </div>
        </div>

        <div class="result">
          <p>Hasil BMI Anda</p>
          <div id="result">00.00</div>
          <p class="comment-result"></p>
        </div>

        <div id="Modal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p id="modalText"></p>
          </div>
        </div>

        <div class="rekomendasi-artikel">
          <p class="header-rekomendasi">Baca artikel untuk lebih memahami BMI mu</p>
        </div>
      </section>
    `;
  },

  async afterRender() {
    document.title = 'Alat Kesehatan - Young Health';

    const umur = document.getElementById("umur");
    const tinggi = document.getElementById("tt");
    const berat = document.getElementById("bb");
    const laki = document.getElementById("lk");
    const perempuan = document.getElementById("pr");
    const resultArea = document.querySelector(".comment-result");
    const modalText = document.querySelector("#modalText");
    const modal = document.getElementById("Modal");
    const span = document.getElementsByClassName("close")[0];
    const submitButton = document.getElementById("bmiSubmit");
    const rekomendasiartikel = document.querySelector(".rekomendasi-artikel");
    const headerrekomendasi = document.querySelector(".header-rekomendasi");
    const healthPost = await YoungHealthSource.Rekomendasi();
    const healthPostArray = Object.values(healthPost);
    

    submitButton.addEventListener("click", function () {
      if (umur.value === "" || tinggi.value === "" || berat.value === "" || (laki.checked === false && perempuan.checked === false)) {
        modal.style.display = "block";
        modalText.innerHTML = "Harap isi semua DATA!";
      } else {
        countBmi();
      }
    });

    function countBmi() {
      const p = [umur.value, tinggi.value, berat.value];
      if (laki.checked) {
        p.push("laki");
      } else if (perempuan.checked) {
        p.push("perempuan");
      }

      const bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

      let result = "";
      if (bmi < 18.5) {
        result = "Underweight";
      } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
      } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
      } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
      } else if (35 <= bmi) {
        result = "Extremely obese";
      }

      headerrekomendasi.style.display = "block";
      resultArea.style.display = "block";
      document.querySelector(".comment-result").innerHTML = `You are <span id="comment-result"">${result}</span>`;
      document.querySelector("#result").innerHTML = bmi.toFixed(2);

      const firstArray = healthPostArray[0];
      firstArray.forEach((healhty) => {
        rekomendasiartikel.innerHTML += createrekomenartikeltemplate(healhty);
      });
    }

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};

export default AlatKesehatan;
