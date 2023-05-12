// LANDSCAPER
let tool = "teeth";
let wallet = 0;

const cutGrass = () => {
  if (tool === "teeth") {
    wallet += 1;
    console.log(
      `You just made $1 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`
    );
  } else if (tool === "rusty scissors") {
    wallet += 5;
    console.log(
      `You just made $5 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`
    );
  } else if (tool === "old push mower") {
    wallet += 50;
    console.log(
      `You just made $50 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`
    );
  } else if (tool === "battery powered mower") {
    wallet += 100;
    console.log(
      `You just made $100 for cutting that yard with your ${tool}! The total amount in your wallet is now $${wallet}.`
    );
  } else if (tool === "starving students") {
    wallet += 250;
    console.log(
      `You just made $250 for having the ${tool} cut that yard for you! The total amount in your wallet is now $${wallet}.`
    );
  }
  if (wallet >= 1000) {
    console.log("You have won the game LandScaper");
    return;
  }
};

const buyRustyScissors = () => {
  if (wallet >= 5 && tool === "teeth") {
    tool = "rusty scissors";
    wallet -= 5;
    console.log(
      `You bought some scissors for $5! You now have a ${tool} to use and you also now have $${wallet}`
    );
  } else if (tool === "rusty scissors") {
    console.log(`you already have a ${tool} as a tool`);
  } else {
    console.log(
      `You only have $${wallet}. Cute more yards to save more money.`
    );
  }
};

const buyOldPushMower = () => {
  if (wallet >= 25 && tool === "rusty scissors") {
    tool = "old push mower";
    wallet -= 25;
    console.log(
      `You bought an old push mower for $25! You now have a ${tool} to use and you also now have $${wallet}`
    );
  } else if (tool === "old push mower") {
    console.log(`you already have a ${tool} as a tool`);
  } else {
    console.log(
      `You only have $${wallet}. Cute more yards to save more money.`
    );
  }
};

const buyBattPoweredMower = () => {
  if (wallet >= 250 && tool === "old push mower") {
    tool = "battery powered mower";
    wallet -= 250;
    console.log(
      `You bought a battery powered mower for $250! You now have a ${tool} to use and you also now have $${wallet}`
    );
  } else if (tool === "battery powered mower") {
    console.log(`you already have a ${tool} as a tool`);
  } else {
    console.log(
      `You only have $${wallet}. Cute more yards to save more money.`
    );
  }
};

const hireStarvingStudent = () => {
  if (wallet >= 500 && tool === "battery powered mower") {
    tool = "starving students";
    wallet -= 500;
    console.log(
      `You hired a team of starving students for $500! You now have a team of ${tool} to cut grass for you and you also now have $${wallet}`
    );
  } else if (tool === "starving students") {
    console.log(`you already have a ${tool} as a tool`);
  } else {
    console.log(
      `You only have $${wallet}. Cute more yards to save more money.`
    );
  }
};

cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyRustyScissors();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyOldPushMower();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyBattPoweredMower();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
hireStarvingStudent();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
