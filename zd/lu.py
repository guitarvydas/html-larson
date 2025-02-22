#!/usr/bin/env python3
import sys
from repl import live_update

def main():
    if len(sys.argv) < 2:
        print("Usage: lu <message>")
        sys.exit(1)
    
    live_update("Info", sys.argv[1])

if __name__ == "__main__":
    main()
    
