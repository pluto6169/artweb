// إدارة القائمة على الموبايل
document.addEventListener('DOMContentLoaded', function () {
    // إنشاء عناصر القائمة المتنقلة
    createMobileMenu();

    // إعداد أحداث القائمة
    setupMobileMenuEvents();
});

function createMobileMenu() {
    // زر القائمة الهامبرجر
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('onclick', 'toggleMobileMenu()');

    // القائمة الجانبية للموبايل
    const mobileSidebar = document.createElement('nav');
    mobileSidebar.className = 'mobile-sidebar';
    mobileSidebar.id = 'mobileSidebar';

    // زر الإغلاق
    const closeButton = document.createElement('button');
    closeButton.className = 'close-mobile-menu';
    closeButton.innerHTML = '×';
    closeButton.setAttribute('onclick', 'closeMobileMenu()');

    // نسخ عناصر القائمة الأصلية
    const originalSidebar = document.querySelector('.sidebar');
    if (originalSidebar) {
        const originalMenu = originalSidebar.querySelector('ul').cloneNode(true);
        mobileSidebar.appendChild(closeButton);
        mobileSidebar.appendChild(originalMenu);
    }

    // طبقة التعتيم
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.setAttribute('onclick', 'closeMobileMenu()');

    // إضافة العناصر للصفحة
    document.body.appendChild(menuToggle);
    document.body.appendChild(mobileSidebar);
    document.body.appendChild(overlay);
}

function setupMobileMenuEvents() {
    // إغلاق القائمة عند النقر على رابط
    const mobileLinks = document.querySelectorAll('.mobile-sidebar a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    const mobileSidebar = document.getElementById('mobileSidebar');
    const overlay = document.querySelector('.overlay');

    mobileSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileSidebar = document.getElementById('mobileSidebar');
    const overlay = document.querySelector('.overlay');

    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
}