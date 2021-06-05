# Setup MCQ App

```bash
git clone https://github.com/AhmedGalaldev/mcq-app.git
```

```bash
cd backend
npm install
```

```bash
cd mcq-front
npm install
```

Create [config.env] file in 'backend/config' directory and add the following env variables

```bash
NODE_ENV=development
PORT=5000
MONGO_URI=the uri of cluster
```

To add seeder data

```bash
cd backend
node seeder -i
```

To remove seeder data

```bash
cd backend
node seeder -d
```

Run app in development mode

```bash
cd backend
npm run dev
```

```bash
cd backend
npm run dev
```

Run front end

```bash
cd mcq-front
npm start
```
