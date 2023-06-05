import Home from '../views/pages/home';
import Artikel from '../views/pages/artikel';
import AlatKesehatan from '../views/pages/alatkesehatan';
import Medicine from '../views/pages/medicine';

const routes = {
  '/': Home, //default routes
  '/home': Home, 
  '/artikel': Artikel,
  '/obat' : Medicine,
  '/alatkesehatan': AlatKesehatan,
};

export default routes;
