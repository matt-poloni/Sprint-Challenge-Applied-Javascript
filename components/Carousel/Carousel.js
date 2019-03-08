class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.leftBtn.addEventListener('click', this.clickLeft.bind(this));
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.rightBtn.addEventListener('click', this.clickRight.bind(this));
        this.images = this.carousel.querySelectorAll('img');
        console.log(this.images);
        this.index = 0;
        this.images[this.index].classList.add('currImg');
    }

    clickLeft() {
        this.images[this.index].classList.remove('currImg');
        this.index - 1 < 0 ?
            this.index = this.images.length -1 :
            this.index--;
        this.images[this.index].classList.add('currImg');
    }
    clickRight() {
        this.images[this.index].classList.remove('currImg');
        this.index + 1 >= this.images.length ?
            this.index = 0 :
            this.index++;
        this.images[this.index].classList.add('currImg');
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/