# PrograIV_Prueba2

![](images/Ceutec.png)

## Introduccion
 El repositorio de "PrograIV_Prueba2" incluye la codificacion del back-end de una aplicacion que permite la seleccion de un personal para ser contratado y lograr suplir las vacantes que esten disponibles, permitiendo que sus caracteristicas cumplan con los requisitos que las vacantes disponibles solicitan.

## Diagrama UML
 A continuacion se muestra un diagrama UML que ilustra las clases utilizadas para diseñar y crear el back-edn de la aplicacion de recursos humanos:

![](images/Diagrama_UML_para_Recursos_Humanos.jpg)

> Diagrama UML usando mermaid

```mermaid
classDiagram
    Plazas <|-- Aspirantes

    Plazas : id_plaza +String
    Plazas : nombre_cargo +String
    Plazas : disponible +Boolean
    Plazas : fecha_postulada +String
    Plazas : fecha_expiracion +String
    Plazas : experiencia +Integer
    Plazas : titulo +Boolean
    Plazas : ubicacion +String
    Plazas : bilingue +Boolean
    Plazas: elegible_a_entrevista()

    class Aspirantes{
      id_aspirantes +String
      nombre_aspirante +String
      cargo_a_aplicar +String
      titulo +Boolean
      experiencia +Integer
      ubicacion +String
      bilingue +Boolean
      celular +Integer
      email +String

    }
```

## Evidencias de funcionamiento de la aplicacion

A continuacion se muestran algunas imagenes como evidencias del funcionamiento de la aplicacion

![LoopBack Explorer mostrando todas las clases con sus funciones CRUD respectivas](images/Evidencia_de_LoopBack_Explorer.png)

![Deployment Exitoso en Heroku](images/Deployment_de_Heroku_Exitoso.jpg)

![Hosting publico de Heroku](images/Evidencia_de_Heroku_para_la_aplicacion_deseada.jpg)

## Enlaces
[Enlace del diagrama UML en GenMyModel](https://app.genmymodel.com/api/projects/_ADt2IG9_Ee2ck8ytUMEi6A/diagrams/_ADt2I29_Ee2ck8ytUMEi6A/svg)<br>
[Enlace del hosting público de Heroku](https://backend-recursoshumanos.herokuapp.com/)

