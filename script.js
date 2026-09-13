// CAMBIA ESTA FECHA POR LA FECHA REAL DE TU PRÓXIMA CARRERA.
const raceDate = new Date("2026-09-18T19:30:00+02:00").getTime();

function updateCountdown(){
  const now = Date.now();
  const d = Math.max(0, raceDate - now);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d % 86400000) / 3600000);
  const mins = Math.floor((d % 3600000) / 60000);
  const secs = Math.floor((d % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("mins").textContent = String(mins).padStart(2,"0");
  document.getElementById("secs").textContent = String(secs).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);
