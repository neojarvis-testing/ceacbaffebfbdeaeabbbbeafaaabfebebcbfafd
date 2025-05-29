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