
window.onload = function(){
    console.log('Working!!!');
    
    //header-nav
    addHeaderNavClickHandler();

    //Slider  
    addSliderControlClickHandler();
     
}


const addHeaderNavClickHandler = () => {
    document.querySelector('.header-nav-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-item')) {
            let clickedTag = e.target;     
            removeActiveTags('.header-nav-list .nav-item', 'nav-item--active');
            addActiveTag(clickedTag, 'nav-item--active');
        }
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