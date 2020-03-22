
window.onload = function () {
    console.log('Working!!!');

    //header-nav
    addHeaderNavScrollHandler();

    //slider  
    addSliderControlClickHandler();
   
    //portfolio
    addPortfolioTagsClickHandler();



}

const addPortfolioTagsClickHandler = () => {
    const tagsList = document.querySelector('.portfolio-tags');
    tagsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeActiveTags('.portfolio-tags .tag', 'tag--active');
            addActiveTag(clickedTag, 'tag--active');
            // TODO function mix-images
        }
    });
}


const addHeaderNavScrollHandler = () => {
    const sections = document.querySelectorAll('section');

    document.addEventListener('scroll', () => {
        const currentPosition = window.scrollY + 95;
        sections.forEach((elm) => {
            if (elm.offsetTop <= currentPosition
                && (elm.offsetTop + elm.offsetHeight) > currentPosition) {
                removeActiveTags('.header-nav-list .nav-item', 'nav-item--active');
                const clickedTag = document.querySelector(`.nav-item[href="#anchor-${elm.getAttribute('id')}"]`);
                addActiveTag(clickedTag, 'nav-item--active');
            }
        })
    });
}

const removeActiveTags = (selectorList, selectorTag) => {
    let tags = document.querySelectorAll(selectorList);

    tags.forEach(tag => {
        tag.classList.remove(selectorTag);
    });
}

const addActiveTag = (clickedTag, selectorTag) => {
    clickedTag.classList.add(selectorTag);
}


const addSliderControlClickHandler = () => {
    const sliderScreens = document.querySelectorAll('.slider-screen');
    let currentScreen = 0;
    let isEnabled = true;
    const changeCurrentScreens = (n) => {
        currentScreen = (n + sliderScreens.length) % sliderScreens.length;
    }

    document.querySelector('.chev--left').addEventListener('click', (e) => {
        if (isEnabled) {
            slidePreviousScreen(currentScreen);
        }
    });

    document.querySelector('.chev--right').addEventListener('click', (e) => {
        if (isEnabled) {
            slideNextScreen(currentScreen);
        }
    });

    const slideNextScreen = (currentScreen) => {
        hideScreen('to-left');
        changeCurrentScreens(currentScreen + 1);
        showScreen('from-right')
    };

    const slidePreviousScreen = (currentScreen) => {
        hideScreen('to-right');
        changeCurrentScreens(currentScreen - 1);
        showScreen('from-left');
    };

    const hideScreen = (direction) => {
        isEnabled = false;
        sliderScreens[currentScreen].classList.add(direction);
        sliderScreens[currentScreen].addEventListener('animationend', function() {
            this.classList.remove('slider-active', direction);
        });
    }

    const showScreen = (direction) => {
        sliderScreens[currentScreen].classList.add('slider-next', direction);
        sliderScreens[currentScreen].addEventListener('animationend', function() {
            this.classList.remove('slider-next', direction);
            this.classList.add('slider-active');
            isEnabled = true;
        });
    }
}