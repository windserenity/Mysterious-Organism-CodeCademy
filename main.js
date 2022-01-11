// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  
const pAequorFactory = (uniqueSpecimenNum, dnaArr) => {
    return {
      specimenNum: uniqueSpecimenNum,
      dna: dnaArr,
      mutate(){
        let newBase = returnRandBase();
        let newIndex =  Math.floor(Math.random() * dnaArr.length);
        // console.log('new Base: ' + newBase + ' ' + 'new index ' + this.dna[newIndex])
        if (this.dna[newIndex] !== newBase){
           this.dna[newIndex] = newBase; 
        }else{
          this.dna[newIndex+1]= newBase;
        }
        return this.dna
        },

      compareDNA(object){
          let counter = 0;
          object.forEach((num1, index) => {
            const num2 = dnaArr[index];
            //console.log(num1, num2) // comapre the two arryas my element. 
             if (num1 === num2){
               counter += 1;
             } 
          });
          //console.log('count is ' + counter); // how many matches to get %
          let percentage = (counter / object.length) *100;
          
          return `specimen #2 has ${percentage.toFixed(1)}% DNA in common.` ;
      },
      willLikelySurvive(){
      let arr = this.dna();
        // console.log(arr);
        let counter = 0;  
            arr.forEach(element=> {
                if (element === 'C' || element === 'G'){
                    counter += 1;
                }
            })
          let percentage = ((counter / arr.length) *100).toFixed(1); 
          // console.log(percentage);
            return percentage >= 60 ? true : false;
      },
      

      }
    };



