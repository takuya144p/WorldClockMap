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
    const localTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    const hourHand = element.querySelector('.hour');
    const minuteHand = element.querySelector('.minute');
    const secondHand = element.querySelector('.second');

    const hourDeg = (hours % 12) * 30 + (minutes / 2); // 1時間 = 30度
    const minuteDeg = minutes * 6; // 1分 = 6度
    const secondDeg = seconds * 6; // 1秒 = 6度

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
