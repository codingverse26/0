// ننتظر تحميل الصفحة بالكامل قبل أي تعديل
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. نجيب عنصر الصورة من خلال الـ ID
    const logo = document.getElementById("logo");

    // 2. نتأكد إن الصورة موجودة قبل تعديل الخصائص
    if (logo) {
        // تخلي الصورة عنصر كتلة
        logo.style.display = "block";

        // توسيط الصورة أفقياً
        logo.style.margin = "0 auto";

        // تحديد حجم الصورة (تقدر تعدل على القيمة)
        logo.style.width = "200px";
        logo.style.height = "auto";
    }

    // --- لو عندك أي عناصر هيدر إضافية تحب تتحكم فيها، ممكن تضيف هنا ---
    // مثال: تغيير لون خلفية الهيدر عند التمرير
    const header = document.getElementById("header");
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = "#111"; // غامق عند التمرير
            } else {
                header.style.backgroundColor = "transparent"; // افتراضي
            }
        });
    }

});
