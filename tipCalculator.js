
let johnObj =  {
    fullName : 'John Smith',
    resBills : [35, 70, 207, 156],
    calTip : function(){
        this.tipArr = [];
        this.billArr = [];
        for(let i=0;i<this.resBills.length;i++){
            let bill = this.resBills[i];
            let tipPercentage = 0;
            if(bill < 50){
                tipPercentage = .2
            }else if (bill >= 50 && bill < 200){
                tipPercentage = .15    
            }else{
                tipPercentage = .1    
            }      
            this.tipArr[i] = bill * tipPercentage;
            this.billArr[i] = bill + this.tipArr[i];
        }
    }
}

johnObj.calTip();
console.log(johnObj);


let markObj =  {
    fullName : 'Mark Kenny',
    resBills : [56, 96, 189, 223, 334],
    calTip : function(){
        this.tipArr = [];
        this.billArr = [];
        for(let i=0;i<this.resBills.length;i++){
            let bill = this.resBills[i];
            let tipPercentage = 0;
            if(bill < 70){
                tipPercentage = .25
            }else if (bill >= 70 && bill < 200){
                tipPercentage = .2    
            }else{
                tipPercentage = .15    
            }      
            this.tipArr[i] = bill * tipPercentage;
            this.billArr[i] = bill + this.tipArr[i];
        }
    }
}

markObj.calTip();
console.log(markObj);

let calcAvgTip = function(tipArray){
    let tipSum = 0;
    for(let i=0;i<tipArray.length;i++){
        tipSum = tipArray[i]+tipSum;
    }
    return (tipSum / tipArray.length);
}

johnObj.averageTip  = Math.round(calcAvgTip(johnObj.tipArr));
markObj.averageTip  = Math.round(calcAvgTip(markObj.tipArr));

console.log(johnObj);
console.log(markObj);

