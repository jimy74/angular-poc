'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">admin-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' : 'data-target="#xs-components-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' :
                                            'id="xs-components-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' }>
                                            <li class="link">
                                                <a href="components/AttributesAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributesAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectAdminAttributeCreatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectAdminAttributeCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsAdminCreatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsAdminCreatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsAdminDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsAdminDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectsAdminVueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectsAdminVueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' : 'data-target="#xs-injectables-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' :
                                        'id="xs-injectables-links-module-AdminModule-669271d9bbe48b1a0a74e6d70fdaf01f97c4480d02294dc8041e95bc51d1467e271a44191405b06334e94414ef9b1aadd8772aed6d91d5758ccdf572f7c75908"' }>
                                        <li class="link">
                                            <a href="injectables/AttributesAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttributesAdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProjectAdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectAdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0a2715bac5c7e41b2142eeb76f16cd58b0a780981a9e54008233b8499c3211715336c9a20297cc0ae88d91a28e41513fbe66569c88f5b2df8c2dfe8cfa921c98"' : 'data-target="#xs-components-links-module-AppModule-0a2715bac5c7e41b2142eeb76f16cd58b0a780981a9e54008233b8499c3211715336c9a20297cc0ae88d91a28e41513fbe66569c88f5b2df8c2dfe8cfa921c98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0a2715bac5c7e41b2142eeb76f16cd58b0a780981a9e54008233b8499c3211715336c9a20297cc0ae88d91a28e41513fbe66569c88f5b2df8c2dfe8cfa921c98"' :
                                            'id="xs-components-links-module-AppModule-0a2715bac5c7e41b2142eeb76f16cd58b0a780981a9e54008233b8499c3211715336c9a20297cc0ae88d91a28e41513fbe66569c88f5b2df8c2dfe8cfa921c98"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MenuModule-502175208ad502bfdf3c5f354d687ecce30111887e97e46c474c7e5d8cc136cf810de33089a2370f434134301bfd5de4a29a4762a9acc20391e9c44f93b4abe3"' : 'data-target="#xs-components-links-module-MenuModule-502175208ad502bfdf3c5f354d687ecce30111887e97e46c474c7e5d8cc136cf810de33089a2370f434134301bfd5de4a29a4762a9acc20391e9c44f93b4abe3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-502175208ad502bfdf3c5f354d687ecce30111887e97e46c474c7e5d8cc136cf810de33089a2370f434134301bfd5de4a29a4762a9acc20391e9c44f93b4abe3"' :
                                            'id="xs-components-links-module-MenuModule-502175208ad502bfdf3c5f354d687ecce30111887e97e46c474c7e5d8cc136cf810de33089a2370f434134301bfd5de4a29a4762a9acc20391e9c44f93b4abe3"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AttributesAdminService.html" data-type="entity-link" >AttributesAdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectAdminService.html" data-type="entity-link" >ProjectAdminService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Attribute.html" data-type="entity-link" >Attribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewAttribute.html" data-type="entity-link" >NewAttribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewProject.html" data-type="entity-link" >NewProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Project.html" data-type="entity-link" >Project</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});