document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchableItems = document.querySelectorAll(".searchable");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            searchableItems.forEach((item) => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(keyword) ? "" : "none";
            });
        });
    }

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    const signOutBtn = document.getElementById("signOutBtn");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Apakah Anda yakin ingin keluar dari Royal Dashboard?")) {
                alert("Anda berhasil keluar.");
            }
        });
    }
});