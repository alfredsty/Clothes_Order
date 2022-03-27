function checkNumber(event) { /* checkNumber() 함수는 keyboard event를 입력받는다 */
    if(event.key === '.' /* 입력된 값이 숫자이면 true를 리턴하여 input에 입력되게 하고, */
       || event.key === '-' /* 입력된 값이 숫자가 아니면  false를 리턴하여 input에 입력되지 못하게 된다. */
       || event.key >= 0 && event.key <= 9) {
      return true;
    }
    
    return false;
  }