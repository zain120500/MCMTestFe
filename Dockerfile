# Tahap 1: Tahap Membangun
FROM node:18-alpine AS build-stage

# Set direktori kerja
WORKDIR /app

# Salin package.json dan package-lock.json atau yarn.lock
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Bangun aplikasi
RUN npm run build

# Tahap 2: Tahap Produksi
FROM node:18-alpine AS production-stage

# Set direktori kerja
WORKDIR /app

# Salin file yang dibangun dari tahap membangun
COPY --from=build-stage /app/.output /app/.output

# Expose port 3000
EXPOSE 3000

# Mulai aplikasi
CMD ["node", ".output/server/index.mjs"]
