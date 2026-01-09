# إعداد PostgreSQL لـ LogistiMa

## الخيار 1: تشغيل Docker Desktop (أسهل)
1. افتح Docker Desktop من قائمة Start
2. انتظر حتى يعمل تماماً
3. شغل الأمر التالي في terminal:
```bash
docker run --name postgres-logistima -e POSTGRES_PASSWORD=12356 -e POSTGRES_DB=logistima -p 5432:5432 -d postgres:15
```

## الخيار 2: تثبيت PostgreSQL محلياً
1. حمل من: https://www.postgresql.org/download/windows/
2. ثبّت البرنامج
3. استخدم كلمة المرور: 12356
4. أنشئ قاعدة بيانات اسمها: logistima

## الخيار 3: استخدام قاعدة بيانات عبر الإنترنت
1. سجل في https://supabase.com (مجاني)
2. أنشئ مشروع جديد
3. احصل على connection string
4. استبدل DB_URL في ملف .env

## بعد الإعداد
1. تأكد أن PostgreSQL يعمل
2. شغل: npm start
