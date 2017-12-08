const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').load();

const dbName = 'code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const projects = [
{
association: "Hahatay son risas de Gandiol",
title: "Cooperativa Avicola Yakaar",
description: "La actividad consiste en crear una cooperativa de crianza y de producción avícola. Este cooperativa tendrá como misión crear empleo y generar benéficos a sus socios. Queremos criar unos 1100 pollos destinado al consumo local y a la venta a las estructuras hosteleras de la zona.",
location: [15.897476, -16.499547], //[latitud | longitud] //Gandiol (Senegal)
financing: "1450€",
benificiaries: "Población del pueblo de Gandiol",
link: "http://hahatay.org/cooperacion-proyecto-2",
imgURL:"",
category: "cooperation"
},
{
  association: "Fórum Mulher",
  title: "16 días de activismo por el fin de la Violencia contra la Mujer",
  description: "La campaña busca establecer un eslabón simbólico entre la violencia contra la mujer y los derechos humanos de las mujeres, enfatizando el fortalecimiento de la autoestima de la mujer y su empoderamiento como condiciones para romper con las situaciones de violencia.",
  location: [-25.891968, 32.605135], //Maputo (Mozambique)
  financing: "750€",
  benificiaries: "Mujeres de la ciudad de Maputo",
  link: "http://forumulher.org.mz/",
  imgURL:"",
  category: "education",
},
{
  association: "OIH Organização Humanitária Internacional",
  title: "Reforzamiento del sistema de salud",
  description: "Creación de jornadas con diversas actividades, como pruebas de VIH y malaria, consultas en diversas áreas de la salud, el control de plagas, los debates de radio a nivel de la ciudad y actividades de Sensibilización, Educación e Información a nivel del Municipio que acoge el acto provincial",
  location: [-12.590516, 13.416501], //Benguella (Angola)
  financing: "1.200€",
  benificiaries: "Población de Municipio de la Ganda, Comuna de Babaera, Aldea de Tchakuma",
  link: "https://pt-br.facebook.com/Organiza%C3%A7%C3%A3o-Humanit%C3%A1ria-Internacional-792381324146403/",
  imgURL:"",
  category: "social action"

},

];

Project.create(projects, (err) => {
  if (err) { throw(err);}
  console.log(`Created ${projects.length} projects`);
  mongoose.connection.close();
});
