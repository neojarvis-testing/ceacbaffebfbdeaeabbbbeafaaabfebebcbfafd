function SignUp()
{
    const [form, setForm] = useState({name:'', email:'', password:'', role:regUserRoles.CLIENT});
    const [registered, setRegistered] = userState(false);
    const handleChange = e => setForm({...form,[e.target.name]: e.target.value});
    const handleRegister = () => 
    {
        regUserDB.push(form);
        setRegistered(true);
    };
    
}