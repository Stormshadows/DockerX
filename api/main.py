from fastapi import FastAPI 
import docker 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Docker Dashboard")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

client = docker.from_env()

@app.get("/containers")
def list_containers():
    containers=[]
    for c in client.containers.list(all=True):
        containers.append({
            "id": c.id[:12],
            "name": c.name,
            "status": c.status
        })
    return containers

@app.post("/container/{container_id}/start")
def start_container(container_id:str):
    container = client.containers.get(container_id)
    container.start()
    return {"status": "started", "id": container_id}

@app.post("/container/{container_id}/stop")
def stop_container(container_id:str):
    container = client.containers.get(container_id)
    container.stop()
    return {"status": "stopped", "id": container_id}

@app.post("/container/{container_id}/restart")
def restart_container(container_id: str):
    container = client.containers.get(container_id)
    container.restart()
    return {"status": "restarted", "id": container_id}

