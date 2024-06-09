# Gunakan image node.js sebagai dasar
FROM node:alpine

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (atau yarn.lock jika menggunakan Yarn)
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin semua file proyek ke dalam container
COPY . .

# Expose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi pada mode pratinjau (development mode)
CMD ["npm", "run", "preview"]