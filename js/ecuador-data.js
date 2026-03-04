/**
 * Datos de las divisiones administrativas del Ecuador
 * Fuente: INEC - Instituto Nacional de Estadística y Censos
 * Estructura: Provincias → Cantones → Parroquias
 * 24 Provincias, 221+ Cantones, 1000+ Parroquias
 */
const ECUADOR_DATA = [
  {
    provincia: "AZUAY",
    cantones: [
      { canton: "CUENCA", parroquias: ["BELLAVISTA","CAÑARIBAMBA","EL BATÁN","EL SAGRARIO","EL VECINO","GIL RAMÍREZ DÁVALOS","HUAYNACÁPAC","MACHÁNGARA","MONAY","SAN BLAS","SAN SEBASTIÁN","SUCRE","TOTORACOCHA","YANUNCAY","HERMANO MIGUEL","BAÑOS","CUMBE","CHAUCHA","CHECA (JIDCAY)","CHIQUINTAD","LLACAO","MOLLETURO","NULTI","OCTAVIO CORDERO PALACIOS","PACCHA","QUINGEO","RICAURTE","SAN JOAQUÍN","SANTA ANA","SAYAUSÍ","SIDCAY","SININCAY","TARQUI","TURI","VALLE","VICTORIA DEL PORTETE"] },
      { canton: "GIRÓN", parroquias: ["GIRÓN","ASUNCIÓN","SAN GERARDO"] },
      { canton: "GUALACEO", parroquias: ["GUALACEO","CHORDELEG","DANIEL CÓRDOVA TORAL","JADÁN","MARIANO MORENO","PRINCIPAL","REMIGIO CRESPO TORAL","SAN JUAN","ZHIDMAD","LUIS CORDERO VEGA","SIMÓN BOLÍVAR"] },
      { canton: "NABÓN", parroquias: ["NABÓN","COCHAPATA","EL PROGRESO","LAS NIEVES","OÑA"] },
      { canton: "PAUTE", parroquias: ["PAUTE","AMALUZA","BULÁN","CHICÁN","EL CABO","GUACHAPALA","GUARAINAG","PALMAS","PAN","SAN CRISTÓBAL","SEVILLA DE ORO","TOMEBAMBA","DUG DUG"] },
      { canton: "PUCARÁ", parroquias: ["PUCARÁ","CAMILO PONCE ENRÍQUEZ","SAN RAFAEL DE SHARUG"] },
      { canton: "SAN FERNANDO", parroquias: ["SAN FERNANDO","CHUMBLÍN"] },
      { canton: "SANTA ISABEL", parroquias: ["SANTA ISABEL","ABDÓN CALDERÓN","EL CARMEN DE PIJILÍ","ZHAGLLI","SAN SALVADOR DE CAÑARIBAMBA"] },
      { canton: "SIGSIG", parroquias: ["SIGSIG","CUCHIL","GIMA","GUEL","LUDO","SAN BARTOLOMÉ","SAN JOSÉ DE RARANGA"] },
      { canton: "OÑA", parroquias: ["SAN FELIPE DE OÑA","SUSUDEL"] },
      { canton: "CHORDELEG", parroquias: ["CHORDELEG","PRINCIPAL","LA UNIÓN","LUIS GALARZA ORELLANA","SAN MARTÍN DE PUZHIO"] },
      { canton: "EL PAN", parroquias: ["EL PAN","AMALUZA","PALMAS","SAN VICENTE"] },
      { canton: "SEVILLA DE ORO", parroquias: ["SEVILLA DE ORO","AMALUZA","PALMAS"] },
      { canton: "GUACHAPALA", parroquias: ["GUACHAPALA"] },
      { canton: "CAMILO PONCE ENRÍQUEZ", parroquias: ["CAMILO PONCE ENRÍQUEZ","EL CARMEN DE PIJILÍ"] }
    ]
  },
  {
    provincia: "BOLÍVAR",
    cantones: [
      { canton: "GUARANDA", parroquias: ["ÁNGEL POLIBIO CHÁVES","GABRIEL IGNACIO VEINTIMILLA","GUANUJO","FACUNDO VELA","JULIO E. MORENO","LAS NAVES","SALINAS","SAN LORENZO","SAN SIMÓN","SANTA FÉ","SIMIÁTUG","SAN LUIS DE PAMBIL"] },
      { canton: "CHILLANES", parroquias: ["CHILLANES","SAN JOSÉ DEL TAMBO"] },
      { canton: "CHIMBO", parroquias: ["SAN JOSÉ DE CHIMBO","ASUNCIÓN","CALUMA","MAGDALENA","SAN SEBASTIÁN","TELIMBELA"] },
      { canton: "ECHEANDÍA", parroquias: ["ECHEANDÍA"] },
      { canton: "SAN MIGUEL", parroquias: ["SAN MIGUEL","BALSAPAMBA","BILOVÁN","RÉGULO DE MORA","SAN PABLO","SANTIAGO","SAN VICENTE"] },
      { canton: "CALUMA", parroquias: ["CALUMA"] },
      { canton: "LAS NAVES", parroquias: ["LAS MERCEDES","LAS NAVES"] }
    ]
  },
  {
    provincia: "CAÑAR",
    cantones: [
      { canton: "AZOGUES", parroquias: ["AURELIO BAYAS MARTÍNEZ","AZOGUES","BORRERO","SAN FRANCISCO","COJITAMBO","DÉLEG","GUAPÁN","JAVIER LOYOLA","LUIS CORDERO","PINDILIG","RIVERA","SAN MIGUEL","SOLANO","TADAY"] },
      { canton: "BIBLIÁN", parroquias: ["BIBLIÁN","NAZÓN","SAN FRANCISCO DE SAGEO","TURUPAMBA","JERUSALÉN"] },
      { canton: "CAÑAR", parroquias: ["CAÑAR","CHONTAMARCA","CHOROCOPTE","GENERAL MORALES","GUALLETURO","HONORATO VÁSQUEZ","INGAPIRCA","JUNCAL","SAN ANTONIO","SUSCAL","TAMBO","ZHUD","VENTURA","DUCUR"] },
      { canton: "LA TRONCAL", parroquias: ["LA TRONCAL","MANUEL J. CALLE","PANCHO NEGRO"] },
      { canton: "EL TAMBO", parroquias: ["EL TAMBO"] },
      { canton: "DÉLEG", parroquias: ["DÉLEG","SOLANO"] },
      { canton: "SUSCAL", parroquias: ["SUSCAL"] }
    ]
  },
  {
    provincia: "CARCHI",
    cantones: [
      { canton: "TULCÁN", parroquias: ["GONZÁLEZ SUÁREZ","TULCÁN","EL CARMELO","HUACA","JULIO ANDRADE","MALDONADO","PIOTER","TOBAR DONOSO","TUFIÑO","URBINA","EL CHICAL","MARISCAL SUCRE","SANTA MARTHA DE CUBA"] },
      { canton: "BOLÍVAR", parroquias: ["BOLÍVAR","GARCÍA MORENO","LOS ANDES","MONTE OLIVO","SAN VICENTE DE PUSIR","SAN RAFAEL"] },
      { canton: "ESPEJO", parroquias: ["EL ÁNGEL","27 DE SEPTIEMBRE","EL GOALTAL","LA LIBERTAD","SAN ISIDRO"] },
      { canton: "MIRA", parroquias: ["MIRA","CONCEPCIÓN","JIJÓN Y CAAMAÑO","JUAN MONTALVO"] },
      { canton: "MONTÚFAR", parroquias: ["GONZÁLEZ SUÁREZ","SAN JOSÉ","SAN GABRIEL","CRISTÓBAL COLÓN","CHITÁN DE NAVARRETE","FERNÁNDEZ SALVADOR","LA PAZ","PIARTAL"] },
      { canton: "SAN PEDRO DE HUACA", parroquias: ["HUACA","MARISCAL SUCRE"] }
    ]
  },
  {
    provincia: "COTOPAXI",
    cantones: [
      { canton: "LATACUNGA", parroquias: ["ELOY ALFARO","IGNACIO FLORES","JUAN MONTALVO","LA MATRIZ","SAN BUENAVENTURA","ALÁQUEZ","BELISARIO QUEVEDO","GUAITACAMA","JOSEGUANGO BAJO","LAS PAMPAS","MULALÓ","11 DE NOVIEMBRE","POALÓ","SAN JUAN DE PASTOCALLE","SIGCHOS","TANICUCHÍ","TOACASO","PALO QUEMADO"] },
      { canton: "LA MANÁ", parroquias: ["EL CARMEN","LA MANÁ","EL TRIUNFO","GUASAGANDA","PUCAYACU"] },
      { canton: "PANGUA", parroquias: ["EL CORAZÓN","MORASPUNGO","PINLLOPATA","RAMÓN CAMPAÑA"] },
      { canton: "PUJILÍ", parroquias: ["PUJILÍ","ANGAMARCA","CHUGCHILÁN","GUANGAJE","ISINLIVÍ","LA VICTORIA","PILALÓ","TINGO","ZUMBAHUA"] },
      { canton: "SALCEDO", parroquias: ["SAN MIGUEL","ANTONIO JOSÉ HOLGUÍN","CUSUBAMBA","MULALILLO","MULLIQUINDIL","PANSALEO"] },
      { canton: "SAQUISILÍ", parroquias: ["SAQUISILÍ","CANCHAGUA","CHANTILÍN","COCHAPAMBA"] },
      { canton: "SIGCHOS", parroquias: ["SIGCHOS","CHUGCHILLÁN","ISINLIVÍ","LAS PAMPAS","PALO QUEMADO"] }
    ]
  },
  {
    provincia: "CHIMBORAZO",
    cantones: [
      { canton: "RIOBAMBA", parroquias: ["LIZARZABURU","MALDONADO","VELASCO","VELOZ","YARUQUÍES","CACHA","CALPI","CUBIJÍES","FLORES","LICÁN","LICTO","PUNGALÁ","PUNÍN","QUIMIAG","SAN JUAN","SAN LUIS"] },
      { canton: "ALAUSÍ", parroquias: ["ALAUSÍ","ACHUPALLAS","CUMANDÁ","GUASUNTOS","HUIGRA","MULTITUD","PISTISHÍ","PUMALLACTA","SEVILLA","SIBAMBE","TIXÁN"] },
      { canton: "COLTA", parroquias: ["CAJABAMBA","SICALPA","VILLA LA UNIÓN","CAÑI","COLUMBE","JUAN DE VELASCO","SANTIAGO DE QUITO"] },
      { canton: "CHAMBO", parroquias: ["CHAMBO"] },
      { canton: "CHUNCHI", parroquias: ["CHUNCHI","CAPZOL","COMPUD","GONZOL","LLAGOS"] },
      { canton: "GUAMOTE", parroquias: ["GUAMOTE","CEBADAS","PALMIRA"] },
      { canton: "GUANO", parroquias: ["EL ROSARIO","LA MATRIZ","GUANO","GUANANDO","ILAPO","LA PROVIDENCIA","SAN ANDRÉS","SAN GERARDO DE PACAICAGUÁN","SAN ISIDRO DE PATULÚ","SAN JOSÉ DEL CHAZO","SANTA FÉ DE GALÁN","VALPARAÍSO"] },
      { canton: "PALLATANGA", parroquias: ["PALLATANGA"] },
      { canton: "PENIPE", parroquias: ["PENIPE","EL ALTAR","MATUS","PUELA","SAN ANTONIO DE BAYUSHIG","LA CANDELARIA","BILBAO"] },
      { canton: "CUMANDÁ", parroquias: ["CUMANDÁ"] }
    ]
  },
  {
    provincia: "EL ORO",
    cantones: [
      { canton: "MACHALA", parroquias: ["LA PROVIDENCIA","MACHALA","PUERTO BOLÍVAR","NUEVE DE MAYO","EL CAMBIO","EL RETIRO"] },
      { canton: "ARENILLAS", parroquias: ["ARENILLAS","CHACRAS","LA LIBERTAD","LAS LAJAS","PALMALES","CARCABÓN"] },
      { canton: "ATAHUALPA", parroquias: ["PACCHA","AYAPAMBA","CORDONCILLO","MILAGRO","SAN JOSÉ","SAN JUAN DE CERRO AZUL"] },
      { canton: "BALSAS", parroquias: ["BALSAS","BELLAMARÍA"] },
      { canton: "CHILLA", parroquias: ["CHILLA"] },
      { canton: "EL GUABO", parroquias: ["EL GUABO","BARBONES","LA IBERIA","TENDALES","RÍO BONITO"] },
      { canton: "HUAQUILLAS", parroquias: ["ECUADOR","EL PARAÍSO","HUALTACO","MILTON REYES","UNIÓN LOJANA","HUAQUILLAS"] },
      { canton: "MARCABELÍ", parroquias: ["MARCABELÍ","EL INGENIO"] },
      { canton: "PASAJE", parroquias: ["BOLÍVAR","LOMA DE FRANCO","OCHOA LEÓN","TRES CERRITOS","PASAJE","BUENAVISTA","CASACAY","LA PEAÑA","PROGRESO","UZHCURRUMI","CAÑAQUEMADA"] },
      { canton: "PIÑAS", parroquias: ["LA MATRIZ","LA SUSAYA","PIÑAS GRANDE","PIÑAS","CAPIRO","LA BOCANA","MOROMORO","PIEDRAS","SAN ROQUE","SARACAY"] },
      { canton: "PORTOVELO", parroquias: ["PORTOVELO","CURTINCAPA","MORALES","SALATÍ"] },
      { canton: "SANTA ROSA", parroquias: ["SANTA ROSA","PUERTO JELÍ","BALNEARIO JAMBELÍ","JUMÓN","NUEVO SANTA ROSA","BELLAVISTA","JAMBELÍ","LA AVANZADA","SAN ANTONIO","TORATA","VICTORIA","BELLAMARÍA"] },
      { canton: "ZARUMA", parroquias: ["ZARUMA","ABAÑÍN","ARCAPAMBA","GUANAZÁN","GUIZHAGUIÑA","HUERTAS","MALVAS","MULUNCAY GRANDE","SINSAO","SALVIAS"] },
      { canton: "LAS LAJAS", parroquias: ["LA VICTORIA","PLATANILLOS","VALLE HERMOSO","LA LIBERTAD","EL PARAÍSO","SAN ISIDRO"] }
    ]
  },
  {
    provincia: "ESMERALDAS",
    cantones: [
      { canton: "ESMERALDAS", parroquias: ["BARTOLOMÉ RUIZ","5 DE AGOSTO","ESMERALDAS","LUIS TELLO","SIMÓN PLATA TORRES","CAMARONES","CRNEL. CARLOS CONCHA TORRES","CHINCA","CHONTADURO","CHUMUNDÉ","LAGARTO","LA UNIÓN","MAJUA","MONTALVO","RÍO VERDE","ROCAFUERTE","SAN MATEO","SÚA","TABIAZO","TACHINA","TONCHIGÜE","VUELTA LARGA"] },
      { canton: "ELOY ALFARO", parroquias: ["VALDEZ (LIMONES)","ANCHAYACU","ATAHUALPA","BORBÓN","LA TOLA","LUIS VARGAS TORRES","MALDONADO","PAMPANAL DE BOLÍVAR","SAN FRANCISCO DE ONZOLE","SANTO DOMINGO DE ONZOLE","SELVA ALEGRE","TELEMBÍ","COLÓN ELOY DEL MARÍA","SAN JOSÉ DE CAYAPAS","TIMBIRÉ"] },
      { canton: "MUISNE", parroquias: ["MUISNE","BOLÍVAR","DAULE","GALERA","QUINGUE","SALIMA","SAN FRANCISCO","SAN GREGORIO","SAN JOSÉ DE CHAMANGA"] },
      { canton: "QUININDÉ", parroquias: ["ROSA ZÁRATE","CUBE","CHURA","MALIMPIA","VICHE","LA UNIÓN"] },
      { canton: "SAN LORENZO", parroquias: ["SAN LORENZO","ALTO TAMBO","ANCÓN","CALDERÓN","CARONDELET","5 DE JUNIO","CONCEPCIÓN","MATAJE","SAN JAVIER DE CACHAVÍ","SANTA RITA","TAMBILLO","TULULBÍ","URBINA"] },
      { canton: "ATACAMES", parroquias: ["ATACAMES","LA UNIÓN","SÚA","TONCHIGÜE","TONSUPA"] },
      { canton: "RIOVERDE", parroquias: ["RIOVERDE","CHONTADURO","CHUMUNDÉ","LAGARTO","MONTALVO","ROCAFUERTE"] },
      { canton: "LA CONCORDIA", parroquias: ["LA CONCORDIA","MONTERREY","LA VILLEGAS","PLAN PILOTO"] }
    ]
  },
  {
    provincia: "GUAYAS",
    cantones: [
      { canton: "GUAYAQUIL", parroquias: ["AYACUCHO","BOLÍVAR","CARBO","FEBRES CORDERO","GARCÍA MORENO","LETAMENDI","NUEVE DE OCTUBRE","OLMEDO","ROCA","ROCAFUERTE","SUCRE","TARQUI","URDANETA","XIMENA","PASCUALES","CHONGÓN","JUAN GÓMEZ RENDÓN","MORRO","POSORJA","PUNÁ","TENGUEL"] },
      { canton: "ALFREDO BAQUERIZO MORENO", parroquias: ["ALFREDO BAQUERIZO MORENO"] },
      { canton: "BALAO", parroquias: ["BALAO"] },
      { canton: "BALZAR", parroquias: ["BALZAR"] },
      { canton: "COLIMES", parroquias: ["COLIMES","SAN JACINTO"] },
      { canton: "DAULE", parroquias: ["DAULE","LA AURORA","BANIFE","EMILIANO CAICEDO MARCOS","MAGRO","PADRE JUAN BAUTISTA AGUIRRE","SANTA CLARA","VICENTE PIEDRAHITA","ISIDRO AYORA","JUAN BAUTISTA AGUIRRE","LAUREL","LIMONAL","LOMAS DE SARGENTILLO","LOS LOJAS","PIEDRAHITA"] },
      { canton: "DURÁN", parroquias: ["ELOY ALFARO (DURÁN)","EL RECREO"] },
      { canton: "EL EMPALME", parroquias: ["VELASCO IBARRA","GUAYAS","EL ROSARIO"] },
      { canton: "EL TRIUNFO", parroquias: ["EL TRIUNFO"] },
      { canton: "MILAGRO", parroquias: ["MILAGRO","CHOBO","GENERAL ELIZALDE","MARISCAL SUCRE","ROBERTO ASTUDILLO"] },
      { canton: "NARANJAL", parroquias: ["NARANJAL","JESÚS MARÍA","SAN CARLOS","SANTA ROSA DE FLANDES","TAURA"] },
      { canton: "NARANJITO", parroquias: ["NARANJITO"] },
      { canton: "PALESTINA", parroquias: ["PALESTINA"] },
      { canton: "PEDRO CARBO", parroquias: ["PEDRO CARBO","VALLE DE LA VIRGEN","SABANILLA"] },
      { canton: "SAMBORONDÓN", parroquias: ["SAMBORONDÓN","LA PUNTILLA","TARIFA"] },
      { canton: "SANTA LUCÍA", parroquias: ["SANTA LUCÍA"] },
      { canton: "SALITRE", parroquias: ["BOCANA","CANDILEJOS","CENTRAL","PARAÍSO","SAN MATEO","EL SALITRE","GRAL. VERNAZA","LA VICTORIA","JUNQUILLAL"] },
      { canton: "SAN JACINTO DE YAGUACHI", parroquias: ["SAN JACINTO DE YAGUACHI","CRNEL. LORENZO DE GARAICOA","CRNEL. MARCELINO MARIDUEÑA","GRAL. PEDRO J. MONTERO","SIMÓN BOLÍVAR","YAGUACHI VIEJO","VIRGEN DE FÁTIMA"] },
      { canton: "PLAYAS", parroquias: ["GENERAL VILLAMIL (PLAYAS)"] },
      { canton: "SIMÓN BOLÍVAR", parroquias: ["SIMÓN BOLÍVAR","CRNEL. LORENZO DE GARAICOA"] },
      { canton: "CORONEL MARCELINO MARIDUEÑA", parroquias: ["CORONEL MARCELINO MARIDUEÑA"] },
      { canton: "LOMAS DE SARGENTILLO", parroquias: ["LOMAS DE SARGENTILLO","ISIDRO AYORA"] },
      { canton: "NOBOL", parroquias: ["NARCISA DE JESÚS"] },
      { canton: "GENERAL ANTONIO ELIZALDE", parroquias: ["GENERAL ANTONIO ELIZALDE (BUCAY)"] },
      { canton: "ISIDRO AYORA", parroquias: ["ISIDRO AYORA"] }
    ]
  },
  {
    provincia: "IMBABURA",
    cantones: [
      { canton: "IBARRA", parroquias: ["CARANQUI","GUAYAQUIL DE ALPACHACA","SAGRARIO","SAN FRANCISCO","LA DOLOROSA DEL PRIORATO","SAN MIGUEL DE IBARRA","AMBUQUÍ","ANGOCHAGUA","CAROLINA","LA ESPERANZA","LITA","SALINAS","SAN ANTONIO"] },
      { canton: "ANTONIO ANTE", parroquias: ["ANDRADE MARÍN","ATUNTAQUI","IMBAYA","SAN FRANCISCO DE NATABUELA","SAN JOSÉ DE CHALTURA","SAN ROQUE"] },
      { canton: "COTACACHI", parroquias: ["SAGRARIO","SAN FRANCISCO","COTACACHI","APUELA","GARCÍA MORENO","IMANTAG","PEÑAHERRERA","PLAZA GUTIÉRREZ","QUIROGA","6 DE JULIO DE CUELLAJE","VACAS GALINDO"] },
      { canton: "OTAVALO", parroquias: ["JORDÁN","SAN LUIS","OTAVALO","DR. MIGUEL EGAS CABEZAS","EUGENIO ESPEJO","GONZÁLEZ SUÁREZ","PATAQUÍ","SAN JOSÉ DE QUICHINCHE","SAN JUAN DE ILUMÁN","SAN PABLO","SAN RAFAEL","SELVA ALEGRE"] },
      { canton: "PIMAMPIRO", parroquias: ["PIMAMPIRO","CHUGÁ","MARIANO ACOSTA","SAN FRANCISCO DE SIGSIPAMBA"] },
      { canton: "SAN MIGUEL DE URCUQUÍ", parroquias: ["URCUQUÍ","CAHUASQUÍ","LA MERCED DE BUENOS AIRES","PABLO ARENAS","SAN BLAS","TUMBABIRO"] }
    ]
  },
  {
    provincia: "LOJA",
    cantones: [
      { canton: "LOJA", parroquias: ["EL SAGRARIO","SAN SEBASTIÁN","SUCRE","VALLE","LOJA","CHANTACO","CHUQUIRIBAMBA","EL CISNE","GUALEL","JIMBILLA","MALACATOS","SAN LUCAS","SAN PEDRO DE VILCABAMBA","SANTIAGO","TAQUIL","VILCABAMBA","YANGANA","QUINARA"] },
      { canton: "CALVAS", parroquias: ["CARIAMANGA","CHILE","SAN VICENTE","COLAISACA","EL LUCERO","UTUANA","SANGUILLÍN"] },
      { canton: "CATAMAYO", parroquias: ["CATAMAYO","SAN JOSÉ","EL TAMBO","GUAYQUICHUMA","SAN PEDRO DE LA BENDITA","ZAMBI"] },
      { canton: "CELICA", parroquias: ["CELICA","CRUZPAMBA","CHAQUINAL","12 DE DICIEMBRE","PINDAL","POZUL","SABANILLA","TNTE. MAXIMILIANO RODRÍGUEZ LOAIZA"] },
      { canton: "CHAGUARPAMBA", parroquias: ["CHAGUARPAMBA","BUENAVISTA","EL ROSARIO","SANTA RUFINA","AMARILLOS"] },
      { canton: "ESPÍNDOLA", parroquias: ["AMALUZA","BELLAVISTA","JIMBURA","SANTA TERESITA","27 DE ABRIL","EL INGENIO","EL AIRO"] },
      { canton: "GONZANAMÁ", parroquias: ["GONZANAMÁ","CHANGAIMINA","FUNDOCHAMBA","NAMBACOLA","PURUNUMA","QUILANGA","SACAPALCA","SAN ANTONIO DE LAS ARADAS"] },
      { canton: "MACARÁ", parroquias: ["GENERAL ELOY ALFARO","MACARÁ","LARAMA","LA VICTORIA","SABIANGO"] },
      { canton: "PALTAS", parroquias: ["CATACOCHA","LOURDES","CANGONAMÁ","GUACHANAMÁ","LA TINGUE","LAURO GUERRERO","OLMEDO","ORIANGA","SAN ANTONIO","CASANGA","YAMANA"] },
      { canton: "PUYANGO", parroquias: ["ALAMOR","CIANO","EL ARENAL","EL LIMO","MERCADILLO","VICENTINO"] },
      { canton: "SARAGURO", parroquias: ["SARAGURO","EL PARAÍSO DE CELÉN","EL TABLÓN","LLUZHAPA","MANÚ","SAN ANTONIO DE QUMBE","SAN PABLO DE TENTA","SAN SEBASTIÁN DE YÚLUC","SELVA ALEGRE","URDANETA","SUMAYPAMBA"] },
      { canton: "SOZORANGA", parroquias: ["SOZORANGA","NUEVA FÁTIMA","TACAMOROS"] },
      { canton: "ZAPOTILLO", parroquias: ["ZAPOTILLO","MANGAHURCO","GARZAREAL","LIMONES","PALETILLAS","BOLASPAMBA"] },
      { canton: "PINDAL", parroquias: ["PINDAL","CHAQUINAL","12 DE DICIEMBRE","MILAGROS"] },
      { canton: "QUILANGA", parroquias: ["QUILANGA","FUNDOCHAMBA","SAN ANTONIO DE LAS ARADAS"] },
      { canton: "OLMEDO", parroquias: ["OLMEDO","LA TINGUE"] }
    ]
  },
  {
    provincia: "LOS RÍOS",
    cantones: [
      { canton: "BABAHOYO", parroquias: ["CLEMENTE BAQUERIZO","DR. CAMILO PONCE","BARREIRO","EL SALTO","BABAHOYO","BARREIRO (SANTA RITA)","CARACOL","FEBRES CORDERO","PIMOCHA","LA UNIÓN"] },
      { canton: "BABA", parroquias: ["BABA","GUARE","ISLA DE BEJUCAL"] },
      { canton: "MONTALVO", parroquias: ["MONTALVO"] },
      { canton: "PUEBLOVIEJO", parroquias: ["PUEBLOVIEJO","PUERTO PECHICHE","SAN JUAN"] },
      { canton: "QUEVEDO", parroquias: ["QUEVEDO","SAN CAMILO","SAN JOSÉ","GUAYACÁN","NICOLÁS INFANTE DÍAZ","SAN CRISTÓBAL","SIETE DE OCTUBRE","24 DE MAYO","VENUS DEL RÍO QUEVEDO","VIVA ALFARO","BUENA FÉ","MOCACHE","SAN CARLOS","VALENCIA","LA ESPERANZA"] },
      { canton: "URDANETA", parroquias: ["CATARAMA","RICAURTE"] },
      { canton: "VENTANAS", parroquias: ["10 DE NOVIEMBRE","VENTANAS","QUINSALOMA","ZAPOTAL","CHACARITA","LOS ÁNGELES"] },
      { canton: "VINCES", parroquias: ["VINCES","ANTONIO SOTOMAYOR","PALENQUE"] },
      { canton: "PALENQUE", parroquias: ["PALENQUE"] },
      { canton: "BUENA FÉ", parroquias: ["SAN JACINTO DE BUENA FÉ","7 DE AGOSTO","11 DE OCTUBRE","PATRICIA PILAR"] },
      { canton: "VALENCIA", parroquias: ["VALENCIA"] },
      { canton: "MOCACHE", parroquias: ["MOCACHE"] },
      { canton: "QUINSALOMA", parroquias: ["QUINSALOMA"] }
    ]
  },
  {
    provincia: "MANABÍ",
    cantones: [
      { canton: "PORTOVIEJO", parroquias: ["PORTOVIEJO","12 DE MARZO","COLÓN","PICOAZÁ","SAN PABLO","ANDRÉS DE VERA","FRANCISCO PACHECO","18 DE OCTUBRE","SIMÓN BOLÍVAR","ABDÓN CALDERÓN","ALHAJUELA","CRUCITA","PUEBLO NUEVO","RIOCHICO","SAN PLÁCIDO","CHIRIJOS"] },
      { canton: "BOLÍVAR", parroquias: ["CALCETA","MEMBRILLO","QUIROGA"] },
      { canton: "CHONE", parroquias: ["CHONE","SANTA RITA","BOYACÁ","CANUTO","CONVENTO","CHIBUNGA","ELOY ALFARO","RICAURTE","SAN ANTONIO"] },
      { canton: "EL CARMEN", parroquias: ["EL CARMEN","4 DE DICIEMBRE","WILFRIDO LOOR MOREIRA","SAN PEDRO DE SUMA"] },
      { canton: "FLAVIO ALFARO", parroquias: ["FLAVIO ALFARO","SAN FRANCISCO DE NOVILLO","ZAPALLO"] },
      { canton: "JIPIJAPA", parroquias: ["DR. MIGUEL MORÁN LUCIO","MANUEL INOCENCIO PARRALES Y GUALE","SAN LORENZO DE JIPIJAPA","JIPIJAPA","AMÉRICA","EL ANEGADO","JULCUY","LA UNIÓN","MACHALILLA","MEMBRILLAL","PEDRO PABLO GÓMEZ","PUERTO DE CAYO","PUERTO LÓPEZ"] },
      { canton: "JUNÍN", parroquias: ["JUNÍN"] },
      { canton: "MANTA", parroquias: ["LOS ESTEROS","MANTA","SAN MATEO","TARQUI","ELOY ALFARO","SAN LORENZO","SANTA MARIANITA"] },
      { canton: "MONTECRISTI", parroquias: ["ANÍBAL SAN ANDRÉS","MONTECRISTI","EL COLORADO","GENERAL ELOY ALFARO","LEONIDAS PROAÑO","JARAMIJÓ","LA PILA"] },
      { canton: "PAJÁN", parroquias: ["PAJÁN","CAMPOZANO","CASCOL","GUALE","LASCANO"] },
      { canton: "PICHINCHA", parroquias: ["PICHINCHA","BARRAGANETE","SAN SEBASTIÁN"] },
      { canton: "ROCAFUERTE", parroquias: ["ROCAFUERTE"] },
      { canton: "SANTA ANA", parroquias: ["SANTA ANA","LODANA","SANTA ANA DE VUELTA LARGA","AYACUCHO","HONORATO VÁSQUEZ","LA UNIÓN","OLMEDO","SAN PABLO"] },
      { canton: "SUCRE", parroquias: ["BAHÍA DE CARÁQUEZ","LEONIDAS PLAZA GUTIÉRREZ","CANOA","COJIMÍES","CHARAPOTÓ","10 DE AGOSTO","JAMA","PEDERNALES","SAN ISIDRO","SAN VICENTE"] },
      { canton: "TOSAGUA", parroquias: ["TOSAGUA","BACHILLERO","ÁNGEL PEDRO GILER"] },
      { canton: "24 DE MAYO", parroquias: ["SUCRE","BELLAVISTA","NOBOA","ARQ. SIXTO DURÁN BALLÉN"] },
      { canton: "PEDERNALES", parroquias: ["PEDERNALES","COJIMÍES","10 DE AGOSTO","ATAHUALPA"] },
      { canton: "OLMEDO", parroquias: ["OLMEDO"] },
      { canton: "PUERTO LÓPEZ", parroquias: ["PUERTO LÓPEZ","MACHALILLA","SALANGO"] },
      { canton: "JAMA", parroquias: ["JAMA"] },
      { canton: "JARAMIJÓ", parroquias: ["JARAMIJÓ"] },
      { canton: "SAN VICENTE", parroquias: ["SAN VICENTE","CANOA"] }
    ]
  },
  {
    provincia: "MORONA SANTIAGO",
    cantones: [
      { canton: "MORONA", parroquias: ["MACAS","ALSHI","CHIGUAZA","GENERAL PROAÑO","HUASAGA","MACUMA","SAN ISIDRO","SEVILLA DON BOSCO","SINAÍ","TAISHA","ZUÑA","TUUTINENTZA","CUCHAENTZA","SAN JOSÉ DE MORONA","RÍO BLANCO"] },
      { canton: "GUALAQUIZA", parroquias: ["GUALAQUIZA","MERCEDES MOLINA","AMAZONAS","BERMEJOS","BOMBOIZA","CHIGÜINDA","EL ROSARIO","NUEVA TARQUI","SAN MIGUEL DE CUYES","EL IDEAL"] },
      { canton: "LIMÓN INDANZA", parroquias: ["GENERAL LEONIDAS PLAZA GUTIÉRREZ","INDANZA","PAN DE AZÚCAR","SAN ANTONIO","SAN CARLOS DE LIMÓN","SAN JUAN BOSCO","SAN MIGUEL DE CONCHAY","SANTA SUSANA DE CHIVIAZA","YUNGANZA"] },
      { canton: "PALORA", parroquias: ["PALORA","ARAPICOS","CUMANDÁ","HUAMBOYA","SANGAY"] },
      { canton: "SANTIAGO", parroquias: ["SANTIAGO DE MÉNDEZ","COPAL","CHUPIANZA","PATUCA","SAN LUIS DE EL ACHO","SANTIAGO","TAYUZA","SAN FRANCISCO DE CHINIMBIMI"] },
      { canton: "SUCÚA", parroquias: ["SUCÚA","ASUNCIÓN","HUAMBI","LOGROÑO","YAUPI","SANTA MARIANITA DE JESÚS"] },
      { canton: "HUAMBOYA", parroquias: ["HUAMBOYA","CHIGUAZA","PABLO SEXTO"] },
      { canton: "SAN JUAN BOSCO", parroquias: ["SAN JUAN BOSCO","PAN DE AZÚCAR","SAN CARLOS DE LIMÓN","SAN JACINTO DE WAKAMBEIS","SANTIAGO DE PANANZA"] },
      { canton: "TAISHA", parroquias: ["TAISHA","HUASAGA","MACUMA","TUUTINENTZA","PUMPUENTSA"] },
      { canton: "LOGROÑO", parroquias: ["LOGROÑO","YAUPI","SHIMPIS"] },
      { canton: "PABLO SEXTO", parroquias: ["PABLO SEXTO"] },
      { canton: "TIWINTZA", parroquias: ["SANTIAGO","SAN JOSÉ DE MORONA"] }
    ]
  },
  {
    provincia: "NAPO",
    cantones: [
      { canton: "TENA", parroquias: ["TENA","AHUANO","CARLOS JULIO AROSEMENA TOLA","CHONTAPUNTA","PANO","PUERTO MISAHUALLI","PUERTO NAPO","TÁLAG","SAN JUAN DE MUYUNA"] },
      { canton: "ARCHIDONA", parroquias: ["ARCHIDONA","AVILA","COTUNDO","LORETO","SAN PABLO DE USHPAYACU","PUERTO MURIALDO"] },
      { canton: "EL CHACO", parroquias: ["EL CHACO","GONZALO DÍAZ DE PINEDA","LINARES","OYACACHI","SANTA ROSA","SARDINAS"] },
      { canton: "QUIJOS", parroquias: ["BAEZA","COSANGA","CUYUJA","PAPALLACTA","SAN FRANCISCO DE BORJA","SAN JOSÉ DEL PAYAMINO","SUMACO"] },
      { canton: "CARLOS JULIO AROSEMENA TOLA", parroquias: ["CARLOS JULIO AROSEMENA TOLA"] }
    ]
  },
  {
    provincia: "PASTAZA",
    cantones: [
      { canton: "PASTAZA", parroquias: ["PUYO","ARAJUNO","CANELOS","CURARAY","DIEZ DE AGOSTO","FÁTIMA","MONTALVO","POMONA","RÍO CORRIENTES","RÍO TIGRE","SANTA CLARA","SARAYACU","SIMÓN BOLÍVAR","TARQUI","TENIENTE HUGO ORTIZ","VERACRUZ","EL TRIUNFO"] },
      { canton: "MERA", parroquias: ["MERA","MADRE TIERRA","SHELL"] },
      { canton: "SANTA CLARA", parroquias: ["SANTA CLARA","SAN JOSÉ"] },
      { canton: "ARAJUNO", parroquias: ["ARAJUNO","CURARAY"] }
    ]
  },
  {
    provincia: "PICHINCHA",
    cantones: [
      { canton: "QUITO", parroquias: ["BELISARIO QUEVEDO","CARCELÉN","CENTRO HISTÓRICO","COCHAPAMBA","COMITÉ DEL PUEBLO","COTOCOLLAO","CHILIBULO","CHILLOGALLO","CHIMBACALLE","EL CONDADO","GUAMANÍ","IÑAQUITO","ITCHIMBÍA","JIPIJAPA","KENNEDY","LA ARGELIA","LA CONCEPCIÓN","LA ECUATORIANA","LA FERROVIARIA","LA LIBERTAD","LA MAGDALENA","LA MENA","MARISCAL SUCRE","PONCEANO","PUENGASÍ","QUITUMBE","RUMIPAMBA","SAN BARTOLO","SAN ISIDRO DEL INCA","SAN JUAN","SOLANDA","TURUBAMBA","ALANGASÍ","AMAGUAÑA","ATAHUALPA","CALACALÍ","CALDERÓN","CONOCOTO","CUMBAYÁ","CHAVEZPAMBA","CHECA","EL QUINCHE","GUALEA","GUANGOPOLO","GUAYLLABAMBA","LA MERCED","LLANO CHICO","LLOA","MINDO","NANEGAL","NANEGALITO","NAYÓN","NONO","PACTO","PEDRO VICENTE MALDONADO","PERUCHO","PIFO","PÍNTAG","POMASQUI","PUÉLLARO","PUEMBO","SAN ANTONIO","SAN JOSÉ DE MINAS","SAN MIGUEL DE LOS BANCOS","TABABELA","TUMBACO","YARUQUÍ","ZAMBIZA","PUERTO QUITO"] },
      { canton: "CAYAMBE", parroquias: ["AYORA","CAYAMBE","JUAN MONTALVO","ASCÁZUBI","CANGAHUA","OLMEDO","OTÓN","SANTA ROSA DE CUZUBAMBA"] },
      { canton: "MEJÍA", parroquias: ["MACHACHI","ALÓAG","ALOASÍ","CUTUGLAHUA","EL CHAUPI","MANUEL CORNEJO ASTORGA","TAMBILLO","UYUMBICHO"] },
      { canton: "PEDRO MONCAYO", parroquias: ["TABACUNDO","LA ESPERANZA","MALCHINGUÍ","TOCACHI","TUPIGACHI"] },
      { canton: "RUMIÑAHUI", parroquias: ["SANGOLQUÍ","SAN PEDRO DE TABOADA","SAN RAFAEL","COTOGCHOA","RUMIPAMBA"] },
      { canton: "SAN MIGUEL DE LOS BANCOS", parroquias: ["SAN MIGUEL DE LOS BANCOS","MINDO","PEDRO VICENTE MALDONADO","PUERTO QUITO"] },
      { canton: "PEDRO VICENTE MALDONADO", parroquias: ["PEDRO VICENTE MALDONADO"] },
      { canton: "PUERTO QUITO", parroquias: ["PUERTO QUITO"] }
    ]
  },
  {
    provincia: "TUNGURAHUA",
    cantones: [
      { canton: "AMBATO", parroquias: ["ATOCHA – FICOA","CELIANO MONGE","HUACHI CHICO","HUACHI LORETO","LA MERCED","LA PENÍNSULA","MATRIZ","PISHILATA","SAN FRANCISCO","AMBATO","AMBATILLO","ATAHUALPA","AUGUSTO N. MARTÍNEZ","CONSTANTINO FERNÁNDEZ","HUACHI GRANDE","IZAMBA","JUAN BENIGNO VELA","MONTALVO","PASA","PICAIGUA","PILAHÜÍN","QUISAPINCHA","SAN BARTOLOMÉ DE PINLLOG","SAN FERNANDO","SANTA ROSA","TOTORAS","CUNCHIBAMBA","UNAMUNCHO"] },
      { canton: "BAÑOS DE AGUA SANTA", parroquias: ["BAÑOS DE AGUA SANTA","LLIGUA","RÍO NEGRO","RÍO VERDE","ULBA"] },
      { canton: "CEVALLOS", parroquias: ["CEVALLOS"] },
      { canton: "MOCHA", parroquias: ["MOCHA","PINGUILÍ"] },
      { canton: "PATATE", parroquias: ["PATATE","EL TRIUNFO","LOS ANDES","SUCRE"] },
      { canton: "QUERO", parroquias: ["QUERO","RUMIPAMBA","YANAYACU - MOCHAPATA"] },
      { canton: "SAN PEDRO DE PELILEO", parroquias: ["PELILEO","PELILEO GRANDE","BENÍTEZ","BOLÍVAR","COTALÓ","CHIQUICHA","EL ROSARIO","GARCÍA MORENO","HUAMBALÓ","SALASACA"] },
      { canton: "SANTIAGO DE PÍLLARO", parroquias: ["CIUDAD NUEVA","PÍLLARO","BAQUERIZO MORENO","EMILIO MARÍA TERÁN","MARCOS ESPINEL","PRESIDENTE URBINA","SAN ANDRÉS","SAN JOSÉ DE POALÓ","SAN MIGUELITO"] },
      { canton: "TISALEO", parroquias: ["TISALEO","QUINCHICOTO"] }
    ]
  },
  {
    provincia: "ZAMORA CHINCHIPE",
    cantones: [
      { canton: "ZAMORA", parroquias: ["EL LIMÓN","ZAMORA","CUMBARATZA","GUADALUPE","IMBANA","PAQUISHA","SABANILLA","TIMBARA","ZUMBI","SAN CARLOS DE LAS MINAS"] },
      { canton: "CHINCHIPE", parroquias: ["ZUMBA","CHITO","EL CHORRO","EL PORVENIR DEL CARMEN","LA CHONTA","PALANDA","PUCAPAMBA","SAN FRANCISCO DEL VERGEL","VALLADOLID","SAN ANDRÉS"] },
      { canton: "NANGARITZA", parroquias: ["GUAYZIMI","ZURMI","NUEVO PARAÍSO"] },
      { canton: "YACUAMBI", parroquias: ["28 DE MAYO","LA PAZ","TUTUPALI"] },
      { canton: "YANTZAZA", parroquias: ["YANTZAZA","CHICAÑA","EL PANGUI","LOS ENCUENTROS"] },
      { canton: "EL PANGUI", parroquias: ["EL PANGUI","EL GUISME","PACHICUTZA","TUNDAYME"] },
      { canton: "CENTINELA DEL CÓNDOR", parroquias: ["ZUMBI","PAQUISHA","TRIUNFO-DORADO","PANGUINTZA"] },
      { canton: "PALANDA", parroquias: ["PALANDA","EL PORVENIR DEL CARMEN","SAN FRANCISCO DEL VERGEL","VALLADOLID","LA CANELA"] },
      { canton: "PAQUISHA", parroquias: ["PAQUISHA","BELLAVISTA","NUEVO QUITO"] }
    ]
  },
  {
    provincia: "GALÁPAGOS",
    cantones: [
      { canton: "SAN CRISTÓBAL", parroquias: ["PUERTO BAQUERIZO MORENO","EL PROGRESO","ISLA SANTA MARÍA (FLOREANA)"] },
      { canton: "ISABELA", parroquias: ["PUERTO VILLAMIL","TOMÁS DE BERLANGA"] },
      { canton: "SANTA CRUZ", parroquias: ["PUERTO AYORA","BELLAVISTA","SANTA ROSA"] }
    ]
  },
  {
    provincia: "SUCUMBÍOS",
    cantones: [
      { canton: "LAGO AGRIO", parroquias: ["NUEVA LOJA","CUYABENO","DURENO","GENERAL FARFÁN","TARAPOA","EL ENO","PACAYACU","JAMBELÍ","SANTA CECILIA","AGUAS NEGRAS"] },
      { canton: "GONZALO PIZARRO", parroquias: ["EL DORADO DE CASCALES","EL REVENTADOR","GONZALO PIZARRO","LUMBAQUÍ","PUERTO LIBRE","SANTA ROSA DE SUCUMBÍOS"] },
      { canton: "PUTUMAYO", parroquias: ["PUERTO EL CARMEN DEL PUTUMAYO","PALMA ROJA","PUERTO BOLÍVAR","PUERTO RODRÍGUEZ","SANTA ELENA"] },
      { canton: "SHUSHUFINDI", parroquias: ["SHUSHUFINDI","LIMONCOCHA","PAÑACOCHA","SAN ROQUE","SAN PEDRO DE LOS COFANES","SIETE DE JULIO"] },
      { canton: "SUCUMBÍOS", parroquias: ["LA BONITA","EL PLAYÓN DE SAN FRANCISCO","LA SOFÍA","ROSA FLORIDA","SANTA BÁRBARA"] },
      { canton: "CASCALES", parroquias: ["EL DORADO DE CASCALES","SANTA ROSA DE SUCUMBÍOS","SEVILLA"] },
      { canton: "CUYABENO", parroquias: ["TARAPOA","CUYABENO","AGUAS NEGRAS"] }
    ]
  },
  {
    provincia: "ORELLANA",
    cantones: [
      { canton: "ORELLANA", parroquias: ["PUERTO FRANCISCO DE ORELLANA","DAYUMA","TARACOA","ALEJANDRO LABAKA","EL DORADO","EL EDÉN","GARCÍA MORENO","INÉS ARANGO","LA BELLEZA","NUEVO PARAÍSO","SAN JOSÉ DE GUAYUSA","SAN LUIS DE ARMENIA"] },
      { canton: "AGUARICO", parroquias: ["TIPITINI","NUEVO ROCAFUERTE","CAPITÁN AUGUSTO RIVADENEYRA","CONONACO","SANTA MARÍA DE HUIRIRIMA","TIPUTINI","YASUNÍ"] },
      { canton: "LA JOYA DE LOS SACHAS", parroquias: ["LA JOYA DE LOS SACHAS","ENOKANQUI","POMPEYA","SAN CARLOS","SAN SEBASTIÁN DEL COCA","LAGO SAN PEDRO","RUMIPAMBA","TRES DE NOVIEMBRE","UNIÓN MILAGREÑA"] },
      { canton: "LORETO", parroquias: ["LORETO","AVILA","PUERTO MURIALDO","SAN JOSÉ DE PAYAMINO","SAN JOSÉ DE DAHUANO","SAN VICENTE DE HUATICOCHA"] }
    ]
  },
  {
    provincia: "SANTO DOMINGO DE LOS TSÁCHILAS",
    cantones: [
      { canton: "SANTO DOMINGO", parroquias: ["ABRAHAM CALAZACÓN","BOMBOLÍ","CHIGUILPE","RÍO TOACHI","RÍO VERDE","SANTO DOMINGO DE LOS COLORADOS","ZARACAY","ALLURIQUÍN","PUERTO LIMÓN","LUZ DE AMÉRICA","SAN JACINTO DEL BÚA","VALLE HERMOSO","EL ESFUERZO","SANTA MARÍA DEL TOACHI"] }
    ]
  },
  {
    provincia: "SANTA ELENA",
    cantones: [
      { canton: "SANTA ELENA", parroquias: ["BALLENITA","SANTA ELENA","ATAHUALPA","COLONCHE","CHANDUY","MANGLARALTO","SIMÓN BOLÍVAR","SAN JOSÉ DE ANCÓN"] },
      { canton: "LA LIBERTAD", parroquias: ["LA LIBERTAD"] },
      { canton: "SALINAS", parroquias: ["CARLOS ESPINOZA LARREA","GRAL. ALBERTO ENRÍQUEZ GALLO","VICENTE ROCAFUERTE","SANTA ROSA","SALINAS","ANCONCITO","JOSÉ LUIS TAMAYO"] }
    ]
  }
];
