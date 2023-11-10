# Install tailwind
npm install -D tailwindcss postcss autoprefixer
# Create Init
npx tailwindcss init -p
# Update index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
# Update tailwind.config.js
content: ["./src/**/*.{js,jsx,ts,tsx}"],