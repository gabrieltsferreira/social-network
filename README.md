# Social Network

The aim of this project is to develop a social network.

## Getting Started

You will need to install docker v.3.9 to easily test the application

### Built With

* Next.js
* React.js
* Node.js
* Express
* Prisma
* Axios
* Docker


### Installation
To test, run each command bellow on a terminal
```
git clone https://github.com/gabrieltsferreira/social-network.git
```
```
cd social-network
```
```
cd frontend
```
```
npm install
```
```
..
```
```
cd backend
```
```
npm install
```
```
..
```
```
docker-compose build
```
```
docker-compose up -d db backend frontend
```

## Usage

```
- Frontend will run at http://localhost:3000
- Backend will run at http://localhost:4000
- Database will run at http://localhost:5432

To test Google Authentication:
  - Require CLIENT_ID, SECRET_KEY, REDIRECT_URL to be created and stored in a .env file inside backend folder(root)
  - To test it with docker: Add ` - env_file: ./backend/.env ` to backend service in docker compose file

More information at https://cloud.google.com/)
```

## API

### Implemented Routes

Frontend Endpoints (pages):
  Login:
    - path: /login
    - methods: POST
    
  User:
    - path: /users
    - methods: GET

  Post:
    - path: /posts 
    - methods: GET, POST, DELETE
  
Backend:
  - Login:
      - path: /login
      - methods: POST

  User:
    - path: /users
    - methods: GET, POST, PUT, DELETE

  Post:
    - path: /posts 
    - methods: GET, POST, PUT, DELETE


  ## Features
  - User, Post and Comments entities defined using prisma
  - Google Authentication (Persistence not implemente)
  - User CRUD (frontend incomplete)
  - Posts CRUD (frontend incomplete)


## License

This project is licensed under the [MIT](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for
details
