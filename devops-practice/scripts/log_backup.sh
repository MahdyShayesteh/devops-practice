#!/bin/bash

LOG_DIR="../logs"
BACKUP_FILE="$LOG_DIR/log_backup_$(date +'%Y-%m-%d_%H-%M-%S').tar.gz"

echo "[info] Starting backup..."


if tar -czf "$BACKUP_FILE" -C "$LOG_DIR" --exclude='logs_backup_*.tar.gz' . 2>/dev/null; then
    echo "[INFO] Backup created: $(basename "$BACKUP_FILE")"
    echo "[INFO] Done."
    exit 0
else
    echo "[ERROR] Backup failed! Check permissions or log files." >&2
    exit 1
fi

