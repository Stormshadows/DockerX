# DockerX – Lightweight Docker Management UI

DockerX is a **simple, web-based Docker management tool** built with **Python FastAPI** and **Docker SDK**. It enables you to manage Docker containers, view logs, start/stop/restart containers, and monitor basic container stats — all from a browser.

Think of it as a **mini Docker Desktop**: fully functional, lightweight, and cross-platform.

---

## Features

- ✅ List all containers (running & stopped)
- ✅ Start, Stop, and Restart containers from the UI
- ✅ View container logs in real-time
- ✅ Create and manage new containers
- ✅ Works on Windows, macOS, and Linux
- ✅ Minimal dependencies and easy setup

---

## Tech Stack

- **Backend**: Python, FastAPI, Docker SDK (`docker-py`)
- **Frontend**: React + Tailwind CSS
- **Environment**: Docker Desktop / Docker Engine required
- **Python Version**: 3.12+ (use `venv` for isolation)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/stormshadows/dockerx.git
cd dockerx
```

### 2. Create and activate a Python virtual environment

```bash
python -m venv venv

# Windows
.\venv\Scripts\activate


### 3. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the FastAPI backend

```bash
uvicorn api.main:app --reload
```

### 5. Start the frontend

```bash
npm start
```

---

## Usage

- Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your frontend terminal
