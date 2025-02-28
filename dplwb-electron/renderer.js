// Store content buffers for each tag
const buffers = new Map();
const connectionStatus = document.getElementById('connection-status');
const rebuildButton = document.getElementById('rebuild-btn');
const fileStatus = document.getElementById('file-status');

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
        '<div>-- connected --</div>\n' : 
        '<div>-- disconnected --</div>\n';
    
    const currentInfo = buffers.get('Info') || '';
    buffers.set('Info', currentInfo + statusMessage);
    updateTextArea('Info', buffers.get('Info'));
});

// Event listener for errors
window.api.onError((error) => {
    addToLog(`Error: ${error}`);
});

// Event listener for file changes
window.api.onFileChanged((path) => {
    addToLog(`File changed: ${path}`);
    
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
        const infoMessage = `<div>Rebuild output (not JSON):</div><pre>${stdout}</pre>`;
        const currentInfo = buffers.get('Info') || '';
        buffers.set('Info', currentInfo + infoMessage);
        updateTextArea('Info', buffers.get('Info'));
    }
});

window.api.onRebuildError((error) => {
    addToLog(`Rebuild error: ${error}`);
    rebuildButton.disabled = false;
    rebuildButton.textContent = 'Run Rebuild';
    
    // Add the error to the error section
    const errorMessage = `Rebuild script error: ${error}\n`;
    const currentContent = buffers.get('✗') || '';
    buffers.set('✗', currentContent + errorMessage);
    updateTextArea('✗', buffers.get('✗'));
});

window.api.onRebuildStderr((stderr) => {
    addToLog(`Rebuild stderr: ${stderr}`);
    
    // Add the error to the error section
    const errorMessage = `Rebuild script output (stderr): ${stderr}\n`;
    const currentContent = buffers.get('✗') || '';
    buffers.set('✗', currentContent + errorMessage);
    updateTextArea('✗', buffers.get('✗'));
});

// Event listener for rebuild button
rebuildButton.addEventListener('click', () => {
    window.api.runRebuild();
});

// Initialize connection status
updateConnectionStatus(false);

// Initial status messages
const initialStatus = '<div>-- waiting for connection --</div>\n';
buffers.set('Info', initialStatus);
updateTextArea('Info', buffers.get('Info'));

// Initial log
addToLog('Application started');
