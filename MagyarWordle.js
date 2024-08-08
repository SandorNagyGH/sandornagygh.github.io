const ListA=[["abban", "Abbás", "abból", "Abbot", "abcúg", "ábécé", "ablak", "Abony", "abrak", "ábrák", "ábrán", "ábrát", "Ábris", "acélt", "achát", "Acsád", "ácsol", "Adács", "Ádánd", "adása", "adást", "addig", "Adina", "adják", "adnak", "adnám", "adódó", "Adolf", "adoma", "Adony", "adott", "adtad", "adtál", "adtam", "aduja", "adunk", "afgán", "Agárd", "Agáta", "Ágnes", "Ágost", "Ágota", "agrár", "aguti", "agyag", "agyar", "ágyas", "ágyás", "agyat", "agyát", "ágyat", "ágyaz", "ágyba", "ágyék", "ágyúi", "ágyút", "ágyúz", "ahhoz", "áhító", "Ahmed", "ahogy", "ahova", "ahová", "ajánl", "Ajhun", "ajkak", "ajkat", "ajkát", "ajóka", "ajtók", "ajtón", "ajtót", "ájult", "Akács", "akard", "akaró", "akart", "akció", "akire", "akkor", "aknát", "akona", "aktív", "aktot", "aktus", "aláás", "alább", "aláír", "alaki", "alakú", "alant", "alany", "alapú", "álarc", "Alárd", "alatt", "albán", "Albin", "album", "álcáz", "alcím", "Aldán", "áldás", "áldja", "Áldor", "áldoz", "áldva", "alélt", "Aléna", "Alexa", "alfaj", "alfél", "Algyő", "álhat", "álhír", "alibi", "Alida", "Alina", "alján", "aljas", "alkar", "alkat", "alkot", "alkóv", "alkut", "álláb", "állag", "állal", "állam", "állás", "állat", "állát", "állig", "állít", "állja", "állni", "állok", "állók", "állta", "állva", "Almár", "almás", "álmát", "álmok", "álmos", "almot", "álmot", "almoz", "álnév", "álnok", "alóla", "Alpár", "altáj", "által", "áltat", "aludt", "aluli", "alvás", "alváz", "Alvin", "Amadé", "Amand", "Amáta", "Ambos", "ámbra", "amely", "amibe", "Amina", "aminő", "amint", "amire", "ámító", "ámokr", "amorf", "amott", "amőba", "amper", "amúgy", "ámuló", "Andor", "Andos", "André", "Anett", "angin", "angol", "Anikó", "Anita", "annak", "annál", "annyi", "Antal", "antik", "Antos", "anyag", "anyai", "anyák", "anyám", "anyós", "Ányos"],
    ["apáca", "apadó", "Apagy", "apait", "apály", "ápoló", "ápolt", "aprít", "apród", "aprót", "apuci", "apuka", "áradó", "áramú", "arany", "arány", "árast", "arasz", "arató", "árboc", "árból", "arbor", "arcán", "arcát", "arcba", "arcél", "arcon", "arcot", "arcra", "arctg", "arcth", "arcul", "aréna", "Arián", "Ariel", "Arika", "Arion", "Arkád", "árkol", "árkon", "árkos", "árkot", "Arlen", "Ármin", "Arnót", "árnya", "aroma", "Árpád", "Árpás", "árpát", "árral", "árrés", "arról", "ártér", "Artúr", "áruba", "áruló", "árván", "Arvid", "árvíz", "arzén", "ásató", "ásító", "Asóka", "ásott", "ástad", "ástam", "aszal", "Aszár", "ászka", "Aszód", "átadó", "Atala", "átáll", "Átány", "átdöf", "átejt", "átélt", "átfed", "átfog", "átfon", "átfúr", "átfut", "áthág", "áthat", "áthoz", "áthúz", "átjár", "átjön", "átjut", "átkel", "átkos", "átkoz", "átköt", "átkúr", "átlag", "átlát", "átlép", "átlós", "átmér", "átmos", "átnéz", "atoll", "atomi", "átönt", "átrág", "átrak", "átráz", "attól", "áttol", "áttör", "átütő", "átvág", "átver", "atyai", "atyák", "atyám", "augur", "Aurél", "autóé", "autók", "autón", "autós", "autót", "avagy", "avizó", "avuló", "avval", "azért", "aznap", "azóta", "ázott", "Ázsia", "ázsió", "aztán", "áztat", "azték", "azzal", "b-hez", "bábbá", "Bábel", "babér", "Babót", "Bácsa", "bácsi", "badar", "bádog", "Bagod", "bagót", "bájak", "Baján", "baját", "bajba", "Bajna", "bajod", "bajok", "bajom", "bajos", "bájos", "Bajót", "bakot", "Baksa", "Balár", "báláz", "Baldó", "balek", "balhé", "bálna", "balos", "balra", "Balsa", "balta", "balul", "bamba", "bámia", "bámul", "banán", "bánat", "banda", "Bandó", "bánik", "bánja", "banki", "bánni", "bánom", "Bános", "bántó", "banya", "bánya", "barát", "bárca", "Bardó", "barit", "bárja", "barka", "bárka", "bárki", "barkó", "bármi", "barna"],
    ["barom", "Barót", "Baskó", "baszk", "batár", "bátor", "Bátya", "Batyk", "batyu", "Bazil", "bázis", "Bazsi", "Bazsó", "beadó", "beáll", "Beáta", "becéz", "Becse", "bécsi", "bedob", "bedöf", "bedől", "bedug", "beéri", "beeső", "befal", "befed", "befog", "befon", "befőz", "befúj", "befut", "befűt", "befűz", "béget", "behív", "behoz", "behúz", "behűt", "bejár", "bejön", "bejut", "bekap", "Békás", "békát", "beken", "békén", "bekér", "békés", "békét", "beköp", "beköt", "belát", "beléd", "Beled", "Beleg", "belek", "bélel", "belem", "belep", "belép", "bélés", "belét", "belga", "Bella", "belóg", "belök", "belső", "belül", "bemos", "Bence", "Bende", "bendő", "benéz", "bénít", "Benke", "Benkő", "benne", "benső", "beolt", "beönt", "berak", "bérbe", "berek", "bérek", "bérel", "Beret", "Berki", "bérlő", "Berta", "berúg", "besóz", "besúg", "besül", "besző", "beteg", "bétel", "betér", "betét", "betol", "beton", "betöm", "betör", "Betta", "betűk", "betűs", "betűt", "betűz", "beüti", "bevág", "bever", "bevés", "bevet", "bevon", "bezár", "bezúz", "bíbic", "bibit", "bíbor", "bicaj", "biceg", "bigyó", "Bikád", "Bikal", "Bikol", "bimbó", "bingó", "binom", "bióta", "bírák", "bírál", "bírás", "bírja", "birka", "bírni", "bírói", "bírom", "bírta", "bison", "bízik", "bízni", "bízom", "bizsu", "bízva", "bízza", "blokk", "blöff", "blues", "Bócsa", "bódít", "Bódog", "Bodor", "bodza", "bogár", "Bogát", "bogot", "bohém", "bohóc", "Bokod", "bókok", "bókol", "bokor", "boksz", "Bolda", "bolha", "Bolhó", "bolsi", "bolyh", "bomba", "bomol", "bongó", "Bónis", "bontó", "borda", "bordó", "Boris", "borít", "borjú", "borkő", "borok", "boros", "borsó", "borul", "borús", "Botár", "Botfa", "botja", "botló", "botos", "bóvli", "boxer", "boxos", "Boyle", "bozót", "bödön", "böfög", "bőgés", "bőgni", "bögre", "bökés"],
    ["bölcs", "bőrbe", "Börcs", "bőrét", "bőrig", "bőrön", "bőröz", "bőség", "bőven", "bővít", "bővül", "bözsi", "brága", "bravó", "Brian", "brigg", "broki", "bronz", "bross", "brown", "Brúnó", "búbos", "bucka", "Bucsa", "búcsú", "Bucsu", "Budai", "buffa", "Bugac", "búgás", "búgat", "bugyi", "Buják", "buján", "búját", "bújik", "bújja", "bújni", "bukás", "bukik", "bukta", "bukva", "bulla", "bumtő", "bunda", "bunkó", "bunyó", "burok", "búsan", "búsba", "búsul", "bután", "butik", "butil", "butít", "bútor", "butul", "butus", "búvár", "Buzád", "búzát", "buzgó", "buzis", "buzit", "buzog", "buzul", "bűbáj", "büdös", "bűnbe", "bűnei", "bűnét", "bűnök", "bűnös", "bűnre", "Büssü", "bűvös", "bűzlő", "bűzös", "cafat", "cafka", "cáfol", "Cecil", "cedál", "cégek", "cegél", "cégen", "cégér", "céget", "cékla", "célba", "Célia", "célig", "célja", "cella", "célod", "célok", "célom", "célon", "céloz", "célra", "célzó", "cérna", "cetli", "cézár", "chile", "cibál", "cibet", "cicik", "cicus", "cifra", "cigit", "cikis", "címek", "címem", "címen", "címén", "címer", "címet", "címez", "címke", "cimpa", "cinke", "cipel", "cipőn", "cipős", "cipőt", "Cirák", "cirka", "Círus", "civil", "compó", "coulé", "cölöp", "cövek", "Csaba", "csákó", "csali", "csaló", "csánk", "Csány", "csapa", "Csapi", "csapj", "csapó", "csápú", "csata", "Csató", "csáva", "csávó", "csecs", "Csegő", "Csehi", "csehó", "Cseke", "csekk", "cselt", "csend", "cseng", "Csépa", "csepp", "csepű", "csere", "csert", "cséve", "cséza", "csibe", "csiga", "csikk", "csikó", "csini", "csíny", "csipa", "csípd", "csípi", "csípő", "csíra", "csitt", "csoda", "csóka", "Csoma", "csomó", "csonk", "csont", "csóró", "csőág", "csőbe", "csöcs", "Csöde", "csöpp", "csőrű", "Csösz", "csöve", "csövű", "csúcs", "csuda", "csuka", "csupa", "csüng", "cucca", "cucli"],
    ["cudar", "cúgos", "cukor", "cukra", "curry", "d-hez", "Dabas", "dacol", "dacos", "dadog", "dagad", "daják", "dajka", "dália", "Dalma", "dalok", "dalol", "dalos", "Damak", "Damáz", "damil", "Dámóc", "Damos", "Dános", "Dante", "darab", "darál", "dárda", "daróc", "darun", "dátum", "dauer", "Dávid", "dékán", "delel", "delén", "delet", "Délia", "délre", "delta", "démon", "dendi", "Dénes", "derce", "derék", "deres", "derít", "derma", "derül", "derűs", "derűt", "Deszk", "Detek", "Detre", "detto", "dettó", "dévaj", "dézsa", "Dezső", "diáké", "Diána", "dicső", "didik", "didkó", "diéta", "díjat", "díjaz", "díjra", "dilis", "dingi", "dingy", "dinka", "Diósd", "dipól", "dísze", "díszt", "Ditta", "divat", "dívik", "dobál", "dobás", "dobog", "dobol", "dobos", "dobot", "doboz", "Dobri", "dobva", "dogma", "dohog", "dohos", "dolga", "Dolli", "dolog", "Domán", "domén", "Domos", "Donát", "donga", "dongó", "donor", "Dorog", "dózer", "döcög", "döfés", "dögös", "dőlés", "dőlve", "dölyf", "Dömös", "döngő", "Döníz", "döntő", "dönts", "dörej", "dörgő", "dörög", "drága", "dráma", "drapp", "dublé", "dúcfa", "dúcol", "dudák", "dudál", "dudás", "dúdol", "dudor", "dudva", "duett", "dugás", "dugig", "dugja", "dugós", "dugót", "duhaj", "dúlva", "dumál", "dumás", "dumát", "dummy", "dundi", "dupla", "durva", "dúsan", "Dusán", "dúsít", "dutyi", "dühbe", "dühét", "dühít", "dühös", "dürög", "dzsem", "dzsip", "ebadó", "ebben", "ebből", "ébred", "ébren", "Ecséd", "Ecser", "ecset", "eddig", "edény", "Edgár", "Edina", "Edvin", "edzés", "égből", "égési", "egész", "égető", "égett", "eggyé", "égnek", "égően", "égövi", "egres", "égtáj", "égtem", "egybe", "egyéb", "Egyed", "Egyek", "egyel", "egyen", "egyén", "egyes", "egyet", "egyig", "egyik", "egyke", "egyre", "éhbér", "ehető", "éhező", "ehhez", "éhkór", "éhség"],
    ["éjfél", "éjjel", "ejtés", "ejtsd", "ékelő", "ekére", "ekhós", "ékkel", "ekkor", "ékorr", "eladó", "eláll", "elbír", "éldat", "eldob", "eldug", "elébe", "elege", "elégő", "elegy", "eleje", "eléje", "eleji", "elejt", "elejű", "eleme", "elemi", "élénk", "élére", "eléri", "elérő", "élete", "életű", "eleve", "elfed", "elfér", "elfog", "elfúj", "elfut", "elhal", "elhál", "elhív", "elhoz", "elhúz", "Éliás", "Elihu", "Elina", "Eliza", "eljár", "éljen", "eljön", "eljut", "elkap", "elkel", "elken", "elköp", "elköt", "elkúr", "Ellák", "ellát", "ellen", "ellep", "ellép", "ellet", "ellik", "ellop", "ellök", "Elmár", "elmés", "elmos", "élnek", "élnem", "elnéz", "elnök", "elnyű", "elold", "elolt", "előad", "előás", "előbb", "élőfa", "előír", "előke", "elönt", "előny", "előre", "előtt", "előzi", "előző", "elrág", "elrak", "elrúg", "elsóz", "elsős", "elsül", "elsüt", "éltek", "éltem", "eltép", "eltér", "éltet", "eltol", "Elton", "eltöm", "eltör", "eltűr", "elült", "élünk", "elüti", "elütő", "elűzi", "elvág", "elvár", "elver", "elvet", "elvét", "élvez", "elvhű", "elvon", "elvül", "elzár", "elzúg", "ember", "emeli", "emelő", "emelt", "Emese", "emitt", "emlék", "említ", "emlős", "Emőke", "Endre", "Éneás", "Enese", "enged", "engem", "Enikő", "ennek", "ennél", "ennyi", "enyém", "enyhe", "enzim", "epedő", "epekő", "építő", "eposz", "éppen", "épség", "épülő", "épült", "érből", "érces", "ércet", "érckő", "Ercsi", "erdei", "érdek", "érdem", "érdes", "erdős", "erdőt", "eredj", "eredő", "ereje", "erejű", "erély", "erény", "eresz", "érett", "érezd", "eridj", "Erika", "Erina", "érint", "erjed", "érlel", "érmén", "Ernák", "Ernye", "ernyő", "erőmű", "erőre", "erről", "érsek", "érted", "értek", "érték", "értem", "értés", "értik", "érvek", "érvel", "érvet", "Ervin", "érzed", "érzék", "érzem", "érzés"],
    ["érzet", "érzik", "esély", "esésű", "esett", "eskór", "esküt", "esnek", "esőre", "essen", "esszé", "estek", "estem", "estét", "estig", "Észak", "észbe", "eszed", "eszel", "eszem", "eszén", "eszes", "eszét", "eszik", "eszme", "észre", "Etele", "ételt", "éteri", "eteti", "etető", "etika", "étlap", "ettem", "ettől", "Eugén", "Euler", "Eutim", "Évald", "évben", "évelő", "evést", "evező", "évről", "évvel", "evvel", "excel", "extra", "ez-az", "ezért", "ezred", "ezret", "Ézsau", "ezüst", "ezzel", "faarc", "fabél", "fából", "fácán", "facér", "fafej", "faház", "fahéj", "fájás", "fajhő", "fájlt", "fajok", "fájós", "Fajsz", "fajta", "fakad", "fákat", "fakír", "fakít", "fakul", "faláb", "falak", "falás", "falat", "falaz", "falba", "falka", "falra", "Fanni", "faodú", "farad", "fárad", "farag", "farán", "fáraó", "farfa", "farka", "farkú", "farok", "farol", "farúd", "fásli", "fasor", "fasza", "faszi", "fatál", "fater", "fauna", "fával", "faváz", "fazék", "fázik", "fázis", "fázol", "fazon", "fedél", "fedés", "fedez", "Fedor", "Fédra", "fehér", "fejbe", "fejel", "fejem", "fejen", "fején", "Fejér", "fejes", "fejés", "fejet", "fejét", "fejez", "fejfa", "fejre", "fejti", "fejtő", "Feked", "féken", "féket", "fékez", "fekve", "fekvő", "felad", "felár", "felás", "félbe", "felek", "felel", "felél", "felér", "felét", "félév", "felez", "félfa", "felhő", "félig", "felír", "Félix", "félni", "felnő", "felől", "félre", "felró", "felso", "felső", "félsz", "félti", "féltő", "felül", "felüt", "félve", "fémes", "fémet", "fenék", "fenés", "fenét", "fenol", "fenti", "fénye", "fenyő", "fényt", "fényű", "ferde", "féreg", "férek", "férfi", "férje", "férji", "festő", "fésül", "fétis", "ficam", "fickó", "Fidél", "finom", "fiola", "firka", "fitos", "fivér", "fixál", "fizet", "fjord", "flanc", "flemm", "flóra"],
    ["flört", "flöss", "fodor", "fogad", "fogai", "fogak", "fogam", "fogas", "fogás", "fogat", "fogát", "fogaz", "fogda", "fogja", "fogkő", "fogni", "fogod", "fogok", "fogom", "fogós", "fogsz", "fogva", "fogyó", "fojtó", "fokig", "fokon", "fokos", "fokot", "fokoz", "fokra", "fólia", "fólió", "folyó", "folyt", "fonák", "fonal", "fonál", "fonat", "fondü", "fonja", "forgó", "Fóris", "forma", "forog", "forró", "forsz", "fórum", "fosik", "fosva", "fotel", "fő-fő", "főcím", "főcső", "főhős", "földi", "főleg", "fölös", "fölső", "főnév", "főnix", "főnök", "főpap", "főúri", "föveg", "fővel", "főzés", "főzet", "frakk", "franc", "frank", "frász", "fricc", "Frida", "frigy", "friss", "fritz", "front", "fuccs", "fugáz", "fújás", "fukar", "fúrás", "furat", "furda", "fúria", "furkó", "fúrón", "fuser", "futam", "futár", "futás", "futja", "futni", "futók", "futóz", "futva", "fuvar", "fúvás", "fúvat", "fúvós", "fúzió", "fügét", "függő", "Fügöd", "fülbe", "fülek", "fülel", "fülem", "füles", "fület", "fülét", "fülig", "fűlik", "fülik", "fülke", "fülön", "Fülöp", "fülük", "fűmag", "fürdő", "fürge", "fűről", "fűtés", "fütty", "fűtve", "fütyi", "fűvel", "füves", "füzér", "Fűzér", "füzet", "fűzfa", "fűzős", "fűzőt", "Gábor", "Gadna", "gagát", "gágog", "galád", "gally", "gálma", "Gálos", "gálya", "ganaj", "gáncs", "ganéj", "ganés", "Ganna", "Garád", "garas", "garat", "garbó", "gárda", "garde", "gátak", "gátat", "Gátér", "gátló", "gátol", "gatya", "gatyó", "gázba", "gazda", "gázló", "gázok", "gázol", "gázon", "gazos", "Gazsó", "Gecse", "gekko", "Gelej", "géllé", "Gelse", "Gemma", "Génia", "genny", "génua", "genus", "genyó", "gépek", "gépel", "gépet", "Gérce", "Gerda", "Gerde", "Geréb", "Gergő", "Gerla", "gerle", "germó", "Geszt", "gettó", "Gétye", "giccs", "Gilda", "gines", "gipsz", "gitár", "Gitta"],
    ["gólya", "golyó", "gomba", "gombó", "gödör", "Gödre", "gőgös", "görbe", "görcs", "görgő", "görög", "Gősfa", "gőzöd", "gőzöl", "gőzön", "gőzös", "gőzzé", "gramm", "Gréta", "griff", "grill", "Gujdó", "gulya", "gumik", "gumis", "gumiz", "gumós", "gúnár", "Gunda", "gúnyé", "gúnyt", "gurít", "gurka", "gurul", "gügye", "gümős", "güzül", "gyalu", "gyanú", "Gyapa", "gyári", "gyárt", "gyász", "gyáva", "gyere", "Gyoma", "Gyóró", "gyors", "gyöke", "Gyönk", "Györe", "Györk", "győző", "gyufa", "Gyugy", "gyújt", "Gyula", "Gyuri", "gyúró", "gyűjt", "Gyüre", "gyűri", "gyűrű", "habár", "habja", "habkő", "habok", "habos", "habot", "habzó", "hadar", "hadat", "hadba", "hadra", "Hágár", "hagyd", "hagyj", "hagyó", "Hahót", "hajas", "hájas", "hajat", "haját", "hajba", "hajít", "hajló", "Hajna", "hajóé", "hajók", "hajol", "hajón", "hajós", "hajót", "hajrá", "hajtó", "hajts", "halad", "halak", "halál", "hálás", "halat", "hálát", "halló", "halom", "hálon", "hálós", "hálót", "halva", "hamar", "HAMIS", "hámló", "hámoz", "hamva", "háncs", "hanem", "hanga", "hangé", "hangú", "Hanna", "Hannó", "hanta", "hányó", "hányt", "hapci", "hápog", "hapsi", "harag", "harap", "harca", "harci", "hárem", "hárfa", "haris", "hárít", "három", "Harri", "hárul", "hasáb", "hasad", "hasal", "hasas", "hasat", "hasát", "hasis", "hasít", "haskó", "hasló", "hason", "hasra", "hátán", "határ", "hatás", "hátat", "hátát", "hátba", "hatja", "hatni", "hatol", "háton", "hatos", "hátra", "hátsó", "hátul", "havas", "havat", "haver", "hazai", "házal", "házas", "házat", "házát", "házba", "házig", "házon", "házra", "hazug", "házuk", "hebeg", "héber", "hébér", "Hedda", "hefti", "heges", "hegye", "hegyi", "hegyű", "héjas", "héját", "Hejce", "hekus", "Helén", "Helga", "Helka", "Hella", "helye", "helyi", "helyt", "henye", "hepaj", "Heréd"],
    ["Héreg", "herék", "herél", "Herta", "heted", "héten", "hetes", "hétfő", "hétig", "hétre", "hever", "heves", "hevít", "hévíz", "hevül", "hézag", "hiába", "hiány", "hibád", "hibák", "hibán", "hibás", "hibát", "Hidas", "hidat", "hideg", "hídfő", "hídív", "hídja", "hídon", "hidra", "hiéna", "hígít", "hígul", "híján", "Hilda", "himba", "hímes", "hímez", "himlő", "Himod", "hínár", "hindu", "hinni", "hinta", "hintó", "hippi", "hírbe", "híred", "hírek", "híres", "hírét", "hirig", "hírig", "hírül", "hiszi", "hitel", "hitem", "hites", "hitet", "hithű", "hitre", "hívás", "hívat", "hívek", "híven", "hízás", "hízik", "hobbi", "hobby", "Hobol", "hódít", "hódol", "Hódos", "hóeke", "hóhér", "Holda", "holdi", "holló", "holmi", "holta", "homár", "homok", "hónap", "hoppá", "Horác", "horda", "hordd", "hordó", "horog", "hossz", "hotel", "hozam", "hozás", "hozat", "hozná", "hozni", "hozol", "hozta", "hozza", "hozzá", "hölgy", "hörög", "hőség", "hősnő", "hősök", "Hövej", "hővel", "huhog", "hulla", "hulló", "humán", "humor", "Hunor", "hunyó", "hurka", "hurok", "húron", "húros", "húroz", "hurrá", "hurut", "húslé", "húsol", "húsos", "huzag", "huzal", "húzás", "huzat", "húzat", "húzós", "húzta", "húzva", "húzza", "hűbér", "hűdés", "hűhót", "hüllő", "hűlve", "hülye", "Hümér", "hűség", "hűsít", "hűtés", "hűvös", "Ibafa", "icewm", "idáig", "ideál", "idegi", "ideig", "ideje", "idejű", "idény", "idéző", "idill", "idomé", "idomú", "időre", "Iduna", "idült", "ifjúi", "igába", "igája", "igaza", "igazi", "igent", "igény", "ígérő", "ígért", "igéző", "Ignác", "igyál", "igyék", "igyon", "iható", "ihlet", "íjász", "ijedt", "íjjal", "Iklad", "ikrát", "ikrek", "iktat", "Ilián", "illat", "illem", "illés", "illet", "illik", "illőt", "Ilmár", "Ilona", "ilyen", "ilyet", "imádó", "imáit", "imént"],
    ["ímhol", "immár", "Imola", "inába", "indás", "indát", "index", "indít", "indok", "indul", "indus", "inert", "ingás", "ingat", "ingbe", "inger", "inges", "inget", "innen", "Inota", "ínség", "intés", "intéz", "intim", "intve", "ionos", "ipari", "ipart", "Ipoly", "iramú", "iránt", "irány", "írása", "írást", "irhás", "irigy", "Irina", "írisz", "írjon", "írjuk", "irkál", "írnia", "írnok", "iroda", "írója", "írott", "írral", "irtam", "írtam", "irtás", "írtuk", "írunk", "ismer", "ismét", "issza", "isten", "iszap", "íszer", "iszik", "iszol", "iszom", "Itala", "italt", "ítélt", "ittas", "Ivána", "Ivánc", "ivarú", "ívben", "ívcső", "ívelő", "ívelt", "Ivett", "ívhúr", "Ivonn", "ivott", "ízben", "ízelt", "ízére", "izgat", "izgul", "ízköz", "ízlel", "ízlés", "izmok", "izmos", "Izsák", "ízűvé", "izzad", "izzás", "izzik", "izzít", "jacht", "jakab", "Jákfa", "Jákob", "Jakus", "Janka", "jános", "japán", "járás", "járat", "járda", "járja", "jármű", "járna", "járni", "járom", "járőr", "jársz", "járta", "járul", "játék", "jávai", "javak", "javán", "javát", "javít", "jávor", "javul", "Jázon", "jégbe", "jegel", "jégen", "jéger", "jeges", "jeget", "jéggé", "jelek", "jelel", "jelen", "jeles", "jelez", "Jella", "jelöl", "jelre", "jelzi", "jelző", "jenki", "jérce", "Jerne", "Jetta", "jézus", "jóban", "jobbá", "jóból", "jódli", "jogán", "jogar", "jogát", "jogod", "jogok", "jogon", "jogos", "jogot", "jóízű", "joker", "jókor", "Jolán", "jólét", "jómód", "jónak", "jónás", "jóság", "jóska", "jósló", "jósnő", "jósol", "jótét", "jotta", "jóval", "józan", "Józsa", "jöhet", "jönne", "jönni", "jössz", "jövök", "Judit", "juhar", "juhok", "juhot", "jukka", "Júlia", "jumbó", "juris", "jutás", "Jutas", "jutna", "jutni", "jutok", "Jutta", "kabát", "kábel", "kabin", "kábít", "Kabos", "kacag", "kacaj", "kacat"],
    ["kacér", "kacsa", "kádba", "káder", "kadét", "kajak", "kajál", "kaján", "kajás", "kaját", "kakál", "kákán", "kakaó", "kakas", "kalap", "Káleb", "Kálló", "kalóz", "Kálóz", "kamat", "Kámea", "Kámon", "kampó", "kamra", "kanál", "kanca", "kandi", "Kandó", "kankó", "kanna", "kanóc", "kánon", "kanos", "Kanut", "kánya", "káosz", "kapál", "kapar", "kapás", "kapja", "kapli", "kapni", "kapok", "kapom", "kapor", "kapós", "kapus", "kaput", "kapva", "Karád", "karám", "kárán", "karát", "kárát", "karba", "kárba", "kardé", "karéj", "karfa", "karib", "karja", "károd", "károg", "karom", "karon", "karos", "káros", "karóz", "Karsa", "kásás", "kását", "kasba", "kaspó", "kasza", "Kaszó", "kaszt", "katód", "kavar", "kávét", "kazal", "kazán", "Kazár", "kebel", "Kecel", "kedve", "kedvű", "kefél", "kefét", "kégli", "kegye", "kéjes", "kéjnő", "kekec", "Kéked", "kékes", "kékít", "kéklő", "kékre", "keksz", "Keled", "Keléd", "Kelen", "kelés", "kelet", "kellő", "kelme", "kelta", "kelti", "keltő", "kelts", "kelve", "Kémes", "kémia", "kémlő", "Kende", "kendő", "kenés", "kenet", "kénez", "Kenéz", "kénkő", "kenya", "képek", "kepél", "képen", "képes", "képet", "képét", "képez", "képző", "kérdő", "kéreg", "kerek", "kerék", "kérek", "kérem", "kerep", "keres", "kérés", "keret", "kéret", "kerge", "kérik", "kerít", "kerti", "kerub", "kerül", "kérve", "kései", "késel", "késél", "késes", "késés", "késik", "késői", "későn", "Kesző", "Keszü", "kétes", "Kétpó", "ketté", "kettő", "kever", "kevés", "kévéz", "Kevin", "kézbe", "kezdi", "kezdő", "kezed", "kezek", "kezel", "kezem", "kézen", "kezes", "kezet", "kezét", "kézre", "ki-be", "ki-ki", "kiadó", "kiáll", "kiált", "kibic", "kibír", "kibök", "kicsi", "kidob", "kidől", "kidug", "kiejt", "kiéli", "kiesz", "kifen", "kifli", "kifog", "kifőz", "kifúj", "kifúr", "kifut"],
    ["kifűz", "kígyó", "kihal", "kihat", "kihez", "kihív", "kihoz", "kihúz", "kihűl", "kiirt", "kiírt", "kijár", "kijön", "kijut", "kikap", "kikel", "kiken", "kiket", "kiköp", "kiköt", "kikúr", "kilép", "kilóg", "kilop", "kilök", "kimar", "kímél", "kimer", "kimér", "kimos", "kínai", "kínál", "kincs", "kinek", "kinéz", "Kinga", "kinin", "kínom", "kínos", "kínoz", "kínzó", "kiold", "kiolt", "kiönt", "kirak", "kiráz", "kirúg", "Kisar", "kísér", "kissé", "kisüt", "kitár", "kitép", "kitér", "kitol", "kitől", "kitöm", "kitör", "Kitti", "kitúr", "kitűr", "kitűz", "kiütő", "kivág", "kiváj", "kivan", "kíván", "kivár", "kivéd", "kivel", "kiver", "kivés", "kivet", "kivét", "kivív", "kivon", "kívül", "kizár", "Klára", "Kleon", "klikk", "klíma", "klisé", "koala", "kobak", "kóbor", "kobra", "kocáé", "kocka", "kocog", "kócos", "kócot", "kocsi", "kódol", "kohol", "Kokad", "kokit", "kokós", "koksz", "Kolos", "komál", "kombi", "komló", "komód", "komor", "konda", "kondi", "Kondó", "konga", "kongó", "konok", "konty", "kopár", "kopás", "kópia", "kopog", "kopra", "kopsz", "korai", "korál", "korán", "korát", "korcs", "kordé", "korea", "korhű", "korog", "korok", "korom", "koron", "koros", "kóros", "Kórós", "korpa", "korsó", "korty", "kórus", "korzó", "kosár", "kóser", "kósza", "koszt", "Kótaj", "kóter", "kotló", "koton", "kotor", "kotró", "kotta", "kovás", "Kozma", "kőből", "köböz", "köbre", "Köcsk", "ködbe", "ködös", "kőepe", "kőfal", "kőgát", "köhög", "kőlap", "köles", "kölni", "kölök", "költi", "költő", "kőmag", "Kömlő", "könny", "könyv", "köpés", "köpet", "köpni", "kőpor", "köpül", "körbe", "köret", "kőris", "körít", "körív", "körme", "körmű", "körök", "köröm", "körön", "köröz", "körte", "körút", "körül", "körző", "köteg", "kötél", "kötés", "kötet", "kötik", "kötöz", "kötve", "kövek", "kővel"],
    ["kövér", "köves", "követ", "kövez", "közbe", "közeg", "közel", "közép", "kőzet", "közjó", "közli", "közlő", "közmű", "közöd", "közöl", "közös", "közti", "közút", "közük", "közül", "közzé", "krach", "kraft", "krall", "krecc", "krédó", "krekk", "kreol", "krepp", "kresz", "kréta", "krimi", "kroki", "krúda", "kuckó", "kufár", "kugli", "kujon", "kukac", "kukta", "kulán", "kulcs", "kupac", "kupak", "kupán", "kupás", "kúpja", "kuplé", "kupon", "kúpos", "kúrál", "kúrás", "kúria", "kurta", "kurva", "kusza", "kúszó", "Kutas", "kutat", "kútba", "kútfő", "kutya", "kuvik", "küldd", "küldi", "küllő", "külön", "külső", "kürtő", "küzdő", "kvarc", "kvark", "kvart", "kvóta", "lábad", "lábai", "lábak", "lábam", "lábán", "lábas", "lábát", "labda", "Lábod", "lábon", "labor", "lábra", "lábtő", "ládák", "ládáz", "ladik", "Lajos", "lakáj", "lakás", "lakat", "lakik", "lakli", "lakni", "lakók", "lakol", "lakos", "lámpa", "lamúr", "láncú", "lánya", "lányt", "laosz", "lapát", "lapis", "lapít", "lapja", "lapka", "lapok", "lapol", "lapom", "lapon", "lapos", "lápos", "lapot", "lapoz", "lapra", "lapul", "lárma", "lárva", "lassú", "laszt", "látás", "latba", "latin", "látja", "látni", "látod", "látok", "látom", "látra", "látta", "látva", "Laura", "lazac", "lázad", "lazán", "Lázár", "lázas", "lázat", "lázba", "lazít", "lazul", "leadó", "leáll", "leány", "lebeg", "lében", "lebír", "léből", "lebuj", "lecke", "ledér", "ledob", "ledöf", "ledől", "lédús", "leejt", "lefog", "lefőz", "lefúj", "lefut", "lefűz", "legel", "légió", "légűr", "lehel", "lehet", "lehív", "lehoz", "lehúz", "lehűl", "lehűt", "leint", "leíró", "leírt", "lejár", "Lejla", "lejön", "lejtő", "lekap", "leken", "léken", "lekér", "léket", "leköp", "leköt", "lélek", "lelép", "lelet", "lelke", "lelki", "lelkű", "Lelle", "lelóg", "lelök", "lelte"],
    ["lemér", "lemez", "lemma", "lemos", "lenéz", "lengő", "Lenke", "lenne", "lenni", "lenti", "lenyű", "leold", "Leona", "leölt", "leönt", "lepel", "lépes", "lépés", "lepke", "leple", "lepne", "lépni", "lepra", "lépre", "lépsz", "léptű", "lepve", "lépve", "lerág", "lerak", "leráz", "lerúg", "lesbe", "lesen", "lesóz", "lesre", "lesüt", "letép", "letér", "letét", "letol", "letör", "létra", "létre", "letud", "letűz", "leüli", "leütő", "levág", "levél", "lever", "leves", "levet", "levét", "levon", "lévők", "lezár", "Liána", "libát", "libuc", "Lícia", "licit", "Lídia", "liget", "liheg", "likőr", "lilás", "Lilla", "limes", "limfa", "Linda", "linea", "linux", "Lipót", "Lippó", "lírai", "lista", "Liszó", "liszt", "liter", "Litka", "Litke", "Lívia", "lóbab", "lóbál", "lobog", "lóbőr", "lódít", "lóerő", "lógás", "lógat", "lógós", "lokni", "Lókut", "lólap", "lomha", "lónak", "Lónya", "lopás", "lopja", "lopós", "lopva", "lóról", "Lotár", "lottó", "lotyó", "louis", "lovag", "lovai", "lovak", "lóval", "lovas", "lovat", "lovát", "lovon", "lökés", "löket", "löncs", "lőpor", "lőrés", "lőtáv", "lőtér", "lötty", "löveg", "lövés", "lövet", "Lúcia", "Ludas", "lugas", "lúgkő", "lúgoz", "Lujza", "lumma", "lurkó", "lusta", "lutri", "luxus", "lyssa", "lyuka", "mackó", "madár", "mafla", "magad", "magáé", "magam", "magán", "magas", "magát", "magba", "Magda", "mágia", "magja", "magok", "magol", "magot", "maguk", "mágus", "magva", "mához", "májas", "majom", "major", "Majos", "majré", "május", "Makár", "mákja", "malac", "maláj", "málha", "málna", "malom", "Málom", "Mályi", "mámor", "mancs", "Manda", "Mánfa", "mangó", "mánia", "mankó", "manna", "Manon", "manus", "maori", "mappa", "marad", "marás", "marat", "marci", "Márfa", "márga", "margó", "marha", "mária", "Márió", "máris", "marja", "marka", "márka"],
    ["Markó", "Maróc", "marok", "Márok", "máról", "marós", "Marót", "marsi", "Márta", "másik", "másod", "mások", "másol", "máson", "másra", "maszk", "mászó", "matek", "mater", "mátka", "mától", "Matty", "Maura", "Maxim", "Mayer", "mázas", "mázli", "mázol", "mázsa", "meccs", "medál", "meddő", "Médea", "meder", "medre", "medve", "megad", "megás", "megég", "megél", "megér", "meggy", "megír", "mégis", "meglő", "megóv", "megöl", "megró", "mégse", "megun", "megül", "megüt", "megye", "mehet", "méhfű", "mekeg", "melák", "meleg", "mellé", "mellű", "méltó", "mélye", "menés", "ménes", "menet", "menjo", "ménkű", "menni", "menny", "menta", "menti", "mentő", "ments", "menza", "mérce", "mered", "méreg", "mérés", "méret", "merev", "merít", "mérmű", "merre", "mersz", "merül", "mesél", "mesés", "mesét", "metán", "méter", "Metód", "metró", "metsz", "Metta", "mezbe", "mezei", "mézes", "mézfű", "mézga", "Meződ", "mezőn", "miatt", "miben", "miből", "miért", "mihez", "Mikes", "miket", "mikor", "Miksa", "Milán", "Milda", "miliő", "Milla", "Milos", "mímel", "mímes", "minap", "minek", "minél", "Minna", "minor", "minta", "Mirkó", "Miron", "miről", "misét", "Miske", "mísze", "mitra", "mivel", "moaré", "módja", "módok", "módon", "modor", "módot", "módra", "modus", "módus", "moher", "mohón", "mókák", "mókás", "mókus", "molla", "Monaj", "monda", "mondd", "mondj", "mondó", "Monok", "Monor", "Moore", "moped", "moraj", "morál", "morgó", "Móric", "morog", "morze", "mosás", "mosdó", "mosom", "mossa", "motel", "motor", "motoz", "mottó", "motyó", "mózes", "mozgó", "mozis", "mozog", "mucsa", "Mucsi", "mufti", "muhar", "muksó", "múlás", "mulat", "múlik", "múlté", "múltú", "múlva", "mulya", "múmia", "mumus", "munka", "murit", "murok", "murva", "mutál", "mutat", "múzsa", "műbőr", "műfaj", "műfog", "műjég", "műláb"],
    ["műsor", "műszó", "műtag", "műtét", "műtős", "művaj", "művek", "művel", "művet", "müzli", "na-na", "nádas", "Nadin", "nadír", "Nádja", "nagyi", "nahát", "naiva", "nálad", "nálam", "Nanda", "Naómi", "napig", "napja", "napló", "napok", "napon", "napos", "napot", "napra", "narkó", "Nátán", "nátha", "Nedda", "néger", "néhai", "nehéz", "nejem", "neked", "nekem", "nékem", "nekik", "Nelli", "némán", "nemek", "nemes", "nemet", "német", "nemez", "nemző", "nepál", "népek", "népes", "nesze", "netán", "Netta", "nettó", "neved", "nevel", "nevén", "néven", "neves", "nevet", "nevét", "nevez", "névre", "nézel", "nézés", "nézet", "nézik", "nézni", "Nézsa", "nézve", "Nikla", "Nilla", "nílus", "nimfa", "nincs", "nívón", "no-no", "Noémi", "nógat", "nohát", "nomád", "nomen", "Nóráp", "Norbi", "norma", "nosza", "Novák", "nőies", "nőmet", "nőnek", "nősül", "nőtől", "növel", "nővel", "nővér", "növés", "nőzés", "nőzik", "nudli", "nulla", "nyája", "nyaka", "nyaki", "nyakú", "nyála", "nyaló", "nyári", "nyárs", "nyele", "nyeli", "nyelj", "nyelt", "nyelű", "nyelv", "nyérc", "nyerő", "nyers", "nyert", "nyesi", "nyeső", "nyess", "nyest", "nyíló", "nyílt", "Nyíri", "nyíró", "nyírt", "nyitó", "nylon", "nyolc", "nyoma", "nyomó", "nyögd", "nyugi", "nyújt", "nyúlj", "nyúzó", "nyüst", "nyüvi", "oázis", "óceán", "ócska", "odaad", "odaát", "odaég", "odaér", "odáig", "odaüt", "ódban", "odébb", "Odett", "Odiló", "ódium", "odvas", "Ófalu", "óhajt", "óhaza", "óhitű", "ohmos", "okból", "okker", "oknál", "ókori", "okozó", "okság", "oktat", "oktáv", "olasz", "olcsó", "oldal", "oldás", "oldat", "oldja", "oldva", "Ollár", "ólmos", "ólmoz", "oltár", "oltás", "olvad", "olvas", "olyan", "omega", "omlás", "omlik", "omlós", "ónízű", "ónmáz", "onnan", "onnét", "ontás", "opció", "opera", "ópium", "óráig", "órája", "óramű"],
    ["Orbán", "ordít", "orgia", "óriás", "origó", "Orion", "orkán", "Ormos", "orosz", "orral", "orrán", "orrát", "orrba", "orrfa", "orrod", "orrom", "orron", "orrot", "orsók", "orvos", "orvul", "ostor", "ostya", "Oszkó", "oszló", "osztó", "Otmár", "ótvar", "óvást", "óvoda", "Oxána", "Ozora", "öbbek", "öbius", "öblít", "öblös", "öccse", "öcsit", "Öcsöd", "ődöng", "öklel", "öklöz", "ökröt", "öltés", "ömlés", "ömlik", "öncél", "önnek", "Önnel", "önről", "öntés", "öntől", "öntöz", "önzés", "ördög", "őrház", "őrizd", "őrlés", "őróla", "őrölt", "őrség", "őrszó", "őrült", "örvös", "őrzés", "ősapa", "őskor", "össze", "őszbe", "őszén", "őszes", "őszig", "őszül", "öt-öt", "ötágú", "ötkor", "ötlet", "ötlik", "ötöst", "ötven", "övéik", "övéké", "övező", "övsál", "övvel", "őzbőr", "őzhús", "Őzike", "özöne", "Özséb", "pacák", "pacal", "pacás", "pacát", "pácba", "Pácin", "páclé", "pácol", "Pacsa", "Padár", "padja", "padka", "padló", "pajta", "pajzs", "pakli", "Pakod", "paksi", "palás", "pálca", "Pálfa", "pálha", "palló", "pálma", "pálya", "pampa", "Pamuk", "pamut", "panel", "pangó", "pánik", "Panna", "pápai", "papír", "Pápoc", "papol", "Papos", "pappá", "Parád", "párás", "párba", "pária", "parin", "Páris", "párja", "párna", "párok", "párol", "páros", "párta", "parti", "párti", "party", "pasas", "passz", "patak", "patás", "Patca", "páter", "Pátka", "patkó", "Paula", "pauza", "pazar", "pecek", "pécéz", "Pecöl", "pécsi", "pedál", "pedig", "Pedró", "példa", "pemet", "pempő", "penge", "pengő", "penna", "penny", "pénze", "pénzé", "pénzt", "pépes", "péppé", "perbe", "perce", "perec", "pereg", "perek", "perel", "perem", "peren", "peres", "pergő", "perje", "peron", "péter", "petét", "Petra", "petty", "Petúr", "piaci", "piano", "picit", "picsa", "picur", "piheg", "pihen", "pihés", "pikás", "pikét"],
    ["Pilis", "pille", "pince", "pinka", "pinty", "pióca", "pipát", "pirit", "pirít", "piros", "Pirtó", "pirul", "pisál", "pisil", "pisze", "piszi", "Piusz", "pizza", "plató", "plátó", "plusz", "plüss", "pocak", "Pócsa", "pofán", "pofát", "pofon", "pofoz", "pohár", "poise", "póker", "pokol", "pókon", "pókos", "polip", "polka", "Polli", "pólus", "pólya", "Pomáz", "pompa", "ponty", "popsi", "porát", "póráz", "porít", "porló", "pornó", "poros", "porrá", "porta", "portó", "pórul", "pórus", "porzó", "posta", "poszt", "pótló", "pótol", "potom", "potya", "pózba", "pózna", "pózol", "pozőr", "pödör", "pöfög", "pörgő", "pörög", "pötty", "praga", "préda", "préri", "prima", "príma", "print", "prior", "próba", "profi", "progr", "proli", "proof", "próza", "Prügy", "puccs", "pucer", "pucér", "púder", "pudli", "pufók", "puhít", "puhul", "pumpa", "punci", "puncs", "púpos", "puska", "puszi", "püföl", "qquad", "quote", "rááll", "Rabán", "rabbi", "rábír", "rábíz", "rabja", "rabló", "rabnő", "rabol", "rabul", "rácsa", "radar", "rádió", "radio", "radír", "rádli", "rádob", "ráérő", "ráeső", "Ráfis", "ráfog", "ragad", "rágás", "rágja", "rágós", "ragoz", "ragya", "rahát", "Ráhel", "ráhúz", "rájár", "Rajka", "rajna", "rajon", "rájön", "rajta", "rajzó", "rajzú", "rákap", "rakás", "rakat", "ráken", "rakja", "rákja", "rákos", "rákot", "ráköt", "rákra", "Ráksi", "rakva", "rálel", "rálép", "ráles", "rámán", "rámar", "rámáz", "Ramón", "rámpa", "randi", "rángó", "rangú", "ráönt", "rárak", "Rárós", "rásóz", "rátér", "rates", "rátét", "Rátka", "rátok", "Rátót", "rátör", "rátűz", "rávág", "ráver", "rázás", "rázós", "rázza", "reánk", "reccs", "recés", "recéz", "redős", "redőt", "redőz", "redut", "régen", "rejlő", "reked", "Rella", "remeg", "remek", "remél", "rémes", "rémét", "Remig", "rémít", "rémül"],
    ["rendé", "rendű", "renyi", "répát", "repce", "reped", "repít", "repül", "résel", "résen", "része", "részi", "részt", "részű", "réteg", "retek", "retus", "retyi", "reuma", "révbe", "réven", "révén", "reves", "rezeg", "rezes", "rezez", "rezgő", "rezsi", "Rezső", "rézsű", "rhead", "riadó", "riadt", "rideg", "right", "rigli", "rikít", "riksa", "rímel", "rímes", "Rimóc", "ringó", "ripők", "ripsz", "riszt", "ritka", "rítus", "rizsa", "rmdir", "rmmod", "robaj", "Robin", "robog", "robot", "roham", "rohan", "rokon", "Rókus", "rolád", "rólam", "római", "román", "romba", "Rómeó", "romló", "rommá", "romok", "romos", "roncs", "ronda", "rongy", "rooms", "ropog", "rossz", "rosta", "rotál", "route", "rovar", "rovás", "rovat", "rovid", "rózsa", "röfög", "rőfös", "rögbi", "röhög", "Rönök", "röpít", "röpke", "röpte", "röptű", "röpül", "rőtes", "rövid", "rőzse", "rubel", "Ruben", "rubin", "rudak", "rudas", "rúdfa", "rúgás", "rugby", "rúgja", "rugós", "rúgós", "rugót", "rugóz", "rúgva", "ruhád", "ruháé", "ruhák", "ruhán", "ruhás", "ruhát", "rumli", "rumos", "rúpia", "rutin", "rútul", "Ruzsa", "rúzst", "rühes", "rühös", "rüszt", "Sachs", "sáfár", "Ságod", "sahib", "saját", "sajat", "sajgó", "sajna", "sajtó", "salak", "sálak", "sálat", "saldo", "sámfa", "sámli", "samoa", "Sámod", "sanda", "sansz", "sánta", "sapka", "sarat", "sárba", "sárga", "sarja", "sarjú", "sarka", "sarki", "sarkú", "sarló", "sarok", "sáron", "sáros", "Sarud", "sáska", "sátán", "sátor", "sauna", "savas", "savaz", "sávok", "sávos", "sávot", "sávoz", "scene", "sdkjf", "sebaj", "sebek", "sebes", "sebet", "segéd", "segge", "segít", "sehol", "Sejla", "sejti", "sejtő", "séker", "sellő", "semmi", "senki", "seper", "sepri", "seprő", "seprű", "sereg", "serte", "sérti", "sértő", "sétál", "sétát", "sevró", "share", "shell", "shtml"],
    ["síbot", "síelő", "siesd", "siess", "siető", "sifon", "sigma", "sikál", "síkba", "siker", "sikít", "síkja", "sikló", "síkok", "síkon", "síkos", "síkot", "síkra", "síléc", "simán", "simít", "Simon", "simul", "sínbe", "sincs", "sínek", "sínen", "sínre", "sinus", "sipít", "sípol", "sípot", "sirám", "sírás", "sirat", "sírba", "sírkő", "sírni", "sírós", "sírul", "sírva", "sisak", "sitkó", "sivár", "sivít", "skála", "skalp", "skicc", "sleep", "slejm", "slepp", "slicc", "slist", "slukk", "smafu", "small", "smink", "smith", "smokk", "sóágy", "sóban", "sóder", "sodor", "sodra", "sodró", "sofőr", "sógor", "sóhaj", "sóher", "sokan", "sokat", "sokba", "sokra", "sólya", "sonka", "sorai", "során", "soran", "sorát", "sorba", "sorja", "sorod", "sorok", "sorol", "soron", "soros", "soroz", "sorra", "sorsa", "sorsú", "sorzh", "sósav", "sosem", "sóska", "sotto", "sóval", "sóvár", "sózva", "sömör", "söpör", "Söpte", "Söréd", "sörét", "sörte", "sötét", "space", "sparc", "spejz", "spekk", "spion", "split", "spóra", "sport", "spray", "spuma", "srenk", "sszet", "stail", "stand", "start", "staub", "sudár", "sugár", "súgás", "súgja", "súgta", "súgva", "suhan", "suhog", "súlya", "súlyt", "súlyú", "sumák", "sunyi", "surmó", "súrol", "suska", "susog", "sutba", "sügér", "süket", "sülés", "süllő", "sülve", "Sümeg", "sűrít", "sűrűn", "sütés", "sütőt", "Süttő", "süveg", "süvít", "szabó", "Szada", "szaft", "szaga", "szágó", "szagú", "Szágy", "szája", "Szajk", "szájú", "szaké", "szaki", "száll", "szálú", "száma", "számú", "szánt", "Szany", "szapó", "szári", "szart", "szaru", "szárú", "szarv", "szava", "szavú", "szebb", "szedd", "szedi", "szedő", "szegi", "szegő", "széle", "szeli", "szélű", "szeme", "szemé", "szemű", "széna", "Szend", "szent", "szept", "szerb", "szerk", "szert", "szerű", "szérű", "szerv"],
    ["szesz", "szett", "szexi", "szgti", "sziám", "szifó", "szíjé", "szike", "sziki", "szily", "színe", "színé", "színi", "szint", "színt", "színu", "színű", "szirt", "szita", "szívd", "szíve", "szive", "szivi", "szívó", "szívű", "szkip", "szláv", "szlem", "szlúp", "sznob", "szoba", "szóba", "szóbő", "szóda", "szófa", "szofi", "szóló", "szolo", "szólt", "szopó", "szóra", "szóró", "szórt", "szósz", "szótő", "szóvá", "Szőce", "szöge", "szőke", "szökő", "szőlő", "szőre", "szörf", "szörp", "szőrű", "szösz", "szőtt", "szpré", "sztár", "sztoa", "Szúcs", "Szuha", "szuka", "szula", "szúró", "szúrt", "szűcs", "szügy", "szűke", "szülő", "szűnj", "szűnő", "szűrő", "szűrt", "szűzi", "szvit", "tábla", "table", "tábor", "tagad", "tágan", "tágas", "taggá", "tágít", "tagja", "tagok", "tagol", "tágra", "tagul", "tágul", "táján", "tájat", "tájba", "tájék", "tajga", "tájol", "tájon", "tájra", "takar", "Tákos", "talaj", "talál", "tálal", "talán", "talan", "talár", "tálat", "tálca", "Tália", "talks", "talmi", "talon", "tálon", "talpa", "támad", "tamás", "támfa", "tamil", "támív", "támla", "tanár", "tanév", "tangó", "tanít", "tanok", "tansz", "tanúk", "tanul", "tanút", "tanya", "Tánya", "tapad", "tapír", "tapló", "tapos", "tápot", "taraj", "Taráz", "tárca", "Tarca", "taréj", "tárgy", "tarka", "tarkó", "tarló", "tárló", "tárna", "tárol", "Tarpa", "társa", "tartó", "tarts", "tárul", "táska", "tatár", "tatja", "tátja", "tátog", "távol", "tavol", "távon", "távra", "taxik", "taxin", "taxis", "taxit", "teach", "téged", "tegez", "tégla", "tegye", "tehát", "tehén", "teher", "tehet", "tejbe", "tejel", "tejes", "tejet", "tejút", "teker", "Tékes", "Tekla", "teknő", "telek", "telel", "télen", "telep", "telér", "telex", "telik", "telít", "telje", "telke", "Telki", "Telma", "télre", "telve", "témák", "témán"],
    ["témát", "temet", "tempó", "temze", "Ténia", "tenni", "tenor", "Tényő", "tényt", "teper", "tépés", "tépik", "tepsi", "terei", "terek", "terel", "terem", "terén", "terep", "téres", "térés", "teret", "Teréz", "terhe", "terít", "térít", "termő", "termű", "terve", "térző", "teste", "testi", "testű", "teszi", "teszt", "tétel", "tetem", "tétet", "teTeX", "tetéz", "tetőn", "tetőt", "tetőz", "tette", "téved", "tevés", "téves", "tévét", "there", "tiara", "Tibád", "Tibet", "Tibor", "Tichy", "tiéid", "tikfa", "Tilaj", "Tilda", "tilde", "Tilla", "tilos", "tiltó", "tímár", "Timár", "Tímea", "times", "Timon", "Timót", "timsó", "Timur", "tincs", "tinta", "tipeg", "tipor", "típus", "Tíria", "tirol", "tiszt", "titán", "title", "titok", "tized", "tízen", "tizes", "tízes", "tízig", "tízre", "Tóbia", "toboz", "tócsa", "Tódor", "tódul", "Tófej", "tojás", "tojik", "tojva", "Tokaj", "tokás", "tokba", "tokek", "tokja", "Tokod", "tokos", "tolás", "tolat", "tolem", "tolja", "tolla", "tollú", "tolna", "tolni", "Tomaj", "Tomor", "tompa", "tonik", "tonna", "tónus", "tools", "topáz", "topis", "topog", "torka", "torkú", "torló", "torma", "torna", "torok", "torta", "torzó", "tószt", "total", "touch", "többé", "többi", "töfög", "tőkék", "tőkés", "tőkét", "tököl", "tökös", "tőled", "tőlem", "tölgy", "tölti", "töltő", "tőlük", "tömeg", "tömés", "tömít", "tömlő", "tömör", "tömpe", "tőrbe", "törés", "törik", "törli", "törlő", "török", "töröl", "tőröz", "törpe", "törté", "törve", "törzs", "tőszó", "tövén", "tövig", "tövis", "tövön", "tőzeg", "trafó", "tréfa", "treff", "trend", "trikó", "trója", "tromf", "trónt", "tropa", "trupp", "trükk", "tubák", "tubus", "tucat", "tudás", "tudat", "tudja", "tudna", "tudná", "tudni", "tudod", "tudok", "tudom", "Tudor", "tudós", "tudsz", "tudta", "tudva", "túlad", "tulaj"],
    ["túlél", "túllő", "túloz", "túlsó", "túlva", "túlzó", "tumor", "tunya", "turfa", "turha", "turné", "túrós", "túrót", "tuskó", "tusol", "tutaj", "tutul", "tutyi", "túzok", "tuzön", "tűfok", "tűkön", "tükör", "tükre", "tülök", "Tünde", "tűnés", "tünet", "tűnik", "tűrés", "Türje", "tűröm", "tüske", "tütüt", "tűvel", "tűzbe", "tüzed", "tüzel", "tüzér", "tűzés", "tüzes", "tüzet", "tűzkő", "tűzön", "tűzőr", "tűzre", "tweed", "tyűha", "ucirc", "uczak", "udvar", "ugorj", "ugrál", "ugrás", "ugrat", "ugrik", "Ugron", "ugyan", "úgyis", "újabb", "újból", "újító", "ujjak", "ujjal", "ujjas", "ujjat", "ujját", "ujjíz", "Újkér", "ujlap", "újonc", "újság", "újult", "ukrán", "Ulrik", "ultra", "uname", "unarj", "uncia", "uncsi", "undok", "undor", "unoka", "unott", "untat", "Urbán", "urban", "uredi", "urgen", "úrhoz", "Uriás", "Uriel", "úrinő", "úrnak", "using", "úszás", "úszik", "uszít", "úszni", "úszod", "úszva", "útadó", "utaló", "utált", "utána", "utáni", "utász", "utazó", "útban", "útból", "utcai", "utcán", "utcát", "útján", "útját", "útnak", "utóbb", "utója", "útról", "útsáv", "útvám", "Ü, Ű", "üdítő", "üdülő", "üdvös", "ügybe", "ügyed", "ügyek", "ügyel", "ügyes", "ügyet", "ügyét", "üldöz", "ülést", "ülésű", "üljön", "ülnök", "ülőke", "ültet", "ünnep", "ürege", "üregi", "űrlap", "ürmös", "ürügy", "üstök", "üstöt", "üszög", "üszök", "üteme", "ütemű", "ütése", "ütési", "ütést", "ütleg", "ütőér", "ütőfa", "ütőmű", "ütött", "üvölt", "üzemi", "üzemű", "üzlet", "űzött", "vacak", "vacog", "vacok", "vadat", "vádat", "vádja", "vádli", "vádló", "Vadna", "vadóc", "vádol", "vadon", "vadőr", "vadul", "vágás", "vágat", "vágja", "vagon", "vágta", "vágva", "vágyi", "vágyó", "vájár", "vajas", "vájat", "vajon", "vakar", "vaker", "vakít", "vakok", "vakol", "vakon", "vaksi", "valag", "valál", "válás", "Valér"],
    ["válik", "Valkó", "válla", "valló", "vállú", "válni", "valók", "valós", "váltó", "válva", "vályú", "vámok", "vámon", "vámos", "vámot", "vámőr", "vámút", "Vanda", "Várad", "varas", "várat", "Varbó", "Várda", "Varga", "várja", "varjú", "város", "várva", "Vasad", "vasal", "vasam", "vásár", "vasar", "vasas", "vasat", "vásít", "vasmű", "vasút", "vatta", "vázol", "Vazul", "vécéé", "vedel", "veder", "védés", "végbe", "végem", "végén", "véges", "véget", "végét", "végez", "végig", "végre", "vegre", "végső", "vegul", "végül", "vegye", "vegyi", "végzi", "végző", "Vejti", "vekni", "veled", "velem", "vélem", "velin", "velős", "velum", "velúr", "vénás", "vének", "venné", "venni", "vérbő", "veréb", "véreb", "verem", "veres", "verés", "véres", "veret", "vérét", "verik", "verni", "Veron", "verve", "vérző", "vésés", "véset", "vésőt", "veszi", "veszt", "vészt", "vétek", "vétel", "vetés", "vetet", "vétet", "vetít", "vétót", "vetve", "vevés", "vevők", "vevőt", "vezér", "vezet", "vézna", "vhogy", "vhova", "vhová", "viasz", "vicce", "vidám", "vidék", "vidít", "Vidor", "Vidos", "vidra", "vigad", "vígan", "vigéc", "vigye", "vihar", "vihog", "világ", "Vilja", "villa", "Vilma", "Vinár", "Vince", "vinil", "vinni", "viola", "virág", "virul", "vírus", "visel", "visít", "viskó", "visnu", "vissz", "viszi", "vitae", "vitán", "vitás", "vitat", "vitát", "vitel", "vitéz", "Vitka", "vitla", "vitte", "Vitus", "vívás", "vivés", "vízbe", "vízbő", "vizel", "vízen", "vizes", "vizet", "vizét", "vizez", "vízió", "vízkő", "vízre", "vízum", "vízzé", "vkibe", "vkire", "vlock", "vmely", "vmibe", "vmije", "vmire", "vmivé", "volna", "volod", "volta", "vonal", "vonás", "vonat", "vonít", "vonja", "vonós", "vonót", "vonul", "vonzó", "vödör", "völgy", "vörös", "vskip", "watch", "weben", "webes"],
    ["Xavér", "Xénia", "xilol", "zabál", "Zabar", "zabla", "zabos", "Zádor", "Xavér", "Xénia", "xilol", "zabál", "Zabar", "zabla", "zabos", "Zádor", "zafír", "Zágon", "zajgó", "zajló", "zajos", "Zajta", "Zalán", "zálog", "zamat", "Zámor", "Zanat", "zanót", "zápor", "zárás", "zárat", "zárba", "zárda", "zárja", "zárka", "zárol", "zárul", "zárva", "zavar", "závár", "Závod", "zebra", "Zella", "Zelma", "zenei", "zenés", "zenét", "zengi", "zengő", "zenit", "zepes", "zerge", "zérus", "zetes", "zihál", "Zília", "ziliz", "zizeg", "Zoárd", "Zobor", "zokni", "zokog", "zokon", "Zolna", "Zomba", "zónák", "Zorán", "zorog", "zömít", "zömök", "zönge", "zönög", "zörej", "zörgő", "zörög", "zrubi", "Zsáka", "zsalu", "Zsana", "zsaru", "zselé", "zseni", "Zsérc", "zsett", "zsidó", "Zsira", "Zsóka", "zsoké", "Zsolt", "zsomp", "zsuga", "Zsurk", "zsúrt", "zsüri", "zubog", "zúdít", "zúgás", "zúgón", "zúgva", "zuhan", "zuhog", "zúzás", "zúzda", "zuzmó", "zúzza"]]

