// تحقق من نموذج التسجيل
function validateAdmission(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const department = document.getElementById('department').value;
    
    if (fullName === '' || phone === '' || email === '' || department === '') {
        alert('الرجاء ملء جميع الحقول');
        return false;
    }
    
    if (phone.length !== 11 || !phone.match(/^[0-9]+$/)) {
        alert('الرجاء إدخال رقم هاتف صحيح (11 رقم)');
        return false;
    }
    
    if (!email.includes('@')) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return false;
    }
    
    alert('تم تقديم طلبك بنجاح! سيتم التواصل معك قريباً.');
    document.getElementById('admissionForm').reset();
    return true;
}
