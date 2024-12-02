// 各時計の位置とタイムゾーンを設定する
const clocks = [
    { id: 'clock1', timezone: 'Asia/Tokyo', position: { top: '40%', left: '60%' } },
    { id: 'clock2', timezone: 'America/New_York', position: { top: '30%', left: '30%' } },
    // 必要な数だけ時計を追加
];

document.addEventListener('DOMContentLoaded', () => {
    clocks.forEach(clock => {
        const clockElement = document.getElementById(clock.id);
        clockElement.style.top = clock.position.top;
        clockElement.style.left = clock.position.left;
        updateClock(clockElement, clock.timezone);
        setInterval(() => updateClock(clockElement, clock.timezone), 1000);
    });
});

function updateClock(element, timezone) {
    const now = new Date();
    const localTime = now.toLocaleString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    element.textContent = localTime;
}
