# Development Container Configuration

This project includes a devcontainer configuration for GitHub Codespaces and local development with VS Code.

## What's Included

### Base Image
- Node.js 20 with TypeScript support
- Debian Bullseye base

### Features
- Git integration
- GitHub CLI
- Docker-in-Docker support

### VS Code Extensions
- Tailwind CSS IntelliSense
- Prettier (code formatting)
- ESLint (code linting)
- TypeScript and React support
- Auto Rename Tag
- Path IntelliSense

### Port Forwarding
- Port 3000 (Next.js development server)
- Port 3001 (additional development port)

## Usage

### GitHub Codespaces
1. Open this repository in GitHub
2. Click the green "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"

The devcontainer will automatically:
- Install all npm dependencies
- Set up the development environment
- Forward necessary ports

### Local Development with VS Code
1. Install the "Dev Containers" extension in VS Code
2. Open this project in VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Dev Containers: Reopen in Container"
5. Select the command

## Configuration Options

### Simple Setup (Default)
The default configuration uses a pre-built Microsoft image for faster startup.

### Advanced Setup with Database
To use PostgreSQL database support:
1. Edit `.devcontainer/devcontainer.json`
2. Comment out the `"image"` line
3. Uncomment the docker-compose lines:
   ```json
   "dockerComposeFile": "docker-compose.yml",
   "service": "app",
   "workspaceFolder": "/workspaces/${localWorkspaceFolderBasename}",
   ```

This will start both the app container and a PostgreSQL database.

## Available Commands

After the container starts, you can run:
- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Customization

You can customize the devcontainer by editing:
- `.devcontainer/devcontainer.json` - Main configuration
- `.devcontainer/Dockerfile` - Custom image setup
- `.devcontainer/docker-compose.yml` - Multi-container setup
