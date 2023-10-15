
# Setup Docker Compose Instructions

## Prerequisites

- [Docker](https://docs.docker.com/install/)

## Setup

1. Clone the repository
2. Run `docker-compose build` to build the images
3. Run `docker-compose up -d` to start the containers in the background

## Usage

- Run `docker-compose down` to stop the containers
- Run `docker-compose up -d` to start the containers in the background
- Run `docker-compose logs -f` to view the logs of the containers

## Services

- [phpmyadmin](http://localhost:8080)
- [mysql](http://localhost:3306)
- [frontend](http://localhost:3000)
- [backend](http://localhost:4000)

## Database

- **Username:** root
- **Password:** 123
- **Database:** ciees_slisc
- **Host:** localhost:3306

### phpmyadmin

- **Username:** root
- **Password:** 123

## Notes

- The `frontend` and `backend` services are still under development
- The `frontend` service is built using [Vite](https://vitejs.dev/)
- The `backend` service is built using [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/)
- The `mysql` service uses a [Docker Image](https://hub.docker.com/_/mysql) from Docker Hub
- The `phpmyadmin` service uses a [Docker Image](https://hub.docker.com/r/phpmyadmin/phpmyadmin) from Docker Hub
- The `frontend` and `backend` services use [Docker Images](https://docs.docker.com/engine/reference/commandline/build/) built from the `Dockerfile` in their respective directories
- To add records to the database, use the `phpmyadmin` service or postman with the baer token from the `backend` service

## References

- [Docker Compose](https://docs.docker.com/compose/)
- [Docker Hub](https://hub.docker.com/)



