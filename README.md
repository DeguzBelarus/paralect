# Paralect App

## Overview

```text
Paralect App is an application for tracking job responses.
```

## Stack

```text
This full-stack application uses MNRN stack (MongoDB + NestJS + React.js + Node.js).

- Front-end: React.js, Webpack (SWC loader), Redux toolkit, Thunk middleware and GSAP animation library;
- Back-end: Node.js, NestJS, MongoDB, REST API.
```

## Deploys

```bash
- Front-end: https://paralect-app.netlify.app/ - Netlify
- Back-end: https://paralect-server-production.up.railway.app/api/ - Railway
```

## Repositories

```bash
- Front-end: https://github.com/DeguzBelarus/paralect/ - current
- Back-end: https://github.com/DeguzBelarus/paralect-server/
```

## Instructions for using the project

- 1 Clone the front-end repository:

```bash
git clone https://github.com/DeguzBelarus/paralect.git
```

- 2 Move to the project's directory:

```bash
cd paralect
```

- 3 Clone the server repository (from the root directory of the project!):

```bash
git clone https://github.com/DeguzBelarus/paralect-server.git
```

- 4 Install the necessary modules:

```bash
npm run install:modules
```

- 5 Go to the paralect-server directory and create .env file with following content (for accessing the MongoDB database):

```bash
db_user_name=paralect
db_user_password=1DSqAfcaXQk9HYY9
```

- 6 Run the project in development mode:

```bash
npm run development
```

- 7 Enjoy :)

## Server APIs description

```bash
- GET https://paralect-server-production.up.railway.app/api/reply
- POST https://paralect-server-production.up.railway.app/api/reply
- PUT https://paralect-server-production.up.railway.app/api/reply/update/:replyId
- DELETE https://paralect-server-production.up.railway.app/api/reply/delete/:replyId

dto interface (create and update):
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note?: string;

  type ReplyStatusType = 'accepted' | 'refused' | 'waiting'
```

## Usage Tips

```text
- for editing: click on the chosen reply row and edit the data, then click on the "Update" button;
- for deletion: click on the red button (in the right corner) of the chosen reply row.
```

## Scripts description (optional)

```bash
- npm run client:build - makes the production build of the client
- npm run server:build - makes the production build of the server
```
