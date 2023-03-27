# Practest - ChatGPT Powered Practice Tests

This reposititory contains both a React front-end and Express server application that allows users to generate practice tests on any three topics. The application uses OpenAI's GPT-3.5-turbo model to create college-level multiple choice questions based on the provided topics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aketkar18/practest.git
```

2. Install the necessary dependencies for both the client and server:

```bash
cd practest
cd client
npm install
cd server
npm install
```

3. Create a .env file in the root directory and set the OPENAI_API_KEY variable with your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the server:

```bash
cd ..
npm start
```

5. In a new terminal, start the React application:

```bash
cd client
npm start
```
The application should now be running on http://localhost:3000.

**NOTE: By default, the application sends requests to the hosted server. If you want to test changes to your local server, change the apiUrl variable in App.js to http://localhost:8000**

## Usage

Enter any three topics in the input fields and click "Generate Quiz." The application will generate a multiple choice quiz using the provided topics. Answer the questions by clicking on the answer choices, and the application will reveal the correct answers along with a brief explanation.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](LICENSE)

