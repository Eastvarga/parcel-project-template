; 
(
    function uptoButton() {
        window.addEventListener('scroll', (e) => {
            const uptoButton = document.querySelector('.upto-button')
            uptoButton.classList.add('hide')

            if(window.scrollY >= 0.9 * window.innerHeight) {
                console.log(window.scrollY)
                
                uptoButton.classList.remove('hide')

            }

        })
    }
)();

