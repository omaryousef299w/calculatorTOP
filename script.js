//how can I create a calucator from scartch. 

/* 
1. set 3 variabls, perviousValue, currentValue, operator to empty strings. 
2. add an event listner when to DOM loads, trigger a func.
3. get all the requried elements, numbers, operators, equal, decimal, clear BUTTON. 
4. create an event for all the numbers. using for each to get each element. and trigger a function that has num parameter outside of the DOM event, set the paramter to the number's textContent using e.target.textContent. And display the text content in the cureent value placehlder. 
5. now move to the operators, get all the operators the same way you did with numbers, and assign the operator for the paramter using e.target.textContent, start a function outside the scope, let the perviousValue equal the current value, let the pervious screen equals, pervious value + " " + operator, and assign the currentScreen var to the current value; 
6.add an eventListner to the clear btn, and Clear the currenValue, perviousValue to '', and set the currentScreen, perviousScreen to the currenValue. 
7. add an eventLinster to the eaual btn, when clicked tranfrom the currentValue & perviousValue to numbers. Create an if statment, if the the operator var equaled to +,  perviousValue += currentValue; and do the same with subtraction, multiplaction, division. And return the currentVar and perviousVar to string.
*/

