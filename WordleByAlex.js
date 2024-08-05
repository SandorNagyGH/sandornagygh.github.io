
const ListA=[["abbey", "about", "above", "abuse", "actor", "acute", "adapt", "admit", "adobe", "adopt", "adult", "after", "again", "agent", "aging", "agony", "agree", "ahead", "aisle", "alarm", "album", "alert", "alien", "align", "alike", "alive", "alley", "allow", "alloy", "alone", "along", "aloud", "alpha", "altar", "alter", "amber", "amend", "amino", "among", "ample", "angel", "anger", "angle", "angry", "ankle", "apart", "apple", "apply", "arena", "argue", "arise", "armor", "arose", "array", "arrow", "aside", "assay", "asset", "atlas", "audio", "audit", "avoid", "await", "awake", "award", "aware", "awful", "bacon", "badge", "badly", "baked", "baker", "baron", "bases", "basic", "basil", "basin", "basis", "batch", "beach", "beard", "beast", "began", "begin", "begun", "being", "belly", "below", "bench", "berry", "billy", "birth", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "blend", "blind", "block", "blood", "bloom", "blown", "blues", "blunt", "board", "boast", "bobby", "bonus", "boost", "booth", "borne", "bound", "bowel", "boxer", "brain", "brake", "brand", "brass", "brave", "bread", "break", "breed", "brent", "brick", "bride", "brief", "bring", "brink", "brisk", "broad", "broke", "brook", "brown", "brush", "buddy", "build", "built", "bunch", "burke", "burnt", "burst", "buyer", "cabin", "cable", "cache", "calif", "canal", "candy", "canon", "cargo", "carol", "carry", "catch", "cater", "cause", "cease", "chain", "chair", "chalk", "chaos", "charm", "chart", "chase", "cheap", "check", "cheek", "cheer", "chess", "chest", "chick", "chief", "child", "chile", "chill", "china", "choir", "chose", "chuck", "cisco", "civic", "civil", "claim", "clash", "class", "clean", "clear", "clerk", "click", "cliff", "climb", "clock", "close", "cloth", "cloud", "coach", "coast", "colon", "color", "comic", "condo", "coral", "corps", "costa", "couch", "cough", "could", "count", "court", "cover", "crack", "craft", "crane", "crash", "crazy", "cream", "creed", "creek", "crest", "cried", "cries", "crime", "crisp", "cross", "crowd", "crown", "crude", "cruel", "crush", "crust", "cubic", "curry", "curve", "cycle", "daddy", "daily", "dairy", "daisy", "dance", "dated", "dealt", "death", "debit", "debut", "decay", "decor", "delay", "delta"],
    ["dense", "depot", "depth", "derby", "deter", "devil", "diary", "digit", "dirty", "dodge", "doing", "donor", "doubt", "dozen", "draft", "drain", "drama", "drank", "drawn", "dream", "dress", "dried", "drift", "drill", "drink", "drive", "drove", "drunk", "dusty", "dying", "eager", "eagle", "early", "earth", "eaten", "eight", "elbow", "elder", "elect", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "essay", "ethic", "event", "every", "exact", "excel", "exert", "exile", "exist", "extra", "faint", "fairy", "faith", "false", "famed", "fancy", "fatal", "fatty", "fault", "favor", "feast", "fence", "ferry", "fetch", "fever", "fiber", "fibre", "field", "fiery", "fifth", "fifty", "fight", "final", "first", "fitch", "fixed", "flame", "flash", "fleet", "flesh", "flies", "flint", "float", "flock", "flood", "floor", "flora", "flour", "flown", "fluid", "flung", "flush", "focal", "focus", "force", "forge", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "fried", "front", "frost", "fruit", "fully", "funny", "gamma", "gauge", "genre", "ghost", "giant", "given", "glass", "globe", "glory", "glove", "going", "grace", "grade", "grain", "grams", "grand", "grant", "graph", "grasp", "grass", "grave", "great", "greed", "green", "greet", "grief", "grill", "gross", "group", "grove", "grown", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "handy", "happy", "hardy", "harry", "harsh", "hatch", "haven", "heart", "heath", "heavy", "hedge", "hefty", "hello", "hence", "henry", "hobby", "holly", "homer", "honey", "honor", "horse", "hotel", "house", "human", "hurry", "ideal", "image", "imply", "incur", "index", "inner", "input", "Intel", "inter", "irony", "issue", "ivory", "japan", "jenny", "jewel", "jimmy", "joint", "jones", "judge", "juice", "knife", "knock", "known", "label", "labor", "laden", "lance", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least", "leave", "legal", "lemon", "level", "lever", "lewis", "light", "limit", "linen", "links", "liver", "lives", "lobby", "local", "lodge", "logic", "loose", "lotus", "lover", "lower", "loyal", "lucky", "lunch", "lying", "lynch", "magic", "major", "maker", "manor", "maple", "march", "maria", "marry", "marsh", "mason"],
    ["match", "maxim", "maybe", "mayor", "meant", "medal", "media", "mercy", "merge", "merit", "merry", "metal", "meter", "metre", "metro", "micro", "midst", "might", "minor", "minus", "Mitch", "mixed", "model", "modem", "moist", "molly", "money", "monte", "month", "moody", "moral", "motif", "motor", "mound", "mount", "mouse", "mouth", "movie", "mummy", "music", "naive", "naked", "nancy", "nasty", "naval", "needs", "nerve", "never", "newly", "niche", "night", "ninth", "noble", "noise", "noisy", "north", "notch", "noted", "novel", "nurse", "nylon", "occur", "ocean", "offer", "often", "olive", "onion", "onset", "opera", "optic", "orbit", "order", "organ", "other", "ought", "ounce", "outer", "overt", "oxide", "ozone", "paint", "panel", "panic", "paper", "party", "pasta", "paste", "patch", "patio", "pause", "peace", "pearl", "Peggy", "penny", "perry", "peter", "petty", "phase", "phone", "photo", "piano", "piece", "piles", "pilot", "pinch", "piper", "pitch", "pizza", "place", "plain", "plane", "plant", "plate", "plaza", "point", "polar", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "probe", "prone", "proof", "prose", "proud", "prove", "proxy", "pulse", "punch", "pupil", "purse", "queen", "query", "quest", "queue", "quick", "quiet", "quite", "quota", "quote", "radar", "radio", "raise", "rally", "ralph", "ranch", "randy", "range", "rapid", "ratio", "reach", "react", "ready", "realm", "rebel", "refer", "rehab", "reign", "relax", "relay", "renal", "renew", "repay", "reply", "resin", "rider", "ridge", "rifle", "right", "rigid", "riley", "risky", "rival", "river", "roast", "robin", "robot", "rocky", "roger", "roman", "rouge", "rough", "round", "route", "rover", "royal", "ruler", "rural", "rusty", "saint", "salad", "sally", "salon", "sandy", "sauce", "scale", "scare", "scene", "scent", "scope", "score", "scout", "scrap", "screw", "seize", "sense", "serum", "serve", "setup", "seven", "shade", "shaft", "shake", "shaky", "shall", "shame", "shape", "share", "sharp", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "shirt", "shock", "shook", "shoot", "shore", "short", "shout", "shown", "sided", "siege", "sight", "sigma", "silly", "since", "sixth", "sixty", "sized", "skies"],
    ["skill", "skirt", "skull", "slate", "slave", "sleek", "sleep", "slept", "slice", "slide", "slope", "slump", "small", "smart", "smash", "smell", "smile", "smith", "smoke", "snack", "snake", "solar", "solid", "solve", "sorry", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell", "spend", "spent", "spike", "spill", "spine", "spite", "split", "spoke", "spoon", "sport", "spray", "squad", "stack", "staff", "stage", "stake", "stall", "stamp", "stand", "stare", "stark", "start", "state", "steak", "steal", "steam", "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "sting", "stock", "stole", "stone", "stood", "stool", "store", "storm", "story", "straw", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "sunny", "super", "surge", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swing", "sword", "sworn", "swung", "table", "taken", "tales", "taste", "taxes", "teach", "teddy", "teeth", "telco", "tense", "tenth", "terry", "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tiger", "tight", "times", "tired", "title", "toast", "today", "token", "tommy", "tonne", "tooth", "topic", "torch", "total", "touch", "tough", "towel", "tower", "toxic", "trace", "track", "tract", "trade", "trail", "train", "trash", "treat", "trend", "trial", "tribe", "trick", "tried", "tries", "troop", "trout", "truck", "truly", "trunk", "trust", "truth", "tutor", "twice", "twist", "tying", "ultra", "uncle", "under", "undue", "union", "unite", "unity", "until", "upper", "upset", "urban", "urine", "usage", "usual", "utter", "vague", "valid", "value", "valve", "vapor", "vault", "venue", "verge", "verse", "video", "villa", "vinyl", "viral", "virus", "visit", "vista", "vital", "vivid", "vocal", "voice", "voter", "wagon", "waist", "waste", "watch", "water", "weary", "weber", "weigh", "weird", "welsh", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose", "widow", "width", "wired", "witch", "wives", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wrist", "write", "wrong", "wrote", "yacht", "yield", "young", "yours", "youth"]]

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
const alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const regex=/[a-z]/
let won=0
let streak=0
let setInp=1
let wonStat=[0, 0, 0, 0,0, 0, 0, 0, 0, 0] //[won, lost, current streak, max streak, winfirstattempt, winsecondattempt,...]
let attempt=""
let numberOfAttempts=0
let submitOn=false
let tempNum=Math.floor(Math.random()*ListA.length)
let word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)]
let wordSplit=word.split('')
let activeLetter=1
getWonStat()
setupGame()


function setupGame(){
    attempt=""
    numberOfAttempts=0
    submitOn=false
    tempNum=Math.floor(Math.random()*ListA.length)
    word=ListA[tempNum][Math.floor(Math.random()*ListA[tempNum].length)]
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
function settings(){
    document.getElementById("settingsPanel").style.display="block";
    document.getElementById("game-ui").style.display="none";
}
function hideSettings(){
    document.getElementById("settingsPanel").style.display="none";
    document.getElementById("game-ui").style.display="block";
    setupGame()
}
function  playsound(a){
    if(document.querySelector('input[name="musicChoice"]:checked').value=="musicOff"){
    }else{
        a.currentTime = 0;
        a.play()
    }
}
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
        document.getElementById("congrats").innerText="You Won!"
        playsound(winning)
        document.getElementById("submit").style.display="none";
        document.getElementById("playAgain").style.display="block";
        if(wonStat[2]==wonStat[3]){wonStat[3]+=1}
        wonStat[0]+=1
        wonStat[2]+=1
        wonStat[numberOfAttempts+3]+=1
    }else if((activeLetter==30 || activeLetter==60) && word!==attempt ){
        document.getElementById("congrats").innerText="The word was: ' " + word.toUpperCase() + " '!"+"\n You Lost.";
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
    updateStats(wonStat)
}
function updateStats(wonStat){
    let stringWonStat=wonStat.map(String).join(",")
    localStorage.setItem("wonStat", stringWonStat)
    getWonStat()
}