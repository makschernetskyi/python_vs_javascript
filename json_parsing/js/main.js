// Pure JavaScript JSON parser
function parseJSON(jsonStr) {
    jsonStr = jsonStr.trim();
    if (jsonStr[0] !== '{' || jsonStr[jsonStr.length - 1] !== '}') {
        throw new Error("Invalid JSON");
    }

    const result = {};
    let key = '';
    let value = '';
    let inKey = true;
    let inString = false;

    for (let i = 1; i < jsonStr.length - 1; i++) { // Skip outer braces
        const char = jsonStr[i];

        if (char === '"') {
            inString = !inString; // Toggle string state
            continue;
        }

        if (!inString) {
            if (char === ':') {
                inKey = false; // Switch to value
                continue;
            }
            if (char === ',') {
                result[key] = value; // Save key-value pair
                key = '';
                value = '';
                inKey = true; // Switch back to key
                continue;
            }
        }

        if (inKey) {
            key += char;
        } else {
            value += char;
        }
    }

    // Add the last key-value pair
    result[key] = value;

    return result;
}

// Generate JSON string manually
const largeJSON = '{"key1":"value1",' + '"key2":"value2",' .repeat(99999) + '"key_last":"value_last"}';

console.time("JavaScript JSON Parsing");
const parsedData = parseJSON(largeJSON);
console.timeEnd("JavaScript JSON Parsing");

