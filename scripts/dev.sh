#!/bin/bash
set -e

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "Stopping servers..."
    if [ ! -z "$DJANGO_PID" ]; then
        echo "Stopping Django server..."
        kill $DJANGO_PID 2>/dev/null || true
        wait $DJANGO_PID 2>/dev/null || true
    fi
    if [ ! -z "$NPM_PID" ]; then
        echo "Stopping npm dev server..."
        kill $NPM_PID 2>/dev/null || true
        wait $NPM_PID 2>/dev/null || true
    fi
    echo "Done."
    exit 0
}

# Set up signal handlers for graceful shutdown
trap cleanup INT TERM

echo "🚀 Starting development environment..."
echo ""

echo "Starting Django development server..."
uv run manage.py runserver &
DJANGO_PID=$!

echo "Starting npm dev server..."
npm run dev &
NPM_PID=$!

# Wait for either process to exit
wait
