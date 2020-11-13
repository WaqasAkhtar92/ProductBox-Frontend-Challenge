import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './_components/shared/Header'
import Home from './_components/Home'
import CheckOut from './_components/CheckOut'

export default function App() {
  return (      
    <BrowserRouter>
     <div>
       <Header />
         <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/CheckOut" component={CheckOut}/>
        </Switch>
     </div> 
   </BrowserRouter>
 );

}
