import ancientsData from '../data/ancients'
import {cardsData as blueCardsData} from '../data/mythicCards/blue/index'
import {cardsData as greenCardsData} from '../data/mythicCards/green/index'
import {cardsData as brownCardsData} from '../data/mythicCards/brown/index'


const levelControl = document.querySelector('.level');
const ancientsBox = document.querySelector('.ancients');
const ancCard = document.querySelectorAll('.img-anc');
// const stageBox1 = document.querySelector('.card1');
// const stageBox2 = document.querySelector('.card2');
// const stageBox3 = document.querySelector('.card3');
const stageCircle = document.querySelectorAll('.stage-circle');
const controlPanel = document.querySelector('.conrtol')
var CurentObj;
var cardsArray ={
        greenCards:0,
        greenArrCard: [],
        blueCards:0,
        blueArrCard:[],
        brownCards:0,
        brownArrCard:[],
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
        console.log(CurentObj.firstStage)
    }
//     // ancientsData.find(elment,index)
}

const getLevel=(event)=>{
    if(event.target.nodeName !== 'DIV'){
        cardsArray ={
            greenCards:0,
            greenArrCard: [],
            blueCards:0,
            blueArrCard:[],
            brownCards:0,
            brownArrCard:[],
    }
        stageCircle.forEach((value,index)=>{
            var stageLevel = (index<3?'firstStage':(index<6?'secondStage':'thirdStage'))
            var stageNum = 0;
            switch(index){
                case 0:
                case 3:
                case 6: stageNum = 'greenCards'; cardsArray[stageNum] += CurentObj[stageLevel][stageNum]; break;
                case 1:
                case 4:
                case 7: stageNum = 'blueCards'; cardsArray[stageNum] += CurentObj[stageLevel][stageNum]; break;
                case 2:
                case 5:
                case 8: stageNum = 'brownCards'; cardsArray[stageNum] += CurentObj[stageLevel][stageNum]; break;
            }
            value.innerHTML=CurentObj[stageLevel][stageNum]
            // console.log(CurentObj[stageLevel])
            // console.log(CurentObj[stageLevel][stageNum])
        })
    }
    console.log(cardsArray)
    controlPanel.style.opacity =1;
}


levelControl.addEventListener('click',getLevel)
ancientsBox.addEventListener('click',getAncients)


// console.log(printStageOne(cthulhu))
// console.log(ancientsData.find(({id})=>id === 'cthulhu'))