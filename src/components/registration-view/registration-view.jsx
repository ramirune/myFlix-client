import React, {useState} from 'react';

export function RegistrationView(props){
  
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ birthdate, setBirthdate ] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password. birthdate);
        props.onRegistration(username);
    };

    return(
        <form>
            
            <label>
                Username:
                <input type="text" value={Username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
                Birthdate:
                <input type="date" value={Birthdate} onChange={e => setBirthdate(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}