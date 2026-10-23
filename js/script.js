// Mobil menyu funksiyasi
function toggleMenu() {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('active');
}

// Modal funksiyalari
const modal = document.getElementById('orderModal');
const successModal = document.getElementById('successModal');

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function openSuccessModal() {
    successModal.style.display = 'flex';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

// Modal tashqarisiga bosilganda yopilishi
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == successModal) {
        successModal.style.display = "none";
    }
}

// Form yuborilishining oldini olish va Success oynasini chiqarish
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal();
    openSuccessModal();
});
