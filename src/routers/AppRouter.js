import React from 'react';
<<<<<<< Updated upstream
import {BrowserRouter,Route,Switch} from 'react-router-dom';
=======
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Flowers from '../pages/Flowers'
import Favorites from '../pages/Favorites'
import LatestSightings from '../pages/LatestSightings'
>>>>>>> Stashed changes

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
<<<<<<< Updated upstream
            
=======
            <Route path='/' component={Flowers} exact/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/latest_sightings' component={LatestSightings}/>
>>>>>>> Stashed changes
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter