// Librairies
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Composants
import PokemonList from './pages/Pokemon-list';
import PokemonDetail from './pages/Pokemon-detail';
import PageNotFound from './pages/page-not-found';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className='nav-wrapper teal'>
            <Link to='/' className='brand-logo center'>
              Pokédex
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/pokemons' component={PokemonList} />
          <Route exact path='/pokemons/:id' component={PokemonDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
