const girlfriendName = "Love";
const relationshipStartDate = "2025-12-18";
const couplePhotoPath = "yqq.jpg";
const certificateNameOne = "Yassine";
const certificateNameTwo = "Yaqeen";

const loveLines = [
  "You make every day brighter, softer, and more magical.",
  "I love your heart, your smile, and the way you care.",
  "Thank you for being my safe place and my favorite person."
];

const notes = [
  "You are the best part of my day, every day.",
  "If I could choose again, I would choose you every single time.",
  "You are my sunshine, my calm, and my forever favorite.",
  "Your love makes me want to be a better person.",
  "Everything is sweeter when I am with you."
];

const adoreReasonsPool = [
  "You make me feel safe, loved, and understood.",
  "Your smile turns my hardest days into good ones.",
  "You care deeply, and your heart is incredibly kind.",
  "You make ordinary moments feel magical.",
  "Being with you feels like home."
];

const typewriterEl = document.getElementById("typewriter");
const nameEl = document.getElementById("loveName");
const daysTogetherEl = document.getElementById("daysTogether");
const secondsTogetherEl = document.getElementById("secondsTogether");
const reasonsCountEl = document.getElementById("reasonsCount");
const noteBoxEl = document.getElementById("noteBox");
const heartLayerEl = document.getElementById("heartLayer");
const couplePhotoEl = document.getElementById("couplePhoto");
const envelopeBtnEl = document.getElementById("envelopeBtn");
const envelopeBtnTextEl = document.getElementById("envelopeBtnText");
const proposalLockEl = document.getElementById("proposalLock");
const proposalMessageEl = document.getElementById("proposalMessage");
const yesBtnEl = document.getElementById("yesBtn");
const noBtnEl = document.getElementById("noBtn");
const romanticSongEl = document.getElementById("romanticSong");
const complimentRainBtnEl = document.getElementById("complimentRainBtn");
const previewNameOneEl = document.getElementById("previewNameOne");
const previewNameTwoEl = document.getElementById("previewNameTwo");
const previewSinceEl = document.getElementById("previewSince");
const previewTodayDateEl = document.getElementById("previewTodayDate");
const yearMemoryEls = Array.from(document.querySelectorAll(".year-memory"));
const lockScreenEl = document.getElementById("lockScreen");
const lockFormEl = document.getElementById("lockForm");
const lockInputEl = document.getElementById("lockInput");
const lockErrorEl = document.getElementById("lockError");
const reasonsCardEl = document.getElementById("reasonsCard");
const reasonsModalEl = document.getElementById("reasonsModal");
const reasonsListEl = document.getElementById("reasonsList");
const closeReasonsBtnEl = document.getElementById("closeReasonsBtn");
const themeToggleBtnEl = document.getElementById("themeToggleBtn");
const themeToggleBtnMobileEl = document.getElementById("themeToggleBtnMobile");

const openPassword = "18122025";
const themeStorageKey = "love-theme-mode";

function applyTheme(themeMode) {
  document.body.dataset.theme = themeMode;

  if (themeToggleBtnEl) {
    themeToggleBtnEl.textContent = themeMode === "night" ? "☀️ Day" : "🌙 Night";
  }

  if (themeToggleBtnMobileEl) {
    themeToggleBtnMobileEl.textContent = themeMode === "night" ? "☀️ Day Mode" : "🌙 Night Mode";
  }
}

