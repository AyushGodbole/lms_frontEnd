# LMS Front-End

### setup instructions

1. clone the project

```
    git clone https://github.com/AyushGodbole/lms_frontEnd.git

```
2. Move into the directory

```
    cd lms-frontent

```

3. install dependencies
```
    npm i

```

4. run the server
```
    npm run dev

```

### setup instructions for tailwind css

1. install tailwind css
```
    npm install -D tailwindcss

```

2. create tailwind config file
```
    npx tailwindcss init

```

3. add file extentions to tailwind config file
```
    content: ["./src/**/*.{html,js}"]

```

4. add the tailwind directives at the top of the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

```