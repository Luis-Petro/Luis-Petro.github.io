function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"about\">\n  \n    <div class=\"container\">\n      <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">Acerca de</div>\n              <p>Hola soy <strong>Luis Petro</strong> Me considero una persona responsable, bastante din??mica, con deseos de superaci??n y mis metas est??n basadas en el logro de objetivos claros; cumplo de manera adecuada con puntualidad, honestidad y el trabajo en equipo. Soy una persona con una alta facilidad de absorber conocimientos te??ricos y pr??cticos, tengo facilidades para la comunicaci??n y la atenci??n al usuario.</p>\n\n\n              <p>Amante de la innovaci??n y todo lo relacionado con la generaci??n de nuevos conocimientos, afronto los problemas con una sonrisa y resuelvo lo antes posible. Muy calculador sobre el tiempo que dedico y el trabajo que hago.\n                \n              </p> \n                \n          \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n            <div class=\"card-body\">\n              <div class=\"h4 mt-0 title\">Informaci??n B??cica</div>\n              <div class=\"row\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Fecha de Nacimiento:</strong>\n                </div>\n                <div class=\"col-sm-8\">Diciembre 15, 1994</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Email:</strong>\n                </div>\n                <div class=\"col-sm-8\">Luispetro1994@gmail.com</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Tel??fono:</strong>\n                </div>\n                <div class=\"col-sm-8\">+57 3233917023</div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Direcci??n:</strong>\n                </div>\n                <div class=\"col-sm-8\">Cra. 6 #11-33, San Bernardo del Viento/ C??rdoba\n                </div>\n              </div>\n              <div class=\"row mt-3\">\n                <div class=\"col-sm-4\">\n                  <strong class=\"text-uppercase\">Idiomas:</strong>\n                </div>\n                <div class=\"col-sm-8\">Espa??ol, English(60%)</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"contact\">\n        <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n          <div class=\"container\">\n            <div class=\"cc-contact\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                    <div class=\"h4 text-center title\">Cont??ctame</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <form name=\"form\" (ngSubmit)=\"f.form.valid ; f.resetForm()\" #f=\"ngForm\" novalidate>\n                            <div class=\"p pb-3\">\n                              <strong>Enviame un mensaje, en breve responder?? </strong>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-user-circle\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                    [(ngModel)]=\"model.name\" #name=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-file-text\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"subject\" placeholder=\"Subject\"\n                                    [(ngModel)]=\"model.subject\" #subject=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && subject.invalid }\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"input-group\">\n                                  <span class=\"input-group-addon\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                  </span>\n                                  <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"E-mail\"\n                                    [(ngModel)]=\"model.email\" #email=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" required />\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row mb-3\">\n                              <div class=\"col\">\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                    [(ngModel)]=\"model.message\" #message=\"ngModel\"\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required></textarea>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col\">\n                                <button class=\"btn btn-primary\" type=\"submit\">Enviar</button>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"card-body\">\n                          <p class=\"mb-0\">\n                            <strong>Tel??fono</strong>\n                          </p>\n                          <p class=\"pb-2\">+57 3233917093</p>\n                          <p class=\"mb-0\">\n                            <strong>Email</strong>\n                          </p>\n                          <p>Luispetro1994@gmail.com</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-snotify class=\"material\"></ng-snotify>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Educaci??n</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2014- 2020</p>\n              <div class=\"h5\">Ingeniero De Sistemas</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Ingenier??a de Sistemas</div>\n               <h4 class=\"category\">Universidad De C??rdoba\n               </h4>\n               <ul>\n                <li> Universida de c??doba con acreditaci??n de alta calidad <b>la mejor del departamento.</b>  </li>\n                    <li>Complete los estudios en ingenier??a de sistema satisfactoriamente.</li>\n                 \n                 <li>Mantuve un promedio por encima de 3.7</li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2004 - 2010</p>\n              <div class=\"h5\">Bachiller Academico</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Bachiller academico</div>\n               <h4 class=\"category\">Instituci??n Educativa Jose manuel de altamira\n               </h4>\n               <ul>\n                <li>\n                  Destacandome en areas como: Matem??ticas, f??sica, inform??tica.\n                                  </li>\n                             \n                                  <li>\n                                      Completando en esta instituci??n el<b> 100%</b> de mi educaci??n secundaria.\n                                  </li>\n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2019</p>\n              <div class=\"h5\">Diplomado En Redes</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Administraci??n y gesti??n de redes de datos</div>\n               <h4 class=\"category\">Universidad de c??rdoba\n               </h4>\n               <ul>\n                <li>M??s de 120 horas de capacitaci??n teorica y pr??ctica..\n                </li>\n               \n               \n             </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"experience\">\n\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Experiencia</div>\n        <div class=\"colorlib-narrow-content\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"timeline-centered\">\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n\n                                <div class=\"timeline-icon color-2\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>Software Test Automation Enginner <span>Febrero 2022 - Presente.</span></h2>\n                                    <h4>Choucair Testing S.A.</h4>\n                                    <p>En este tiempo me desempe???? en el sector bancario, desarrollando las siguientes actividades:</p>\n                                    <ul>\n                                        <li>Creaci??n de plan de pruebas.</li>\n                                        <li>Creaci??n y ejecuci??nn de casos de pruebas.</li>\n                                        <li>Automatizazi??n de escenarios de prueba a nivel de sevicios e interfaz.</li>\n                                        <li>Ejecuci??n de pruebas de rendimiento.</li>\n                                    </ul>\n\n                                </div>\n                            </div>\n\n                            <div class=\"timeline-entry-inner\">\n\n                              <div class=\"timeline-icon color-2\">\n                                  <i class=\"icon-pen2\"></i>\n                              </div>\n\n                              <div class=\"timeline-label\">\n                                  <h2>Frontend Developer <span>Febrero 2018 - Marzo 2022</span></h2>\n                                  <h4>Freelancer.</h4>\n                                  <p>En este tiempo me desempe???? desarrollando las siguientes actividades:</p>\n                                  <ul>\n                                      <li>Creaci??n de servicios web en tecnolog??as como:</li>\n                                      <li>Angular, Java, TypeScritp, Css, Html, Bootstrap.</li>\n\n                                  </ul>\n\n                              </div>\n                          </div>\n                        </article>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container text-center\">\n      <a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/luispetro15\" target=\"_blank\">\n        <i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-instagram btn btn-link\" href=\"https://www.instagram.com/luispetro15/\" target=\"_blank\">\n        <i class=\"fa fa-instagram fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/luispetro1215\" target=\"_blank\">\n        <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n\n      <a class=\"cc-github btn btn-link \" href=\"https://github.com/Luis-Petro\" target=\"_blank\">\n        <i class=\"fa fa-github fa-2x \" aria-hidden=\"true\"></i>\n      </a>\n      <!-- <a class=\"cc-google-plus btn btn-link\" href=\"#\" target=\"_blank\">\n        <i class=\"fa fa-google-plus fa-2x\" aria-hidden=\"true\"></i>\n      </a> -->\n    </div>\n    <div class=\"text-center text-muted\">\n      <p>&copy; All rights reserved,Luis Petro.\n      </p>\n    </div>\n  </footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class=\"profile-page sidebar-collapse\">\n      <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n        <div class=\"container\">\n          <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Luis Petro, portafolio</a>\n            <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n              aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#about\">Acerca de</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experiencia</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link smooth-scroll\" href=\"#projects\">Proyectos</a>\n                  </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#skill\">Conocimientos</a>\n              </li>\n             \n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#education\">Educaci??n</a>\n              </li>\n\n              <li class=\"nav-item\">\n                  <a class=\"nav-link smooth-scroll\" href=\"#reference\">Referencias</a>\n                </li>\n\n              <li class=\"nav-item\">\n                <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contacto</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n  </header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-page\">\n    <div class=\"wrapper\">\n        <div class=\"page-header page-header-small\" filter-color=\"green\">\n            <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\">\n            </div>\n            <div class=\"container\">\n                <div class=\"content-center\">\n                    <div class=\"cc-profile-image\">\n                        <a href=\"#\">\n                            <img src=\"assets/images/img2.png\" alt=\"Image\" />\n                        </a>\n                    </div>\n                    <div class=\"h2 title\">Luis Petro</div>\n                    <p class=\"category text-white\">Software Engineer - Test Automation</p>\n                    <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Contactame</a>\n                    <a class=\"btn btn-primary\" href=\"assets/cv.pdf\" download=\"CV_Luis_Petro.pdf\" target=\"_blank\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Descargar CV</a>\n                </div>\n            </div>\n            <div class=\"section\">\n                <div class=\"container\">\n                    <div class=\"button-container\">\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.facebook.com/luispetro15\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Facebook\">\n                            <i class=\"fa fa-facebook\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.instagram.com/luispetro15/\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                            <i class=\"fa fa-instagram\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/ingluispetro/\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Linkedin\">\n                            <i class=\"fa fa-linkedin\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/Luis-Petro\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                            <i class=\"fa fa-github\"></i>\n                        </a>\n                        <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://twitter.com/luispetro1215\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfilePortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"portfolio\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto\">\n          <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n          <div class=\"nav-align-center\">\n            <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\">\n                  <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\n                </a>\n              </li>\n              \n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-content gallery mt-5\">\n        <div class=\"tab-pane active\" id=\"web-development\">\n          <div class=\"ml-auto mr-auto\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"https://personal-portfolio0320.000webhostapp.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio1.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Angular8</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                  <a href=\"http://msgc320.pythonanywhere.com/\">\n                    <figure class=\"cc-effect\">\n                      <img src=\"assets/images/portfolio2.PNG\" alt=\"Image\" />\n                      <figcaption>\n                        <div class=\"h4\">Made Using Django</div>\n                        <p>Web Development</p>\n                      </figcaption>\n                    </figure>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-experience></app-experience>\n    <app-projects></app-projects>\n    <app-skills></app-skills>\n    <app-education></app-education>\n    <app-reference></app-reference> \n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"projects\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Projects</div>\n\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        <div class=\"row\">\n\n            <ng-container *ngFor=\"let project of projects| paginate: config\">\n                <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n                    <div class=\"blog-entry\">\n                        <div class=\"card\">\n                            <img class=\"card-img-top\" src={{project.imgUrl}} onerror=\"this.src = 'assets/images/gif.gif'\" alt=\"Card image\" style=\"width:100%\">\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">{{project.title}}</h4>\n                                <h5 class=\"card-text\"><b>Technology :</b> {{project.tech}} </h5>\n                              \n\n                                <a href={{project.livedemo}} class=\"btn btn-primary stretched-link ml-2 mr-5\">Live Demo</a>\n                                <a href={{project.githurl}} class=\"btn btn-primary stretched-link\">GithubLink</a>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n\n        <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileReferenceReferenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"reference\">\n        <div class=\"container cc-reference\">\n          <div class=\"h4 mb-4 text-center title\">Referencias</div>\n          <div class=\"card\" data-aos=\"zoom-in\">\n            <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n                <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n               \n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/sg.jpg\" alt=\"Image\" />\n                      <div class=\"h5 pt-2\">SAMIR </div>\n                      <p class=\"category\">Desarrollador Frondend </p>\n                      <p class=\"category\">Ilumno </p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                    <p>\n                      Samir es un pensador creativo, innovador, responsable y bastante racional. \n                      La codificaci??n es su forma de vida, \n                      su trabajo presenta productos de gran calidad, siguiendo los est??ndares y buenas pr??cticas. \n                      Complet?? uno de mis proyectos de reservas de hotel,por lo cual estoy muy impresionado con sus habilidades.\n                    </p>\n                    <p>Con el curs?? la ingenier??a en la Universidad de c??rdoba donde nos hicimo muy buenos compa??eros.</p>\n                   \n                    </div>\n                  </div>\n                </div>\n                <div class=\"carousel-item\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                      <img src=\"assets/images/hn.jpg\" alt=\"Image\" />\n                      <h4>Ang??lica </h4>\n                      <p class=\"category\">Performance test analys</p>\n                      <p class=\"category\">at Choucair Testing S.A.</p>\n                    </div>\n                    <div class=\"col-lg-10 col-md-9\">\n                      <p> Systems engineer with a focus on software quality, knowledge in Analysis and planning of functional tests and non-functional tests projects, technical capacity to analyze and generate reports on the behavior of systems and causes of failures from the performance of performance tests , able to discern and correlate information, Project Management (Jira, TFS, Azure), ability to work in a cascade model, incremental iterative model and agile-scrum.</p>\n\n                         <p>I experience myself for having a fast learning level supported by constant self-study, excellent interpersonal relationships and a high sense of belonging, passionate about my work and constantly seeking to improve my skills.\n                         </p>\n                    </div>\n                  </div>\n                </div>\n               \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"skill\">\n    <div class=\"container\">\n        <div class=\"h4 text-center mb-4 title\">Conocimientos</div>\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">Testing</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%;\"></div>\n                                <span class=\"progress-value\">90%</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">Test Automation </span><br><span>(Seleniun, ScreenPlay, Serenity BDD, Cucumber, Karate Framework)</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\n                                <span class=\"progress-value\">90%</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">DESARROLLO WEB</span><br><span>(Angular, TypeScript, HTML, CSS)</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\n                                <span class=\"progress-value\">80%</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">AWS</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div>\n                                <span class=\"progress-value\">75%</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">SQL , MYSQL, SQL SERVER</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div>\n                                <span class=\"progress-value\">75%</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-container progress-primary\">\n                            <span class=\"progress-badge\">Git, GitHub</span>\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\" data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\"></div>\n                                <span class=\"progress-value\">70%</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: '<router-outlet></router-outlet>'
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var routes = [{
      path: '',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }];
    var config = {
      useHash: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config), _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/about/about.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hYm91dC9DOlxcVXNlcnNcXGxwZXRyb1xcRG9jdW1lbnRzXFxQcm9qZWN0c1xcUG9ydGFmb2xpb1BlcnNvbmFsLW1haW4vc3JjXFxhcHBcXHByb2ZpbGVcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgcHtcbiAgICBmb250LXdlaWdodDogNzAwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgXG59IiwiLnJvdyBwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/about/about.component.ts ***!
    \**************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppProfileAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/profile/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/profile/contact/contact.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/profile/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppProfileContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.model = {};
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/profile/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/education/education.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileEducationEducationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vQzpcXFVzZXJzXFxscGV0cm9cXERvY3VtZW50c1xcUHJvamVjdHNcXFBvcnRhZm9saW9QZXJzb25hbC1tYWluL3NyY1xcYXBwXFxwcm9maWxlXFxlZHVjYXRpb25cXGVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csY0FBQTtFQUNKLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBoNHtcbiAgICBjb2xvcjojNGE0ODQzO1xuZm9udC1zaXplOiAyMHB4O1xubWFyZ2luLWJvdHRvbTogMTBweDtcbm1hcmdpbi10b3A6MnB4O1xufSIsImg0IHtcbiAgY29sb3I6ICM0YTQ4NDM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/education/education.component.ts ***!
    \**********************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppProfileEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-education',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./education.component.scss */
      "./src/app/profile/education/education.component.scss"))["default"]]
    })], EducationComponent);
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before, .timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.3em;\n  font-weight: 500;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL0M6XFxVc2Vyc1xcbHBldHJvXFxEb2N1bWVudHNcXFByb2plY3RzXFxQb3J0YWZvbGlvUGVyc29uYWwtbWFpbi9zcmNcXGFwcFxccHJvZmlsZVxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDREo7O0FER0k7RUFFSTtJQUVJLGdCQUFBO0lBQ0EsbUJBQUE7RUNGVjtBQUNGOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE1NO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNIUjs7QURLTTtFQUNFLFdBQUE7QUNGUjs7QURJTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDRFI7O0FER007RUFDRSxXQUFBO0FDQVI7O0FERU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NSOztBRENNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNFUjs7QURBTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURETTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUdBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSVI7O0FESFE7RUFDRSxXQUFBO0FDTVY7O0FETFE7RUFDRSxtQkFBQTtBQ1FWOztBRFBRO0VBQ0UsbUJBQUE7QUNVVjs7QURUUTtFQUNFLG1CQUFBO0FDWVY7O0FEWFE7RUFDRSxtQkFBQTtBQ2NWOztBRGJRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDZ0JWOztBRGRNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ2lCUjs7QURmTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNrQlI7O0FEaEJNO0VBQ0UsZ0JBQUE7QUNtQlI7O0FEakJNO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUNvQlI7O0FEbEJNO0VBQ0UsV0FBQTtBQ3FCUjs7QURuQk07RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDc0JSOztBRGxCTTtFQUVFLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQWUsZ0JBQUE7QUNxQnZCOztBRGpCTTtFQUVDLFdBQUE7RUFBWSxnQkFBQTtBQ29CbkI7O0FEakJNO0VBRUUsZ0JBQUE7RUFBaUIsZ0JBQUE7QUNvQnpCOztBRGxCTTtFQUNFLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLDJDQUFBO0FDdUIxQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9ybGliLWV4cGVyaWVuY2VcbntcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIFxuICAgIGNsZWFyOiBib3RoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweClcbiAgICB7XG4gICAgICAgIC5jb2xvcmxpYi1leHBlcmllbmNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAudGltZWxpbmUtY2VudGVyZWQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSwgLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNsZWFyOiBib3RoOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjlweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBjbGVhcjogYm90aDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4OyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyYzk4ZjA7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjNTQ1MzsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0zIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjliZjNmOyB9XG4gICAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNhODRjYjg7IH1cbiAgICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzJmYTQ5OTsgfVxuICAgICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci1ub25lIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gICAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7IH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHAgKyBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgICAgXG4gICAgICAudGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gICAgICAgIGNvbG9yOiAjMDAwOyB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBzcGFuIHtcbiAgICAgICAgLXdlYmtpdC1vcGFjaXR5OiAuNDtcbiAgICAgICAgLW1vei1vcGFjaXR5OiAuNDtcbiAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgIC1tcy1maWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xuICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC50aW1lbGluZS1sYWJlbCBoNHtcbiAgICAgICBcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICM1NDU3NTU7Zm9udC13ZWlnaHQ6NTAwO1xuICAgICAgXG4gICAgICBcbiAgICAgIH1cbiAgICAgIC50aW1lbGluZS1sYWJlbCBzcGFue1xuICAgICAgXG4gICAgICAgY29sb3I6ICMwMDA7Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnRpbWVsaW5lLWxhYmVsIHB7XG4gICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtmb250LXdlaWdodDo1MDA7XG4gICAgICB9XG4gICAgICAudGltZWxpbmUtbGFiZWwgdWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07Zm9udC13ZWlnaHQ6NTAwOyBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICB9IiwiLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xuICB9XG59XG4udGltZWxpbmUtY2VudGVyZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsIC50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMmM5OGYwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjZjJmM2Y3O1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICBiYWNrZ3JvdW5kOiAjZWM1NDUzO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0zIHtcbiAgYmFja2dyb3VuZDogI2Y5YmYzZjtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItNCB7XG4gIGJhY2tncm91bmQ6ICNhODRjYjg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICBiYWNrZ3JvdW5kOiAjMmZhNDk5O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci1ub25lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgcGFkZGluZzogMS41ZW07XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDlweCA5cHggOXB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2YyZjNmNyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIHAgKyBwIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBhIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiBzcGFuIHtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwLjQ7XG4gIC1tb3otb3BhY2l0eTogMC40O1xuICBvcGFjaXR5OiAwLjQ7XG4gIC1tcy1maWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50aW1lbGluZS1sYWJlbCBoNCB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTQ1NzU1O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCB1bCB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.ts ***!
    \************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppProfileExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/profile/experience/experience.component.scss"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/footer/footer.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppProfileFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/profile/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/header/header.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-primary {\n  background-color: #424C7D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9oZWFkZXIvQzpcXFVzZXJzXFxscGV0cm9cXERvY3VtZW50c1xcUHJvamVjdHNcXFBvcnRhZm9saW9QZXJzb25hbC1tYWluL3NyY1xcYXBwXFxwcm9maWxlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcmltYXJ5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQyNEM3RCA7XHJcbn1cclxuIiwiLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0QzdEO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/header/header.component.ts ***!
    \****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppProfileHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/profile/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/intro/intro.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/intro/intro.component.ts ***!
    \**************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppProfileIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.scss */
      "./src/app/profile/intro/intro.component.scss"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/profile/portfolio/portfolio.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfilePortfolioPortfolioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/portfolio/portfolio.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
    \**********************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppProfilePortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/portfolio/portfolio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.component.scss */
      "./src/app/profile/portfolio/portfolio.component.scss"))["default"]]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(spinner) {
        _classCallCheck(this, ProfileComponent);

        this.spinner = spinner;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.spinner.show();
          setTimeout(function () {
            _this.spinner.hide();
          }, 2000);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/profile/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/profile/footer/footer.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/profile/intro/intro.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/profile/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/profile/skills/skills.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/profile/portfolio/portfolio.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/profile/experience/experience.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/profile/education/education.component.ts");
    /* harmony import */


    var _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./reference/reference.component */
    "./src/app/profile/reference/reference.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/profile/contact/contact.component.ts");
    /* harmony import */


    var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/profile/projects/projects.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"], _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"]],
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_14__["ReferenceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"]],
      providers: [{
        provide: 'SnotifyToastConfig',
        useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"]
      }, ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: black;\n}\n\n@media screen and (min-width: 992px) {\n  .card-img-top {\n    height: 196px;\n  }\n\n  .blog-entry h4 {\n    min-height: 52px;\n  }\n\n  .blog-entry h5 {\n    min-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9DOlxcVXNlcnNcXGxwZXRyb1xcRG9jdW1lbnRzXFxQcm9qZWN0c1xcUG9ydGFmb2xpb1BlcnNvbmFsLW1haW4vc3JjXFxhcHBcXHByb2ZpbGVcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxrQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUtBLG1CQUFBO0VBR0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUtJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLGFBQUE7RUNBTjs7RURFRTtJQUNJLGdCQUFBO0VDQ047O0VEQ0U7SUFDSSxnQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctZW50cnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ibG9nLWVudHJ5IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgIH1cbn1cblxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMgYSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4gc21hbGwgaSB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYmxvZy1lbnRyeTpob3ZlciAuYmxvZy1pbWcgaW1nIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgICBmb250LXdlaWdodDogNTYwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogYmxhY2tcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY2FyZC1pbWctdG9wIHtcbiAgICAgICAgaGVpZ2h0OiAxOTZweDtcbiAgICB9XG4gICAgLmJsb2ctZW50cnkgaDQge1xuICAgICAgICBtaW4taGVpZ2h0OiA1MnB4O1xuICAgIH1cbiAgICAuYmxvZy1lbnRyeSBoNSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgfVxufSIsIi5ibG9nLWVudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLWVudHJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cbn1cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2MgaDMgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4gc21hbGwgaSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyAubGVhZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5ibG9nLWVudHJ5OmhvdmVyIC5ibG9nLWltZyBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmxvZy1lbnRyeSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA1NjA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmxvZy1lbnRyeSBoNSB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQtaW1nLXRvcCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxuXG4gIC5ibG9nLWVudHJ5IGg0IHtcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xuICB9XG5cbiAgLmJsb2ctZW50cnkgaDUge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProfileProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        this.projects = [{
          id: 1,
          title: 'Portafolio Personal',
          desc: '',
          livedemo: 'https://mehulk05.github.io/MyShop/#/',
          githurl: 'https://github.com/mehulk05/MyShop',
          imgUrl: 'assets/images/z1.png',
          tech: 'Angular 10 , Boostrap'
        }];
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.projects.length
          };
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/profile/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/profile/reference/reference.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/reference/reference.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileReferenceReferenceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cc-reference p {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category p {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvQzpcXFVzZXJzXFxscGV0cm9cXERvY3VtZW50c1xcUHJvamVjdHNcXFBvcnRhZm9saW9QZXJzb25hbC1tYWluL3NyY1xcYXBwXFxwcm9maWxlXFxyZWZlcmVuY2VcXHJlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9yZWZlcmVuY2UvcmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNJLFVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYy1yZWZlcmVuY2UgcHtcbiAgICBmb250LXdlaWdodDogMTAwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICB9XG5cbiAgLmNhdGVnb3J5IHB7XG4gICAgICB3aWR0aDogMTAlXG4gIH0iLCIuY2MtcmVmZXJlbmNlIHAge1xuICBmb250LXdlaWdodDogMTAwMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbi5jYXRlZ29yeSBwIHtcbiAgd2lkdGg6IDEwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/reference/reference.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/reference/reference.component.ts ***!
    \**********************************************************/

  /*! exports provided: ReferenceComponent */

  /***/
  function srcAppProfileReferenceReferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
      return ReferenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferenceComponent = /*#__PURE__*/function () {
      function ReferenceComponent() {
        _classCallCheck(this, ReferenceComponent);
      }

      _createClass(ReferenceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReferenceComponent;
    }();

    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reference',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reference.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/reference/reference.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reference.component.scss */
      "./src/app/profile/reference/reference.component.scss"))["default"]]
    })], ReferenceComponent);
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/skills/skills.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/skills/skills.component.ts ***!
    \****************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppProfileSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/profile/skills/skills.component.scss"))["default"]]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
      //baseUrl : `http://localhost:4200/`,
      snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lpetro\Documents\Projects\PortafolioPersonal-main\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map