import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddProduits from './components/produits/AddProduits';
import DisplayProduits from './components/produits/DisplayProduit';
import { Provider } from 'react-redux';
import store from './store/store';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <div className="container">
          <div class="row">
              <div class="col-md-6 offset-md-3">
                  <AddProduits />
              </div>
            
          </div>
            <div class="row">
              <div class="col-md-6 offset-md-3 mt-4">
                  <DisplayProduits />
              </div>
            
          </div>
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
