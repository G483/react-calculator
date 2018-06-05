const Operations = {
  add: function(a, b) {
    a = this.parseCharacterType(a);
    b = this.parseCharacterType(b);

    return a + b;
  },

  subtract: function(a, b) {
    a = this.parseCharacterType(a);
    b = this.parseCharacterType(b);

    return a - b;
  },
  
  getByOperator: function(operator, a, b) {
    if (operator === '+') {
      return this.add(a, b);
    }

    if (operator === '-') {
      return this.subtract(a, b);
    }
  },

  parseCharacterType: function(char) {
    if (typeof char !== 'string') {
      return char;
    }

      return char.includes('.') ? parseFloat(char) : parseInt(char, 10);
  }
}

export default Operations;