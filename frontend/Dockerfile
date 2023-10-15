# Define la imagen base
FROM node:18-alpine

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y de paquetes
COPY package*.json ./

# Instala js-cookie vuex-persistedstate
RUN npm install js-cookie vuex-persistedstate

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Entra en src y ejecuta el comando de compilación
RUN cd src && npm run build 

# Expone el puerto que tu aplicación utiliza
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["npx", "serve", "-s", "dist"]