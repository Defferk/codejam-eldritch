import ancientsData from '../data/ancients'

const levelControl = document.querySelector('.level');
const ancientsBox = document.querySelector('.ancients');
const ancCard = document.querySelectorAll('.img-anc');
const stageCircle = document.querySelectorAll('.stage-circle');
const controlPanel = document.querySelector('.conrtol')
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

const levelDiff = {
    first: ['easy','normal'],
    second: ['easy','normal','hard'],
    therd: ['normal','hard'],
}

const getAncients = (event)=>{
    // console.log(event.target.alt)
    if(event.target.nodeName !== 'DIV'){
        CurentObj = ancientsData.find(({id})=>id === event.target.alt);
        ancCard.forEach((value)=>value.classList.remove('card-active'));
        event.target.classList.add('card-active');
        levelControl.style.opacity = 1;
        // console.log(CurentObj.firstStage)
    }
}

const getLevel=(event)=>{
    if(event.target.nodeName !== 'DIV'){
        var i = 0;
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
                case 7: stageNum = 'blueCards'; break;
                case 2:
                case 5:
                case 8: stageNum = 'brownCards'; break;
            }
            value.innerHTML=CurentObj[stageLevel][stageNum]
            cardsArray.stageArrr[i].push(CurentObj[stageLevel][stageNum])
        })
        cardsArray.choseLevel = levelDiff[event.target.className];
        controlPanel.style.opacity =1;
        deckBox.style.opacity = 0;
        deckBtn.style.opacity = 1;
    }
    console.log(cardsArray)
}



import * as blueCardsData from '../data/mythicCards/blue/index'
import * as greenCardsData from '../data/mythicCards/green/index'
import * as brownCardsData from '../data/mythicCards/brown/index'

const colodeBox = document.querySelector('.colodeBox');
const deckBox = document.querySelector('.deck');
const deckBtn = document.querySelector('.deckBtn')
const cardBox = document.querySelector('.mainCard');



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
            var stageColorArray = (index==0?fullSuitableGreen:(index==1?fullSuitableBlue:fullSuitableBrown))
            getElementBuNum(stageLevel,valueIn,stageColorArray)
        })
    })
    
    console.log(cardsArray)
    console.log(fullSuitableGreen,fullSuitableBlue,fullSuitableBrown)
    deckBox.style.opacity = 1;
    deckBtn.style.opacity = 0;


    // cardBox.style.backgroundImage=`url(${blueCardsData.default[0].cardFace})`
    
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


deckBtn.addEventListener('click',getColode)


levelControl.addEventListener('click',getLevel)
ancientsBox.addEventListener('click',getAncients)