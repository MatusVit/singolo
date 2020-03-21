
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
    document.querySelector('.chev--left').addEventListener('click', (e) => {
        let clickedTag = e.currentTarget;
        // TODO function move left
        console.log(clickedTag);

    });

    document.querySelector('.chev--right').addEventListener('click', (e) => {
        let clickedTag = e.currentTarget;
        // TODO function move right
        console.log(clickedTag);
    });
}