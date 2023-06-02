import React from 'react';
import NavBar from './NavBar/NavBar';
import Catalogo from './catalogo/catalogo';

import {Routes, Route, Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Routes>
                    <Route path='/'></Route>
                    <Route path='/catalogo'></Route>
                    <Route path='/acerca'></Route>
                </Routes>
            </div>
        );
    }
}
export default App;