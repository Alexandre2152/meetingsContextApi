import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { AddMeetings } from './components/AddMeetings';
import { EditMeetings } from './components/EditMeetings';
import { MeetingsList } from './components/MeetingsList';

const App = () => 
<>
    {/* <Routes/> */}
    <GlobalProvider>
        <>
        <BrowserRouter>
        <Switch>
          <Route path="/" component={MeetingsList} exact />
          <Route path="/add" component={AddMeetings} exact />
          <Route path="/edit/:id" component={EditMeetings} exact />
        </Switch>
        </BrowserRouter>
            
        </>
        {/* <MeetingsList/> */}
    </GlobalProvider>
</>
export default App;
  
  
