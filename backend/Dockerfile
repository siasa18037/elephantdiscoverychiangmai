# Dockerfile for backend
FROM node:16

# ตั้งค่าโฟลเดอร์ทำงานใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json เพื่อทำการติดตั้ง dependencies
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง container
COPY . .

# เปิดพอร์ต 4000
EXPOSE 4000

# รัน backend
CMD ["npm", "start"]
