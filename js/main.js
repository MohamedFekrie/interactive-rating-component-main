let nums = Array.from(document.querySelectorAll('.card:first-child ul li'));
let submitBtn = document.querySelector('.submit-btn');

let rating = 0;

nums.forEach(el => {
    el.addEventListener('click', (e) => {
        nums.forEach(el => el.classList.remove('active'))
        el.classList.add('active');
        rating = parseInt(el.innerHTML);
    })
})

submitBtn.addEventListener('click', () => {
    if (rating !== 0) {
        document.querySelector('.card:first-child').classList.add('done-1');
        setTimeout(() => {
            document.querySelector('.card:first-child').classList.add('done-1', 'done-2');
            document.querySelector('.card:last-of-type').classList.remove('done-2');
        }, 300)
        setTimeout(() => {
            document.querySelector('.card:last-of-type').classList.remove('done-1');
            document.querySelector('.card:last-of-type span').innerHTML = rating;
        }, 350)
    }
})
