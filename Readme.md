# Create new project 
npx create-vite@latest --template typescript-react-tailwind-vite my-project \
cd my-project \
npm install \
npm run dev

# Install tailwind
npm install -D tailwindcss postcss autoprefixer

# Create Init
npx tailwindcss init -p

# Update index.css
@tailwind base;\
@tailwind components;\
@tailwind utilities;

# Update tailwind.config.js
<<<<<<< HEAD
content: ["./src/**/*.{js,jsx,ts,tsx}"],
=======
content: ["./src/**/*.{js,jsx,ts,tsx}"],
>>>>>>> ac6b371eaad57ad867f214a311047c4e2c9eb279
