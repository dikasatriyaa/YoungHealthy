import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}`,
  MEDICINE: `${CONFIG.MEDICINE}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REKOMENDASI: `${CONFIG.REKOMENDASI}`,
};

export default API_ENDPOINT;
