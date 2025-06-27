# TP Final React con Vite

## 📋 Descripción
Este proyecto es una aplicación web construida con **React + Vite** que permite visualizar, agregar y gestionar usuarios y productos. El objetivo es integrar conocimientos clave como enrutamiento, consumo de APIs, manejo de estado, componentes reutilizables y estructura profesional.

## 🚀 Instrucciones para correr localmente

1. Clonar el repositorio:
```bash
git clone https://github.com/NicolasMango/TPI-BBVA-REACT.git
cd tpi-nmango
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en navegador:
```
http://localhost:5173
```

## 🧩 Funcionalidades implementadas
- Ruteo entre vistas: Inicio, Usuarios, Productos y Detalle dinámico
- Consumo de API externa (JSONPlaceholder y FakeStore)
- Manejo de estado con `useState`
- Llamadas a API con `useEffect`
- Manejo de errores y carga (spinners y alertas)
- Componentes reutilizables (`CardUsuario`, `CardProducto`, `Navbar`)
- Estructura modular y clara
- Soporte para modo claro/oscuro (dark mode)
- Tests unitarios con Vitest y Testing Library

## 📁 Estructura de carpetas

```
/src
├── components
│   ├── layout
│   │   ├── CardProducto.jsx
│   │   ├── CardUsuario.jsx
│   ├── ui
│   │   ├── Navbar.jsx
│   │   ├── Spinner.jsx
│   │   └── ErrorAlert.jsx
│   └── theme.js
├── pages
│   ├── Inicio.jsx
│   ├── Usuarios.jsx
│   ├── Productos.jsx
│   └── Detalle.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚠️ Requisitos cumplidos
✅ React Router v6+  
✅ Vite como entorno de desarrollo  
✅ Hooks (`useState`, `useEffect`)  
✅ API externa real  
✅ Componentes funcionales  
✅ Código comentado y organizado  
✅ Tests unitarios  
✅ Modo claro/oscuro

---

¡Gracias por revisar este proyecto! 💻