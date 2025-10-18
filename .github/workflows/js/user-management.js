// إدارة حالة المستخدم والبيانات الثابتة
document.addEventListener('DOMContentLoaded', function () {
    updateUserInterface();
    setupLoginButtons();
});

// بيانات المستخدمين الثابتة
const STATIC_USERS = [
    {
        username: 'admin',
        password: 'admin123',
        name: 'د. علي إبراهيم',
        role: 'أستاذ',
        email: 'admin@arts.edu.eg'
    },
    {
        username: 'student',
        password: 'student123',
        name: 'أحمد محمد',
        role: 'طالب',
        email: 'student@arts.edu.eg'
    }
];

// إعداد أزرار تسجيل الدخول
function setupLoginButtons() {
    const loginButtons = document.querySelectorAll('.login-btn:not([onclick])');

    loginButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    });
}

// تحديث واجهة المستخدم بناءً على حالة تسجيل الدخول
function updateUserInterface() {
    const currentUser = getCurrentUser();
    const userInfoElements = document.querySelectorAll('.user-info');

    userInfoElements.forEach(element => {
        if (currentUser) {
            // إذا كان المستخدم مسجل الدخول
            element.innerHTML = `
                <span class="user-name">${currentUser.name}</span>
                <button class="login-btn" onclick="logout()">تسجيل الخروج</button>
            `;
        } else {
            // إذا لم يكن المستخدم مسجل الدخول
            element.innerHTML = `
                <button class="login-btn">تسجيل الدخول</button>
            `;
        }
    });

    // تحديث رسالة الترحيب في الصفحة الرئيسية
    updateWelcomeMessage();
}

// تحديث رسالة الترحيب
function updateWelcomeMessage() {
    const currentUser = getCurrentUser();
    const welcomeBanner = document.querySelector('.welcome-banner h2');

    if (welcomeBanner && currentUser) {
        const firstName = currentUser.name.split(' ')[0];
        welcomeBanner.textContent = `مرحبًا بعودتك، ${firstName}!`;
    }
}

// الحصول على بيانات المستخدم الحالي
function getCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
}

// تسجيل الدخول
function login(username, password) {
    const user = STATIC_USERS.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserInterface();
        return true;
    }
    return false;
}

// تسجيل الخروج
function logout() {
    if (confirm('هل تريد تسجيل الخروج؟')) {
        localStorage.removeItem('currentUser');
        updateUserInterface();
        window.location.reload();
    }
}