# 🎓 Plataforma de Cursos - U La Salle (Angular)

Esta aplicación es una plataforma educativa construida con *Angular, donde los usuarios pueden visualizar, gestionar y explorar cursos disponibles. Fue creada como parte de una actividad educativa sobre control de versiones y colaboración en equipo con **Git* y *GitHub*.

---

## 🌐 Descripción General

La aplicación permite a los estudiantes:

- Ver sus cursos asignados.
- Acceder a la configuración de su cuenta.
- Marcar cursos como favoritos (Wishlist).
- Explorar una página principal con contenido destacado.
- Cerrar sesión de manera segura.

Está desarrollada en Angular, utilizando *componentes modulares* para facilitar su mantenimiento y escalabilidad, además de tener una estructura clara orientada a futuras expansiones.

---

## 🧩 Componentes Principales

| Componente         | Función                                                                 |
|--------------------|-------------------------------------------------------------------------|
| HomeComponent     | Página de inicio con presentación de la plataforma y cursos destacados. |
| MyCoursesComponent| Lista de cursos asignados al usuario (mockeados localmente).            |
| SettingsComponent | Página para editar nombre, apellido, teléfono, email y contraseña.      |
| WishlistComponent | Vista de cursos marcados como favoritos.                                |
| LogoutComponent   | Componente para cerrar sesión y redirigir al inicio.                    |
| HeaderComponent   | Barra de navegación superior.                                           |
| FooterComponent   | Pie de página con enlaces e información adicional.                      |

---

## 🖼 Diseño y UX

- Interfaz responsiva adaptada para escritorio y móvil.
- Estética moderna con estilos personalizados (o TailwindCSS si se integró).
- Navegación fluida entre secciones.
- Uso de iconos, imágenes aleatorias en los cursos, y UX intuitivo.

---

## 🚀 Tecnologías Utilizadas

- [Angular 16+](https://angular.io/)
- TypeScript
- HTML5 / CSS3
- RxJS para flujos reactivos
- Git & GitHub
- Visual Studio Code

---

## 🔧 Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/mi-plataforma-cursos.git