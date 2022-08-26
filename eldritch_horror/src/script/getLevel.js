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
const countColor = [0,0,0];

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
        cardsArray[stage].push(newElem);
        number--;
    }
}

const getAncients = (event)=>{
    // console.log(event.target.alt)
    if(event.target.nodeName !== 'DIV'){
        CurentObj = ancientsData.find(({id})=>id === event.target.alt);
        ancCard.forEach((value)=>value.classList.remove('card-active'));
        event.target.classList.add('card-active');
        levelControl.style.opacity = 1;
        cardBox.style.backgroundImage = 'null';
        controlPanel.style.opacity = 0;
        //TODO: Отдельная функция на фон
        preInp.style.backgroundColor = 'aliceblue'; 
        firstInp.style.backgroundColor = 'aliceblue'; 
        secondInp.style.backgroundColor = 'aliceblue'; 
        therdInp.style.backgroundColor = 'aliceblue'; 
        postInp.style.backgroundColor = 'aliceblue'; 
        levelControl.addEventListener('click',getLevel)
        // console.log(CurentObj.firstStage)
    }
}

const getLevel=(event)=>{
    if(event.target.nodeName !== 'DIV'){
        //TODO: Отдельная функция на фон
        preInp.style.backgroundColor = 'aliceblue'; 
        firstInp.style.backgroundColor = 'aliceblue'; 
        secondInp.style.backgroundColor = 'aliceblue'; 
        therdInp.style.backgroundColor = 'aliceblue'; 
        postInp.style.backgroundColor = 'aliceblue'; 
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
        stageCircle.forEach((value,index)=>{
            var stageLevel = (index<3?'firstStage':(index<6?'secondStage':'thirdStage'))
            var i = (index<3?0:(index<6?1:2))
            var stageNum = 0;
            switch(index){
                case 0:
                case 3:
                case 6: stageNum = 'greenCards'; break;
                case 1:
                case 4:
                case 7: stageNum = 'brownCards'; break;
                case 2:
                case 5:
                case 8: stageNum = 'blueCards'; break;
            }
            value.innerHTML=CurentObj[stageLevel][stageNum]
            cardsArray.stageArrr[i].push(CurentObj[stageLevel][stageNum])
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
        // console.log(cardsArray)
    }
}

import * as blueCardsData from '../data/mythicCards/blue/index'
import * as greenCardsData from '../data/mythicCards/green/index'
import * as brownCardsData from '../data/mythicCards/brown/index'

const getColode = ()=>{
    var fullSuitableBlue = [];
    var fullSuitableGreen = [];
    var fullSuitableBrown = [];
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
    // TODO: Добавление нужного уровня сложности при недоборе карт
    // if(countColor[2]>fullSuitableBlue.length){}
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

     console.log(fullSuitableGreen,fullSuitableBlue,fullSuitableBrown)
    cardsArray['stageArrr'].forEach((valueArr,firsIndex)=>{
        valueArr.forEach((valueIn,index)=>{
            var stageLevel = (firsIndex==0?'firstStage':(firsIndex==1?'secondStage':'thirdStage'))
            var stageColorArray = (index==0?fullSuitableGreen:(index==1?fullSuitableBrown:fullSuitableBlue))
            getElementBuNum(stageLevel,valueIn,stageColorArray)
        })
    })
    console.log(cardsArray)
    console.log(fullSuitableGreen,fullSuitableBlue,fullSuitableBrown)
    deckBox.style.opacity = 1;
    deckBtn.style.opacity = 0;
    deckBtn.removeEventListener('click',getColode)
    deckBox.addEventListener('click',getCardOfColode)

}

const getCardOfColode = ()=>{
    var curentStage = (cardsArray.firstStage.length!==0?'firstStage':(cardsArray.secondStage.length!==0?'secondStage':'thirdStage'))
    if(curentStage=='secondStage'){stageParag[0].className = 'stageP-empty'}else if(curentStage=='thirdStage'){stageParag[1].className = 'stageP-empty'}
    var randomCard = cardsArray[curentStage].splice(getRandomInt(cardsArray[curentStage].length),1);
    var thisCardIndex = (curentStage==='firstStage'?0:(curentStage==='secondStage'?3:6))
    try{ var thisCardColor = (randomCard[0][0].color==='green'?0:(randomCard[0][0].color==='brown'?1:2))}
    catch{
        stageParag[2].className = 'stageP-empty'
        cardBox.style.backgroundImage = 'none'
        deckBox.style.backgroundImage = 'none'
        deckBox.removeEventListener('click',getCardOfColode)
    }
    stageCircle[thisCardIndex+thisCardColor].innerHTML-=1;
    // console.log(randomCard[0][0].cardFace)
    cardBox.style.backgroundImage=`url(${randomCard[0][0].cardFace})`        
}


ancientsBox.addEventListener('click',getAncients)