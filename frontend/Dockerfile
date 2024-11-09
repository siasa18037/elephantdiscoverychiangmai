# Dockerfile for frontend
FROM node:16

# ตั้งค่าโฟลเดอร์ทำงานใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json เพื่อทำการติดตั้ง dependencies
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# สร้าง build ของ frontend
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# รัน frontend โดยใช้ serve เพื่อนำการ build มาแสดงผล
RUN npm install -g serve
CMD ["serve", "-s", "build"]
