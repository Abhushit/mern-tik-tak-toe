

const CalculateWinner = (values:Array<string>) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
          return values[a];
        }
      }


      if(values.every(val => val)){
        return "tie"
      }

      return null;
}

export default CalculateWinner;