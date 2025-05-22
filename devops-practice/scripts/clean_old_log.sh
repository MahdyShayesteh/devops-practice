#!/bin/bash 

LOG_DIR="/mnt/d/temp/devops/devops-practice/logs"

if [ ! -d "$LOG_DIR" ]; then
	echo "[Error] log directory does not exist: $LOG_DIR"
	exit 1
fi

echo "[INFO] Searching for log files older than 7 days in $LOG_DIR..."
found_files=$(find "$LOG_DIR" -type f -name "*.log" -mtime +7)

if [ -z "$found_files" ]; then
    echo "[INFO] No log files older than 7 days found in $LOG_DIR"
else
    echo "[INFO] Found the following old log files:"
    echo "$found_files"
    
    # Delete the files
    find "$LOG_DIR" -type f -name "*.log" -mtime +7 -exec rm -v {} \;
    
    echo "[INFO] Deleted old log files successfully"
fi

