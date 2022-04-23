'use strict'

const data = `[
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]`;

const dataPets = JSON.parse(data);

function toggleActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(block.classList.contains(toggleClassName)) block.classList.remove(toggleClassName)
    else block.classList.add(toggleClassName)
}
function deleteActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(block.classList.contains(toggleClassName)) block.classList.remove(toggleClassName)
}
function addActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(!block.classList.contains(toggleClassName)) block.classList.add(toggleClassName)
}

function addEventClosePopup() {
    const closeBtn = document.querySelector('.popup_close-btn');
    closeBtn.addEventListener('click', () => {
        closePopup();
    })
    
}
function arrayToString(array) {
    let string = '';
    array.forEach(item => {
        if(array[array.length - 1] == item) string += `${item}`
        else string += `${item}, `
    })
    return string;
}
function createPopup(name) {
    const person = dataPets.filter(item => item.name == name)[0];
    const newBlock = document.createElement('div');
    newBlock.classList.add('popup')
    newBlock.innerHTML = `<button type="button" class="popup_close-btn"></button>     
        <div class="popup_img">
            <img src=${person.img} alt=${person.name}>
        </div>
        <div class="popup_description">            
            <div class="popup_description_breed">
                <h4 class="name-animal">${person.name}</h4>
                <p><span class="animal-type">${person.type}</span> - <span class="animal-breed">${person.breed}</span>
                </p>
            </div>
            <p class="popup_description_text">${person.description}</p>
            <ul class="popup_description_list">
                <li class="list-item">Age: <span class="dinamic age">${person.age}</span></li>
                <li class="list-item">Inoculations: <span class="dinamic inoculations">${arrayToString(person.inoculations)}</span></li>
                <li class="list-item">Diseases: <span class="diseases dinamic">${arrayToString(person.diseases)}</span></li>
                <li class="list-item">Parasites: <span class="dinamic parasites">${arrayToString(person.parasites)}</span></li>
            </ul>
        </div>`;
    document.querySelector('body').prepend(newBlock);
}
function openPopup() {
    const slider = document.querySelector('.our-friends_slider_wrapper');
    slider.addEventListener('click', (e) => {
        let card = e.target.closest('.our-friends_slider_cards_card');
        if(e.target.classList.contains('our-friends_slider_cards_card') || card) {
            createPopup(card.dataset.name);
            addEventClosePopup();
            addActiveClass('.overlay', 'active');
            addActiveClass('body','active');
        }
    })
}
function closePopup() {
    deleteActiveClass('.overlay','active'); 
    deleteActiveClass('body','active');
    deletePopup();
}
function deletePopup() {
    const popup = document.querySelector('.popup');
    if(popup) popup.remove();
}
openPopup()
function toggleBurger() {
    const btn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const nav_items = document.querySelectorAll('.navbar-list a');
    btn.addEventListener('click', () => {
        toggleActiveClass('.navbar', 'navbar-active');
        toggleActiveClass('.burger', 'burger-active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('body', 'active');
    })
    overlay.addEventListener('click', (e) => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');
        deleteActiveClass('.overlay', 'active');  
        deleteActiveClass('body', 'active'); 
        closePopup();     
    })
    nav_items.forEach(item => item.addEventListener('click', () => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');
        deleteActiveClass('.overlay', 'active');  
        deleteActiveClass('body', 'active'); 
    }))
}
toggleBurger();

function slider() {
    const slider = document.querySelector('.our-friends_slider_wrapper');
    let arrayWithCardsNameRight = [];
    let arrayWithCardsNameLeft = [];
    const next = document.querySelector('.btn-right'),
          prev = document.querySelector('.btn-left');
    
    
    next.addEventListener('click', () => {
        toSwipe('right');
    });
    prev.addEventListener('click', () => {
        toSwipe('left');
    });
    function createNewSlide(direction = null) {
        
        const newSlide = document.createElement('div');
        newSlide.classList.add('our-friends_slider_cards');

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        function addNewCardInSlider(direction = null) {
            const random = getRandomInt(8);
            if(direction == 'right') {
                const sliders = slider.querySelectorAll('.our-friends_slider_cards');
                const lastSlide = [...sliders][[...sliders].length - 1];
                const firstThreeCards = lastSlide.querySelectorAll('.our-friends_slider_cards_card .animal-name');
                for(let j = 0; j < 3; j++) {
                    arrayWithCardsNameRight[j] = firstThreeCards[j].innerHTML;
                }
                if(!arrayWithCardsNameRight.includes(dataPets[random].name)) {
                    newSlide.append(createNewCard(random));
                    arrayWithCardsNameRight.push(dataPets[random].name);
                    if(arrayWithCardsNameRight.length > 5) {
                        arrayWithCardsNameRight.shift();
                    }
                } else {
                    addNewCardInSlider(direction);
                }
            } else if (direction == 'left') {
                const firstSlide = slider.querySelector('.our-friends_slider_cards');
                const firstThreeCards = firstSlide.querySelectorAll('.our-friends_slider_cards_card .animal-name');
                for(let j = 0; j < 3; j++) {
                    arrayWithCardsNameLeft[j] = firstThreeCards[j].innerHTML;
                }
                if(!arrayWithCardsNameLeft.includes(dataPets[random].name)) {
                    newSlide.append(createNewCard(random));
                    arrayWithCardsNameLeft.push(dataPets[random].name);
                    if(arrayWithCardsNameLeft.length > 5) {
                        arrayWithCardsNameLeft.shift();
                    }
                } else {
                    addNewCardInSlider(direction);
                }
            } else {
                if(!arrayWithCardsNameRight.includes(dataPets[random].name)) {
                    newSlide.append(createNewCard(random));
                    arrayWithCardsNameRight.push(dataPets[random].name);
                    if(arrayWithCardsNameRight.length > 5) arrayWithCardsNameRight.shift();
                }
                else {
                    addNewCardInSlider(direction);
                }
            }
        }     

        function createNewCard(i) {
            const newCard = document.createElement('div');
            newCard.classList.add('our-friends_slider_cards_card');            
            newCard.setAttribute('data-name', `${dataPets[i].name}`)
            newCard.innerHTML = `
                <img src='${dataPets[i].img}' alt=${dataPets[i].name}>
                <span class="animal-name">${dataPets[i].name}</span>
                <button data-name='${dataPets[i].name}' type="button">Learn more</button>
            `
            return newCard;
        }
        
        for(let i = 0; i < 3; i++) {
            addNewCardInSlider(direction);
        }

        return newSlide;
    }
    function toSwipe(direction) {
        if(direction == 'right') {   
            arrayWithCardsNameRight = [];         
            slider.firstElementChild.remove();
            slider.append(createNewSlide(direction));
        } else if (direction == 'left') { 
            arrayWithCardsNameLeft = [];           
            slider.lastElementChild.remove();
            slider.prepend(createNewSlide(direction));
        }
    }

    function createStartPageSlider() {
        for( let i = 0; i < 5; i++) {
            slider.append(createNewSlide());
        }
    }

    createStartPageSlider();
}
slider()

