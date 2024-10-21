'use strict'
class CardContent{
    constructor (imgUrl,title,descr,href, parent, numberContent) {
        this.imgUrl= imgUrl;
        this.title = title;
        this.descr = descr;
        this.href = href;
        this.parent= parent;
        this.numberContent = numberContent
    }
    render(){
        
        document.querySelector(this.parent).insertAdjacentHTML('beforeEnd',
        `<article class="informationLine_content" id="content-${this.numberContent}">
            <img src="${this.imgUrl}" alt="t${this.title}" class="informationLine_img">
            <div class="container">
                <a href="${this.href}" class="informationLine-text">
                    <h2 class="informationLine_title">${this.title}</h2>
                    <p class="informationLine_description ">${this.descr}</p>
                </a>
            </div>
        </article>`)
    }
}

let itemCard = new CardContent("https://i.ytimg.com/vi/f7n4crJL2dQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB3t_AfcM-ACaPm_60ikDQ5S02oHg",
    'Любимое место новичков в Escape from Tarkov','Ржачные моменты со стрима',
    'https://www.youtube.com/watch?v=f7n4crJL2dQ',
    '.informationLine_contentBox', 2)

itemCard.render()

let itemCard2 = new CardContent('https://i.ytimg.com/vi/wCZYqw7eKG4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRg3v-Tp9Kp55YPgKxaxggESU1zw',
    'Тарковский аттракцион 🤣', '',
    'https://www.youtube.com/watch?v=wCZYqw7eKG4',
    '.informationLine_contentBox',3)

itemCard2.render()
const content3 = document.querySelector('#content-3');
const descrCard = content3.querySelector('.informationLine_description')
if(descrCard.textContent.trim() === ''){
    descrCard.remove();
    const titleCard = content3.querySelector('.informationLine_title');
    titleCard.style.marginTop ='12px'
}