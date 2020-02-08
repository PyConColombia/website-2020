<div align="center">

# Fuentes del Sitio Web de PyCon Colombia 2020

[![Build Status][build-badge]][build]
[![PRs Welcome][prs-badge]][prs]
[![GitHub issues](https://img.shields.io/github/issues/PyConColombia/website-2020.svg?style=flat-square)](https://github.com/PyConColombia/website-2020/issues)
[![Twitter PyCon Colombia](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/pyconcolombia)

Este es el repositorio del sitio web de la PyCon Colombia 2020 servido por Github, y construido utilizando [lektor](https://www.getlektor.com). Diseño original por [Edwin Jerez (El Hijo)
](https://github.com/soyelhijo).
</div>

# 🧰 Requerimientos

- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [NodeJS ](https://nodejs.org/)
- [NPM 📦](https://www.npmjs.com/)
- [Python 3 🐍](https://www.python.org/)
- [Docker 🐳](https://www.docker.com/get-started)

# 🔀 Flujo de trabajo

Hay 2 ramas de git, `develop` y `production`.

## ⤴️ Develop

Es la rama por defecto y se despliega a través de gh-pages con Lektor a
https://pyconcolombia.github.io/website-develop/
(en http://develop.pycon.co)

## ⤴️ Production

Después de que se han ejecutado las pruebas de calidad (QA), los cambios
realizados en la rama `develop` se unen con la rama `production` y son
desplegados a través de gh-pages con Lektor a
https://pyconcolombia.github.io/website-2020/
(pronto en http://www.pycon.co)

# 🛠 Desarrollo local

✅ (Prerequisito) Instalar Yarn o Npm
* [Instalar Npm](https://www.npmjs.com/package/install)
* [Instalar Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

## 1. 😎 Usando Docker (La forma sencilla)

### Instalación

Prerequisitos

* [Instalar Docker](https://docs.docker.com/install/)
* [Instalar Docker Compose](https://docs.docker.com/compose/install/)

### Correr servicios (Se puede usar yarn o npm)

* Levantar servicios de web y preprocesador de webpack.
```
yarn docker:up:dev
```

Con lo anterior ya estamos listos para abrir `http://localhost:5000` y empezar a codear!

### Todos los comandos disponibles

* A continuación se describe brevemente todos los comandos disponibles para mayor control y debugging.
```
yarn docker:up:clean         # Mocha tests
yarn docker:up:clean         # Limpiar entorno (Esto limpia node_modules y carpeta dist)
yarn docker:up:dev           # Correr servicios en modo desarrollo
yarn docker:up:prod          # Correr servicios en modo producción - Esto compila los assets listos para subir al servidor
yarn docker:logs:website     # Ver logs del contenedor web donde está lektor
yarn docker:logs:webpack     # Ver logs del contenedor de webpack donde se preprocesan los archivos fuente de la carpeta assets.
yarn docker:restart          # Reiniciar todos los servicios
yarn docker:restart:website  # Reiniciar servicio se website (lektor)
yarn docker:restart:webpack  # Reiniciar servicio de webpack
yarn docker:stop             # Parar todos los servicios
yarn docker:stop:website     # Parar servicio se website (lektor)
yarn docker:stop:webpack     # Parar servicio de webpack
```


## 2. Sin Docker

✅ (Opcional) Entorno Virtual

* Instalar [virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

* ⚠️️ Requiere previa instalación de [Python](https://www.python.org/) ⚠️
* ⚠️️ Requiere previa instalación de [Node](https://nodejs.org/en/) ⚠️

### Entorno virtual de python

* Crear entorno
```
$ virtualenv <nombre_entorno>
```

* Activar entorno virtual

Windows
```
$ <nombre_entorno>\Scripts\activate
```

Linux
```
$ source <nombre_entorno>/bin/activate
```

### ✅ Instala Lektor

* Usando pip:
```
$ pip install -U Lektor unidecode
```

* Usando conda:
```
$ conda install lektor unidecode -c conda-forge
```

### ✅ Instala (reinstala) los `plugins` locales

```
$ lektor plugins reinstall
```

### ✅ Corre el servidor local

```
$ lektor server --no-prune
```

### Instala paquetes de npm relativos a preprocesadores de webpack + babel

Instalar paquetes
```
yarn install
```

### ✅ Compilar assets

En modo desarrollo
```
yarn build:dev
```

En modo producción
```
yarn build:prod
```

### ⁉️ Problemas comunes

* 🔴 Si en algun momento luego de instalar python3 y crear tu virtualenv. haces `lektor server --no-prune` y ves este error:

```
RuntimeError: Click will abort further execution because Python 3 was configured to use ASCIas encoding for the environment.  Consult http://click.pocoo.org/python3/for mitigation steps.
```
Haz esto adentro de tu virtualenv:
```
export LC_ALL=en_us.UTF-8
export LANG=en_us.UTF-8
```


# 🚀 Despliegue

Gracias a _Lektor Bot_ (Plugin de lektor conectado a Github), podemos desplegar nuestra web estática en diferentes repositorios (en la rama seleccionada en configuración - `gh-pages` en nuestro caso).

La configuración de dichos repositorios se encuentra en `pyconcolombia.lektorproject`

## Integración y despliegue continuo

Este repositorio cuenta con servicio de integración continua mediante [TravisCI](https://travis-ci.org/PyConColombia/website-2020).
Cada vez que se hace un commit a `develop` o `production` el servicio despliega la página
siguiendo la configuración ubicada en el archivo [.travis.yml](https://github.com/PyConColombia/website-2020/blob/develop/.travis.yml)

## ✔️ Desarrollo

```
$ lektor deploy
```

Se desplegará el contenido de la rama `develop` en `develop.pycon.co`

## ✔️✔️ Producción

```
$ lektor deploy production
```

Se desplegará el contenido de la rama `production` en `pycon.co`


# 🛠️ Herramientasy servicios complementarios

## Cloudfare

La página utiliza [Cloudfare](https://www.cloudflare.com/) como servicio de cache y manejo de dominios y reglas
de direccionamiento.

## Google Analytics

Las estadísticas de visitas del sitio web utiliza [Google Analytics](https://analytics.google.com/analytics/web/).

## Google Search Console

Los servicios de búsqueda y optimización utilizan la [Google Search Console](https://search.google.com/search-console/about)

___

<div align="center">

💪 Colaboradores

|[<img src="https://avatars3.githubusercontent.com/u/3627835?s=400&v=4" width="100px;"/><br /><sub><b>Gonzalo Peña</b></sub>](https://github.com/goanpeca) | [<img src="https://avatars3.githubusercontent.com/u/14989202?s=400&v=4" width="100px;"/><br /><sub><b>Alejandro E. Rendon</b></sub>](https://github.com/arendondiosa)| [<img src="https://avatars2.githubusercontent.com/u/2729395?s=460&v=4" width="100px;"/><br /><sub><b>Sergio Alexander F.</b></sub>](https://github.com/xergioalex)|
| :---: | :---: | :---: |

</div>

[build-badge]: https://img.shields.io/travis/PyConColombia/website-2020.svg?style=flat-square
[build]: https://travis-ci.org/PyConColombia/website-2020
[license-badge]: https://img.shields.io/npm/l/all-contributors.svg?style=flat-square
[license]: https://github.com/PyConColombia/website-2020/blob/master/LICENSE.txt
[prs-badge]: https://img.shields.io/badge/Issues-welcome-brightgreen.svg?style=flat-square
[prs]: https://github.com/PyConColombia/website-2020/issues/new
