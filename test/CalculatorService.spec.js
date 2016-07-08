'use strict';

describe('Calculator Service', function () {

    var service;

    beforeEach(function () {
        service = new CalculatorService();
  
    });

    it('should display 0 when loaded', function () {
        expect(service.getDisplay()).toEqual('0');
    });

    
    it('should be 1 for the first run and 12 for second, 3 for second operand and 15 in total and set operation code 0, which means no error', function () {
       service.enterDigit('1');
       expect(service.getDisplay()).toEqual('1');
       service.enterDigit('2');
       expect(service.getDisplay()).toEqual('12');
       
       service.enterOperation('+');
       
       service.enterDigit('3');
       
       expect(service.getDisplay()).toEqual('3');
       service.enterOperation("=");
       
       expect(service.accumulator).toEqual(15);
       expect(service.operationCode).toEqual(0);
    });
         
     
     it('should be 3 for the first run and 6 for second, multiply by 4  and 144 in total and set operation code 0, which means no error', function () {
        service.enterDigit('3');
        expect(service.getDisplay()).toEqual('3');
        service.enterDigit('6');
        expect(service.getDisplay()).toEqual('36');
        
        service.enterOperation('*');
        
        service.enterDigit('4');
        
        expect(service.getDisplay()).toEqual('4');
        service.enterOperation("=");
        
        expect(service.accumulator).toEqual(144);
        expect(service.operationCode).toEqual(0);
    });
         

         
         it('should be 3 for the first run and 6 for second, multiply by 0  and 0 in total and set operation code 0, which means no error', function () {
            service.enterDigit('3');
            expect(service.getDisplay()).toEqual('3');
            service.enterDigit('6');
            expect(service.getDisplay()).toEqual('36');
            
            service.enterOperation('*');
            
            service.enterDigit('0');
            
            expect(service.getDisplay()).toEqual('0');
            service.enterOperation("=");
            
            expect(service.accumulator).toEqual(0);
            
            expect(service.operationCode).toEqual(0);
            });

         
         it('should be 3 for the first run and 6 for second, divide by 0 and set operation code -1, which means error', function () {
            service.enterDigit('3');
            expect(service.getDisplay()).toEqual('3');
            service.enterDigit('6');
            expect(service.getDisplay()).toEqual('36');
            
            service.enterOperation('/');
            
            service.enterDigit('0');
            
            expect(service.getDisplay()).toEqual('0');
            service.enterOperation("=");
            
            expect(service.operationCode).toEqual(-1);
            });
         
         it('should be 44 minus 371 and -330 in total and set operation code 0, which means no error', function () {
            service.enterDigit('4');
            expect(service.getDisplay()).toEqual('4');
            service.enterDigit('1');
            expect(service.getDisplay()).toEqual('41');
            
            service.enterOperation('-');
            
            service.enterDigit('3');
            
            expect(service.getDisplay()).toEqual('3');
            
            service.enterDigit('7');
            
            expect(service.getDisplay()).toEqual('37');
            
            service.enterDigit('1');
            
            expect(service.getDisplay()).toEqual('371');
            
            service.enterOperation("=");
            
            expect(service.accumulator).toEqual(-330);
            expect(service.operationCode).toEqual(0);
            });

         it('should be 44 minus 371 plus 37 and -293 in total and set operation code 0, which means no error', function () {
            service.enterDigit('4');
            expect(service.getDisplay()).toEqual('4');
            service.enterDigit('1');
            expect(service.getDisplay()).toEqual('41');
            
            service.enterOperation('-');
            
            service.enterDigit('3');
            
            expect(service.getDisplay()).toEqual('3');
            
            service.enterDigit('7');
            
            expect(service.getDisplay()).toEqual('37');
            
            service.enterDigit('1');
            
            expect(service.getDisplay()).toEqual('371');
            
            service.enterOperation('+');
            
            service.enterDigit('3');
            
            expect(service.getDisplay()).toEqual('3');
            
            service.enterDigit('7');
            
            expect(service.getDisplay()).toEqual('37');
            
            service.enterOperation("=");
            
            expect(service.accumulator).toEqual(-293);
            expect(service.operationCode).toEqual(0);
            });
         


});


