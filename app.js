let tools = ["teeth"];
let wallet = 0;

const resetGame = () => {
  tools = ["teeth"];
  wallet = 0;
  console.log(
    `You have decided to reset the game. You now have ${tools} as a tool and ${wallet} in your wallet`
  );
};

const cutGrass = () => {
  let earnings = 1;
  if (tools.includes("rusty scissors")) {
    earnings += 5;
  }
  if (tools.includes("old push mower")) {
    earnings += 50;
  }
  if (tools.includes("battery powered mower")) {
    earnings += 100;
  }
  if (tools.includes("starving students")) {
    earnings += 250;
  }
  wallet += earnings;
  console.log(
    `You just made $${earnings} for cutting that yard with your ${tools.join(
      ", "
    )}! The total amount in your wallet is now $${wallet}.`
  );
  if (wallet >= 10000) {
    console.log("You have won the game LandScaper");
    return;
  }
};

const buyTool = (toolName, cost) => {
  if (wallet >= cost) {
    tools.push(toolName);
    wallet -= cost;
    console.log(
      `You bought a ${toolName} for $${cost}! You now have ${tools.join(
        ", "
      )} as tools and you also now have $${wallet}`
    );
  } else {
    console.log(`You only have $${wallet}. Cut more yards to save more money.`);
  }
};

const sellTool = (toolName) => {
  if (tools.includes(toolName)) {
    const toolIndex = tools.indexOf(toolName);
    const toolPrice = Math.floor(toolPrices[toolName] / 2);
    wallet += toolPrice;
    tools.splice(toolIndex, 1);
    console.log(
      `You sold your ${toolName} for $${toolPrice}! You now have ${tools.join(
        ", "
      )} as tools and you also now have $${wallet}`
    );
  } else {
    console.log(`You do not own a ${toolName} to sell.`);
  }
};

const toolPrices = {
  "rusty scissors": 5,
  "old push mower": 25,
  "battery powered mower": 250,
  "starving students": 500,
};

cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyTool("rusty scissors", 5);
cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyTool("old push mower", 25);
cutGrass();
cutGrass();
buyTool("old push mower", 25);
cutGrass();
cutGrass();
sellTool("old push mower", 25);
cutGrass();
buyTool("battery powered mower", 250);
cutGrass();
cutGrass();
cutGrass();
cutGrass();
cutGrass();
buyTool("starving students", 500);
cutGrass();
cutGrass();
sellTool("battery powered mower", 250);
sellTool("old push mower", 25);
sellTool("rusty scissors", 5);
cutGrass();
cutGrass();
cutGrass();
resetGame();
cutGrass();
