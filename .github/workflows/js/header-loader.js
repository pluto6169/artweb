document.addEventListener('DOMContentLoaded', function () {
    // تحديد المسار الأساسي تلقائياً
    const getBasePath = () => {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/arts-website/')) {
            return '/arts-website/';
        }
        return './';
    };

    const basePath = getBasePath();

    // تحديث جميع الصور والمسارات
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = basePath + img.getAttribute('data-src');
    });
});