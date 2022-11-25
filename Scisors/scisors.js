let a = '';

const digit = ['Rock', 'Scisors', 'Paper']
const out = document.querySelector('.Output1 p')
const out2 = document.querySelector('.Output2 p')

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    const key = event.target.textContent;

    

    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
    
    const CpChoice = digit[getRandomInt()]

    console.log(key, CpChoice)
    
    if(CpChoice===key){
        out.textContent = CpChoice
        out2.textContent = "You Lose!"
    } else{
        out.textContent = CpChoice
        out2.textContent = "You Win!"
    }
}