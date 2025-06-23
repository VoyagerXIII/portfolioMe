# Step 1: Build React App
FROM node:18 AS builder

# ตั้งค่า directory ทำงาน
WORKDIR /app

# คัดลอก package.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดเข้า container และ build
COPY . .
RUN npm run build

# Step 2: Serve Static Files ด้วย Nginx
FROM nginx:alpine

# คัดลอกไฟล์ build ไปที่ Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# เปิดพอร์ต 80 สำหรับเว็บเซิร์ฟเวอร์
EXPOSE 80

# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]
