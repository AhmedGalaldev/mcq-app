# Setup MCQ App

```bash
git clone https://github.com/AhmedGalaldev/mcq-app.git
```

```bash
npm install
```

Create [config.env] file in config directory and add the following env variables

```bash
NODE_ENV=development
PORT=5000
MONGO_URI=the uri of cluster
```

To add seeder data

```bash
node seeder -i
```

To remove seeder data

```bash
node seeder -d
```

Run app in development mode

```bash
npm run dev
```

# APIs

1-create student method post

```bash
http://localhost:5000/api/students
```

2-update user score method put and send the id of answer in body

```bash
http://localhost:5000/api/students/:id
```

3-get random 5 question from database seeder method get with 4 choices

```bash
http://localhost:5000/api/questions
```