function initializeThemeSwitcher() {
  const savedTheme = localStorage.getItem(themeStorageKey) || "day";
  applyTheme(savedTheme);

  const toggleTheme = () => {
    const nextTheme = (document.body.dataset.theme || "day") === "night" ? "day" : "night";
    applyTheme(nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
  };

  if (themeToggleBtnEl && themeToggleBtnEl.dataset.bound !== "true") {
    themeToggleBtnEl.addEventListener("click", toggleTheme);
    themeToggleBtnEl.dataset.bound = "true";
  }

  if (themeToggleBtnMobileEl && themeToggleBtnMobileEl.dataset.bound !== "true") {
    themeToggleBtnMobileEl.addEventListener("click", toggleTheme);
    themeToggleBtnMobileEl.dataset.bound = "true";
  }

  if ((!themeToggleBtnEl || themeToggleBtnEl.dataset.bound === "true") && (!themeToggleBtnMobileEl || themeToggleBtnMobileEl.dataset.bound === "true")) {
    return;
  }
}

initializeThemeSwitcher();

function setLockedState(isLocked) {
  document.body.classList.toggle("locked", isLocked);
  if (lockScreenEl) {
    lockScreenEl.hidden = !isLocked;
    lockScreenEl.style.display = isLocked ? "grid" : "none";
    lockScreenEl.setAttribute("aria-hidden", String(!isLocked));
  }
}

function initializePasswordGate() {
  if (!lockScreenEl || !lockFormEl || !lockInputEl || !lockErrorEl) {
    return;
  }

  setLockedState(true);
  lockInputEl.focus();

  if (lockFormEl.dataset.bound === "true") {
    return;
  }

  const tryUnlock = () => {
    const value = lockInputEl.value.trim();

    if (value === openPassword) {
      lockErrorEl.textContent = "";
      lockInputEl.value = "";
      setLockedState(false);
      return true;
    }

    lockErrorEl.textContent = "Wrong password, try again 💞";
    lockFormEl.classList.add("shake");
    setTimeout(() => lockFormEl.classList.remove("shake"), 350);
    return false;
  };

  lockFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    tryUnlock();
  });

  const submitBtn = lockFormEl.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      tryUnlock();
    });
  }

  lockFormEl.dataset.bound = "true";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePasswordGate, { once: true });
}

initializePasswordGate();

nameEl.textContent = girlfriendName;
reasonsCountEl.textContent = `${notes.length}+ and growing`;

function calculateDaysTogether(startDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  const diff = now - start;
  return Math.max(1, Math.floor(diff / (1000 * 60 * 60 * 24)) + 1);
}

function calculateSecondsTogether(startDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  const diffInSeconds = Math.floor((now - start) / 1000);
  return Math.max(1, diffInSeconds);
}

function updateDaysTogether() {
  daysTogetherEl.textContent = `${calculateDaysTogether(relationshipStartDate)} days`;
}

function updateSecondsTogether() {
  const seconds = calculateSecondsTogether(relationshipStartDate);
  secondsTogetherEl.textContent = `${seconds.toLocaleString()} seconds`;
}

function scheduleDailyDaysUpdate() {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  const millisecondsUntilMidnight = nextMidnight - now;

  setTimeout(() => {
    updateDaysTogether();
    setInterval(updateDaysTogether, 24 * 60 * 60 * 1000);
  }, millisecondsUntilMidnight);
}

updateDaysTogether();
scheduleDailyDaysUpdate();
updateSecondsTogether();
setInterval(updateSecondsTogether, 1000);

couplePhotoEl.src = couplePhotoPath;

const proposalStartDate = new Date("2026-03-01T00:00:00");
const proposalUnlockDate = new Date(proposalStartDate);
proposalUnlockDate.setFullYear(proposalUnlockDate.getFullYear() + 5);
const envelopeTestMode = new URLSearchParams(window.location.search).get("testEnvelope") === "1";

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateEnvelopeState() {
  const now = new Date();
  const timeLeft = proposalUnlockDate - now;
  const isUnlocked = envelopeTestMode || timeLeft <= 0;

  envelopeBtnEl.disabled = !isUnlocked;
  envelopeBtnTextEl.textContent = isUnlocked ? "Open Envelope" : "Envelope Locked";

  if (isUnlocked && envelopeTestMode) {
    proposalLockEl.textContent = "Test mode is ON — this is a preview of the future message 💍";
  } else if (isUnlocked) {
    proposalLockEl.textContent = "It is time. Open it 💍";
  } else {
    proposalLockEl.textContent = `Opens on ${proposalUnlockDate.toLocaleDateString()} • ${formatDuration(timeLeft)} remaining`;
    proposalMessageEl.hidden = true;
  }
}

