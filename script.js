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
function makeDraggable(dialog) {
    const titlebar = dialog.querySelector('.titlebar');
    let isDragging = false;
    let startX, startY;
    let initialLeft, initialTop;
    let hasMoved = false; // علشان نعرف لو اتحرك قبل كده

    // لما الـ dialog يفتح، حطه في النص
    dialog.addEventListener('click', function centerDialog() {
        if (!hasMoved) {
            const rect = dialog.getBoundingClientRect();
            dialog.style.position = 'fixed';
            dialog.style.left = ((window.innerWidth - rect.width) / 2) + 'px';
            dialog.style.top = ((window.innerHeight - rect.height) / 2) + 'px';
            dialog.style.transform = 'none';
        }
    }, { once: true });

    titlebar.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target === titlebar || titlebar.contains(e.target)) {
            isDragging = true;
            hasMoved = true;
            
            startX = e.clientX;
            startY = e.clientY;
            
            // جيب الموقع الحالي
            const style = window.getComputedStyle(dialog);
            initialLeft = parseInt(style.left) || 0;
            initialTop = parseInt(style.top) || 0;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            dialog.style.left = (initialLeft + deltaX) + 'px';
            dialog.style.top = (initialTop + deltaY) + 'px';
        }
    }

    function dragEnd() {
        isDragging = false;
    }
}

// تطبيق الـ dragging على كل الـ dialogs
const dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
    makeDraggable(dialog);
});
let edgescreen = 'small'
function toggleScreenEdge() {
    const dialog = document.getElementById('edge')
    if (edgescreen === 'small') {
        edgescreen = "big"
        dialog.style.width = "1500px"
        dialog.style.height = '1000px'
    }
    else {
        edgescreen = "small"
        dialog.style.width = "500px"
        dialog.style.height = '500px'
    }
}
let filesscreen = 'small'
function toggleScreenFiles() {
    const dialog = document.getElementById('files')
    if (filesscreen === 'small') {
        filesscreen = "big"
        dialog.style.width = "1500px"
        dialog.style.height = '1000px'
    }
    else {
        filesscreen = 'small'
        dialog.style.width = "500px"
        dialog.style.height = '500px'
    }
}
let notesscreen = 'small'
function toggleScreenNotes() {
    const dialog = document.getElementById('notes')
    if (notesscreen === 'small') {
        notesscreen = "big"
        dialog.style.width = "100vw"
        dialog.style.height = '100vh'
    }
    else {
        notesscreen = "small"
        dialog.style.width = "500px"
        dialog.style.height = '500px'
    }
}