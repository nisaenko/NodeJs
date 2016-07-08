'use strict';

var CalculatorService = function () {
    
    
    this.Digits = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 , eight: 8 , nine: 9, zero: 0
    };
    
    this.currentValue = "0";
    this.accumulator = 0;
    this.nextOperand = false;
    this.operation = "";
    this.operationCode=0;
    

}

CalculatorService.prototype.getDisplay = function() {
    
    return this.currentValue.toString();
}

// Enter a digit in a string format e.g: one, and return the numerical value that corresponds to it.
CalculatorService.prototype.enterDigit = function(digit) {
  
    if (this.nextOperand) {
        this.currentValue  = digit;
        this.nextOperand = false;
    }
    else {
        if (this.currentValue == "0")
            this.currentValue = digit;
        else
            this.currentValue += digit;
    }
    
}

CalculatorService.prototype.enterOperation = function(operation) {
  
    
    if (this.nextOperand && operation != "=");
    else
    {
        this.nextOperand = true;
        if ( '+' == this.operation )
            this.accumulator += parseFloat(this.currentValue);
        else if ( '-' == this.operation )
            this.accumulator -= parseFloat(this.currentValue);
        else if ( '/' == this.operation ){
            if (this.currentValue == 0){
               this.operationCode=-1;
                
            }else{
                this.accumulator /= parseFloat(this.currentValue);
            }
                
            }
        
        else if ( '*' == this.operation )
            this.accumulator *= parseFloat(this.currentValue);
        else
            this.enterEquals();
        
        this.operation = operation;
    }

}


CalculatorService.prototype.enterEquals = function() {
     this.accumulator = parseFloat(this.currentValue);
}

// Clear the string in the getDisplay and reset it to zero.
CalculatorService.prototype.enterClear = function() {
    console.log("enterClear");
    this.accumulator = 0;
    this.operation = "";
    this.nextOperand = true;
    this.currentValue = "0";
    this.operationCode=0;
}

