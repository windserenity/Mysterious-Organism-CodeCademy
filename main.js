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
        console.log('new Base: ' + newBase + ' ' + 'new index ' + this.dna[newIndex])
        if (this.dna[newIndex] !== newBase){
           this.dna[newIndex] = newBase; 
        }else{
          this.dna[newIndex+1]= newBase;
        }
        return this.dna
        },
      compareDNA(object){
          
      },
      

      }
    };
 
  
let pAequor = pAequorFactory(1,['C', 'T', 'A', 'G','C', 'A', 'T', 'A','T', 'G', 'G', 'G','T', 'C', 'A']);

console.log(pAequor);
console.log(pAequor.mutate());