
const ListA=[["abban", "Abbás", "abból", "Abbot", "abcúg", "ábécé", "ablak", "Abony", "abrak", "ábrák", "ábrán", "ábrát", "Ábris", "acélt", "achát", "Acsád", "ácsol", "Adács", "Ádánd", "adása", "adást", "addig", "Adina", "adják", "adnak", "adnám", "adódó", "Adolf", "adoma", "Adony", "adott", "adtad", "adtál", "adtam", "aduja", "adunk", "afgán", "Agárd", "Agáta", "Ágnes", "Ágost", "Ágota", "agrár", "aguti", "agyag", "agyar", "ágyas", "ágyás", "agyat", "agyát", "ágyat", "ágyaz", "ágyba", "ágyék", "ágyúi", "ágyút", "ágyúz", "ahhoz", "áhító", "Ahmed", "ahogy", "ahova", "ahová", "ajánl", "Ajhun", "ajkak", "ajkat", "ajkát", "ajóka", "ajtók", "ajtón", "ajtót", "ájult", "Akács", "akard", "akaró", "akart", "akció", "akire", "akkor", "aknát", "akona", "aktív", "aktot", "aktus", "aláás", "alább", "aláír", "alaki", "alakú", "alant", "alany", "alapú", "álarc", "Alárd", "alatt", "albán", "Albin", "album", "álcáz", "alcím", "Aldán", "áldás", "áldja", "Áldor", "áldoz", "áldva", "alélt", "Aléna", "Alexa", "alfaj", "alfél", "Algyő", "álhat", "álhír", "alibi", "Alida", "Alina", "alján", "aljas", "alkar", "alkat", "alkot", "alkóv", "alkut", "álláb", "állag", "állal", "állam", "állás", "állat", "állát", "állig", "állít", "állja", "állni", "állok", "állók", "állta", "állva", "Almár", "almás", "álmát", "álmok", "álmos", "almot", "álmot", "almoz", "álnév", "álnok", "alóla", "Alpár", "altáj", "által", "áltat", "aludt", "aluli", "alvás", "alváz", "Alvin", "Amadé", "Amand", "Amáta", "Ambos", "ámbra", "amely", "amibe", "Amina", "aminő", "amint", "amire", "ámító", "ámokr", "amorf", "amott", "amőba", "amper", "amúgy", "ámuló", "Andor", "Andos", "André", "Anett", "angin", "angol", "Anikó", "Anita", "annak", "annál", "annyi", "Antal", "antik", "Antos", "anyag", "anyai", "anyák", "anyám", "anyós", "Ányos"],
    ["apáca", "apadó", "Apagy", "apait", "apály", "ápoló", "ápolt", "aprít", "apród", "aprót", "apuci", "apuka", "áradó", "áramú", "arany", "arány", "árast", "arasz", "arató", "árboc", "árból", "arbor", "arcán", "arcát", "arcba", "arcél", "arcon", "arcot", "arcra", "arctg", "arcth", "arcul", "aréna", "Arián", "Ariel", "Arika", "Arion", "Arkád", "árkol", "árkon", "árkos", "árkot", "Arlen", "Ármin", "Arnót", "árnya", "aroma", "Árpád", "Árpás", "árpát", "árral", "árrés", "arról", "ártér", "Artúr", "áruba", "áruló", "árván", "Arvid", "árvíz", "arzén", "ásató", "ásító", "Asóka", "ásott", "ástad", "ástam", "aszal", "Aszár", "ászka", "Aszód", "átadó", "Atala", "átáll", "Átány", "átdöf", "átejt", "átélt", "átfed", "átfog", "átfon", "átfúr", "átfut", "áthág", "áthat", "áthoz", "áthúz", "átjár", "átjön", "átjut", "átkel", "átkos", "átkoz", "átköt", "átkúr", "átlag", "átlát", "átlép", "átlós", "átmér", "átmos", "átnéz", "atoll", "atomi", "átönt", "átrág", "átrak", "átráz", "attól", "áttol", "áttör", "átütő", "átvág", "átver", "atyai", "atyák", "atyám", "augur", "Aurél", "autóé", "autók", "autón", "autós", "autót", "avagy", "avizó", "avuló", "avval", "azért", "aznap", "azóta", "ázott", "Ázsia", "ázsió", "aztán", "áztat", "azték", "azzal", "b-hez", "bábbá", "Bábel", "babér", "Babót", "Bácsa", "bácsi", "badar", "bádog", "Bagod", "bagót", "bájak", "Baján", "baját", "bajba", "Bajna", "bajod", "bajok", "bajom", "bajos", "bájos", "Bajót", "bakot", "Baksa", "Balár", "báláz", "Baldó", "balek", "balhé", "bálna", "balos", "balra", "Balsa", "balta", "balul", "bamba", "bámia", "bámul", "banán", "bánat", "banda", "Bandó", "bánik", "bánja", "banki", "bánni", "bánom", "Bános", "bántó", "banya", "bánya", "barát", "bárca", "Bardó", "barit", "bárja", "barka", "bárka", "bárki", "barkó", "bármi", "barna"],
    ["barom", "Barót", "Baskó", "baszk", "batár", "bátor", "Bátya", "Batyk", "batyu", "Bazil", "bázis", "Bazsi", "Bazsó", "beadó", "beáll", "Beáta", "becéz", "Becse", "bécsi", "bedob", "bedöf", "bedől", "bedug", "beéri", "beeső", "befal", "befed", "befog", "befon", "befőz", "befúj", "befut", "befűt", "befűz", "béget", "behív", "behoz", "behúz", "behűt", "bejár", "bejön", "bejut", "bekap", "Békás", "békát", "beken", "békén", "bekér", "békés", "békét", "beköp", "beköt", "belát", "beléd", "Beled", "Beleg", "belek", "bélel", "belem", "belep", "belép", "bélés", "belét", "belga", "Bella", "belóg", "belök", "belső", "belül", "bemos", "Bence", "Bende", "bendő", "benéz", "bénít", "Benke", "Benkő", "benne", "benső", "beolt", "beönt", "berak", "bérbe", "berek", "bérek", "bérel", "Beret", "Berki", "bérlő", "Berta", "berúg", "besóz", "besúg", "besül", "besző", "beteg", "bétel", "betér", "betét", "betol", "beton", "betöm", "betör", "Betta", "betűk", "betűs", "betűt", "betűz", "beüti", "bevág", "bever", "bevés", "bevet", "bevon", "bezár", "bezúz", "bíbic", "bibit", "bíbor", "bicaj", "biceg", "bigyó", "Bikád", "Bikal", "Bikol", "bimbó", "bingó", "binom", "bióta", "bírák", "bírál", "bírás", "bírja", "birka", "bírni", "bírói", "bírom", "bírta", "bison", "bízik", "bízni", "bízom", "bizsu", "bízva", "bízza", "blokk", "blöff", "blues", "Bócsa", "bódít", "Bódog", "Bodor", "bodza", "bogár", "Bogát", "bogot", "bohém", "bohóc", "Bokod", "bókok", "bókol", "bokor", "boksz", "Bolda", "bolha", "Bolhó", "bolsi", "bolyh", "bomba", "bomol", "bongó", "Bónis", "bontó", "borda", "bordó", "Boris", "borít", "borjú", "borkő", "borok", "boros", "borsó", "borul", "borús", "Botár", "Botfa", "botja", "botló", "botos", "bóvli", "boxer", "boxos", "Boyle", "bozót", "bödön", "böfög", "bőgés", "bőgni", "bögre", "bökés"],
    ["bölcs", "bőrbe", "Börcs", "bőrét", "bőrig", "bőrön", "bőröz", "bőség", "bőven", "bővít", "bővül", "bözsi", "brága", "bravó", "Brian", "brigg", "broki", "bronz", "bross", "brown", "Brúnó", "búbos", "bucka", "Bucsa", "búcsú", "Bucsu", "Budai", "buffa", "Bugac", "búgás", "búgat", "bugyi", "Buják", "buján", "búját", "bújik", "bújja", "bújni", "bukás", "bukik", "bukta", "bukva", "bulla", "bumtő", "bunda", "bunkó", "bunyó", "burok", "búsan", "búsba", "búsul", "bután", "butik", "butil", "butít", "bútor", "butul", "butus", "búvár", "Buzád", "búzát", "buzgó", "buzis", "buzit", "buzog", "buzul", "bűbáj", "büdös", "bűnbe", "bűnei", "bűnét", "bűnök", "bűnös", "bűnre", "Büssü", "bűvös", "bűzlő", "bűzös", "cafat", "cafka", "cáfol", "Cecil", "cedál", "cégek", "cegél", "cégen", "cégér", "céget", "cékla", "célba", "Célia", "célig", "célja", "cella", "célod", "célok", "célom", "célon", "céloz", "célra", "célzó", "cérna", "cetli", "cézár", "chile", "cibál", "cibet", "cicik", "cicus", "cifra", "cigit", "cikis", "címek", "címem", "címen", "címén", "címer", "címet", "címez", "címke", "cimpa", "cinke", "cipel", "cipőn", "cipős", "cipőt", "Cirák", "cirka", "Círus", "civil", "compó", "coulé", "cölöp", "cövek", "Csaba", "csákó", "csali", "csaló", "csánk", "Csány", "csapa", "Csapi", "csapj", "csapó", "csápú", "csata", "Csató", "csáva", "csávó", "csecs", "Csegő", "Csehi", "csehó", "Cseke", "csekk", "cselt", "csend", "cseng", "Csépa", "csepp", "csepű", "csere", "csert", "cséve", "cséza", "csibe", "csiga", "csikk", "csikó", "csini", "csíny", "csipa", "csípd", "csípi", "csípő", "csíra", "csitt", "csoda", "csóka", "Csoma", "csomó", "csonk", "csont", "csóró", "csőág", "csőbe", "csöcs", "Csöde", "csöpp", "csőrű", "Csösz", "csöve", "csövű", "csúcs", "csuda", "csuka", "csupa", "csüng", "cucca", "cucli"],
    ["cudar", "cúgos", "cukor", "cukra", "curry", "d-hez", "Dabas", "dacol", "dacos", "dadog", "dagad", "daják", "dajka", "dália", "Dalma", "dalok", "dalol", "dalos", "Damak", "Damáz", "damil", "Dámóc", "Damos", "Dános", "Dante", "darab", "darál", "dárda", "daróc", "darun", "dátum", "dauer", "Dávid", "dékán", "delel", "delén", "delet", "Délia", "délre", "delta", "démon", "dendi", "Dénes", "derce", "derék", "deres", "derít", "derma", "derül", "derűs", "derűt", "Deszk", "Detek", "Detre", "detto", "dettó", "dévaj", "dézsa", "Dezső", "diáké", "Diána", "dicső", "didik", "didkó", "diéta", "díjat", "díjaz", "díjra", "dilis", "dingi", "dingy", "dinka", "Diósd", "dipól", "dísze", "díszt", "Ditta", "divat", "dívik", "dobál", "dobás", "dobog", "dobol", "dobos", "dobot", "doboz", "Dobri", "dobva", "dogma", "dohog", "dohos", "dolga", "Dolli", "dolog", "Domán", "domén", "Domos", "Donát", "donga", "dongó", "donor", "Dorog", "dózer", "döcög", "döfés", "dögös", "dőlés", "dőlve", "dölyf", "Dömös", "döngő", "Döníz", "döntő", "dönts", "dörej", "dörgő", "dörög", "drága", "dráma", "drapp", "dublé", "dúcfa", "dúcol", "dudák", "dudál", "dudás", "dúdol", "dudor", "dudva", "duett", "dugás", "dugig", "dugja", "dugós", "dugót", "duhaj", "dúlva", "dumál", "dumás", "dumát", "dummy", "dundi", "dupla", "durva", "dúsan", "Dusán", "dúsít", "dutyi", "dühbe", "dühét", "dühít", "dühös", "dürög", "dzsem", "dzsip", "ebadó", "ebben", "ebből", "ébred", "ébren", "Ecséd", "Ecser", "ecset", "eddig", "edény", "Edgár", "Edina", "Edvin", "edzés", "égből", "égési", "egész", "égető", "égett", "eggyé", "égnek", "égően", "égövi", "egres", "égtáj", "égtem", "egybe", "egyéb", "Egyed", "Egyek", "egyel", "egyen", "egyén", "egyes", "egyet", "egyig", "egyik", "egyke", "egyre", "éhbér", "ehető", "éhező", "ehhez", "éhkór", "éhség"],
    ["éjfél", "éjjel", "ejtés", "ejtsd", "ékelő", "ekére", "ekhós", "ékkel", "ekkor", "ékorr", "eladó", "eláll", "elbír", "éldat", "eldob", "eldug", "elébe", "elege", "elégő", "elegy", "eleje", "eléje", "eleji", "elejt", "elejű", "eleme", "elemi", "élénk", "élére", "eléri", "elérő", "élete", "életű", "eleve", "elfed", "elfér", "elfog", "elfúj", "elfut", "elhal", "elhál", "elhív", "elhoz", "elhúz", "Éliás", "Elihu", "Elina", "Eliza", "eljár", "éljen", "eljön", "eljut", "elkap", "elkel", "elken", "elköp", "elköt", "elkúr", "Ellák", "ellát", "ellen", "ellep", "ellép", "ellet", "ellik", "ellop", "ellök", "Elmár", "elmés", "elmos", "élnek", "élnem", "elnéz", "elnök", "elnyű", "elold", "elolt", "előad", "előás", "előbb", "élőfa", "előír", "előke", "elönt", "előny", "előre", "előtt", "előzi", "előző", "elrág", "elrak", "elrúg", "elsóz", "elsős", "elsül", "elsüt", "éltek", "éltem", "eltép", "eltér", "éltet", "eltol", "Elton", "eltöm", "eltör", "eltűr", "elült", "élünk", "elüti", "elütő", "elűzi", "elvág", "elvár", "elver", "elvet", "elvét", "élvez", "elvhű", "elvon", "elvül", "elzár", "elzúg", "ember", "emeli", "emelő", "emelt", "Emese", "emitt", "emlék", "említ", "emlős", "Emőke", "Endre", "Éneás", "Enese", "enged", "engem", "Enikő", "ennek", "ennél", "ennyi", "enyém", "enyhe", "enzim", "epedő", "epekő", "építő", "eposz", "éppen", "épség", "épülő", "épült", "érből", "érces", "ércet", "érckő", "Ercsi", "erdei", "érdek", "érdem", "érdes", "erdős", "erdőt", "eredj", "eredő", "ereje", "erejű", "erély", "erény", "eresz", "érett", "érezd", "eridj", "Erika", "Erina", "érint", "erjed", "érlel", "érmén", "Ernák", "Ernye", "ernyő", "erőmű", "erőre", "erről", "érsek", "érted", "értek", "érték", "értem", "értés", "értik", "érvek", "érvel", "érvet", "Ervin", "érzed", "érzék", "érzem", "érzés"],
    ["érzet", "érzik", "esély", "esésű", "esett", "eskór", "esküt", "esnek", "esőre", "essen", "esszé", "estek", "estem", "estét", "estig", "Észak", "észbe", "eszed", "eszel", "eszem", "eszén", "eszes", "eszét", "eszik", "eszme", "észre", "Etele", "ételt", "éteri", "eteti", "etető", "etika", "étlap", "ettem", "ettől", "Eugén", "Euler", "Eutim", "Évald", "évben", "évelő", "evést", "evező", "évről", "évvel", "evvel", "excel", "extra", "ez-az", "ezért", "ezred", "ezret", "Ézsau", "ezüst", "ezzel", "faarc", "fabél", "fából", "fácán", "facér", "fafej", "faház", "fahéj", "fájás", "fajhő", "fájlt", "fajok", "fájós", "Fajsz", "fajta", "fakad", "fákat", "fakír", "fakít", "fakul", "faláb", "falak", "falás", "falat", "falaz", "falba", "falka", "falra", "Fanni", "faodú", "farad", "fárad", "farag", "farán", "fáraó", "farfa", "farka", "farkú", "farok", "farol", "farúd", "fásli", "fasor", "fasza", "faszi", "fatál", "fater", "fauna", "fával", "faváz", "fazék", "fázik", "fázis", "fázol", "fazon", "fedél", "fedés", "fedez", "Fedor", "Fédra", "fehér", "fejbe", "fejel", "fejem", "fejen", "fején", "Fejér", "fejes", "fejés", "fejet", "fejét", "fejez", "fejfa", "fejre", "fejti", "fejtő", "Feked", "féken", "féket", "fékez", "fekve", "fekvő", "felad", "felár", "felás", "félbe", "felek", "felel", "felél", "felér", "felét", "félév", "felez", "félfa", "felhő", "félig", "felír", "Félix", "félni", "felnő", "felől", "félre", "felró", "felso", "felső", "félsz", "félti", "féltő", "felül", "felüt", "félve", "fémes", "fémet", "fenék", "fenés", "fenét", "fenol", "fenti", "fénye", "fenyő", "fényt", "fényű", "ferde", "féreg", "férek", "férfi", "férje", "férji", "festő", "fésül", "fétis", "ficam", "fickó", "Fidél", "finom", "fiola", "firka", "fitos", "fivér", "fixál", "fizet", "fjord", "flanc", "flemm", "flóra"],
    ["flört", "flöss", "fodor", "fogad", "fogai", "fogak", "fogam", "fogas", "fogás", "fogat", "fogát", "fogaz", "fogda", "fogja", "fogkő", "fogni", "fogod", "fogok", "fogom", "fogós", "fogsz", "fogva", "fogyó", "fojtó", "fokig", "fokon", "fokos", "fokot", "fokoz", "fokra", "fólia", "fólió", "folyó", "folyt", "fonák", "fonal", "fonál", "fonat", "fondü", "fonja", "forgó", "Fóris", "forma", "forog", "forró", "forsz", "fórum", "fosik", "fosva", "fotel", "fő-fő", "főcím", "főcső", "főhős", "földi", "főleg", "fölös", "fölső", "főnév", "főnix", "főnök", "főpap", "főúri", "föveg", "fővel", "főzés", "főzet", "frakk", "franc", "frank", "frász", "fricc", "Frida", "frigy", "friss", "fritz", "front", "fuccs", "fugáz", "fújás", "fukar", "fúrás", "furat", "furda", "fúria", "furkó", "fúrón", "fuser", "futam", "futár", "futás", "futja", "futni", "futók", "futóz", "futva", "fuvar", "fúvás", "fúvat", "fúvós", "fúzió", "fügét", "függő", "Fügöd", "fülbe", "fülek", "fülel", "fülem", "füles", "fület", "fülét", "fülig", "fűlik", "fülik", "fülke", "fülön", "Fülöp", "fülük", "fűmag", "fürdő", "fürge", "fűről", "fűtés", "fütty", "fűtve", "fütyi", "fűvel", "füves", "füzér", "Fűzér", "füzet", "fűzfa", "fűzős", "fűzőt", "Gábor", "Gadna", "gagát", "gágog", "galád", "gally", "gálma", "Gálos", "gálya", "ganaj", "gáncs", "ganéj", "ganés", "Ganna", "Garád", "garas", "garat", "garbó", "gárda", "garde", "gátak", "gátat", "Gátér", "gátló", "gátol", "gatya", "gatyó", "gázba", "gazda", "gázló", "gázok", "gázol", "gázon", "gazos", "Gazsó", "Gecse", "gekko", "Gelej", "géllé", "Gelse", "Gemma", "Génia", "genny", "génua", "genus", "genyó", "gépek", "gépel", "gépet", "Gérce", "Gerda", "Gerde", "Geréb", "Gergő", "Gerla", "gerle", "germó", "Geszt", "gettó", "Gétye", "giccs", "Gilda", "gines", "gipsz", "gitár", "Gitta"],
    ["gólya", "golyó", "gomba", "gombó", "gödör", "Gödre", "gőgös", "görbe", "görcs", "görgő", "görög", "Gősfa", "gőzöd", "gőzöl", "gőzön", "gőzös", "gőzzé", "gramm", "Gréta", "griff", "grill", "Gujdó", "gulya", "gumik", "gumis", "gumiz", "gumós", "gúnár", "Gunda", "gúnyé", "gúnyt", "gurít", "gurka", "gurul", "gügye", "gümős", "güzül", "gyalu", "gyanú", "Gyapa", "gyári", "gyárt", "gyász", "gyáva", "gyere", "Gyoma", "Gyóró", "gyors", "gyöke", "Gyönk", "Györe", "Györk", "győző", "gyufa", "Gyugy", "gyújt", "Gyula", "Gyuri", "gyúró", "gyűjt", "Gyüre", "gyűri", "gyűrű", "habár", "habja", "habkő", "habok", "habos", "habot", "habzó", "hadar", "hadat", "hadba", "hadra", "Hágár", "hagyd", "hagyj", "hagyó", "Hahót", "hajas", "hájas", "hajat", "haját", "hajba", "hajít", "hajló", "Hajna", "hajóé", "hajók", "hajol", "hajón", "hajós", "hajót", "hajrá", "hajtó", "hajts", "halad", "halak", "halál", "hálás", "halat", "hálát", "halló", "halom", "hálon", "hálós", "hálót", "halva", "hamar", "HAMIS", "hámló", "hámoz", "hamva", "háncs", "hanem", "hanga", "hangé", "hangú", "Hanna", "Hannó", "hanta", "hányó", "hányt", "hapci", "hápog", "hapsi", "harag", "harap", "harca", "harci", "hárem", "hárfa", "haris", "hárít", "három", "Harri", "hárul", "hasáb", "hasad", "hasal", "hasas", "hasat", "hasát", "hasis", "hasít", "haskó", "hasló", "hason", "hasra", "hátán", "határ", "hatás", "hátat", "hátát", "hátba", "hatja", "hatni", "hatol", "háton", "hatos", "hátra", "hátsó", "hátul", "havas", "havat", "haver", "hazai", "házal", "házas", "házat", "házát", "házba", "házig", "házon", "házra", "hazug", "házuk", "hebeg", "héber", "hébér", "Hedda", "hefti", "heges", "hegye", "hegyi", "hegyű", "héjas", "héját", "Hejce", "hekus", "Helén", "Helga", "Helka", "Hella", "helye", "helyi", "helyt", "henye", "hepaj", "Heréd"],
    []]

