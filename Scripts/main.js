// Video Player MIAMI PARTNERS

const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('#video');
let playButton = document.querySelector('#playButton');
let pauseButton = document.querySelector('#pauseButton');

playButton.style.display = 'block';
pauseButton.style.display = 'none';

function playVideo() {
    playButton.style.display = 'none'; 
    pauseButton.style.display = 'block';
    video.play();
}

function pauseVideo() {
    video.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
}

playButton.addEventListener('click', playVideo); 
pauseButton.addEventListener('click', pauseVideo);

videoContainer.addEventListener('mouseenter', function() {
if (!video.paused) {
    pauseButton.style.display = 'block';
}
});

videoContainer.addEventListener('mouseleave', function() {
pauseButton.style.display = 'none';
});

// ACADEMIES READ BUTTON
function showMoreContent(button) {
    const card = button.closest('.card');
    const hiddenContents = card.querySelectorAll('.hidden-content');
    hiddenContents.forEach(function(content) {
        content.classList.add('show');
    });
    button.style.display = 'none';
}

// INTERNATIONAL BRAND SLIDER
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll(".slide"));

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });

        let scrollAmount = 0; 
        const slideWidth = slides[0].offsetWidth; 
        const totalWidth = slides.length * slideWidth;

        const isMiddleSlider = slider.classList.contains("slider-middle");
        const direction = isMiddleSlider ? -1 : 1;

        const speed = 0.5; // Adjust this value to change speed (higher = faster)

        function slide() {
            scrollAmount += direction * speed; // Use the speed multiplier

            if (direction === 1 && scrollAmount >= totalWidth) {
                scrollAmount = 0; 
            } else if (direction === -1 && scrollAmount <= 0) {
                scrollAmount = totalWidth; 
            }

            slider.style.transform = `translateX(-${scrollAmount}px)`;

            requestAnimationFrame(slide);
        }

        requestAnimationFrame(slide);
    });
});

// COURSE SELECT MODAL
document.getElementById('courseSelect').addEventListener('change', function() {
    const selectedValue = this.value;
    let modalId = '';

    switch (selectedValue) {
        case '1':
            modalId = 'graphicDesignModal';
            break;
        case '2':
            modalId = 'digitalMarketingModal';
            break;
        case '3':
            modalId = 'hrModal';
            break;
        case '4':
            modalId = 'frontendProgrammingModal';
            break;
        case '5':
            modalId = 'softwareTestingModal';
            break;
        case '6':
            modalId = 'uxUiAcademyModal';
            break;
        default:
            break;
    }

    if (modalId) {
        const modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }
});


// Video Player MIAMI PARTNERS

const videoContainerEnd = document.querySelector('.video-container-end');
const videoEnd = document.querySelector('#videoEnd');
let playButtonEnd = document.querySelector('#playButtonEnd');
let pauseButtonEnd = document.querySelector('#pauseButtonEnd');

playButtonEnd.style.display = 'block';
pauseButtonEnd.style.display = 'none';

function playVideoEnd() {
    playButtonEnd.style.display = 'none'; 
    pauseButtonEnd.style.display = 'block';
    videoEnd.play();
}

function pauseVideoEnd() {
    videoEnd.pause();
    pauseButtonEnd.style.display = 'none';
    playButtonEnd.style.display = 'block';
}

playButtonEnd.addEventListener('click', playVideoEnd); 
pauseButtonEnd.addEventListener('click', pauseVideoEnd);

videoContainerEnd.addEventListener('mouseenter', function() {
if (!videoEnd.paused) {
    pauseButtonEnd.style.display = 'block';
}
});

videoContainerEnd.addEventListener('mouseleave', function() {
pauseButtonEnd.style.display = 'none';
});