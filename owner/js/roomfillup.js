document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("roomModal");
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = document.getElementById("modalTitle");
    const closeBtn = document.querySelector(".close");
    const roomForm = document.getElementById("roomForm");

    // Open modal when a room is clicked
    document.querySelectorAll('.room').forEach(room => {
        room.addEventListener('click', () => {
            const roomNumber = room.textContent.split('\n')[0].replace('Room ', '').trim();
            modalTitle.textContent = `Edit Info - ${roomNumber}`;
            modal.style.display = "block";
            modalContent.classList.remove('hide');
            modalContent.classList.add('show');
        });
    });

    // Function to close modal with animation
    function closeModal() {
        modalContent.classList.remove('show');
        modalContent.classList.add('hide');
        modalContent.addEventListener('animationend', () => {
            if (modalContent.classList.contains('hide')) {
                modal.style.display = "none";
            }
        }, { once: true });
    }

    // Close modal when close button is clicked
    closeBtn.onclick = closeModal;

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // Handle form submission
    roomForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const tenantName = document.getElementById('tenantName').value;
        const contact = document.getElementById('contact').value;
        const status = document.getElementById('status').value;

        console.log(`Tenant: ${tenantName}, Contact: ${contact}, Status: ${status}`);

        const roomNumber = modalTitle.textContent.replace('Edit Info - ', '');
        const roomDiv = Array.from(document.querySelectorAll('.room'))
                             .find(r => r.textContent.includes(roomNumber));

        if (roomDiv) {
            roomDiv.innerHTML = `Room ${roomNumber}<br><small>${status}</small>`;
            roomDiv.classList.remove('occupied', 'vacant');
            roomDiv.classList.add(status.toLowerCase());
        }

        closeModal();
        roomForm.reset();
    });
});
