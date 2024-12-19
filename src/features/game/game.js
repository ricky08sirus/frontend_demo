import "crisp-game-lib";
import { gameScoresUpdate } from "../../services/apiGameScore";

// import axios from "axios";
// const url = "https://backend-bot-cu5d.onrender.com";

// const sendData = async (score, id) => {
//   try {
//     if (id && score) {
//       await axios.post(url + "/users/score", {
//         telegramId: id,
//         score,
//       });
//     }
//   } catch (e) {
//     console.log("Error: " + e);
//   }
// };

const growthAPP = () => {
  const title = "";

  const description = ``;

  const characters = [];

  const options = {
    theme: "crt",
    viewSize: { x: 120, y: 60 }, // Small rectangle screen size
    // viewSize: { x: 4500, y: 60 }, // Small rectangle screen size
    isPlayingBgm: true,
    isReplayEnabled: true,
    seed: 3,
    isShowingScore: false, // Show current score
    isShowingTime: false, // Hide time
  };

  let player;
  let currentScore = 0;

  let enemies;
  let nextEnemyDist;
  const floorY = 50; // Adjusted for smaller screen

  function update() {
    if (!window.ticks) {
      player = { x: 9, vx: 1, size: 5 };
      enemies = [];
      nextEnemyDist = 0;
    }
    let scr = player.x > 9 ? (player.x - 9) * 0.5 : 0;
    window.color("light_blue");
    window.rect(0, floorY, 120, 10);
    if (window.input.isJustPressed) {
      window.play("laser");
    }
    player.size +=
      ((window.input.isPressed ? 50 : 5) - player.size) *
      window.clamp(player.vx, 1, 999) *
      0.01;
    player.vx += (15 / player.size - 1) * 0.02 * window.sqrt(window.difficulty);
    player.x += player.vx - scr;
    if (player.x + player.size / 2 < 1) {
      window.end();
    }
    window.color("yellow");
    window.rect(0, floorY, player.x + player.size / 2, -player.size);
    nextEnemyDist -= scr;
    if (nextEnemyDist < 0) {
      let size = window.rnd() < 0.8 ? 3 : window.rnd(5) * window.rnd(5) + 3;
      if (size < 7) {
        size = 3;
      }
      enemies.push({ x: 240, size }); // Adjusted for smaller screen
      nextEnemyDist += window.rnd(30, 50);
    }
    window.remove(enemies, (e) => {
      e.x -= scr;
      window.color(e.size > player.size ? "red" : "cyan");
      const sc = e.x > 60 ? (e.x - 60) / 180 + 1 : 1; // Adjusted for smaller screen
      const sz = e.size / sc;
      const c = window.rect(e.x / sc, floorY, sz, -sz).isColliding.rect;
      if (c.yellow) {
        if (e.size > player.size) {
          sendData(window.score, id);
          window.play("explosion");
          window.end();
        } else {
          window.play(e.size < 5 ? "hit" : "powerUp");
          const ss = window.sqrt(e.size);
          window.particle(e.x, floorY - e.size / 2, ss, ss, 0, window.PI / 2);
          window.addScore(
            window.ceil(window.clamp(player.vx, 1, 999) * e.size),
            e.x,
            floorY - player.size
          );
        }
        return true;
      }
    });

    // Display current score
    window.color("black");
    window.text(`Score: ${window.score}`, 12, 5);
  }
  return {
    update,
    title,
    description,
    characters,
    options,
  };
};