const letter11=document.getElementById("input11")
const letter12=document.getElementById("input12")
const letter13=document.getElementById("input13")
const letter14=document.getElementById("input14")
const letter15=document.getElementById("input15")
const letter21=document.getElementById("input21")
const letter22=document.getElementById("input22")
const letter23=document.getElementById("input23")
const letter24=document.getElementById("input24")
const letter25=document.getElementById("input25")
const letter31=document.getElementById("input31")
const letter32=document.getElementById("input32")
const letter33=document.getElementById("input33")
const letter34=document.getElementById("input34")
const letter35=document.getElementById("input35")
const letter41=document.getElementById("input41")
const letter42=document.getElementById("input42")
const letter43=document.getElementById("input43")
const letter44=document.getElementById("input44")
const letter45=document.getElementById("input45")
const letter51=document.getElementById("input51")
const letter52=document.getElementById("input52")
const letter53=document.getElementById("input53")
const letter54=document.getElementById("input54")
const letter55=document.getElementById("input55")
const letter61=document.getElementById("input61")
const letter62=document.getElementById("input62")
const letter63=document.getElementById("input63")
const letter64=document.getElementById("input64")
const letter65=document.getElementById("input65")
const submitBtn=document.getElementById("submit")
const letterElements=document.getElementsByClassName("letters")
let won=0
let streak=0
let lost=0
let attempt=""
let activeLine=1
let wonStat=[0, 0, 0, 0,0, 0, 0, 0, 0, 0] //[won, lost, current streak, max streak, winfirstattempt, winsecondattempt,...]
let tempNum=Math.floor(Math.random()*ListA.length)
let word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)]
//let word="stark"???
let wordSplit=word.split('')
getWonStat()


