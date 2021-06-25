# Mercado Libre Challenge

proyecto creado como respuesta al Challenge propuesto 

## Requisitos

Docker
docker-compose
portainer (si se desea visualizar los contenedores)

## Descripcion

El aplicactivo se corre a travez del archivo docker-compose.yml una vez clonado el repositorio de forma local.

El aplicativo genera 2 contenedores desde el docker-compose.yml: 

1) Frontend (React)
2) Backend (ExpressJS)

# Instalacion

clonar el repositorio
```
git clone 
```
entrar en la carpeta generada
```
cd /
```
generar contenedores
```
docker-compose up
```

# AVISO

En caso de presentarse un error en el despliegue del aplicativo usar los siguientes comandos de forma consecutiva:
```
docker-compose build --no-cache
```
```
docker-compose up
```

En caso de no instalar docker y docker-compose, se puede descargar el repositorio, instalar y ejecutar cada API por aparte:

## Frontend

ir a la carpeta frontend
```
cd frontend/
```
y ejecutar
```
npm install
npm run serve
```

A traves de la url localhost:3000 el frontend podra consumir el servicio



## Backend

ir a la carpeta frontend
```
cd backend/
```
y ejecutar
```
npm install
npm start
```

A traves de la url localhost:8080 se podra consumir el servicio
