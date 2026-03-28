// تفعيل الروابط النشطة تلقائيًا
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // نموذج الاتصال
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.remove('hidden');
            form.reset();

            // إخفاء الرسالة بعد 5 ثواني
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        });
    }
});