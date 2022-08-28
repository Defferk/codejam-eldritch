import ancientsData from '../data/ancients'

const levelControl = document.querySelector('.level');
const ancientsBox = document.querySelector('.ancients');
const ancCard = document.querySelectorAll('.img-anc');
const stageCircle = document.querySelectorAll('.stage-circle');
const controlPanel = document.querySelector('.conrtol')
const deckBox = document.querySelector('.deck');
const deckBtn = document.querySelector('.deckBtn')
const cardBox = document.querySelector('.mainCard');
const stageParag = document.querySelectorAll('.stageP');
const preInp = document.getElementById('preInput');
const firstInp = document.getElementById('firstInput');
const secondInp = document.getElementById('secondInput');
const therdInp = document.getElementById('therdInput');
const postInp = document.getElementById('postInput');
var CurentObj;
var cardsArray ={
        firstStage: [],
        secondStage:[],
        thirdStage:[],
        choseLevel:[],
        stageArrr:[
            [],
            [],
            [],
        ]
}
var countColor = [0,0,0];

const levelDiff = {
    easiest: ['easy'],
    easy: ['easy','normal'],
    normal: ['easy','normal','hard'],
    hard: ['normal','hard'],
    hell: ['hard'],
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getElementBuNum = (stage,number,arrayC)=>{
    while(number!==0){
        var newElem = arrayC.splice(getRandomInt(arrayC.length),1);
        cardsArray[stage].push(newElem[0]);
        number--;

        // if (newElem.length!==0){
        //     cardsArray[stage].push(newElem);
        //     number--;
        //     console.log('true')
        // }else{
        //     var spareElem = spare.splice(getRandomInt(spare.length),1);
        //     cardsArray[stage].push(spareElem);
        //     number--;
        //     console.log('false')
        // }

    }
}

const bgColorSet = () =>{
    preInp.style.backgroundColor = 'aliceblue'; 
    firstInp.style.backgroundColor = 'aliceblue'; 
    secondInp.style.backgroundColor = 'aliceblue'; 
    therdInp.style.backgroundColor = 'aliceblue'; 
    postInp.style.backgroundColor = 'aliceblue'; 
}

const getAncients = (event)=>{
    if(event.target.nodeName !== 'DIV'){
        CurentObj = ancientsData.find(({id})=>id === event.target.alt);
        ancCard.forEach((value)=>value.classList.remove('card-active'));
        event.target.classList.add('card-active');
        levelControl.style.opacity = 1;
        cardBox.style.backgroundImage = 'null';
        controlPanel.style.opacity = 0;
        bgColorSet();
        levelControl.addEventListener('click',getLevel)
    }
}

const getLevel=(event)=>{
    if(event.target.nodeName !== 'DIV'){
        bgColorSet();
        event.target.style.backgroundColor = '#BDED98';
        cardsArray ={
            firstStage: [],
            secondStage:[],
            thirdStage:[],
            choseLevel:[],
            stageArrr:[
                [],
                [],
                [],
            ],
        }
        countColor = [0,0,0];
        stageCircle.forEach((value,index)=>{
            var stageLevel = (index<3?'firstStage':(index<6?'secondStage':'thirdStage'))
            var j = (index<3?0:(index<6?1:2))
            var i = 0;
            var stageNum = 0;
            switch(index){
                case 0:
                case 3:
                case 6: stageNum = 'greenCards'; i=0; break;
                case 1:
                case 4:
                case 7: stageNum = 'brownCards'; i=1; break;
                case 2:
                case 5:
                case 8: stageNum = 'blueCards'; i=2; break;
            }
            value.innerHTML=CurentObj[stageLevel][stageNum]
            cardsArray.stageArrr[j].push(CurentObj[stageLevel][stageNum])
            countColor[i] += CurentObj[stageLevel][stageNum];

        })
        cardsArray.choseLevel = levelDiff[event.target.className];
        controlPanel.style.opacity =1;
        deckBox.style.opacity = 0;
        deckBtn.style.opacity = 1;
        cardBox.style.backgroundImage = 'none';
        if(stageParag[0].className=='stageP-empty'){stageParag.forEach((value)=>{value.className='stageP'})};
        deckBox.style.backgroundImage = 'url(img/mythicCardBackground.png)';
        deckBtn.addEventListener('click',getColode);
    }
}


import * as blueCardsData from '../data/mythicCards/blue/index'
import * as greenCardsData from '../data/mythicCards/green/index'
import * as brownCardsData from '../data/mythicCards/brown/index'

const getColode = ()=>{
    var fullSuitableBlue = [];
    var fullSuitableGreen = [];
    var fullSuitableBrown = [];
    var secondLevelBlue = [];
    var secondLevelGreen = [];
    var secondLevelBrown = [];
    greenCardsData.default.forEach((element)=>{
        switch(cardsArray['choseLevel'].length){
         case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableGreen.push(element)};
             break;
         case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableGreen.push(element)};
             break;
         case 3: fullSuitableGreen.push(element);
             break;
        }
     })
     if(countColor[0]>fullSuitableGreen.length){
        greenCardsData.default.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelGreen.push(element)};            
        })
        while(countColor[0]>fullSuitableGreen.length){
            var spareElem = secondLevelGreen.splice(getRandomInt(secondLevelGreen.length),1);
            fullSuitableGreen.push(spareElem[0]);
        }
    }
     brownCardsData.default.forEach((element)=>{
        switch(cardsArray['choseLevel'].length){
         case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableBrown.push(element)};
             break;
         case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableBrown.push(element)};
             break;
         case 3: fullSuitableBrown.push(element);
             break;
        }
     })
     if(countColor[1]>fullSuitableBrown.length){
        brownCardsData.default.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelBrown.push(element)};            
        })
        while(countColor[1]>fullSuitableBrown.length){
            var spareElem = secondLevelBrown.splice(getRandomInt(secondLevelBrown.length),1);
            fullSuitableBrown.push(spareElem[0]);
        }
    }
    blueCardsData.default.forEach((element)=>{
       switch(cardsArray['choseLevel'].length){
        case 1: if(element.difficulty == cardsArray['choseLevel'][0]){fullSuitableBlue.push(element)};
            break;
        case 2: if(element.difficulty == cardsArray['choseLevel'][0] || element.difficulty == cardsArray['choseLevel'][1]){fullSuitableBlue.push(element)};
            break;
        case 3: fullSuitableBlue.push(element);
            break;
       }
    })
    if(countColor[2]>fullSuitableBlue.length){
        blueCardsData.default.forEach((element)=>{
            if(element.difficulty == 'normal'){secondLevelBlue.push(element)};            
        })
        while(countColor[2]>fullSuitableBlue.length){
            var spareElem = secondLevelBlue.splice(getRandomInt(secondLevelBlue.length),1);
            fullSuitableBlue.push(spareElem[0]);
        }
    }
    cardsArray['stageArrr'].forEach((valueArr,firsIndex)=>{
        valueArr.forEach((valueIn,index)=>{
            var stageLevel = (firsIndex==0?'firstStage':(firsIndex==1?'secondStage':'thirdStage'))
            var stageColorArray = (index==0?fullSuitableGreen:(index==1?fullSuitableBrown:fullSuitableBlue))
            getElementBuNum(stageLevel,valueIn,stageColorArray)
        })
    })
    console.log(cardsArray)
    deckBox.style.opacity = 1;
    deckBtn.style.opacity = 0;
    deckBtn.removeEventListener('click',getColode)
    deckBox.addEventListener('click',getCardOfColode)

}

const getCardOfColode = ()=>{
    var curentStage = (cardsArray.firstStage.length!==0?'firstStage':(cardsArray.secondStage.length!==0?'secondStage':'thirdStage'))
    if(curentStage=='secondStage'){stageParag[0].className = 'stageP-empty'}else if(curentStage=='thirdStage'){stageParag[1].className = 'stageP-empty'}
    var randomCard = cardsArray[curentStage].splice(getRandomInt(cardsArray[curentStage].length),1);
    console.log(randomCard)
    var thisCardIndex = (curentStage==='firstStage'?0:(curentStage==='secondStage'?3:6))
    try{ var thisCardColor = (randomCard[0].color==='green'?0:(randomCard[0].color==='brown'?1:2))}
    catch{
        stageParag[2].className = 'stageP-empty'
        cardBox.style.backgroundImage = 'none'
        deckBox.style.backgroundImage = 'none'
        deckBox.removeEventListener('click',getCardOfColode)
    }
    stageCircle[thisCardIndex+thisCardColor].innerHTML-=1;
    cardBox.style.backgroundImage=`url(${randomCard[0].cardFace})`        
}


ancientsBox.addEventListener('click',getAncients)