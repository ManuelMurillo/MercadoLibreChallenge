# Usar  imagen de nodejs
FROM node
# Crear carpeta de trabajo
RUN mkdir -p /usr/src/app
# seleccionar carpeta de trabajo
WORKDIR /usr/src/app
# copiar archivos de la api
COPY . .
# instalar blibliotecas
RUN npm install

# ejecutar comando para iniciar la API
CMD npm start
# abrir puerto
EXPOSE 5000