envelopeBtnEl.addEventListener("click", () => {
  if (envelopeBtnEl.disabled) {
    envelopeBtnEl.classList.add("shake");
    setTimeout(() => envelopeBtnEl.classList.remove("shake"), 350);
    return;
  }

  proposalMessageEl.hidden = false;
});

updateEnvelopeState();
setInterval(updateEnvelopeState, 1000);

let yesScale = 1;
let noScale = 1;

function applyChoiceScales() {
  yesBtnEl.style.transform = `scale(${yesScale})`;
  noBtnEl.style.transform = `scale(${noScale})`;
  noBtnEl.style.opacity = noScale <= 0.45 ? "0.65" : "1";
}

function dropLoveEmoji() {
  const emoji = document.createElement("span");
  emoji.className = "falling-love";
  emoji.textContent = ["💖", "💕", "💘", "💍", "✨", "🥰"][Math.floor(Math.random() * 6)];
  emoji.style.left = `${Math.random() * 100}vw`;
  emoji.style.fontSize = `${16 + Math.random() * 20}px`;
  emoji.style.animationDuration = `${2.5 + Math.random() * 2.2}s`;
  heartLayerEl.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

function startYesCelebration() {
  for (let index = 0; index < 45; index += 1) {
    setTimeout(dropLoveEmoji, index * 90);
  }
}

function dropComplimentWord() {
  const word = document.createElement("span");
  word.className = "falling-word";
  word.textContent = [
    "Beautiful",
    "My Sunshine",
    "Sweetheart",
    "My Peace",
    "My Favorite",
    "Angel",
    "My Home",
    "My Heart"
  ][Math.floor(Math.random() * 8)];
  word.style.left = `${Math.random() * 90 + 5}vw`;
  word.style.fontSize = `${14 + Math.random() * 12}px`;
  word.style.animationDuration = `${2.8 + Math.random() * 2}s`;
  heartLayerEl.appendChild(word);

  setTimeout(() => {
    word.remove();
  }, 5200);
}

function startComplimentRain() {
  for (let index = 0; index < 36; index += 1) {
    setTimeout(dropComplimentWord, index * 110);
  }
}

noBtnEl.addEventListener("click", () => {
  yesScale = Math.min(3, yesScale + 0.12);
  noScale = Math.max(0.28, noScale - 0.1);
  applyChoiceScales();
});

yesBtnEl.addEventListener("click", () => {
  yesScale = 1;
  noScale = 1;
  applyChoiceScales();
  startYesCelebration();

  if (romanticSongEl.paused) {
    romanticSongEl.volume = 0.45;
    romanticSongEl.play().catch(() => {
      proposalLockEl.textContent = "Could not load the online song right now — check your internet connection 💖";
    });
  }

  loveBurst(window.innerWidth / 2, window.innerHeight / 2 + window.scrollY / 3);
});

if (complimentRainBtnEl) {
  complimentRainBtnEl.addEventListener("click", () => {
    startComplimentRain();
  });
}

if (yearMemoryEls.length) {
  yearMemoryEls.forEach((memoryBlock) => {
    memoryBlock.addEventListener("toggle", () => {
      if (!memoryBlock.open) {
        return;
      }

      yearMemoryEls.forEach((otherBlock) => {
        if (otherBlock !== memoryBlock) {
          otherBlock.open = false;
        }
      });
    });
  });
}

if (previewNameOneEl) {
  previewNameOneEl.textContent = certificateNameOne;
}

if (previewNameTwoEl) {
  previewNameTwoEl.textContent = certificateNameTwo;
}

if (previewSinceEl) {
  previewSinceEl.textContent = new Date(`${relationshipStartDate}T00:00:00`).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

if (previewTodayDateEl) {
  previewTodayDateEl.textContent = new Date().toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function getFiveActualReasons() {
  return adoreReasonsPool.slice(0, 5);
}

function openReasonsModal() {
  if (!reasonsModalEl || !reasonsListEl) {
    return;
  }

  reasonsListEl.innerHTML = "";
  getFiveActualReasons().forEach((reason) => {
    const item = document.createElement("li");
    item.textContent = reason;
    reasonsListEl.appendChild(item);
  });

  reasonsModalEl.hidden = false;
}

function closeReasonsModal() {
  if (reasonsModalEl) {
    reasonsModalEl.hidden = true;
  }
}

if (reasonsCardEl) {
  reasonsCardEl.addEventListener("click", openReasonsModal);
  reasonsCardEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openReasonsModal();
    }
  });
}

