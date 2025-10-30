const input = document.getElementById('input')

function show_system_info() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US');
    const date = now.toLocaleDateString('en-US')
    
    // التحقق من دعم البطارية
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const batteryLevel = Math.floor(battery.level * 100);
            const chargingStatus = battery.charging ? '⚡ Charging...' : '';
            const batteryInfo = ` ${batteryLevel}% ${chargingStatus}`;
            
            alert(`Time: ${time}\nDate: ${date}\nInternet name: VO\nInternet status: Connected\nBettery: ${batteryInfo}\nAudio: 46%`);
        }).catch(function(error) {
            alert(`Time: ${time}\nDate: ${date}\nInternet name: VO\nInternet status: Connected\nBettery: غير متاح\nAudio: 46%`);
        });
    } else {
        alert(`Time: ${time}\nDate: ${date}\nInternet name: VO\nInternet status: Connected\nBettery: غير متاح (Browser not supported)\nAudio: 46%`);
    }
}
function open_youtube() {
    window.open('https://www.youtube.com', 'pupop', 'width=500, height=500, left=200, top=100')
}
function open_code() {
    window.open('https://www.replit.com/~', 'pupop', 'width=500, height=500, left=200, top=100')
}
function open_aiModel() {
    window.open('https://www.chatgpt.com/', 'pupop', 'width=500, height=500, left=200, top=100')
}
function open_shop() {
    window.open('https://www.amazon.com/', 'pupop', 'width=500, height=500, left=200, top=100')
}
function search() {
    window.open(`https://www.google.com/search?q=${input.value}`, 'pupop', 'width=500, height=500, left=200, top=100')
}