# VeriStream App

### Demo

[https://pokedex-jd.netlify.app/#/](https://pokedex-jd.netlify.app/#/)

### Descripción del proyecto

VeriStream es una plataforma online para mirar a detalle las películas del momento.

### Capturas

![Diseño sin título](https://github.com/josegduarte96/veriStream/assets/67060283/ebfeb5d5-2a5c-4edd-b9bf-06761b31e7c0)

## Notas de configuración

Para desarrollo local: `npm run dev`
Por defecto se ejecuta en el puerto localhost:3000

Para poder entrar a la plataforma, es necesario registrarse.
Si no, las credenciales para acceder desde el login son:

* josegduarte96@gmail.com
* 123456

## Estructura del Proyecto

```bash
|-root
  |-src
    |-api # Configuracion para interactuar con la API Omdb
    |-components
      |-app
        |-HeroSection.vue
        |-Login.vue
        |-NavBar.vue
      |-movie
        |-Card.vue
        |-List.vue
        |-Pagination.vue
      |-Loader.vue
      |-Star.vue
    |-composables ## Lógica con estado global
    |-layouts # Layout por defecto y layout para autenticación
    |-middleware ## Auth guard
    |-plugins ## Firebase SDK
    |-stores
      |-auth.ts ## Store global para autenticación
      |-pokemons.js ## Store global para las películas
```

La lógica principal de la aplicación está centrada en los dos composables creados, que al momento de su instancia hacen
el llamado a la API para obtener el listado o detalle de las películas, por ahora solo se agregaron búsquedas por ID y
busquedas generales mediante alguna frase.

Estos son
los [composables](https://vue3-spanish.netlify.app/guide/reusability/composables.html#%C2%BFque-es-un-composable) antes
mencionados:

- [`auth.ts`](composables/auth.ts) - Se encarga de gestionar la autenticación de los usuarios a través del SDK de
  firebase.
- [`omdb.ts`](composables/omdb.ts) - Consulta las películas por ID o algun keyword mediante búsqueda.

## TODOs (Tareas pendientes)

Debido al tiempo limitado para la realización de la prueba, algunas funcionalidades y requerimientos quedaron
pendientes:

- [ ]  Que los usuarios puedan recuperar la contraseña de su cuenta.
- [ ]  Mejorar el llamado al backend (algún cacheo de la data) para optimizar la carga de la pagina.

---

## Dependencias principales

- [Vue.js](https://vuejs.org/) - Un marco accesible, eficaz y versátil para crear interfaces de usuario web.
- [Nuxt 3](https://nuxt.com/) - Marco de código abierto de tipo SSR hecho con Vue.js
- [Nuxt UI](https://ui.nuxt.com/) - Material UI para el desarrollo de aplicaciones con Nuxt.
- [Pinia](https://es-pinia.vercel.app/) - Administrador de estado avanzado para aplicaciones Vue.js.
- [Firebase](https://firebase.google.com/?hl=es-419) - Plataforma de Google para crear apps móviles y web escalables.
