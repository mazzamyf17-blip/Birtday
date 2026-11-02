
document.addEventListener("DOMContentLoaded", () => {

    // MENGAMBIL SEMUA ELEMEN
    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");

    const startBtn = document.getElementById("startBtn");

    const letterBtn = document.getElementById("letterBtn");
    const letterContent = document.getElementById("letterContent");

    const candleBtn = document.getElementById("candleBtn");
    const flame = document.getElementById("flame");

    const wishBtn = document.getElementById("wishBtn");
    const cakeMessage = document.getElementById("cakeMessage");

    const finalBtn = document.getElementById("finalBtn");
    const finalMessage = document.getElementById("finalMessage");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    const backTopBtn = document.getElementById("backTopBtn");

    const confettiContainer = document.getElementById("confettiContainer");


    // 1. MEMBUKA WEBSITE
    startBtn.addEventListener("click", () => {

        opening.classList.add("hidden");
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createConfetti(45);

    });


    // 2. MEMBUAT CONFETTI
    function createConfetti(amount = 35) {

        const colors = [
            "#f6cbd6",
            "#e9e1fa",
            "#dceefa",
            "#fce4bd",
            "#d8eadb"
        ];

        for (let i = 0; i < amount; i++) {

            const piece = document.createElement("span");

            piece.className = "confetti-piece";

            piece.textContent = [
                "✦", "♡", "✿", "✧", "•"
            ][Math.floor(Math.random() * 5)];

            piece.style.left = Math.random() * 100 + "vw";

            piece.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            piece.style.fontSize =
                (12 + Math.random() * 16) + "px";

            piece.style.animationDelay =
                (Math.random() * 1.5) + "s";

            piece.style.animationDuration =
                (2.5 + Math.random() * 2) + "s";

            confettiContainer.appendChild(piece);

            piece.addEventListener("animationend", () => {
                piece.remove();
            });

        }

    }


    // 3. GALERI FOTO / LIGHTBOX
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const imageUrl = item.dataset.image;

            lightboxImage.src = imageUrl;

            lightbox.classList.remove("hidden");

            document.body.style.overflow = "hidden";

        });

    });


    // MENUTUP LIGHTBOX
    function closePhoto() {

        lightbox.classList.add("hidden");

        lightboxImage.src = "";

        document.body.style.overflow = "";

    }

    closeLightbox.addEventListener("click", closePhoto);

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closePhoto();
        }

    });


    // TOMBOL ESC UNTUK MENUTUP FOTO
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closePhoto();
        }

    });


    // 4. MEMBUKA SURAT RAHASIA
    letterBtn.addEventListener("click", () => {

        const isOpening = letterContent.classList.contains("hidden");

        letterContent.classList.toggle("hidden");

        if (isOpening) {

            letterBtn.innerHTML =
                '<span class="envelope">💌</span><span>Close letter</span>';

            createConfetti(15);

            setTimeout(() => {
                letterContent.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 100);

        } else {

            letterBtn.innerHTML =
                '<span class="envelope">💌</span><span>Tap to open</span>';

        }

    });


    // 5. INTERAKSI LILIN
    let candleOff = false;

    candleBtn.addEventListener("click", () => {

        candleOff = !candleOff;

        flame.classList.toggle("off", candleOff);

        candleBtn.setAttribute(
            "aria-label",
            candleOff ? "Nyalakan lilin" : "Matikan lilin"
        );

        cakeMessage.textContent = candleOff
            ? "Make a wish, Queensha! ✨"
            : "Your wish is waiting... ♡";

    });


    // 6. MAKE A WISH
    wishBtn.addEventListener("click", () => {

        if (!candleOff) {

            candleOff = true;
            flame.classList.add("off");

            candleBtn.setAttribute(
                "aria-label",
                "Nyalakan lilin"
            );

        }

        cakeMessage.textContent =
            "May all your beautiful wishes come true! ♡";

        wishBtn.textContent = "Wish Sent! ♡";

        createConfetti(70);

    });


    // 7. KEJUTAN TERAKHIR
    finalBtn.addEventListener("click", () => {

        const isOpening =
            finalMessage.classList.contains("hidden");

        finalMessage.classList.toggle("hidden");

        if (isOpening) {

            finalBtn.textContent = "Close Surprise";

            createConfetti(100);

            setTimeout(() => {
                finalMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 100);

        } else {

            finalBtn.textContent = "One Last Surprise ♡";

        }

    });


    // 8. KEMBALI KE ATAS
    backTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


});