const GTAIL = () => {
  const title = "BOSS TAIL";

  const description = `
    Slide To Sart
  `;

  const characters = [
    `
 llll
llccll
llccll
llllll
bbbbbb
bb  bb
  `,
    `
 rrrr
rRRrRr
rrRRRr
rRRrrr
rrRrRr
 rrrr
  `,
    `
  yy
 yyyy
yyyyyy
 yyyy
  yy
  `,
  ];
  const G = {
    WIDTH: window.innerWidth / 4.5,
    HEIGHT: window.innerHeight / 4.3,
    STAR_COUNT: 100,
    SHIP_SPEED: 0.001,
  };

  const options = {
    theme: "shapeDark",
    isPlayingBgm: true,
    isReplayEnabled: true,
    seed: 2205420,
    viewSize: { x: G.WIDTH, y: G.HEIGHT },
  };

  /**
   * @typedef {{
   *   pos: Vector,
   *   vel: Vector,
   *   accel: number,
   *   posHistory: Vector[],
   *   golds: number[],
   *   type: string,
   *   health?: number
   * }} Meteor
   *
   * @typedef {{
   *   pos: Vector,
   *   vel: Vector
   * }} Projectile
   */

  /** @type {Meteor[]} */
  let meteors;
  /** @type {Projectile[]} */
  let projectiles;
  let nextMeteorTicks;
  let multiplier;
  let shipPos;
  let thrusterPos;
  /** @type {{pos: Vector, vy: number, size: number, layer: number}[]} */
  let stars;
  let highScore = 0;
  let level = 1;
  let combo = 0;
  let comboTimer = 0;
  let levelUpTimer = 0;
  let screenShake = 0;
  let powerUpType = "";
  let powerUpTimer = 0;

  // Dynamic difficulty variables
  let asteroidSpawnRate = 1.0;
  let asteroidSpeedMultiplier = 1.0;
  let superAsteroidChance = 0;
  let playerPerformance = { score: 0, playTime: 0, hitCount: 0 };

  // Animated UI variables
  let scoreAnimation = 0;
  let powerUpAnimation = 0;

  function update() {
    if (!window.ticks) {
      initialize();
    }

    playerPerformance.playTime++;

    updateStars();
    updateLevelProgression();
    updateShip();
    updatePowerUps();
    updateProjectiles();
    updateMeteors();
    updateUI();

    // Check for game over condition
    if (shipPos.y > G.HEIGHT - 1) {
      const score = window.score;
      if (!gameId && !userId && score) return;
      const gameScores = {
        gameId,
        userId,
        score,
      };
      gameScoresUpdate(gameScores);
      window.end();
    }
  }

  function initialize() {
    meteors = [];
    projectiles = [];
    nextMeteorTicks = 0;
    multiplier = 1;
    shipPos = window.vec(G.WIDTH / 2, G.HEIGHT - 36);
    thrusterPos = window.vec(G.WIDTH / 2, G.HEIGHT - 36);
    stars = window.times(G.STAR_COUNT, () => ({
      pos: window.vec(window.rnd(G.WIDTH), window.rnd(G.HEIGHT)),
      vy: window.rnd(0.1, 0.5),
      size: window.rnd(0.5, 1.5),
      layer: window.rndi(1, 4),
    }));
    playerPerformance = { score: 0, playTime: 0, hitCount: 0 };
  }

  function updateStars() {
    const starSpeedMultiplier = Math.min(1 + (window.difficulty - 1) * 0.03, 2);
    stars.forEach((s) => {
      s.pos.y += s.vy * s.layer * starSpeedMultiplier;
      window.color(`light_blue`);
      window.rect(s.pos.x + screenShake, s.pos.y + screenShake, s.size, s.size);
      if (s.pos.y > G.HEIGHT) {
        s.pos.set(window.rnd(G.WIDTH), -window.rnd(G.HEIGHT / 3));
      }
    });
    screenShake *= 0.9;
  }

  function updateLevelProgression() {
    if (window.ticks % 1000 === 0) {
      level++;
      levelUpTimer = 60;
      window.play("lucky");
    }
    if (levelUpTimer > 0) {
      levelUpTimer--;
      window.color("black");
      window.text("LEVEL UP!", 30, 100);
    }
  }

  function updateShip() {
    shipPos.x = window.clamp(window.input.pos.x, 3, G.WIDTH - 3);
    shipPos.y += (G.HEIGHT - 36 - shipPos.y) * G.SHIP_SPEED;

    thrusterPos.x += (shipPos.x - thrusterPos.x) * 0.2;
    thrusterPos.y += (shipPos.y - thrusterPos.y) * 0.2;

    window.color("black");
    const oy = window.clamp(shipPos.y - 55, 0, G.HEIGHT - 1);
    window.char(
      "a",
      shipPos.x + screenShake + window.rnds(oy * 0.005),
      shipPos.y + screenShake + window.rnds(oy * 0.005)
    );

    drawThruster(thrusterPos.x, thrusterPos.y, powerUpType === "speed");
  }

  function updatePowerUps() {
    if (powerUpTimer > 0) {
      powerUpTimer--;
      if (powerUpType === "speed") {
        shipPos.y = Math.max(shipPos.y - 0.5, G.HEIGHT * 0.4);
      } else if (powerUpType === "shield") {
        drawShield(shipPos.x + screenShake, shipPos.y + screenShake);
      } else if (powerUpType === "projectile" && window.ticks % 10 === 0) {
        projectiles.push({
          pos: window.vec(shipPos.x, shipPos.y - 5),
          vel: window.vec(0, -2),
        });
        window.play("select");
      }
    } else {
      powerUpType = "";
    }
  }

  function updateProjectiles() {
    projectiles = projectiles.filter((p) => {
      p.pos.add(p.vel);
      window.color("yellow");
      window.box(p.pos, 2);
      return p.pos.isInRect(0, 0, G.WIDTH, G.HEIGHT);
    });
  }

  function updateMeteors() {
    if (nextMeteorTicks <= 0) {
      updateDifficulty();
      if (window.rnd() < superAsteroidChance) {
        spawnSuperAsteroid();
      } else {
        spawnRegularAsteroid();
      }
      nextMeteorTicks =
        (window.rnd(99, 120) / window.sqrt(window.difficulty)) *
        window.sqrt(meteors.length);
    }
    nextMeteorTicks -= asteroidSpawnRate;

    meteors = meteors.filter((m) => {
      // Collision with projectiles
      let isDestroyed = false;
      projectiles = projectiles.filter((p) => {
        if (m.pos.distanceTo(p.pos) < 5) {
          if (m.type === "super") {
            m.health--;
            if (m.health <= 0) {
              handleSuperAsteroidDestruction(m);
              isDestroyed = true;
            } else {
              window.color("light_purple");
              window.particle(m.pos, 5, 2, 2, window.PI * 2);
              window.play("hit");
            }
          } else {
            handleRegularAsteroidDestruction(m);
            isDestroyed = true;
          }
          return false;
        }
        return true;
      });

      if (isDestroyed) return false;

      // Collision with other asteroids
      for (let other of meteors) {
        if (other !== m && m.pos.distanceTo(other.pos) < 5) {
          handleRegularAsteroidDestruction(m);
          handleRegularAsteroidDestruction(other);
          return false;
        }
      }

      // Asteroid movement
      updateAsteroidMovement(m);

      // Render asteroid
      const isColliding = renderAsteroid(m);

      // Check collision with ship
      if (isColliding) {
        if (powerUpType === "shield") {
          window.play("powerUp");
          return false;
        } else {
          handlePlayerHit(m);
          return false;
        }
      }

      // Gold collection
      handleGoldCollection(m);

      // Check if asteroid is cleared
      if (m.golds.length === 0) {
        handleAsteroidCleared(m);
        return false;
      }

      // Render asteroid boundary indicator
      renderBoundaryIndicator(m);

      return m.pos.isInRect(-100, -100, G.WIDTH + 200, G.HEIGHT + 200);
    });
  }

  function updateUI() {
    if (comboTimer > 0) {
      comboTimer--;
      if (comboTimer === 0) {
        combo = 0;
      }
    }

    window.color("cyan");
    const scoreOffset =
      scoreAnimation > 0 ? Math.sin(scoreAnimation * window.PI) * 2 : 0;
    window.text(`${window.score}`, 3, 9 + scoreOffset);
    scoreAnimation *= 0.9;

    window.color("black");
    window.text(`HI:${highScore}`, 70, 9);
    window.text(`LVL:${level}`, 3, 18);

    if (powerUpType) {
      window.color("cyan");
      const powerUpOffset = Math.sin(powerUpAnimation * window.PI * 2) * 2;
      window.text(
        `${powerUpType.toUpperCase()}: ${window.ceil(powerUpTimer / 60)}`,
        30,
        30 + powerUpOffset
      );
    }

    if (combo > 1) {
      window.color("yellow");
      window.text(`COMBO x${combo}`, 30, 40);
    }

    if (window.score > highScore) {
      highScore = window.score;
    }
  }

  function updateDifficulty() {
    const playTimeFactor =
      Math.log(playerPerformance.playTime / 3600 + 1) / Math.log(2);
    const performanceFactor =
      playerPerformance.score / Math.max(1, playerPerformance.hitCount + 1);

    asteroidSpawnRate =
      1.0 + Math.min(playTimeFactor * 0.2 + performanceFactor / 200.0, 1.5);
    asteroidSpeedMultiplier =
      1.0 + Math.min(playTimeFactor * 0.15 + performanceFactor / 300.0, 1.3);
    superAsteroidChance = Math.min(playTimeFactor * 0.02, 0.2);
  }

  function drawThruster(x, y, isPoweredUp) {
    const particleCount = isPoweredUp ? 7 : 4;
    const particleSpeed = isPoweredUp ? 2 : 1;
    const particleSpread = isPoweredUp ? window.PI / 3 : window.PI / 6;

    window.color("cyan");
    window.particle(
      x,
      y,
      particleCount,
      particleSpeed,
      window.PI / 2,
      particleSpread
    );

    window.color("blue");
    window.particle(
      x,
      y,
      Math.floor(particleCount * 0.3),
      particleSpeed * 0.8,
      window.PI / 2,
      particleSpread,
      0.5
    );
  }

  function drawShield(x, y) {
    window.color("cyan");
    const shieldRadius = 7;
    const dotCount = 4;
    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * window.PI * 2;
      const dotX = x + Math.cos(angle) * shieldRadius;
      const dotY = y + Math.sin(angle) * shieldRadius;
      window.arc(dotX, dotY, 0.2);
    }
  }

  function spawnSuperAsteroid() {
    meteors.push({
      pos: window.vec(window.rnd(10, 90), -10),
      vel: window.vec(window.rnds(1 * asteroidSpeedMultiplier)),
      accel:
        window.rnd(1.5, window.sqrt(window.difficulty) * 1.5) *
        asteroidSpeedMultiplier,
      posHistory: [],
      golds: window.times(window.rndi(5, 10), (i) => (i + 2) * 10),
      type: "super",
      health: 3,
    });
  }

  function spawnRegularAsteroid() {
    meteors.push({
      pos: window.vec(window.rnd(10, 90), -5),
      pos: window.vec(window.rnd(10, 90), -5),
      vel: window.vec(window.rnds(0.5 * asteroidSpeedMultiplier)),
      accel:
        window.rnd(1, window.sqrt(window.difficulty)) * asteroidSpeedMultiplier,
      posHistory: [],
      golds: window.times(window.rndi(3, 8), (i) => (i + 2) * 5),
      type: window.rnd() < 0.2 ? "fast" : "normal",
    });
  }

  function handleSuperAsteroidDestruction(meteor) {
    window.color("purple");
    window.particle(meteor.pos, 15, 3, 2, window.PI * 2);
    window.play("explosion");
    window.addScore(multiplier * 5);
    playerPerformance.score += multiplier * 5;
    if (window.rnd() < 0.5) activatePowerUp();
    spawnSmallerAsteroids(meteor.pos);
  }

  function handleRegularAsteroidDestruction(meteor) {
    window.color("red");
    window.particle(meteor.pos, 10, 2, 2, window.PI * 2);
    window.play("explosion");
    window.addScore(multiplier * 2);
    playerPerformance.score += multiplier * 2;
  }

  function updateAsteroidMovement(meteor) {
    if (meteor.type === "super") {
      meteor.vel.add(
        window.vec(shipPos).sub(meteor.pos).div(500).mul(meteor.accel)
      );
      meteor.vel.clamp(-3, 3, -3, 3);
    } else {
      meteor.vel.add(
        window.vec(shipPos).sub(meteor.pos).div(999).mul(meteor.accel)
      );
      if (meteor.type === "fast") {
        meteor.vel.mul(1.5);
      }
      meteor.vel.clamp(-2, 2, -2, 2);
    }

    meteor.pos.add(meteor.vel);
    meteor.posHistory.unshift(window.vec(meteor.pos));
    if (meteor.posHistory.length > 200) {
      meteor.posHistory.pop();
    }
  }

  function renderAsteroid(meteor) {
    window.color(
      meteor.type === "super"
        ? "purple"
        : meteor.type === "fast"
        ? "light_red"
        : "black"
    );
    const asteroidChar =
      meteor.type === "super"
        ? window.addWithCharCode("b", 2)
        : meteor.type === "fast"
        ? "c"
        : "b";
    return window.char(
      asteroidChar,
      meteor.pos.x + screenShake,
      meteor.pos.y + screenShake
    ).isColliding.char.a;
  }

  function handleGoldCollection(meteor) {
    window.color("yellow");
    meteor.golds = meteor.golds.filter((g, i) => {
      if (meteor.posHistory.length > g) {
        if (
          window.text(
            "B",
            meteor.posHistory[g].x + screenShake,
            meteor.posHistory[g].y + screenShake
          ).isColliding.char.a
        ) {
          window.play("coin");
          window.particle(meteor.posHistory[g], 10, 2);
          window.addScore(multiplier);
          playerPerformance.score += multiplier;
          scoreAnimation = 1;
          window.color("transparent");
          window.text(
            "+" + multiplier,
            meteor.posHistory[g].x,
            meteor.posHistory[g].y - 5
          );
          combo++;
          comboTimer = 60;
          return false;
        }
      }
      return true;
    });
  }

  function handleAsteroidCleared(meteor) {
    window.play("powerUp");
    const p = meteor.pos.clamp(5, G.WIDTH - 5, 5, G.HEIGHT - 5);
    window.addScore(multiplier, p);
    playerPerformance.score += multiplier;
    scoreAnimation = 1;
    window.color("red");
    window.particle(p, 20, 2);
    multiplier++;
    if (window.rnd() < 0.2) {
      activatePowerUp();
    }
    window.color("red");
    window.particle(p, 30, 3, 2, window.PI * 2);
  }

  function renderBoundaryIndicator(meteor) {
    if (!meteor.pos.isInRect(-3, -3, G.WIDTH + 6, G.HEIGHT + 6)) {
      window.color("red");
      const clampedPos = window
        .vec(meteor.pos)
        .clamp(-3, G.WIDTH + 3, -3, G.HEIGHT + 3);
      window.box(clampedPos.x + screenShake, clampedPos.y + screenShake, 8);
    }
  }

  function handlePlayerHit(meteor) {
    window.play("hit");
    window.color("black");
    window.particle(shipPos, 30, 3);
    window.color("red");
    window.particle(shipPos, 20, 2, window.PI, window.PI * 2);
    shipPos.y += 10;
    screenShake = 5;
    playerPerformance.hitCount++;
  }

  function activatePowerUp() {
    powerUpTimer = 600; // 10 seconds
    powerUpType =
      window.rndi(3) === 0
        ? "projectile"
        : window.rnd() < 0.5
        ? "shield"
        : "speed";
    powerUpAnimation = 1;
    window.play("powerUp");
  }

  function spawnSmallerAsteroids(pos) {
    for (let i = 0; i < window.rndi(2, 4); i++) {
      meteors.push({
        pos: window.vec(pos.x + window.rnds(10), pos.y + window.rnds(10)),
        vel: window.vec(window.rnds(1 * asteroidSpeedMultiplier)),
        accel:
          window.rnd(1, window.sqrt(window.difficulty)) *
          asteroidSpeedMultiplier,
        posHistory: [],
        golds: window.times(window.rndi(2, 4), (i) => (i + 2) * 5),
        type: "normal",
      });
    }
  }

  function init() {
    // Add a check to ensure the object containing 'update' exists
    if (
      typeof window.gameObject !== "undefined" &&
      window.gameObject !== null
    ) {
      if (typeof window.gameObject.update === "function") {
        // Your initialization code here
      } else {
        console.error("gameObject.update is not a function");
      }
    } else {
      console.error("gameObject is undefined or null");
    }
  }

  return {
    init,
    update,
    title,
    description,
    characters,
    options,
  };
};

export const games = {
  growth: growthAPP,
  GTAIL: GTAIL,
};

const urlParams = new URLSearchParams(window.location.search);
const gameName = urlParams.get("game");
// const id = urlParams.get("id");
const userId = urlParams.get("userId");
const gameId = urlParams.get("gameId");
// console.log(urlParams, userId, gameId);

const selectedGame = games[gameName] || GTAIL;

const props = selectedGame();
window.init({
  ...props,
});
