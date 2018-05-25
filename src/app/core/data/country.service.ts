import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { GenericType } from './../model/genericType.model';


@Injectable()
export class CountryService {
    countries: GenericType[] = [
        { codigo: 'AF', denominacion: 'Afganistan', valor: 93 },
        { codigo: 'AL', denominacion: 'Albania', valor: 355 },
        { codigo: 'DE', denominacion: 'Alemania', valor: 49 },
        { codigo: 'DZ', denominacion: 'Algeria', valor: 213 },
        { codigo: 'AD', denominacion: 'Andorra', valor: 376 },
        { codigo: 'AO', denominacion: 'Angola', valor: 244 },
        { codigo: 'AI', denominacion: 'Anguila', valor: 1264 },
        { codigo: 'AQ', denominacion: 'Antártida', valor: 672 },
        { codigo: 'AG', denominacion: 'Antigua y Barbuda', valor: 1268 },
        { codigo: 'AN', denominacion: 'Antillas Neerlandesas', valor: 599 },
        { codigo: 'SA', denominacion: 'Arabia Saudita', valor: 966 },
        { codigo: 'AR', denominacion: 'Argentina', valor: 54 },
        { codigo: 'AM', denominacion: 'Armenia', valor: 374 },
        { codigo: 'AW', denominacion: 'Aruba', valor: 297 },
        { codigo: 'AU', denominacion: 'Australia', valor: 61 },
        { codigo: 'AT', denominacion: 'Austria', valor: 43 },
        { codigo: 'AZ', denominacion: 'Azerbayan', valor: 994 },
        { codigo: 'BE', denominacion: 'Belgica', valor: 32 },
        { codigo: 'BS', denominacion: 'Bahamas', valor: 1242 },
        { codigo: 'BH', denominacion: 'Bahrein', valor: 973 },
        { codigo: 'BD', denominacion: 'Bangladesh', valor: 880 },
        { codigo: 'BB', denominacion: 'Barbados', valor: 1246 },
        { codigo: 'BZ', denominacion: 'Belice', valor: 501 },
        { codigo: 'BJ', denominacion: 'Benin', valor: 229 },
        { codigo: 'BT', denominacion: 'Bhutan', valor: 975 },
        { codigo: 'BY', denominacion: 'Bielorrusia', valor: 375 },
        { codigo: 'MM', denominacion: 'Birmania', valor: 95 },
        { codigo: 'BO', denominacion: 'Bolivia', valor: 591 },
        { codigo: 'BA', denominacion: 'Bosnia y Herzegovina', valor: 387 },
        { codigo: 'BW', denominacion: 'Botsuana', valor: 267 },
        { codigo: 'BR', denominacion: 'Brasil', valor: 55 },
        { codigo: 'BN', denominacion: 'Brunei', valor: 673 },
        { codigo: 'BG', denominacion: 'Bulgaria', valor: 359 },
        { codigo: 'BF', denominacion: 'Burkina Faso', valor: 226 },
        { codigo: 'BI', denominacion: 'Burundi', valor: 257 },
        { codigo: 'CV', denominacion: 'Cabo Verde', valor: 238 },
        { codigo: 'KH', denominacion: 'Camboya', valor: 855 },
        { codigo: 'CM', denominacion: 'Cameron', valor: 237 },
        { codigo: 'CA', denominacion: 'Canada', valor: 1 },
        { codigo: 'TD', denominacion: 'Chad', valor: 235 },
        { codigo: 'CL', denominacion: 'Chile', valor: 56 },
        { codigo: 'CN', denominacion: 'China', valor: 86 },
        { codigo: 'CY', denominacion: 'Chipre', valor: 357 },
        { codigo: 'VA', denominacion: 'Ciudad del Vaticano', valor: 39 },
        { codigo: 'CO', denominacion: 'Colombia', valor: 57 },
        { codigo: 'KM', denominacion: 'Comoras', valor: 269 },
        { codigo: 'CG', denominacion: 'Congo', valor: 242 },
        { codigo: 'CD', denominacion: 'Congo', valor: 243 },
        { codigo: 'KP', denominacion: 'Corea del Norte', valor: 850 },
        { codigo: 'KR', denominacion: 'Corea del Sur', valor: 82 },
        { codigo: 'CI', denominacion: 'Costa de Marfil', valor: 225 },
        { codigo: 'CR', denominacion: 'Costa Rica', valor: 506 },
        { codigo: 'HR', denominacion: 'Croacia', valor: 385 },
        { codigo: 'CU', denominacion: 'Cuba', valor: 53 },
        { codigo: 'DK', denominacion: 'Dinamarca', valor: 45 },
        { codigo: 'DM', denominacion: 'Dominica', valor: 1767 },
        { codigo: 'EC', denominacion: 'Ecuador', valor: 593 },
        { codigo: 'EG', denominacion: 'Egipto', valor: 20 },
        { codigo: 'SV', denominacion: 'El Salvador', valor: 503 },
        { codigo: 'AE', denominacion: 'Emiratos arabes Unidos', valor: 971 },
        { codigo: 'ER', denominacion: 'Eritrea', valor: 291 },
        { codigo: 'SK', denominacion: 'Eslovaquia', valor: 421 },
        { codigo: 'SI', denominacion: 'Eslovenia', valor: 386 },
        { codigo: 'ES', denominacion: 'España', valor: 34 },
        { codigo: 'US', denominacion: 'Estados Unidos de America', valor: 1 },
        { codigo: 'EE', denominacion: 'Estonia', valor: 372 },
        { codigo: 'ET', denominacion: 'Etiophia', valor: 251 },
        { codigo: 'PH', denominacion: 'Filipinas', valor: 63 },
        { codigo: 'FI', denominacion: 'Finlandia', valor: 358 },
        { codigo: 'FJ', denominacion: 'Fiyi', valor: 679 },
        { codigo: 'FR', denominacion: 'Francia', valor: 33 },
        { codigo: 'GA', denominacion: 'Gabon', valor: 241 },
        { codigo: 'GM', denominacion: 'Gambia', valor: 220 },
        { codigo: 'GE', denominacion: 'Georgia', valor: 995 },
        { codigo: 'GH', denominacion: 'Ghana', valor: 233 },
        { codigo: 'GI', denominacion: 'Gibraltar', valor: 350 },
        { codigo: 'GD', denominacion: 'Granada', valor: 1473 },
        { codigo: 'GR', denominacion: 'Grecia', valor: 30 },
        { codigo: 'GL', denominacion: 'Groenlandia', valor: 299 },
        { codigo: 'GP', denominacion: 'Guadalupe', valor: 0 },
        { codigo: 'GU', denominacion: 'Guam', valor: 1671 },
        { codigo: 'GT', denominacion: 'Guatemala', valor: 502 },
        { codigo: 'GF', denominacion: 'Guayana Francesa', valor: 0 },
        { codigo: 'GG', denominacion: 'Guernsey', valor: 0 },
        { codigo: 'GN', denominacion: 'Guinea', valor: 224 },
        { codigo: 'GQ', denominacion: 'Guinea Ecuatorial', valor: 240 },
        { codigo: 'GW', denominacion: 'Guinea-Bissau', valor: 245 },
        { codigo: 'GY', denominacion: 'Guyana', valor: 592 },
        { codigo: 'HT', denominacion: 'Haiti', valor: 509 },
        { codigo: 'HN', denominacion: 'Honduras', valor: 504 },
        { codigo: 'HK', denominacion: 'Hong kong', valor: 852 },
        { codigo: 'HU', denominacion: 'Hungria', valor: 36 },
        { codigo: 'IN', denominacion: 'India', valor: 91 },
        { codigo: 'ID', denominacion: 'Indonesia', valor: 62 },
        { codigo: 'IR', denominacion: 'Iran', valor: 98 },
        { codigo: 'IQ', denominacion: 'Irak', valor: 964 },
        { codigo: 'IE', denominacion: 'Irlanda', valor: 353 },
        { codigo: 'BV', denominacion: 'Isla Bouvet', valor: 0 },
        { codigo: 'IM', denominacion: 'Isla de Man', valor: 44 },
        { codigo: 'CX', denominacion: 'Isla de Navidad', valor: 61 },
        { codigo: 'NF', denominacion: 'Isla Norfolk', valor: 0 },
        { codigo: 'IS', denominacion: 'Islandia', valor: 354 },
        { codigo: 'BM', denominacion: 'Islas Bermudas', valor: 1441 },
        { codigo: 'KY', denominacion: 'Islas Caiman', valor: 1345 },
        { codigo: 'CC', denominacion: 'Islas Cocos (Keeling)', valor: 61 },
        { codigo: 'CK', denominacion: 'Islas Cook', valor: 682 },
        { codigo: 'AX', denominacion: 'Islas de aland', valor: 0 },
        { codigo: 'FO', denominacion: 'Islas Feroe', valor: 298 },
        { codigo: 'GS', denominacion: 'Islas Georgias del Sur y Sandwich del Sur', valor: 0 },
        { codigo: 'HM', denominacion: 'Islas Heard y McDonald', valor: 0 },
        { codigo: 'MV', denominacion: 'Islas Maldivas', valor: 960 },
        { codigo: 'FK', denominacion: 'Islas Malvinas', valor: 500 },
        { codigo: 'MP', denominacion: 'Islas Marianas del Norte', valor: 1670 },
        { codigo: 'MH', denominacion: 'Islas Marshall', valor: 692 },
        { codigo: 'PN', denominacion: 'Islas Pitcairn', valor: 870 },
        { codigo: 'SB', denominacion: 'Islas Salomon', valor: 677 },
        { codigo: 'TC', denominacion: 'Islas Turcas y Caicos', valor: 1649 },
        { codigo: 'UM', denominacion: 'Islas Ultramarinas Menores de Estados Unidos', valor: 0 },
        { codigo: 'VG', denominacion: 'Islas Virgenes Britanicas', valor: 1284 },
        { codigo: 'VI', denominacion: 'Islas Virgenes de los Estados Unidos', valor: 1340 },
        { codigo: 'IL', denominacion: 'Israel', valor: 972 },
        { codigo: 'IT', denominacion: 'Italia', valor: 39 },
        { codigo: 'JM', denominacion: 'Jamaica', valor: 1876 },
        { codigo: 'JP', denominacion: 'Japon', valor: 81 },
        { codigo: 'JE', denominacion: 'Jersey', valor: 0 },
        { codigo: 'JO', denominacion: 'Jordania', valor: 962 },
        { codigo: 'KZ', denominacion: 'Kazajistan', valor: 7 },
        { codigo: 'KE', denominacion: 'Kenia', valor: 254 },
        { codigo: 'KG', denominacion: 'Kirgizstan', valor: 996 },
        { codigo: 'KI', denominacion: 'Kiribati', valor: 686 },
        { codigo: 'KW', denominacion: 'Kuwait', valor: 965 },
        { codigo: 'LB', denominacion: 'Lebano', valor: 961 },
        { codigo: 'LA', denominacion: 'Laos', valor: 856 },
        { codigo: 'LS', denominacion: 'Lesoto', valor: 266 },
        { codigo: 'LV', denominacion: 'Letonia', valor: 371 },
        { codigo: 'LR', denominacion: 'Liberia', valor: 231 },
        { codigo: 'LY', denominacion: 'Libia', valor: 218 },
        { codigo: 'LI', denominacion: 'Liechtenstein', valor: 423 },
        { codigo: 'LT', denominacion: 'Lituania', valor: 370 },
        { codigo: 'LU', denominacion: 'Luxemburgo', valor: 352 },
        { codigo: 'MX', denominacion: 'Mexico', valor: 52 },
        { codigo: 'MC', denominacion: 'Monaco', valor: 377 },
        { codigo: 'MO', denominacion: 'Macao', valor: 853 },
        { codigo: 'MK', denominacion: 'Macedonia', valor: 389 },
        { codigo: 'MG', denominacion: 'Madagascar', valor: 261 },
        { codigo: 'MY', denominacion: 'Malasia', valor: 60 },
        { codigo: 'MW', denominacion: 'Malawi', valor: 265 },
        { codigo: 'ML', denominacion: 'Mali', valor: 223 },
        { codigo: 'MT', denominacion: 'Malta', valor: 356 },
        { codigo: 'MA', denominacion: 'Marruecos', valor: 212 },
        { codigo: 'MQ', denominacion: 'Martinica', valor: 0 },
        { codigo: 'MU', denominacion: 'Mauricio', valor: 230 },
        { codigo: 'MR', denominacion: 'Mauritania', valor: 222 },
        { codigo: 'YT', denominacion: 'Mayotte', valor: 262 },
        { codigo: 'FM', denominacion: 'Micronesia', valor: 691 },
        { codigo: 'MD', denominacion: 'Moldavia', valor: 373 },
        { codigo: 'MN', denominacion: 'Mongolia', valor: 976 },
        { codigo: 'ME', denominacion: 'Montenegro', valor: 382 },
        { codigo: 'MS', denominacion: 'Montserrat', valor: 1664 },
        { codigo: 'MZ', denominacion: 'Mozambique', valor: 258 },
        { codigo: 'NA', denominacion: 'Namibia', valor: 264 },
        { codigo: 'NR', denominacion: 'Nauru', valor: 674 },
        { codigo: 'NP', denominacion: 'Nepal', valor: 977 },
        { codigo: 'NI', denominacion: 'Nicaragua', valor: 505 },
        { codigo: 'NE', denominacion: 'Niger', valor: 227 },
        { codigo: 'NG', denominacion: 'Nigeria', valor: 234 },
        { codigo: 'NU', denominacion: 'Niue', valor: 683 },
        { codigo: 'NO', denominacion: 'Noruega', valor: 47 },
        { codigo: 'NC', denominacion: 'Nueva Caledonia', valor: 687 },
        { codigo: 'NZ', denominacion: 'Nueva Zelanda', valor: 64 },
        { codigo: 'OM', denominacion: 'Oman', valor: 968 },
        { codigo: 'NL', denominacion: 'Paises Bajos', valor: 31 },
        { codigo: 'PK', denominacion: 'Pakistan', valor: 92 },
        { codigo: 'PW', denominacion: 'Palau', valor: 680 },
        { codigo: 'PS', denominacion: 'Palestina', valor: 0 },
        { codigo: 'PA', denominacion: 'Panama', valor: 507 },
        { codigo: 'PG', denominacion: 'Papua Nueva Guinea', valor: 675 },
        { codigo: 'PY', denominacion: 'Paraguay', valor: 595 },
        { codigo: 'PE', denominacion: 'Peru', valor: 51 },
        { codigo: 'PF', denominacion: 'Polinesia Francesa', valor: 689 },
        { codigo: 'PL', denominacion: 'Polonia', valor: 48 },
        { codigo: 'PT', denominacion: 'Portugal', valor: 351 },
        { codigo: 'PR', denominacion: 'Puerto Rico', valor: 1 },
        { codigo: 'QA', denominacion: 'Qatar', valor: 974 },
        { codigo: 'GB', denominacion: 'Reino Unido', valor: 44 },
        { codigo: 'CF', denominacion: 'Republica Centroafricana', valor: 236 },
        { codigo: 'CZ', denominacion: 'Republica Checa', valor: 420 },
        { codigo: 'DO', denominacion: 'Republica Dominicana', valor: 1809 },
        { codigo: 'RE', denominacion: 'Reunion', valor: 0 },
        { codigo: 'RW', denominacion: 'Ruanda', valor: 250 },
        { codigo: 'RO', denominacion: 'Rumania', valor: 40 },
        { codigo: 'RU', denominacion: 'Rusia', valor: 7 },
        { codigo: 'EH', denominacion: 'Sahara Occidental', valor: 0 },
        { codigo: 'WS', denominacion: 'Samoa', valor: 685 },
        { codigo: 'AS', denominacion: 'Samoa Americana', valor: 1684 },
        { codigo: 'BL', denominacion: 'San Bartolome', valor: 590 },
        { codigo: 'KN', denominacion: 'San Cristobal y Nieves', valor: 1869 },
        { codigo: 'SM', denominacion: 'San Marino', valor: 378 },
        { codigo: 'MF', denominacion: 'San Martin (Francia)', valor: 1599 },
        { codigo: 'PM', denominacion: 'San Pedro y Miquelon', valor: 508 },
        { codigo: 'VC', denominacion: 'San Vicente y las Granadinas', valor: 1784 },
        { codigo: 'SH', denominacion: 'Santa Elena', valor: 290 },
        { codigo: 'LC', denominacion: 'Santa Lucia', valor: 1758 },
        { codigo: 'ST', denominacion: 'Santo Tome y Principe', valor: 239 },
        { codigo: 'SN', denominacion: 'Senegal', valor: 221 },
        { codigo: 'RS', denominacion: 'Serbia', valor: 381 },
        { codigo: 'SC', denominacion: 'Seychelles', valor: 248 },
        { codigo: 'SL', denominacion: 'Sierra Leona', valor: 232 },
        { codigo: 'SG', denominacion: 'Singapur', valor: 65 },
        { codigo: 'SY', denominacion: 'Siria', valor: 963 },
        { codigo: 'SO', denominacion: 'Somalia', valor: 252 },
        { codigo: 'LK', denominacion: 'Sri lanka', valor: 94 },
        { codigo: 'ZA', denominacion: 'Sudafrica', valor: 27 },
        { codigo: 'SD', denominacion: 'Sudan', valor: 249 },
        { codigo: 'SE', denominacion: 'Suecia', valor: 46 },
        { codigo: 'CH', denominacion: 'Suiza', valor: 41 },
        { codigo: 'SR', denominacion: 'Surinam', valor: 597 },
        { codigo: 'SJ', denominacion: 'Svalbard y Jan Mayen', valor: 0 },
        { codigo: 'SZ', denominacion: 'Swazilandia', valor: 268 },
        { codigo: 'TJ', denominacion: 'Tadjikistan', valor: 992 },
        { codigo: 'TH', denominacion: 'Tailandia', valor: 66 },
        { codigo: 'TW', denominacion: 'Taiwan', valor: 886 },
        { codigo: 'TZ', denominacion: 'Tanzania', valor: 255 },
        { codigo: 'IO', denominacion: 'Territorio Britanico del Oceano Indico', valor: 0 },
        { codigo: 'TF', denominacion: 'Territorios Australes y Antarticas Franceses', valor: 0 },
        { codigo: 'TL', denominacion: 'Timor Oriental', valor: 670 },
        { codigo: 'TG', denominacion: 'Togo', valor: 228 },
        { codigo: 'TK', denominacion: 'Tokelau', valor: 690 },
        { codigo: 'TO', denominacion: 'Tonga', valor: 676 },
        { codigo: 'TT', denominacion: 'Trinidad y Tobago', valor: 1868 },
        { codigo: 'TN', denominacion: 'Tunez', valor: 216 },
        { codigo: 'TM', denominacion: 'Turkmenistan', valor: 993 },
        { codigo: 'TR', denominacion: 'Turquia', valor: 90 },
        { codigo: 'TV', denominacion: 'Tuvalu', valor: 688 },
        { codigo: 'UA', denominacion: 'Ucrania', valor: 1868 },
        { codigo: 'UG', denominacion: 'Uganda', valor: 256 },
        { codigo: 'UY', denominacion: 'Uruguay', valor: 598 },
        { codigo: 'UZ', denominacion: 'Uzbekistan', valor: 998 },
        { codigo: 'VU', denominacion: 'Vanuatu', valor: 678 },
        { codigo: 'VE', denominacion: 'Venezuela', valor: 58 },
        { codigo: 'VN', denominacion: 'Vietnam', valor: 84 },
        { codigo: 'WF', denominacion: 'Wallis y Futuna', valor: 681 },
        { codigo: 'YE', denominacion: 'Yemen', valor: 967 },
        { codigo: 'DJ', denominacion: 'Yibuti', valor: 253 },
        { codigo: 'ZM', denominacion: 'Zambia', valor: 260 },
        { codigo: 'ZW', denominacion: 'Zimbabue', valor: 263 }
    ];

    constructor() { }
    getAll(): GenericType[] {
        return this.countries;
    }
}