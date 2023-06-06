import CONFIG from '../../globals/config';

const createArtikelTemplate =  (healthy) => 
`
<article class="post-item" >
<img tabindex = 0 class="lazyload thumbnail" data-src="${healthy.image_url}" alt="${healthy.title}">
<div class="post-item-body">
    <h5 class="card-title">${healthy.title}</h5>
    <p class="card-text">${healthy.headline}</p>
  </p>
</div>
</article>

`;
const createMedicineTemplate =  (healthy) => {
  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const price = rupiah(healthy.base_price)

  return `
  <article class="post-item" >
  <img tabindex = 0 class="lazyload thumbnail" data-src="${healthy.image_url}" alt="${healthy.title}">
  <div class="post-item-body">
      <h5 class="card-title">${healthy.name}</h5>
      <p class="card-text">${price}</p>
      <button href="${healthy.source_url}" class="btn button">Selengkapnya</button>
    </p>
  </div>
  </article>
  
  `

}

const createArtikelHome = (healthy) => `
<div class="row g-0 bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="${healthy.image_url}" class="lazyload w-100" alt="${healthy.title}">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">${healthy.title}</h5>
    <p>${healthy.headline}</p>
    <a href="${healthy.source_url}" class="stretched-link">Selengkapnya</a>
  </div>
</div>
`;

const createrekomenartikeltemplate = (healthy) => `
    <div class="container-rekomendasi">
      <div class="image-rekomendasi">
        <img src="${healthy.image_url}" class="image-rekomendasi" alt="${healthy.title}">
      </div>
      <div class="info-rekomendasi">
        <h4>${healthy.title}</h4>
        <p class="headline"> ${healthy.headline}</p>
        <p class="selengkapnya">
        <a href="${healthy.source_url}" >Selengkapnya</a>
        </p>      
      </div>
    </div>
`;


export {
  createArtikelTemplate,
  createArtikelHome,
  createMedicineTemplate,
  createrekomenartikeltemplate,
};
