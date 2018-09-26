const chineseToNumber = str => {
  if (str.includes('亿')) {
    const index = str.lastIndexOf('亿');
    if (index === 0) {
      return 1 * 100000000 + chineseToNumber(str.substring(index + 1));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index)) * 100000000
    } else {
      return chineseToNumber(str.substring(0, index)) * 100000000 + chineseToNumber(str.substring(index+1))
    } 
  } else if (str.includes('万')) {
    const index = str.lastIndexOf('万');
    if (index === 0) {
      return 1 * 10000 + chineseToNumber(str.substring(index + 1));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index)) * 10000
    } else {
      return chineseToNumber(str.substring(0, index)) * 10000 + chineseToNumber(str.substring(index + 1))
    } 
  } else if (str.includes('千')) {
    const index = str.lastIndexOf('千');
    if (index === 0) {
      return 1 * 1000 + chineseToNumber(str.substring(index + 1));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index)) * 1000
    } else {
      return chineseToNumber(str.substring(0, index)) * 1000 + chineseToNumber(str.substring(index + 1))
    }
  } else if (str.includes('百')) {
    const index = str.lastIndexOf('百');
    if (index === 0) {
      return 1 * 100 + chineseToNumber(str.substring(index + 1));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index)) * 100
    } else {
      return chineseToNumber(str.substring(0, index)) * 100 + chineseToNumber(str.substring(index + 1))
    }
  } else if (str.includes('十')) {
    const index = str.lastIndexOf('十');
    if (index === 0) {
      return 10 + chineseToNumber(str.substring(index + 1));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index)) * 10
    } else {
      return chineseToNumber(str.substring(0, index)) * 10 + chineseToNumber(str.substring(index + 1))
    }
  } else if (str.includes('点')) {
    const index = str.lastIndexOf('点');
    if (index === 0) {
      return Number('.' + chineseToNumber(str.substring(1)));
    } else if (index === str.length - 1) {
      return chineseToNumber(str.substring(0, index))
    } else {
      return Number(chineseToNumber(str.substring(0, index)) + '.' +  chineseToNumber(str.substring(index + 1)));
    }
  } else {
    const numberArr = [
      {
        chinese: '九',
        number: 9
      },
      {
        chinese: '八',
        number: 8
      },
      {
        chinese: '七',
        number: 7
      },
      {
        chinese: '六',
        number: 6
      },
      {
        chinese: '五',
        number: 5
      },
      {
        chinese: '四',
        number: 4
      },
      {
        chinese: '三',
        number: 3
      },
      {
        chinese: '二',
        number: 2
      },
      {
        chinese: '一',
        number: 1
      }
    ]
    let number = -1;
    for (let i = 0; i < numberArr.length;i++) {
      let numberObj = numberArr[i];
      if (str.includes(numberObj['chinese'])) {
        number = numberObj['number'];
      }
    }
    if (number > -1) {
      return number;
    } else {
      return 0;
    }
  }
}

module.exports = {
  chineseToNumber: chineseToNumber
}