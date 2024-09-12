# SERVER-SSH
Este proyecto configura un servidor SSH para desplegar una aplicación web desde un repositorio de GitHub. Incluye una aplicación Node.js que permite hacer el despliegue mediante una interfaz web.
## Autor
Jhon Castro Mancipe
## Tecnologías utilizadas
- **Node.js:** Entorno de ejecución para JavaScript en el servidor.
- **Express.js:** Framework web para Node.js.
- **ssh2:** Librería Node.js para conectarse a servidores SSH.
- **rsync:** Herramienta para sincronizar archivos y directorios.
- **Nginx:** Servidor web para servir archivos estáticos.
- **Git:** Sistema de control de versiones para gestionar el código fuente.
## Requisitos Previos
- **Node.js y npm:** Asegúrate de tener Node.js (versión 18 o superior) y npm instalados.
- **Acceso SSH:** Configurado y funcionando.
- **Nginx:** Instalado y configurado.
## Configuración del Proyecto
1. Clonar el Repositorio
   ```git
   git clone https://github.com/jhoncastro28/server-ssh.git
   cd server-ssh
2. Instalar Dependencias
   Asegúrate de estar en el directorio del proyecto (server-ssh) y ejecuta:
   ```javascript
   npm install
3. Configurar el Servidor SSH
- Asegúrate de que el archivo deploy.sh tenga permisos de ejecución.
   ```linux
   chmod +x deploy.sh
- Editar el archivo deploy.sh para configurar las rutas y el servidor SSH:
  Asegúrate de que las variables REPO_DIR y STATIC_DIR apunten a las rutas correctas en tu servidor. Reemplaza cualquier configuración de Nginx si no estás usando Nginx.
4. Configurar Claves SSH
   
