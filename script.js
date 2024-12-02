function tick(clockId, timezone) {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const hourDeg = h * 30 + m * 0.5 + s * 0.00833333333;
  const minuteDeg = m * 6 + s * 0.1;
  const secondDeg = s * 6;
  document.getElementById(`hour${clockId}`).style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById(`minute${clockId}`).style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById(`second${clockId}`).style.transform = `rotate(${secondDeg}deg)`;
}

function initClocks() {
  const clocks = [
    { id: '1', timezone: 'Asia/Tokyo', position: { top: '40%', left: '60%' } },
    { id: '2', timezone: 'America/New_York', position: { top: '30%', left: '30%' } },
    // 必要な数だけ時計を追加
  ];

  clocks.forEach(clock => {
    const clockElement = document.getElementById(`clock${clock.id}`);
    clockElement.style.top = clock.position.top;
    clockElement.style.left = clock.position.left;
    tick(clock.id, clock.timezone);
    setInterval(() => tick(clock.id, clock.timezone), 1000);
  });
}

window.addEventListener('load', initClocks);
