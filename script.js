
window.onload = function () {
    //header-nav
    addHeaderNavScrollHandler();
    addBurgerMenuHandler();

    //slider  
    addSliderControlClickHandler();
    addPhoneClickHandler();

    //portfolio
    addPortfolioTagsClickHandler();
    addPortfolioImageClickHandler();

    //quote
    addQuoteFormHandler();
}

const addBurgerMenuHandler = () => {
    const burgerMenu = document.querySelector('.burger_menu');
    const burgerButton = document.querySelector('.burger_menu-button');
    const headerNav = document.querySelector('.header-nav');
    burgerButton.addEventListener('click', (e) => {

        burgerButton.classList.toggle('burger_menu--enable');
        burgerMenu.classList.toggle('burger_menu--enable');
        headerNav.classList.toggle('burger_menu--enable');

    });
}





const addQuoteFormHandler = () => {
    const quoteForm = document.getElementById('quote-form');
    const fieldSubject = document.getElementById('field-subject');
    const fieldDescribe = document.getElementById('field-describe');
    quoteForm.addEventListener('submit', (e) => {
        let valSubject = 'Без темы';
        let valDescribe = 'Без описания';
        if (fieldSubject.value) valSubject = `Тема: ${fieldSubject.value}`;
        if (fieldDescribe.value) valDescribe = `Тема: ${fieldDescribe.value}`;
        const massage = `Письмо отправлено\n${valSubject}\n${valDescribe}`;
        alert (massage);
        e.preventDefault();
        quoteForm.reset();
    });
}


const addPortfolioImageClickHandler = () => {
    const imagesContainer = document.querySelector('.images_container');
    imagesContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('img-block')) {
            let clickedImg = e.target;
            if (clickedImg.classList.contains('img-block--border')) {
                clickedImg.classList.toggle('img-block--border')
            } else {
                removeActiveTags('.img-block', 'img-block--border');
                addActiveTag(clickedImg, 'img-block--border');
            }
        }
    });
}

const addPhoneClickHandler = () => {
    document.querySelector('.slider-screen-1').addEventListener('click', (e) => {
        if (e.target.classList.contains('slider-iphone-img')) {
            const iphoneScreen = e.target.nextElementSibling;
            if (iphoneScreen.classList.contains('slider-iphone-screen--black')) {
                iphoneScreen.classList.remove('slider-iphone-screen--black');
            } else {
                iphoneScreen.classList.add('slider-iphone-screen--black');
            }
        }
    });
}


const addPortfolioTagsClickHandler = () => {
    const tagsList = document.querySelector('.portfolio-tags');
    tagsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeActiveTags('.portfolio-tags .tag', 'tag--active');
            addActiveTag(clickedTag, 'tag--active');
            shearElementPortfolio();
        }
    });
}

const shearElementPortfolio = () => {
    const imgBlockList = document.querySelectorAll('.img-block');
    const arrayImgBlock = [...imgBlockList].sort(shuffledArray);
    imgBlockList.forEach((block) => block.remove());
    const grid = document.querySelector('.layout-grid3x3');
    arrayImgBlock.forEach((block) => {
        grid.append(block);
    });
}

const shuffledArray = () => {
    return Math.random() - 0.5;
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
        sliderScreens[currentScreen].addEventListener('animationend', function () {
            this.classList.remove('slider-active', direction);
        });
    }

    const showScreen = (direction) => {
        sliderScreens[currentScreen].classList.add('slider-next', direction);
        sliderScreens[currentScreen].addEventListener('animationend', function () {
            this.classList.remove('slider-next', direction);
            this.classList.add('slider-active');
            isEnabled = true;
        });
    }
}