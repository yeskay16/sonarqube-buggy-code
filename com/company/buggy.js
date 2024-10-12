// Vulnerable JavaScript example with multiple critical issues

// 1. Insecure eval() usage (arbitrary code execution)
function executeUserCode(userInput) {
    eval(userInput);  // ⚠️ CRITICAL VULNERABILITY: allows arbitrary code execution
}

// 2. Cross-Site Scripting (XSS) vulnerability
function displayUserMessage(message) {
    // Directly injecting user input into innerHTML without sanitization
    document.getElementById('messageBox').innerHTML = message;  // ⚠️ XSS risk
}

// 3. Insecure password storage (sensitive data exposure)
var passwords = [];
function storePassword(password) {
    passwords.push(password);  // ⚠️ Storing passwords in plaintext (no encryption)
}

// 4. Lack of CSRF protection for sensitive requests
function updateProfile() {
    fetch('/updateProfile', {  // ⚠️ No CSRF token used in this request
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

// 5. SQL Injection risk due to unsanitized user input
function searchDatabase(query) {
    var sqlQuery = "SELECT * FROM users WHERE name = '" + query + "'";  // ⚠️ SQL Injection risk
    executeSQL(sqlQuery);  // Assume this sends the query to the server
}

// 6. Insecure file upload handling
function uploadFile(file) {
    // ⚠️ No size validation or MIME type check
    fetch('/upload', {
        method: 'POST',
        body: file
    });
}

// 7. Insecure random number generation (cryptographic weaknesses)
function generateSessionToken() {
    return Math.random().toString(36).substring(2);  // ⚠️ Not secure for session tokens
}
