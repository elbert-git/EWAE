import { getAssetUrl } from '../../assetUrl.js'

export default class UIController{
    constructor(parentElement){
        this.parentElement = parentElement;
        this.initElements();
         
        this.UITime = 2.5;
        this.winTime = 2;
    }
     
    initElements(){
        //create win Overlay
        this.winOverlay = document.createElement('div');
        const textNode = document.createTextNode('');
        this.winOverlay.appendChild(textNode);
        this.winOverlay.classList = "UIOverlay overlay fillWidth fillHeight flex flexJustifyCenter flexAlignCenter opacity opacityDown"
        this.parentElement.appendChild(this.winOverlay)
        //create nice element
        const niceElement = document.createElement('div'); 
        niceElement.appendChild(document.createTextNode('NICE!'))
        niceElement.classList = 'winOverlay'
        this.winOverlay.append(niceElement);
         
        //create tutorial overlay
        this.tutOverlay = document.createElement('div');
        this.tutOverlay.appendChild(document.createTextNode('Drag the maze and steer to ball to the goal'));
        this.tutOverlay.classList = 'textCenter'
        this.parentElement.appendChild(this.tutOverlay);
    }

    showWin(){
        this.winOverlay.classList.remove('opacityDown');
        const hide = ()=>{this.winOverlay.classList.add('opacityDown')}
        window.setTimeout(hide, this.winTime*1000);
    }
}