const letter1=document.getElementById("input1")
const letter2=document.getElementById("input2")
const letter3=document.getElementById("input3")
const letter4=document.getElementById("input4")
const letter5=document.getElementById("input5")
const letter6=document.getElementById("input6")
const letter7=document.getElementById("input7")
const letter8=document.getElementById("input8")
const letter9=document.getElementById("input9")
const letter10=document.getElementById("input10")
const letter11=document.getElementById("input11")
const letter12=document.getElementById("input12")
const letter13=document.getElementById("input13")
const letter14=document.getElementById("input14")
const letter15=document.getElementById("input15")
const letter16=document.getElementById("input16")
const letter17=document.getElementById("input17")
const letter18=document.getElementById("input18")
const letter19=document.getElementById("input19")
const letter20=document.getElementById("input20")
const letter21=document.getElementById("input21")
const letter22=document.getElementById("input22")
const letter23=document.getElementById("input23")
const letter24=document.getElementById("input24")
const letter25=document.getElementById("input25")
const letter26=document.getElementById("input26")
const letter27=document.getElementById("input27")
const letter28=document.getElementById("input28")
const letter29=document.getElementById("input29")
const letter30=document.getElementById("input30")
const letter31=document.getElementById("input31")
const letter32=document.getElementById("input32")
const letter33=document.getElementById("input33")
const letter34=document.getElementById("input34")
const letter35=document.getElementById("input35")
const letter36=document.getElementById("input36")
const letter37=document.getElementById("input37")
const letter38=document.getElementById("input38")
const letter39=document.getElementById("input39")
const letter40=document.getElementById("input40")
const letter41=document.getElementById("input41")
const letter42=document.getElementById("input42")
const letter43=document.getElementById("input43")
const letter44=document.getElementById("input44")
const letter45=document.getElementById("input45")
const letter46=document.getElementById("input46")
const letter47=document.getElementById("input47")
const letter48=document.getElementById("input48")
const letter49=document.getElementById("input49")
const letter50=document.getElementById("input50")
const letter51=document.getElementById("input51")
const letter52=document.getElementById("input52")
const letter53=document.getElementById("input53")
const letter54=document.getElementById("input54")
const letter55=document.getElementById("input55")
const letter56=document.getElementById("input56")
const letter57=document.getElementById("input57")
const letter58=document.getElementById("input58")
const letter59=document.getElementById("input59")
const letter60=document.getElementById("input60")
const submitBtn=document.getElementById("submit")
const letterElements=document.getElementsByClassName("letters")
const alphabet=["a", "á", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o", "ó", "ö", "ő", "p", "q", "r", "s", "t", "u", "ú", "ü", "ű", "v", "w", "x", "y", "z"]
const regex=/[a-záéíóöőúüű]/
const svg = d3.select("#chart")
        .append("svg")
        .attr("width", 240)
        .attr("height", 150);
let won=0
let streak=0
let setInp=1
let wonStat=[0, 0, 0, 0] //[won, lost, current streak, max streak]
let diagramData=[0, 0, 0, 0, 0, 0] //won at x attempt
let yScale = d3.scaleLinear()
    .domain([0, d3.max(diagramData, (d) => d)])
    .range([0, 100]);
let attempt=""
let numberOfAttempts=0
let submitOn=false
let tempNum=Math.floor(Math.random()*ListA.length)
let word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)].toLowerCase()
let wordSplit=word.split('')
let activeLetter=1
setupGame()

    
function setupGame(){
    getStats()
        attempt=""
        numberOfAttempts=0
        submitOn=false
        tempNum=Math.floor(Math.random()*ListA.length)
        word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)].toLowerCase()
        wordSplit=word.split('')
        document.getElementById("playAgain").style.display="none";
        document.getElementById("submit").style.display="block";
        document.getElementById("congrats").innerText=""
        for(let i=0; i< alphabet.length; i++){
            document.getElementById(alphabet[i]).style.backgroundColor="lightgrey";
            document.getElementById(alphabet[i]).style.border="1px solid black";
        }
        if(setInp==1){
            activeLetter=1
            for(let i=0; i<alphabet.length; i++){
                document.getElementById(`${alphabet[i]}`).setAttribute("onclick", "handleBtnInput(this.id)")
            }
            document.getElementById("Backspace").setAttribute("onclick", "focusOnPrev()")
            for(let i=1; i<6; i++){
                document.getElementById(`input${i}`).innerHTML="";
                document.getElementById(`input${i}`).style.backgroundColor="white";
            }
            for(let i=6; i<31; i++){
                document.getElementById(`input${i}`).innerHTML=""
                document.getElementById(`input${i}`).style.backgroundColor="rgba(239, 239, 239, 0.3)";
            }
            document.getElementById("input1").style.border="2px solid black"
        }else if(setInp==2){
            activeLetter=31
            for(let i=0; i<alphabet.length; i++){
                document.getElementById(`${alphabet[i]}`).removeAttribute("onclick")
            }
            document.getElementById("Backspace").removeAttribute("onclick")
            for(let i=31; i<36; i++){
                document.getElementById(`input${i}`).removeAttribute('disabled');
                document.getElementById(`input${i}`).value="";
                document.getElementById(`input${i}`).style.backgroundColor="white";
            }
            for(let i=36; i<61; i++){
                document.getElementById(`input${i}`).value=""
                document.getElementById(`input${i}`).style.backgroundColor="rgba(239, 239, 239, 0.3)";
                document.getElementById(`input${i}`).setAttribute('disabled', 'disabled');
            }
            document.getElementById("input31").focus()
        }
}
function  playsound(a){
    if(document.querySelector('input[name="musicChoice"]:checked').value=="musicOff"){
    }else{
        a.currentTime = 0;
        a.play()
    }
}
function settings(){
        document.getElementById("settingsPanel").style.display="block";
        document.getElementById("game-ui").style.display="none";
}
function setInput(){
    if(document.querySelector('input[name="screenChoice"]:checked').value=="0"){setInp=1
        document.getElementById("input-areaB").style.display="none";
        document.getElementById("input-areaA").style.display="block";
    }else if(document.querySelector('input[name="screenChoice"]:checked').value=="1"){setInp=2
        document.getElementById("input-areaA").style.display="none";
        document.getElementById("input-areaB").style.display="block";
    }
    setupGame()
}
function setColor(colorPair){
    let colorA=colorPair.split(",")[0]
    let colorB=colorPair.split(",")[1]
    document.querySelector(':root').style.setProperty('--theme1', colorA);
    document.querySelector(':root').style.setProperty('--theme1pair', colorB);
}
function hideSettings(){
    document.getElementById("settingsPanel").style.display="none";
    document.getElementById("game-ui").style.display="block";
    setupGame()
}
function statistics(){
    document.getElementById("statsPanel").style.display="block";
    document.getElementById("game-ui").style.display="none";
    document.getElementById("played").innerHTML=wonStat[0]+wonStat[1]
    document.getElementById("winStat").innerHTML=Math.floor(wonStat[0]/(wonStat[0]+wonStat[1])*100)
    document.getElementById("currentStreak").innerHTML=wonStat[2]
    document.getElementById("maxStreak").innerHTML=wonStat[3]
    
    yScale = d3.scaleLinear()
        .domain([0, d3.max(diagramData, (d) => d)])
        .range([0, 100]);
    svg.selectAll("rect").remove()
    svg.selectAll("text").remove()
    svg.selectAll("rect")
        .data(diagramData)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 40)
        .attr("y", (d) =>150 - yScale(d))
        .attr("width", 25)
        .attr("height", (d, i) => d)
        .attr("fill", "navy")
        .attr("class", "bar")
    svg.selectAll("text")
        .data(()=>diagramData)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) =>5+ (i * 40))
        .attr("y", (d) =>150 - yScale(d)-3)
}
function updateStats(wonStat, diagramData){
    let stringWonStat=wonStat.map(String).join(",")
    let stringdiagramData=diagramData.map(String).join(",")
    localStorage.setItem("wonStat", stringWonStat)
    localStorage.setItem("diagramData", stringdiagramData)
}
function getStats(){
    wonStat=localStorage.getItem("wonStat").split(",").map(Number)
    diagramData=localStorage.getItem("diagramData").split(",").map(Number)
    document.getElementById("wonScore").innerText=wonStat[0]
    document.getElementById("streakScore").innerText=wonStat[2]
}
function resetStats(){
    localStorage.setItem("wonStat", "0,0,0,0")
    localStorage.setItem("diagramData", "0,0,0,0,0,0")
    getStats()
    statistics()
}
function hideStats(){
        document.getElementById("statsPanel").style.display="none"
        document.getElementById("game-ui").style.display="block";
}
function focusOnNextB(nextLet, val){
        val=val.toLowerCase();
        if(val=="" || regex.test(val)==false){}
        else if(activeLetter==35 || activeLetter==40 || activeLetter==45 || activeLetter==50 || activeLetter==55 || activeLetter==60){}
        else{
            playsound(clickSound)
            nextLet.focus()
            activeLetter+=1}
}
function focusOnPrevB(event, prevLet, val){
        let key=event.key;
        if(activeLetter==31 || activeLetter==36 || activeLetter==41 || activeLetter==46 || activeLetter==51 || activeLetter==56){}
        else if(key=="Backspace" && val==""){playsound(clickSound)
            prevLet.focus()
            activeLetter-=1
            submitBtn.setAttribute('disabled', 'disabled');
        }else if(key=="Enter" && val!==""){playsound(clickSound)
            checkAnswer();
        }else{}
}
function activeSubmit(val){
        val=val.toLowerCase();
        if(val=="" || regex.test(val)==false){}
        else{submitBtn.removeAttribute('disabled');}
}
function handleBtnInput(id){
        if(submitOn==true){}else{
            playsound(clickSound)
            if(activeLetter==5 || activeLetter==10 || activeLetter==15 || activeLetter==20 || activeLetter==25 || activeLetter==30 ){
                document.getElementById(`input${activeLetter}`).innerHTML=id.toUpperCase()
                submitBtn.removeAttribute('disabled')
                submitOn=true
            } else {
                document.getElementById(`input${activeLetter}`).innerHTML=id.toUpperCase()
                document.getElementById(`input${activeLetter}`).style.border="none"
                document.getElementById(`input${activeLetter+1}`).style.border="2px solid black"
                activeLetter+=1
            }
        }
}
function focusOnPrev(){
        if(activeLetter==1 || activeLetter==6 || activeLetter==11 || activeLetter==16 || activeLetter==21 || activeLetter==26){} else {
            playsound(clickSound)
            if(submitOn==true){
                document.getElementById(`input${activeLetter}`).innerHTML=""
                submitBtn.setAttribute('disabled', 'disabled');
                submitOn=false
            } else {
                document.getElementById(`input${activeLetter-1}`).innerHTML=""
                document.getElementById(`input${activeLetter}`).style.border="none"
                document.getElementById(`input${activeLetter-1}`).style.border="2px solid black"
                activeLetter-=1
            }
        }
}
function checkAnswer(){
        numberOfAttempts+=1
        submitOn=false
        if(activeLetter==5 || activeLetter==35){console.log(word)}
        document.getElementById(`input${activeLetter}`).style.border="none"
        if(setInp==1){
            attempt=document.getElementById(`input${activeLetter-4}`).innerHTML.toLowerCase()
                +document.getElementById(`input${activeLetter-3}`).innerHTML.toLowerCase()
                +document.getElementById(`input${activeLetter-2}`).innerHTML.toLowerCase()
                +document.getElementById(`input${activeLetter-1}`).innerHTML.toLowerCase()
                +document.getElementById(`input${activeLetter}`).innerHTML.toLowerCase()
        }else if(setInp==2){
            attempt=document.getElementById(`input${activeLetter-4}`).value.toLowerCase()
                +document.getElementById(`input${activeLetter-3}`).value.toLowerCase()
                +document.getElementById(`input${activeLetter-2}`).value.toLowerCase()
                +document.getElementById(`input${activeLetter-1}`).value.toLowerCase()
                +document.getElementById(`input${activeLetter}`).value.toLowerCase()
        }
        let attemptSplit=attempt.split('')
        for(let i=0; i<5; i++){
            document.getElementById(attemptSplit[i]).style.border="none";
            document.getElementById(attemptSplit[i]).style.backgroundColor=getComputedStyle(document.querySelector(':root')).getPropertyValue('--theme1');
            document.getElementById(`input${i+activeLetter-4}`).style.backgroundColor=getComputedStyle(document.querySelector(':root')).getPropertyValue('--theme1');
        }
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(attemptSplit[i]==wordSplit[j] && i!==j){
                    document.getElementById(`input${activeLetter-4+i}`).style.backgroundColor="orange";
                    document.getElementById(attemptSplit[i]).style.backgroundColor="orange";
                }
            }
        }
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(attemptSplit[i]==wordSplit[j] && i==j){
                    document.getElementById(`input${activeLetter-4+i}`).style.backgroundColor="lightgreen";
                    document.getElementById(attemptSplit[i]).style.backgroundColor="lightgreen";
                }
            }
        }
        if(word==attempt){
            document.getElementById("congrats").innerText="Nyertél!"
            playsound(winning)
            document.getElementById("submit").style.display="none";
            document.getElementById("playAgain").style.display="block";
            if(wonStat[2]==wonStat[3]){wonStat[3]+=1}
            wonStat[0]+=1
            wonStat[2]+=1
            diagramData[numberOfAttempts-1]+=1
        }else if((activeLetter==30 || activeLetter==60) && word!==attempt ){
            document.getElementById("congrats").innerText="Ez volt a szó: "+"\n' " + word.toUpperCase() + " '!";
            playsound(gameOver)
            document.getElementById("submit").style.display="none";
            document.getElementById("playAgain").style.display="block";
            wonStat[1]+=1
            wonStat[2]=0
        }else{
            for(let i=0; i<5; i++){
                document.getElementById(`input${activeLetter+1+i}`).style.backgroundColor="white";
                if(setInp==2){
                    document.getElementById(`input${activeLetter-4+i}`).setAttribute('disabled', 'disabled');
                    document.getElementById(`input${activeLetter+1+i}`).removeAttribute('disabled');
                }
            }
            if(setInp==1){
                document.getElementById(`input${activeLetter+1}`).style.border="2px solid black"
            }else if(setInp==2){
                document.getElementById(`input${activeLetter+1}`).focus()
            }
            activeLetter+=1
        }
        updateStats(wonStat, diagramData)
        getStats()
}