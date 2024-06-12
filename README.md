# A Template for an app with an oauth2 flow connecting to the Strava API

This is a template for an app that connects to the Strava API using the oauth2 flow. It's written in Typescript using React. Once the user is authenticated, the app can make requests to the Strava API on behalf of the user. By default, the app displays the user's name, surname, and a list of their activities.
You can use this template to build your own app that will fetch your (or your users') Strava data, and display charts, maps, or any other data visualization you want.
This template is licensed under the MIT License, so you can use it for any purpose, free of charge and without any restrictions. However, please note that you will need to create your own Strava API application and configure the app with your client ID and client secret.
Stars and credit are appreciated if you found this template useful.


## Getting Started

To get started, you will need to create a Strava API application and configure the app with your client ID and client secret. You will also need to install the required dependencies of this app.

### Create a Strava API Application
To create a Strava API application, follow these steps:
*  go to the [Strava API website](https://www.strava.com/settings/api)
* click on "Create & Manage Your App"
* fill in the required fields and click "Create"
* note down the client ID and client secret
* set the Authorization Callback Domain to `localhost`

### Configure the App
First clone the repository and navigate to the project directory. Then create a `.env` file in the root of the project and add the following lines:
```
VITE_CLIENT_ID=<your client ID>
VITE_CLIENT_SECRET=<your client secret>
VITE_REFRESH_TOKEN=<your refresh token>
```

If you wonder how to get the refresh token, you can follow the steps in the [Strava API documentation](https://developers.strava.com/docs/getting-started/#oauth)
The project was created using the [Vite](https://vitejs.dev/) build tool, so the environment variables are prefixed with `VITE_`, and in the code, we access them using `import.meta.env.VITE_CLIENT_ID`. By default, all of the environment variables will try to read from a `process.env` object, so you can also use the `process.env` object to access the environment variables.

```
    let client_id = import.meta.env.VITE_CLIENT_ID;
        let client_secret = import.meta.env.VITE_CLIENT_SECRET;
        let refresh_token = import.meta.env.VITE_REFRESH_TOKEN;

        if (!client_id || !client_secret) {
            client_id = process.env.CLIENT_ID;
            client_secret = process.env.CLIENT_SECRET;
            refresh_token = process.env.REFRESH_TOKEN;
        }```
```

### Install Dependencies
To install the required dependencies, run the following command:
```
npm install
```

### Run the App
To run the app, run the following command:
```
npm run dev
```

### Models
For your convenience, I have included the models for the Strava API responses for *Activities* and *Profiles* in the `models` directory. You can use these models to deserialize the Strava API responses into TypeScript objects.



The app will start a web server on `http://localhost:5173`. Navigate to this URL in your web browser to view the app.

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

