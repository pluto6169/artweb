// تحقق من نموذج التواصل
function validateContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('الرجاء ملء جميع الحقول');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return false;
    }
    
    alert('تم إرسال رسالتك بنجاح!');
    document.getElementById('contactForm').reset();
    return true;
}
