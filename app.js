// LANDSCAPER
let tool = "teeth"
let wallet = 0;

const cutGrass = () => {
    if (tool === "teeth") {
        wallet += 1;
        console.log(`You just made $1 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`)
    } else {
        wallet += 5
        console.log(`You just made $5 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`)
    }
    
}

const buyRustyScissors = () => {
    if (wallet >= 5 && tool === "teeth") {
        tool = "rusty scissors";
        wallet -= 5;
        console.log(`You bought some scissors for $5! You now have a ${tool} to use and you also now have $${wallet}`)
    } else if (tool === "rusty scissors") {
        console.log(`you already have a ${tool} as a tool`)
    } else {
        console.log(`You only have $${wallet}. Cute more yards to save more money.`)
    }
}
cutGrass()
cutGrass()
cutGrass()
cutGrass()
cutGrass()
buyRustyScissors()
cutGrass()
cutGrass()