function getWonStat(){
    wonStat=localStorage.getItem("wonStat").split(",").map(Number)
    document.getElementById("wonScore").innerText=wonStat[0]
    document.getElementById("streakScore").innerText=wonStat[2]
}
function resetStats(){
    localStorage.removeItem("wonStat")
}
function statistics(){
    document.getElementById("statsPanel").style.display="block";
    document.getElementById("game-ui").style.display="none";
    document.getElementById("played").innerHTML=wonStat[0]+wonStat[1]
    document.getElementById("winStat").innerHTML=Math.floor(wonStat[0]/(wonStat[0]+wonStat[1])*100)
    document.getElementById("currentStreak").innerHTML=wonStat[2]
    document.getElementById("maxStreak").innerHTML=wonStat[3]
    document.getElementById("diagramStats").innerHTML=wonStat[4]+","+wonStat[5]+","+wonStat[6]+","+wonStat[7]+","+wonStat[8]+","+wonStat[9]
}
function hideStats(){
    document.getElementById("statsPanel").style.display="none"
    document.getElementById("game-ui").style.display="block";
}
function focusOnNext(nextLet, val){
    val=val.toLowerCase();
    const regex=/[a-záéíóöőúüű]/;
    if(val=="" || regex.test(val)==false){}
    else{nextLet.focus();}
}
function activeSubmit(val){
    val=val.toLowerCase();
    const regex=/[a-z]/;
    if(val=="" || regex.test(val)==false){}
    else{submitBtn.removeAttribute('disabled');}
}
function focusOnPrev(event, prevLet, val){
    let key=event.key;
    if(key=="Backspace" && val==""){
        prevLet.focus();
        submitBtn.setAttribute('disabled', 'disabled');
    }else if(key=="Enter" && val!==""){
        checkAnswer();
    }else{}
}
function checkAnswer(){
    if(activeLine==1){console.log(word)}
    attempt=document.getElementById(`input${activeLine}1`).value.toLowerCase()
            +document.getElementById(`input${activeLine}2`).value.toLowerCase()
            +document.getElementById(`input${activeLine}3`).value.toLowerCase()
            +document.getElementById(`input${activeLine}4`).value.toLowerCase()
            +document.getElementById(`input${activeLine}5`).value.toLowerCase()
    let attemptSplit=attempt.split('')
    for(let i=0; i<5; i++){
        document.getElementById(attemptSplit[i]).style.backgroundColor="#B39EB5";
        document.getElementById(attemptSplit[i]).style.border="none";
        document.getElementById(`input${activeLine}${i+1}`).style.backgroundColor="#B39EB5";
    }
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(attemptSplit[i]==wordSplit[j] && i==j){
                document.getElementById(`input${activeLine}${i+1}`).style.backgroundColor="lightgreen";
                document.getElementById(attemptSplit[i]).style.backgroundColor="lightgreen";
                i+=1;
            } else if(attemptSplit[i]==wordSplit[j] && i!==j){
                document.getElementById(`input${activeLine}${i+1}`).style.backgroundColor="orange";
                document.getElementById(attemptSplit[i]).style.backgroundColor="orange";
            } else {}
        }
    }
    if(word==attempt){
        document.getElementById("congrats").innerText="You Won!"
        document.getElementById("submit").style.display="none";
        document.getElementById("playAgain").style.display="block";
        if(wonStat[2]==wonStat[3]){wonStat[3]+=1}
        wonStat[0]+=1
        wonStat[2]+=1
        wonStat[activeLine+3]+=1
        updateStats(wonStat)
    }else if(activeLine==6 && word!==attempt ){
        document.getElementById("congrats").innerText="The word was: ' " + word + " '! You Lost.";
        document.getElementById("submit").style.display="none";
        document.getElementById("playAgain").style.display="block";
        wonStat[1]+=1
        wonStat[2]=0
        updateStats(wonStat)
    }else{acitvateNextLine(activeLine)}
    activeLine=activeLine+1
    return activeLine
}
function acitvateNextLine(lineNumber){
    for(let i=0; i<5; i++){
        document.getElementById(`input${lineNumber}${i+1}`).setAttribute('disabled', 'disabled');
        document.getElementById(`input${lineNumber+1}${i+1}`).removeAttribute('disabled');
        document.getElementById(`input${lineNumber+1}${i+1}`).style.backgroundColor="white";
    }
    document.getElementById(`input${lineNumber+1}1`).focus();
}
function updateStats(wonStat){
    let stringWonStat=wonStat.map(String).join(",")
    localStorage.setItem("wonStat", stringWonStat)
    getWonStat()
}
function playAgain(){
    attempt=""
    activeLine=1
    tempNum=Math.floor(Math.random()*ListA.length)
    word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)]
    wordSplit=word.split('')
    for(let i=0; i<5; i++){
        document.getElementById(`input1${i+1}`).removeAttribute('disabled');
        document.getElementById(`input1${i+1}`).value="";
        document.getElementById(`input1${i+1}`).style.backgroundColor="white";
    }
    for(let i=2; i<7; i++){
        for(let j=1; j<6; j++){
            document.getElementById(`input${i}${j}`).value=""
            document.getElementById(`input${i}${j}`).style.backgroundColor="rgba(239, 239, 239, 0.3)";
            document.getElementById(`input${i}${j}`).setAttribute('disabled', 'disabled');
        }
    }
    document.getElementById(`input11`).focus();
    document.getElementById("playAgain").style.display="none";
    document.getElementById("submit").style.display="block";
    document.getElementById("congrats").innerText=""
    let Alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i=0; i< Alphabet.length; i++){
        document.getElementById(Alphabet[i]).style.backgroundColor="lightgrey";
        document.getElementById(Alphabet[i]).style.border="1px solid black";
    }
}