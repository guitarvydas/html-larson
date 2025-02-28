// Store content buffers for each tag
const buffers = new Map();
const connectionStatus = document.getElementById('connection-status');
const rebuildButton = document.getElementById('rebuild-btn');
const fileStatus = document.getElementById('file-status');
const filePath = document.getElementById('file-path');

// Initialize buffers for all tags
document.querySelectorAll('.tagbox').forEach(tagbox => {
    buffers.set(tagbox.value, '');
});

// Update a textarea with content and scroll to bottom
function updateTextArea(id, content) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id ${id} not found`);
        return;
    }
    
    if (id === 'Info') {
        element.innerHTML = content;
    } else {
        element.value = content;
    }
    element.scrollTop = element.scrollHeight;
}

// Reset all textareas and buffers
function resetAll() {
    document.querySelectorAll('.tagbox').forEach(tagbox => {
        const id = tagbox.value;
        buffers.set(id, '');
        updateTextArea(id, '');
    });
    addToLog('All displays cleared (reset command received)');
}

// Add a message to the debug log
function addToLog(message) {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const logMessage = `[${timestamp}] ${message}\n`;
    
    // Add to the error section
    const currentContent = buffers.get('✗') || '';
    buffers.set('✗', currentContent + logMessage);
    updateTextArea('✗', buffers.get('✗'));
}

// Add a message to the info section
function addToInfo(message) {
    const infoDiv = `<div>${message}</div>`;
    const currentInfo = buffers.get('Info') || '';
    buffers.set('Info', currentInfo + infoDiv);
    updateTextArea('Info', buffers.get('Info'));
}

// Update connection status display
function updateConnectionStatus(isConnected) {
    connectionStatus.textContent = isConnected ? 'Connected' : 'Disconnected';
    connectionStatus.className = isConnected ? 'connected' : 'disconnected';
    connectionStatus.classList.add('animated');
    setTimeout(() => connectionStatus.classList.remove('animated'), 500);
    
    addToLog(`Connection status changed to: ${isConnected ? 'Connected' : 'Disconnected'}`);
}

// Process a message array
function processMessage(data) {
    addToLog(`Processing message: ${JSON.stringify(data)}`);
    
    if (!Array.isArray(data)) {
        addToLog('Error: Message is not an array');
        return;
    }
    
    // Check for reset command
    for (const item of data) {
        if (item && item[""] === "reset") {
            resetAll();
            return;
        }
    }
    
    // Process each key-value pair
    for (const item of data) {
        for (const [key, value] of Object.entries(item)) {
            // Skip the reset command which was handled above
            if (key === '' && value === 'reset') continue;
            
            const element = document.getElementById(key);
            if (element) {
                // Valid tag found, append the content
                const currentContent = buffers.get(key) || '';
                buffers.set(key, currentContent + value + '\n');
                updateTextArea(key, buffers.get(key));
            } else {
                // Invalid tag
                const infoMessage = `<span class="ignored-tag">tag ignored: ${key}</span>`;
                const currentInfo = buffers.get('Info') || '';
                buffers.set('Info', currentInfo + infoMessage);
                updateTextArea('Info', buffers.get('Info'));
                addToLog(`Ignored tag "${key}"`);
            }
        }
    }
}

// Event listeners for WebSocket messages
window.api.onMessage((data) => {
    addToLog(`Message received from WebSocket`);
    processMessage(data);
});

// Event listener for connection status
window.api.onConnectionStatus((isConnected) => {
    updateConnectionStatus(isConnected);
    
    // Update info area
    const statusMessage = isConnected ? 
        '-- connected --' : 
        '-- disconnected --';
    
    addToInfo(statusMessage);
});

// Event listener for info messages
window.api.onInfo((info) => {
    addToInfo(info);
    addToLog(`Info: ${info}`);
});

// Event listener for errors
window.api.onError((error) => {
    addToLog(`Error: ${error}`);
});

// Event listener for watched file updates
window.api.onWatchedFileUpdate((path) => {
    filePath.textContent = path;
    addToLog(`Now watching file: ${path}`);
});

// Event listener for file added
window.api.onFileAdded((path) => {
    addToLog(`File added: ${path}`);
    addToInfo(`File detected: ${path}`);
    
    // Flash the file status
    fileStatus.textContent = '(detected)';
    fileStatus.classList.add('changed');
    setTimeout(() => {
        fileStatus.textContent = '';
        fileStatus.classList.remove('changed');
    }, 3000);
});

// Event listener for file changes
window.api.onFileChanged((path) => {
    addToLog(`File changed: ${path}`);
    addToInfo(`File changed: ${path}`);
    
    // Flash the file status
    fileStatus.textContent = '(modified)';
    fileStatus.classList.add('changed');
    setTimeout(() => {
        fileStatus.textContent = '';
        fileStatus.classList.remove('changed');
    }, 3000);
});

// Event listeners for rebuild script events
window.api.onRebuildStarted(() => {
    addToLog('Rebuild script started');
    addToInfo('Running rebuild.bash...');
    rebuildButton.disabled = true;
    rebuildButton.textContent = 'Running...';
});

window.api.onRebuildCompleted((stdout) => {
    addToLog('Rebuild script completed');
    rebuildButton.disabled = false;
    rebuildButton.textContent = 'Run Rebuild';
    
    try {
        // Try to parse the output as JSON
        const data = JSON.parse(stdout);
        processMessage(data);
    } catch (error) {
        addToLog(`Failed to parse rebuild output: ${error.message}`);
        // Add the raw output to the Info area
        addToInfo(`Rebuild output (not JSON):`);
        addToInfo(`<pre>${stdout}</pre>`);
    }
});

window.api.onRebuildError((error) => {
    addToLog(`Rebuild error: ${error}`);
    addToInfo(`<span class="ignored-tag">Rebuild error: ${error}</span>`);
    rebuildButton.disabled = false;
    rebuildButton.textContent = 'Run Rebuild';
});

window.api.onRebuildStderr((stderr) => {
    addToLog(`Rebuild stderr: ${stderr}`);
    addToInfo(`<span class="ignored-tag">Rebuild stderr: ${stderr}</span>`);
});

// Event listener for rebuild button
rebuildButton.addEventListener('click', () => {
    window.api.runRebuild();
});

// Initialize connection status
updateConnectionStatus(false);

// Initial status messages
addToInfo('-- waiting for connection --');

// Initial log
addToLog('Application started');
