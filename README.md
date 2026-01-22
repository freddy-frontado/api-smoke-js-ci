# API Smoke Test Monitor (CI)

Este es un proyecto de prácticas para implementar **Integración Continua (CI)** utilizando **Git Actions**

## Tecnologías utilizadas

* **Lenguaje JavaScript (Node.js)
* **Testing Framework:** [Jest](https://jestjs.io/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **CI/CD:** Git Actions

# Configuración del CI

El proyecto incluye un flujo de trabajo (workFlow) que se dispara automáticamente 

1. `push`a la rama `main`.
2. `pull_request`hacia la rama `main`.

Podés ver el resultado de las ejecuciones en la pestaña **Actions** de este repositorio

1. # **Clonar el repositorio:**

```bash
git clone https://github.com/freddy-frontado/api-smoke-js-ci.git

```
2. # **Instalar dependencias:**

```bash
npm install

```

3. # **Ejecutar los test:**

```bash
npm test

```

4. # **Estructura del proyecto:**

· api.test.js --> Contiene las assertions de la API
· .github/workflows/node_ci.yml --> Configuración de la automatización en la nube
· .gitignore --> Archivos excluidos del control de versiones (node_modules, .env, etc.).










