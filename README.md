# URLCut

URLCut is a Next.js application that interacts with the URLCut backend-API, allowing users to shorten long URLs and generate QR codes.

## Description
This application provides a user interface for shortening long URLs into more manageable ones, or creating QR codes to share long URLs.

### Prerequisites
To run this project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

  
### Installation

1. Clone the repository: 
```
git clone https://github.com/Othamae/URLCut.git
```
2. Navigate to the project directory:
```
cd URLCut
``` 
3. Install the dependencies: npm install
```
npm install
``` 


### Environment Variables
To connect with UrlCut-API you must create in root directory a ``.env`` file with the next lines:

``` 
API='https://urlcut.one'
API_QR='https://urlcut.one/qr'
URL='urlcut.one'
``` 
### Running the Application
To run the application in development mode, use the following command:
```
npm run dev
```

The application will be available at http://localhost:3000.