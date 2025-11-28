
const allSlider = document.querySelectorAll('.myslider')
allSlider.forEach((el, index) => {
    el.addEventListener('input', (e)=>{
        const container = el.closest(".image-container");
        container.style.setProperty('--position', `${e.target.value}%`);
        
    })
});