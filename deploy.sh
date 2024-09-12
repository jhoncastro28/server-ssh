#!/bin/bash

# Directorio del repositorio clonado
REPO_DIR="/home/castrojhon/Documents/server-ssh"

# Directorio del servidor de archivos estáticos
STATIC_DIR="/var/www/html"

# Asegurarse de que estamos en el directorio del repositorio
cd $REPO_DIR || { echo "No se pudo acceder al directorio del repositorio"; exit 1; }

# Obtener la última versión del código desde GitHub
git pull origin master || { echo "Error al hacer pull del repositorio"; exit 1; }

# Copiar los archivos al directorio de archivos estáticos, excluyendo 'node_modules'
rsync -av --exclude 'node_modules' $REPO_DIR/* $STATIC_DIR || { echo "Error al copiar archivos"; exit 1; }

# Asegurar permisos adecuados para que el servidor web pueda acceder a los archivos
sudo chown -R www-data:www-data $STATIC_DIR || { echo "Error al cambiar permisos"; exit 1; }

# Reiniciar Nginx para aplicar los cambios
sudo systemctl restart nginx || { echo "Error al reiniciar Nginx"; exit 1; }

# Mensaje de éxito
echo "Despliegue completado con éxito."

