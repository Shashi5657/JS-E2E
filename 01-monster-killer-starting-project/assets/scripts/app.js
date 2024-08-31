const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;

const enteredValue = prompt("Chose the maximum life to begin the play", "100");

let chosenMaxLife = +enteredValue;

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

const reset = () => {
  currentPlayerHealth = chosenMaxLife;
  currentMonsterHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
};
const endRound = () => {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert("you would be dead. But bonus life saved you ");
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster won");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Its a Draw");
    reset();
  }
};

const attackMonster = (mode) => {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
};

const healPlayer = () => {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health");
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
};

const attackHandler = () => {
  attackMonster("ATTACK");
};

const strongAttackHandler = () => {
  attackMonster("STRONG_ATTACK");
};

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayer);
