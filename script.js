window.onload = () => {
    // Спочатку показуємо елементи
    setTimeout(() => {
        document.querySelector('.container').style.opacity = 1;
    }, 500);

    // Через 5 секунд зникнення елементів
    setTimeout(() => {
        document.querySelector('.container').style.animation = 'fadeOut 2s forwards';
    }, 5000); // 5 секунд
};
