// src/CallbackComponent.tsx
import React, { useEffect } from 'react';
import { useAthlete } from './AthleteContext';

function CallbackComponent() {
    const { setAthlete } = useAthlete();

    useEffect(() => {
        // Extract authorization code from URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        let client_id = import.meta.env.VITE_CLIENT_ID;
        let client_secret = import.meta.env.VITE_CLIENT_SECRET;

        if(!client_id || !client_secret) { // If Vite environment variables are not available, use Node environment variables
            client_id = process.env.VITE_CLIENT_ID;
            client_secret = process.env.VITE_CLIENT_SECRET;
        }

        if (code) {
            // Exchange authorization code for access token using POST request
            fetch('https://www.strava.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: client_id,
                    client_secret: client_secret,
                    code: code,
                    grant_type: 'authorization_code'
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    // Use access token to fetch athlete's information
                    fetch('https://www.strava.com/api/v3/athlete', {
                        headers: {
                            Authorization: `Bearer ${data.access_token}`
                        }
                    })
                    .then(response => response.json())
                    .then(athlete => {
                        setAthlete(athlete);
                        console.log('Athlete information:', athlete);
                    })
                    .catch(error => console.error('Error fetching athlete information:', error));
                } else {
                    console.error('Error: No access token received');
                }
            })
            .catch(error => console.error('Error exchanging code for token:', error));
        }
    }, [setAthlete]);

    return (
        <div>
            <h2>Callback</h2>
        </div>
    );
}

export default CallbackComponent;
