FROM node:22.19.0
WORKDIR /app

# Copiar primero los archivos de dependencias para cachear la capa de npm install

# Copiar el resto del código fuente
COPY . .

# Cambiar permisos del directorio de trabajo al usuario node
RUN chown -R node:node /app

USER node

# usar docker build -t portfolio . para construir la imagen
# usar docker run -it -p 4321:4321 portfolio para correr la imagen
# para interactuar con la terminal usar docker exec -it <container_id> bash
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
