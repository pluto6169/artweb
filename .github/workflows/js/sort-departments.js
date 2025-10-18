// ترتيب الأقسام أبجديًا
function sortDepartments() {
    const container = document.getElementById('departmentsList');
    const cards = Array.from(container.children);
    
    cards.sort((a, b) => {
        const nameA = a.getAttribute('data-name');
        const nameB = b.getAttribute('data-name');
        return nameA.localeCompare(nameB, 'ar');
    });
    
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(card));
    
    alert('تم ترتيب الأقسام أبجديًا');
}
