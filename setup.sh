#!/bin/bash

echo "🚀 Setting up Rajasthan Engineering University Website..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Check if required tools are installed
echo "🔍 Checking required tools..."

# Check if tsx is installed
if ! command -v tsx &> /dev/null; then
    echo "Installing tsx globally..."
    npm install -g tsx
fi

# Check if nodemon is installed
if ! command -v nodemon &> /dev/null; then
    echo "Installing nodemon globally..."
    npm install -g nodemon
fi

# Step 3: Clear any existing builds
echo "🧹 Cleaning up..."
rm -rf .next
rm -rf dist

# Step 4: Run the development server
echo "🌟 Starting development server..."
echo "You should see:"
echo "> Ready on http://0.0.0.0:3000"
echo "> Socket.IO server running at ws://0.0.0.0:3000/api/socketio"
echo ""

npm run dev