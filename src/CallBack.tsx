import React, { useEffect } from 'react';
import { useAthlete } from './AthleteContext';

async function getAllActivities(token) {
    let page = 1;
    const perPage = 200;
    let allActivities = [];

    while (true) {
        const url = `https://www.strava.com/api/v3/athlete/activities?access_token=${token}&per_page=${perPage}&page=${page}`;
        const response = await fetch(url);
        const activities = await response.json();

        if (activities.length === 0) {
            break;
        }

        allActivities = allActivities.concat(activities);
        page++;
    }

    return allActivities;
}

function CallbackComponent() {
    const { setAthlete } = useAthlete();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        let client_id = import.meta.env.VITE_CLIENT_ID;
        let client_secret = import.meta.env.VITE_CLIENT_SECRET;
        let refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

        if (!client_id || !client_secret) {
            client_id = process.env.VITE_CLIENT_ID;
            client_secret = process.env.VITE_CLIENT_SECRET;
            refresh_token = process.env.VITE_REFRESH_TOKEN;
        }

        if (code) {
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
            .then(async data => {
                if (data.access_token) {
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

                    // Fetch all activities
                    getAllActivities(data.access_token)
                    .then(allActivities => {
                        console.log('All activities:', allActivities);

                    })
                    .catch(error => console.error('Error fetching all activities:', error));
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
