//classes começam em maiúscula
class CalcController {
    
    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize()

    }

    initialize(){
//El representa elemento
        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "12/01/2140";
        timeEl.innerHTML = "00h00";

    }
   
    get displayCalc(){

        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){

        return this._currentDate;
    }

    set currentDate(value){
        this._currentDate = value;
    }

}

