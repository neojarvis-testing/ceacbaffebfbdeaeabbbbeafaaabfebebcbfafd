import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Navigate} from 'react-router-dom'
import {Card, CardContent} from '@/clientcomponents/card';
import {Button} from '@/clientcomponents/button';
import {Input} from '@/clientcomponents/input';

const regUserDB = [];

const regUserRoles = 
{
    CLIENT: 'client',
    FINANCIALCONSULTANT: 'financialConsultant',
    MANAGER: 'manager'
};

function App()
{
    const [user, setUser] = useState(null);

    return(
     <Router>
        <Routes>
            <Route path="/" element={user? <Navigate to="/homepage"/>: <Login setUser={setUser}/>}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/homepage" element={
                user ? <HomePage user={user}/>: <Navigate to="/"/>
            }/>
        </Routes>
     </Router>   
    );
}