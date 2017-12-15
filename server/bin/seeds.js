const mongoose = require('mongoose');
const Project = require('../models/Project');
require('dotenv').load();

const dbName = 'code';
const mLAB = "mongodb://admin:admin@ds141766.mlab.com:41766/compartiendo-desarrollo";
mongoose.connect(`mongodb://localhost/${dbName}`);

const projects = [{
    association: "Hahatay son risas de Gandiol",
    title: "Cooperativa Avicola Yakaar",
    description: "La actividad consiste en crear una cooperativa de crianza y de producción avícola. Este cooperativa tendrá como misión crear empleo y generar benéficos a sus socios. Queremos criar unos 1100 pollos destinado al consumo local y a la venta a las estructuras hosteleras de la zona.",
    lat: 15.897476,
    lng: -16.499547, //[latitud | longitud] //Gandiol (Senegal)
    financing: "1450€",
    benificiaries: "Población del pueblo de Gandiol",
    link: "http://hahatay.org/cooperacion-proyecto-2",
    imgURL: "http://hahatay.org/img/fotos/web/proyectos/2.jpg",
    category: "cooperation"
  },
  {
    association: "Fórum Mulher",
    title: "16 días de activismo por el fin de la Violencia contra la Mujer",
    description: "La campaña busca establecer un eslabón simbólico entre la violencia contra la mujer y los derechos humanos de las mujeres, enfatizando el fortalecimiento de la autoestima de la mujer y su empoderamiento como condiciones para romper con las situaciones de violencia.",
    lat: -25.891968,
    lng: 32.605135, //Maputo (Mozambique)
    financing: "750€",
    benificiaries: "Mujeres de la ciudad de Maputo",
    link: "http://forumulher.org.mz/",
    imgURL: "https://i1.wp.com/forumulher.org.mz/wp-content/uploads/2017/11/16dias.jpg?zoom=2&resize=600%2C400",
    category: "education",
  },
  {
    association: "OIH Organização Humanitária Internacional",
    title: "Reforzamiento del sistema de salud",
    description: "Creación de jornadas con diversas actividades, como pruebas de VIH y malaria, consultas en diversas áreas de la salud, el control de plagas, los debates de radio a nivel de la ciudad y actividades de Sensibilización, Educación e Información a nivel del Municipio que acoge el acto provincial",
    lat: -12.590516,
    lng: 13.416501, //Benguella (Angola)
    financing: "1.200€",
    benificiaries: "Población de Municipio de la Ganda, Comuna de Babaera, Aldea de Tchakuma",
    link: "https://pt-br.facebook.com/Organiza%C3%A7%C3%A3o-Humanit%C3%A1ria-Internacional-792381324146403/",
    imgURL: "http://www.ceci.ca/data/mali-prssd-l-boudeau-thumbnail.jpg",
    category: "social-action"

  },
  {
    association: "Amigos da Terra",
    title: "Grupo Temático de Recursos Naturales y Ambiente de Cabo Delgado",
    description: "Se basa en la coordinación estratégica de las organizaciones de la sociedad civil e individualidades que desarrollan acciones en el área de recursos naturales y ambiente con el fin de maximizar las sinergias para el monitoreo y la abogacía de las políticas públicas del sector de recursos naturales y medio ambiente para la defensa de los intereses de las comunidades y los ciudadanos más desfavorecidos. El objetivo general es promover acciones que contribuyan a la explotación sostenible de los recursos naturales y el medio ambiente en la provincia de Cabo Delgado.",
    lat: -12.3335474,
    lng: 39.32062410000003, //Cabo Delgado (Mozambique)
    financing: "Autofinanciación",
    benificiaries: "Comunidades (hombres y mujeres) residentes en el distrito de Palma, Ancuabe y Montepuez residentes en las zonas donde se están en curso el proceso de explotación de recursos naturales (Bosques, Minerales e Hidrocarburos)",
    link: "https://pt-br.facebook.com/Organiza%C3%A7%C3%A3o-Humanit%C3%A1ria-Internacional-792381324146403/",
    imgURL: "https://amaamigosdaterra.files.wordpress.com/2013/11/4-fotos-fundo-verde-quadro-branco-horizontal-1.jpg",
    category: "cooperation"

  },


];

Project.create(projects, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${projects.length} projects`);
  mongoose.connection.close();
});