if (closeReasonsBtnEl) {
  closeReasonsBtnEl.addEventListener("click", closeReasonsModal);
}

if (reasonsModalEl) {
  reasonsModalEl.addEventListener("click", (event) => {
    if (event.target === reasonsModalEl) {
      closeReasonsModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && reasonsModalEl && !reasonsModalEl.hidden) {
    closeReasonsModal();
  }
});

applyChoiceScales();

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function runTypewriter() {
  const current = loveLines[lineIndex];

  if (!deleting) {
    charIndex += 1;
    typewriterEl.textContent = current.slice(0, charIndex);

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(runTypewriter, 1600);
      return;
    }
  } else {
    charIndex -= 1;
    typewriterEl.textContent = current.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % loveLines.length;
    }
  }

  setTimeout(runTypewriter, deleting ? 30 : 55);
}

runTypewriter();

let noteIndex = 0;

function renderNote() {
  noteBoxEl.textContent = notes[noteIndex];
}

setInterval(() => {
  noteIndex = (noteIndex + 1) % notes.length;
  renderNote();
}, 5000);

renderNote();

function spawnHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💖", "💕", "💘", "💝", "💗"][Math.floor(Math.random() * 5)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heartLayerEl.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2200);
}

function loveBurst(centerX, centerY) {
  for (let index = 0; index < 25; index += 1) {
    const offsetX = (Math.random() - 0.5) * 160;
    const offsetY = (Math.random() - 0.5) * 70;
    setTimeout(() => spawnHeart(centerX + offsetX, centerY + offsetY), index * 35);
  }
}

document.getElementById("loveBurstBtn").addEventListener("click", (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + window.scrollY;
  loveBurst(x, y);
});

function spawnCursorTrailHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "cursor-heart-trail";
  heart.textContent = ["💖", "💕", "💗"][Math.floor(Math.random() * 3)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.fontSize = `${10 + Math.random() * 10}px`;
  heartLayerEl.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 900);
}

document.addEventListener("mousemove", (event) => {
  if (Math.random() < 0.12) {
    spawnCursorTrailHeart(event.clientX, event.clientY);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const canvas = document.getElementById("bgCanvas");
const context = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  const amount = Math.floor((window.innerWidth * window.innerHeight) / 18000);
  particles = Array.from({ length: amount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedY: Math.random() * 0.8 + 0.2,
    driftX: (Math.random() - 0.5) * 0.6
  }));
}

function drawParticles() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.y -= particle.speedY;
    particle.x += particle.driftX;

    if (particle.y < -10) {
      particle.y = canvas.height + 10;
    }

    if (particle.x < -10) {
      particle.x = canvas.width + 10;
    } else if (particle.x > canvas.width + 10) {
      particle.x = -10;
    }

    context.beginPath();
    context.fillStyle = "rgba(255,255,255,0.75)";
    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    context.fill();
  });

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();
window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});
