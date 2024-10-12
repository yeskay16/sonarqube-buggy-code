// Vulnerable and buggy JavaScript example

// 1. Deprecated function usage (code smell)
function useDeprecatedFunction() {
    var result = escape("This is deprecated");  // ⚠️ 'escape' is deprecated
    console.log(result);
}

// 2. Unused variable (code smell)
function unusedVariables() {
    var unused = "I am not used anywhere";  // ⚠️ Unused variable
}

// 3. Hardcoded credentials (security vulnerability)
function connectDatabase() {
    var dbUser = "admin";  // ⚠️ Hardcoded sensitive information
    var dbPassword = "password123";  // ⚠️ Hardcoded password
    connect(dbUser, dbPassword);
}

// 4. Insecure random number generation (security vulnerability)
function generateSessionToken() {
    return Math.random();  // ⚠️ Not cryptographically secure
}

// 5. Improper exception handling (code smell)
function errorProneFunction() {
    try {
        // Some code that could throw errors
        riskyOperation();
    } catch (e) {
        console.log(e);  // ⚠️ Logging an error without meaningful action
    }
}

// 6. Inconsistent return points (bug)
function inconsistentReturns() {
    if (condition) {
        return "Valid return";  // ⚠️ Returns a string
    }
    // ⚠️ Missing return here leads to undefined behavior
}

// 7. SQL Injection vulnerability (security vulnerability)
function search(query) {
    var sql = "SELECT * FROM users WHERE name = '" + query + "'";  // ⚠️ SQL Injection risk
    executeSQL(sql);
}

// 8. Inefficient looping (code smell)
function inefficientLoop() {
    var items = [1, 2, 3, 4, 5];
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items.length; j++) {
            // ⚠️ Nested loops with inefficient complexity
            console.log(items[i], items[j]);
        }
    }
}

// 9. Unvalidated input (vulnerability)
function processUserInput(input) {
    document.getElementById('output').innerHTML = input;  // ⚠️ XSS vulnerability: user input not sanitized
}

// 10. Not closing database connection (code smell)
function openDatabaseConnection() {
    var connection = openConnection();  // ⚠️ Database connection is not closed properly
    // Do some work with the database
}
