// Создание звезд для прелоадера
function createPreloaderStars() {
    const preloaderStars = document.querySelector('.preloader-stars');
    const starCount = 20;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'preloader-star';
        
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = (Math.random() - 0.5) * 100;
        const endY = (Math.random() - 0.5) * 100;
        const duration = 2 + Math.random() * 2;
        const delay = Math.random() * 2;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.setProperty('--tx', `${endX}px`);
        star.style.setProperty('--ty', `${endY}px`);
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        preloaderStars.appendChild(star);
    }
}

// Функция скрытия прелоадера
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    
    // Удаляем прелоадер из DOM после анимации
    setTimeout(() => {
        preloader.remove();
    }, 500);
}

// Инициализация прелоадера
document.addEventListener('DOMContentLoaded', () => {
    createPreloaderStars();
    
    // Ждем загрузки всех ресурсов
    window.addEventListener('load', () => {
        // Добавляем небольшую задержку для демонстрации прелоадера
        setTimeout(hidePreloader, 1000);
    });
    
    // На случай, если событие load уже произошло
    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, 1000);
    }
});
