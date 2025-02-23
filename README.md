# business-ai-recommendations

This project is a web application designed to provide AI-generated recommendations for businesses based on user input. It utilizes React for the frontend, Tailwind CSS for styling, and Node.js/Express for the backend.

## Features

- User input form for business details
- Data enrichment from various APIs (Google My Business, Crunchbase, Hunter.io)
- AI-generated recommendations using OpenAI
- Responsive and user-friendly interface

## Project Structure

```
business-ai-recommendations
├── client                # Frontend application
│   ├── src
│   │   ├── components    # React components
│   │   ├── services      # API service functions
│   │   ├── App.tsx       # Main application component
│   │   └── index.tsx     # Entry point of the React application
│   ├── package.json      # Client dependencies and scripts
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── tsconfig.json     # TypeScript configuration
├── server                # Backend application
│   ├── src
│   │   ├── controllers    # API request handlers
│   │   ├── services       # Functions for external API interactions
│   │   ├── routes         # API route definitions
│   │   ├── types          # TypeScript types and interfaces
│   │   ├── config.ts      # Configuration settings
│   │   └── app.ts         # Entry point of the server application
│   ├── package.json       # Server dependencies and scripts
│   └── tsconfig.json      # TypeScript configuration
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd business-ai-recommendations
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

4. Create a `.env` file in the root directory and add your API keys and configuration settings.

## Usage

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.