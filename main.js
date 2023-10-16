const block = document.getElementById('menu-content');
block.style.transition = 'transform 1s';
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if(key == "ArrowLeft") {
        let transformValue = window.getComputedStyle(block).getPropertyValue('transform');
        let currentTranslateX = transformValue != 'none' ? parseInt(transformValue.split(',')[4].trim()) : 0;
        
        console.log(currentTranslateX)
        
        block.style.transform = 'translateX(' + (currentTranslateX + 2400) + 'px)';
    } else if (key == "ArrowRight") {
        let transformValue = window.getComputedStyle(block).getPropertyValue('transform');
        let currentTranslateX = transformValue != 'none' ? parseInt(transformValue.split(',')[4].trim()) : 0;

        console.log(currentTranslateX)

        block.style.transform = 'translateX(' + (currentTranslateX - 2400) + 'px)';
    }
});
