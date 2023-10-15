# Define la imagen base
FROM node:18-alpine

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y de paquetes
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Cambia la dirección IP en el .env por la dirección IP del host
RUN sed -i 's/localhost/host.docker.internal/g' .env

# Expone el puerto que tu aplicación utiliza
EXPOSE 4000

# Comando para iniciar tu aplicación
CMD ["npm", "run", "dev"]