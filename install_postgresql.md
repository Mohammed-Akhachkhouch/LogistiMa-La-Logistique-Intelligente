# تثبيت PostgreSQL على Windows

## الطريقة 1: تحميل PostgreSQL مباشرة
1. اذهب إلى https://www.postgresql.org/download/windows/
2. حمل PostgreSQL Installer
3. شغل الـ installer
4. اختر كلمة المرور: 12356 (مثل الموجود في .env)
5. اختر تثبيت كل المكونات

## الطريقة 2: استخدام Docker (أسهل إذا كان Docker مثبت)
```bash
docker run --name postgres-logistima -e POSTGRES_PASSWORD=12356 -e POSTGRES_DB=logistima_mohammed -p 5432:5432 -d postgres:15
```

## بعد التثبيت
1. تأكد أن PostgreSQL يعمل
2. شغل التطبيق مرة أخرى: npm start
