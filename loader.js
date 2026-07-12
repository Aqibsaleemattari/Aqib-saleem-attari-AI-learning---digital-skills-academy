// loader.js - صرف 5 لائنز
// یہ فائل پرانے index.html کو بغیر چھیڑے نئے فیچرز لوڈ کرتی ہے

document.addEventListener('DOMContentLoaded', function() {
    // نئی CSS فائل لوڈ کریں
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'new-features.css';
    document.head.appendChild(link);

    // نئی JavaScript فائل لوڈ کریں
    const script = document.createElement('script');
    script.src = 'new-features.js';
    document.body.appendChild(script);
});
