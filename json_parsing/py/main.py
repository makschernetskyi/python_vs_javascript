import time

# Pure Python JSON parser
def parse_json(json_str):
    json_str = json_str.strip()
    if json_str.startswith('{') and json_str.endswith('}'):
        json_str = json_str[1:-1]  # Strip curly braces
        items = json_str.split(',')
        result = {}
        for item in items:
            key, value = item.split(':', 1)  # Split only at the first colon
            key = key.strip().strip('"')
            value = value.strip().strip('"')
            result[key] = value
        return result
    else:
        raise ValueError("Invalid JSON")

# Generate JSON string manually
large_json = '{"key1":"value1",' + '"key2":"value2",' * 99999 + '"key_last":"value_last"}'

# Benchmark the pure Python JSON parsing
start_time = time.time()
parsed_data = parse_json(large_json)
print(f"Initial Python JSON Parsing: {(time.time() - start_time) * 1000:.2f} ms")
