import sys

lines = sys.stdin.readlines()
escaped_lines = [
    f"  '{line.rstrip()}' +"  # Using single quotes and JS string concatenation
    for line in lines
]
# Remove the concatenation operator from the last line
if escaped_lines:
    escaped_lines[-1] = escaped_lines[-1].rstrip(' +')

print('const lnet =')
print('\n'.join(escaped_lines) + ';')
