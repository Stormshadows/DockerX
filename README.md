# DockerX – Lightweight Docker Management UI

DockerX is a **simple, web-based Docker management tool** built with **Python FastAPI** and **Docker SDK**. It allows you to manage Docker containers, view logs, start/stop/restart containers, and monitor basic container stats — all from a browser.  

Think of it as a **mini Docker Desktop**, fully functional, lightweight, and cross-platform.

---

## Features

- ✅ List all containers (running & stopped)  
- ✅ Start, Stop, and Restart containers from UI  
- ✅ View container logs in real-time  
- ✅ Support for creating and managing new containers  
- ✅ Works on Windows, macOS, and Linux  
- ✅ Minimal dependencies and easy setup  

---

## Tech Stack

- **Backend**: Python, FastAPI, Docker SDK (`docker-py`)  
- **Frontend**: React + Tailwind  
- **Environment**: Docker Desktop / Docker Engine  
- **Python Version**: 3.12 recommended (Windows), venv preferred  

---

## Installation & Setup

1. **Clone the repository**:

```bash
git clone https://github.com/stormshadows/dockerx.git
cd dockerx
```

2. **Create and activate a Python virtual environment:**:

python -m venv venv
# Windows
.\venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

3. **Install dependencies:**:
pip install -r requirements.txt

4. **Start the fastapi**:
uvicorn api.main:app --reload

5. **Start the frontend**:
npm start

