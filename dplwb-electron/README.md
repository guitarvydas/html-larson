# DPLWB Electron App

An Electron desktop application based on the DPLWB HTML Larson Scanner.

## Features

- Display real-time content from multiple programming languages
- Built-in WebSocket server (port 8965)
- Cross-platform (Windows, macOS, Linux)
- Clean and responsive UI

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Setup

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Usage

### Running the app in development mode

```bash
npm start
```

### Building the app for distribution

```bash
npm run build
```

This will create platform-specific installers in the `dist` folder.

## How It Works

This application runs a WebSocket server on port 8965 and listens for incoming connections. Clients can send JSON messages to the app, which will display the content in the appropriate sections based on the JSON keys.

### Message Format

The app expects JSON messages in the following format:

```json
[
  {
    "Javascript": "console.log('Hello World');",
    "Python": "print('Hello World')"
  },
  {
    "CommonLisp": "(print 'hello-world)"
  }
]
```

Multiple messages can be sent in a single array, and they will be appended to the corresponding text areas.

### Reset Command

To clear all text areas, send the following special command:

```json
[
  {
    "": "reset"
  }
]
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
