// src/App.tsx
import { useState } from 'react';
import './App.css';
import { useAthlete } from './AthleteContext';

function App() {
    const [error, setError] = useState(null);
    const { athlete } = useAthlete();

    let client_id = import.meta.env.VITE_CLIENT_ID;
    if(!client_id) { // If Vite environment variables are not available, use Node environment variables
        client_id = process.env.VITE_CLIENT_ID;
    }




    const handleStravaConnect = () => {
        // Redirect user to Strava's authorization endpoint
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${window.location.origin}/callback&response_type=code&scope=read_all`;
    };

    return (
        <div>
            <h2>Connect to Strava using the button below</h2>
            <button onClick={handleStravaConnect}>Connect to Strava</button>
            {error && <p>{error}</p>}
            {athlete && (
                <div>
                    <h3>Athlete Information:</h3>
                    <p>Name: {athlete.firstname} {athlete.lastname}</p>
                    <p>City: {athlete.city}</p>
                    <p>State: {athlete.state}</p>
                    <p>Country: {athlete.country}</p>
                </div>
            )}
        </div>
    );
}

export default App;
