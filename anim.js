const btns = document.querySelectorAll('.operation');

btns.forEach(el => {
    el.addEventListener('click', function(e) {
        let
            size = Math.max(this.offsetWidth, this.offsetHeight),
            x = e.offsetX - size / 2,
            y = e.offsetY - size / 2,
            wave = this.querySelector('.wave')

        // Create an element if it doesn't exist
        if (!wave) {
            wave = document.createElement('div')
            wave.className = 'wave'
        }
        wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
        this.appendChild(wave)
    });
})