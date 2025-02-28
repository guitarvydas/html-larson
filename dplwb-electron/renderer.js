// Store content buffers for each tag
const buffers = new Map();
const connectionStatus = document.getElementById('connection-status');

// Initialize buffers for all tags
document.querySelectorAll('.tagbox').forEach(tagbox => {
    buffers.set(tagbox.value, '');
});

// Update a textarea with content and scroll to bottom
function updateTextArea(textarea, content) {
    if (textarea.id === 'info') {
        textarea.innerHTML = content;
    } else {
        textarea.value = content;
    }
    textarea.scrollTop = textarea.scrollHeight;
}

// Reset all textareas and buffers
function resetAll() {
    document.querySelectorAll('.tagbox').forEach(tagbox => {
        const textarea = tagbox.nextElementSibling;
        buffers.set(tagbox.value, '');
        updateTextArea(textarea, '');
    });
}

// Update connection status display
function updateConnectionStatus(isConnected) {
    connectionStatus.textContent = isConnected ? 'Connected' : 'Disconnected';
    connectionStatus.className = isConnected ? 'connected' : 'disconnected';
    connectionStatus.classList.add('animated');
    setTimeout(() => connectionStatus.classList.remove('animated'), 500);
}

// Handle WebSocket messages from main process
window.api.onWSMessage((messageStr) => {
    // Update connection status to connected when we receive a message
    updateConnectionStatus(true);
    
    try {
        const data = JSON.parse(messageStr);
        const dataArray = Array.isArray(data) ? data : [data];
        
        // Handle reset command
        if (dataArray.length === 1 && "" in dataArray[0] && dataArray[0][""] === "reset") {
            resetAll();
            return;
        }

        const validTags = new Set([...document.querySelectorAll('.tagbox')].map(box => box.value));
        
        // Check for ignored tags
        dataArray.forEach(item => {
            Object.keys(item).forEach(tag => {
                if (!validTags.has(tag)) {
                    const infoMessage = `<span class="ignored-tag">tag ignored: ${tag}</span>`;
                    buffers.set('Info', (buffers.get('Info') || '') + infoMessage);
                    updateTextArea(document.getElementById('info'), buffers.get('Info'));
                }
            });
        });

        // Process valid tags
        document.querySelectorAll('.tagbox').forEach(tagbox => {
            const tagValue = tagbox.value;
            const textarea = tagbox.nextElementSibling;
            
            const values = dataArray
                .map(item => item[tagValue])
                .filter(value => value !== undefined);
            
            if (values.length > 0) {
                const newContent = values.join('\n\n') + '\n';
                buffers.set(tagValue, buffers.get(tagValue) + newContent);
                updateTextArea(textarea, buffers.get(tagValue));
            }
        });
    } catch (error) {
        const errorMessage = `Error processing message: ${error.message}\n`;
        buffers.set('✗', buffers.get('✗') + errorMessage);
        updateTextArea(document.getElementById('errors'), buffers.get('✗'));
    }
});

// Handle WebSocket errors
window.api.onWSError((error) => {
    updateConnectionStatus(false);
    const errorMessage = `WebSocket error: ${error}\n`;
    buffers.set('✗', buffers.get('✗') + errorMessage);
    updateTextArea(document.getElementById('errors'), buffers.get('✗'));
});

// Listen for connection status updates from main process
window.api.onWSConnectionStatus((isConnected) => {
    updateConnectionStatus(isConnected);
    
    // Update info area
    const statusMessage = isConnected ? 
        '-- connected --\n' : 
        '-- disconnected --\n';
    
    buffers.set('Info', buffers.get('Info') + statusMessage);
    updateTextArea(document.getElementById('info'), buffers.get('Info'));
});

// Initial connection status
updateConnectionStatus(false);

// Initial status messages
const initialStatus = '-- waiting for connection --\n';
buffers.set('Info', initialStatus);
buffers.set('✗', '');
updateTextArea(document.getElementById('info'), buffers.get('Info'));
updateTextArea(document.getElementById('errors'), buffers.get('✗'));

// When the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Renderer process started');
});
