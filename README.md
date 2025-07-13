📝 Bloc de Notas MERN
¡Bienvenido al proyecto Bloc de Notas MERN! Esta es una aplicación web sencilla pero completa para gestionar tus notas, construida con la pila MERN (MongoDB, Express.js, React y Node.js).

🚀 Descripción del Proyecto
Este proyecto es un bloc de notas digital que te permite crear, ver, editar y eliminar tus notas de forma eficiente. Ha sido desarrollado como una aplicación Full-Stack, con un backend robusto que maneja la API y una interfaz de usuario intuitiva construida con React.

✨ Funcionalidades Principales
Crear Notas: ➕ Añade nuevas notas con un título y contenido.

Ver Notas: 📖 Visualiza todas tus notas en una página principal.

Detalle de Nota: 🔍 Accede a una vista detallada de cada nota.

Editar Notas: ✏️ Modifica el título y el contenido de tus notas existentes.

Eliminar Notas: 🗑️ Borra notas que ya no necesites.

🛠️ Tecnologías Utilizadas
Frontend
React: ⚛️ Biblioteca de JavaScript para construir la interfaz de usuario.

React Router DOM: 🛣️ Para la gestión de rutas en la aplicación de una sola página (SPA).

Tailwind CSS: 💨 Framework CSS de utilidad para un diseño rápido y responsivo.

DaisyUI: 🌸 Componentes de interfaz de usuario construidos sobre Tailwind CSS.

Axios: 📡 Cliente HTTP basado en promesas para realizar peticiones a la API.

React Hot Toast: 🍞 Librería para notificaciones y mensajes de usuario.

Lucide React: 💡 Para los iconos utilizados en la interfaz.

Backend
Node.js: 🟢 Entorno de ejecución de JavaScript.

Express.js: ⚡ Framework web para Node.js, utilizado para construir la API RESTful.

MongoDB: 🍃 Base de datos NoSQL para almacenar las notas.

Mongoose: ODM (Object Data Modeling) para MongoDB en Node.js.

Nodemon: 🔄 Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

🌐 Demostración en Vivo
Puedes ver la aplicación desplegada y funcionando en Render:
https://blovk-notes-mern.onrender.com/

⚙️ Configuración e Instalación Local
Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

Prerrequisitos
Asegúrate de tener instalado lo siguiente:

Node.js (versión 14 o superior) 💻

npm (Node Package Manager) o Yarn 📦

MongoDB (localmente o una conexión a MongoDB Atlas) 🌿

Git 🐙

1. Clonar el Repositorio
git clone https://github.com/Bitxogm/Blovk-Notes-Mern.git
cd Blovk-Notes-Mern

2. Configuración del Backend
Navega a la carpeta backend, instala las dependencias y configura las variables de entorno.

cd backend
npm install

Crea un archivo .env en la raíz de la carpeta backend y añade tus variables de entorno:

PORT=5002
MONGO_URI=tu_cadena_de_conexion_a_mongodb

PORT: El puerto en el que se ejecutará el servidor backend (ej. 5002).

MONGO_URI: Tu cadena de conexión a MongoDB (ej. mongodb://localhost:27017/notasdb o la URL de tu clúster de MongoDB Atlas).

Inicia el servidor backend:

npm start

El servidor se ejecutará en http://localhost:5002.

3. Configuración del Frontend
Abre una nueva terminal, navega a la carpeta client, instala las dependencias y configura las variables de entorno.

cd ../client
npm install

Crea un archivo .env en la raíz de la carpeta client y añade tus variables de entorno:

VITE_API_BASE_URL=http://localhost:5002/api

VITE_API_BASE_URL: La URL base de tu API backend.

Inicia la aplicación frontend en modo desarrollo:

npm run dev

La aplicación se ejecutará en http://localhost:5173 (o el puerto que Vite asigne).

💡 Uso
Una vez que tanto el backend como el frontend estén corriendo:

Abre tu navegador y ve a http://localhost:5173.

Podrás ver una lista de notas (si las hay) o un mensaje indicando que no hay notas.

Usa el botón "Crear Nota" para añadir nuevas notas.

Haz clic en una nota existente para ver sus detalles y editarla.

Usa el botón "Eliminar Nota" en la vista de detalles para borrarla.

🤝 Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commits descriptivos.

Envía tus cambios (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.

📄 Licencia
Este proyecto está bajo la Licencia MIT.