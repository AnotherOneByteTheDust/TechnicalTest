# Technical Test

Giving a dataset, design a database schema and build an API that consumes it.

## Technology Stack

This project was built with:

- API Framework: [NestJS](https://nestjs.com/) + [TypeScript](https://www.typescriptlang.org/).
- Database: [Postgresql](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/).
  
## Usage

This project has been created with three parts:
- Postgresql Database + Centos server
- API
- Data migration script

### Postgresql Database + Centos Server

To initialize the database and centos server, just run:

```bash
    docker-compose up
```

### API

To run the nestjs API:

1) Move to backend directory

```bash
    cd backend
```

2) Install project dependencies:

```bash
    npm i
```

3) Run the project locally in development environment:

```bash
    npm run start:dev
```

4) ... or run it for production environment:

```bash
    npm run build && node dist/main.js
```

### Data Migration Script

To run this script, you will need to install [Python3](https://www.python.org/downloads/) and to install the specified in the requirements.txt file:

```bash
    pip3 install -r backend/scripts/requirements.txt
```

To execute this program, first initialize the database and centos server and then you will be able to run the data migration script with the following command:

```bash
    python3 backend/scripts/migrate_data.py
```