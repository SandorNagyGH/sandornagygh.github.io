
const ListA=[["abbey", "about", "above", "abuse", "actor", "acute", "adapt", "admit", "adobe", "adopt", "adult", "after", "again", "agent", "aging", "agony", "agree", "ahead", "aisle", "alarm", "album", "alert", "alien", "align", "alike", "alive", "alley", "allow", "alloy", "alone", "along", "aloud", "alpha", "altar", "alter", "amber", "amend", "amino", "among", "ample", "angel", "anger", "angle", "angry", "ankle", "apart", "apple", "apply", "arena", "argue", "arise", "armor", "arose", "array", "arrow", "aside", "assay", "asset", "atlas", "audio", "audit", "avoid", "await", "awake", "award", "aware", "awful", "bacon", "badge", "badly", "baked", "baker", "baron", "bases", "basic", "basil", "basin", "basis", "batch", "beach", "beard", "beast", "began", "begin", "begun", "being", "belly", "below", "bench", "berry", "billy", "birth", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "blend", "blind", "block", "blood", "bloom", "blown", "blues", "blunt", "board", "boast", "bobby", "bonus", "boost", "booth", "borne", "bound", "bowel", "boxer", "brain", "brake", "brand", "brass", "brave", "bread", "break", "breed", "brent", "brick", "bride", "brief", "bring", "brink", "brisk", "broad", "broke", "brook", "brown", "brush", "buddy", "build", "built", "bunch", "burke", "burnt", "burst", "buyer", "cabin", "cable", "cache", "calif", "canal", "candy", "canon", "cargo", "carol", "carry", "catch", "cater", "cause", "cease", "chain", "chair", "chalk", "chaos", "charm", "chart", "chase", "cheap", "check", "cheek", "cheer", "chess", "chest", "chick", "chief", "child", "chile", "chill", "china", "choir", "chose", "chuck", "cisco", "civic", "civil", "claim", "clash", "class", "clean", "clear", "clerk", "click", "cliff", "climb", "clock", "close", "cloth", "cloud", "coach", "coast", "colon", "color", "comic", "condo", "coral", "corps", "costa", "couch", "cough", "could", "count", "court", "cover", "crack", "craft", "crane", "crash", "crazy", "cream", "creed", "creek", "crest", "cried", "cries", "crime", "crisp", "cross", "crowd", "crown", "crude", "cruel", "crush", "crust", "cubic", "curry", "curve", "cycle", "daddy", "daily", "dairy", "daisy", "dance", "dated", "dealt", "death", "debit", "debut", "decay", "decor", "delay", "delta"],
    ["dense", "depot", "depth", "derby", "deter", "devil", "diary", "digit", "dirty", "dodge", "doing", "donor", "doubt", "dozen", "draft", "drain", "drama", "drank", "drawn", "dream", "dress", "dried", "drift", "drill", "drink", "drive", "drove", "drunk", "dusty", "dying", "eager", "eagle", "early", "earth", "eaten", "eight", "elbow", "elder", "elect", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal", "error", "essay", "ethic", "event", "every", "exact", "excel", "exert", "exile", "exist", "extra", "faint", "fairy", "faith", "false", "famed", "fancy", "fatal", "fatty", "fault", "favor", "feast", "fence", "ferry", "fetch", "fever", "fiber", "fibre", "field", "fiery", "fifth", "fifty", "fight", "final", "first", "fitch", "fixed", "flame", "flash", "fleet", "flesh", "flies", "flint", "float", "flock", "flood", "floor", "flora", "flour", "flown", "fluid", "flung", "flush", "focal", "focus", "force", "forge", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "fried", "front", "frost", "fruit", "fully", "funny", "gamma", "gauge", "genre", "ghost", "giant", "given", "glass", "globe", "glory", "glove", "going", "grace", "grade", "grain", "grams", "grand", "grant", "graph", "grasp", "grass", "grave", "great", "greed", "green", "greet", "grief", "grill", "gross", "group", "grove", "grown", "guard", "guess", "guest", "guide", "guild", "guilt", "habit", "handy", "happy", "hardy", "harry", "harsh", "hatch", "haven", "heart", "heath", "heavy", "hedge", "hefty", "hello", "hence", "henry", "hobby", "holly", "homer", "honey", "honor", "horse", "hotel", "house", "human", "hurry", "ideal", "image", "imply", "incur", "index", "inner", "input", "Intel", "inter", "irony", "issue", "ivory", "japan", "jenny", "jewel", "jimmy", "joint", "jones", "judge", "juice", "knife", "knock", "known", "label", "labor", "laden", "lance", "large", "laser", "later", "laugh", "layer", "learn", "lease", "least", "leave", "legal", "lemon", "level", "lever", "lewis", "light", "limit", "linen", "links", "liver", "lives", "lobby", "local", "lodge", "logic", "loose", "lotus", "lover", "lower", "loyal", "lucky", "lunch", "lying", "lynch", "magic", "major", "maker", "manor", "maple", "march", "maria", "marry", "marsh", "mason"],
    ["match", "maxim", "maybe", "mayor", "meant", "medal", "media", "mercy", "merge", "merit", "merry", "metal", "meter", "metre", "metro", "micro", "midst", "might", "minor", "minus", "Mitch", "mixed", "model", "modem", "moist", "molly", "money", "monte", "month", "moody", "moral", "motif", "motor", "mound", "mount", "mouse", "mouth", "movie", "mummy", "music", "naive", "naked", "nancy", "nasty", "naval", "needs", "nerve", "never", "newly", "niche", "night", "ninth", "noble", "noise", "noisy", "north", "notch", "noted", "novel", "nurse", "nylon", "occur", "ocean", "offer", "often", "olive", "onion", "onset", "opera", "optic", "orbit", "order", "organ", "other", "ought", "ounce", "outer", "overt", "oxide", "ozone", "paint", "panel", "panic", "paper", "party", "pasta", "paste", "patch", "patio", "pause", "peace", "pearl", "Peggy", "penny", "perry", "peter", "petty", "phase", "phone", "photo", "piano", "piece", "piles", "pilot", "pinch", "piper", "pitch", "pizza", "place", "plain", "plane", "plant", "plate", "plaza", "point", "polar", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize", "probe", "prone", "proof", "prose", "proud", "prove", "proxy", "pulse", "punch", "pupil", "purse", "queen", "query", "quest", "queue", "quick", "quiet", "quite", "quota", "quote", "radar", "radio", "raise", "rally", "ralph", "ranch", "randy", "range", "rapid", "ratio", "reach", "react", "ready", "realm", "rebel", "refer", "rehab", "reign", "relax", "relay", "renal", "renew", "repay", "reply", "resin", "rider", "ridge", "rifle", "right", "rigid", "riley", "risky", "rival", "river", "roast", "robin", "robot", "rocky", "roger", "roman", "rouge", "rough", "round", "route", "rover", "royal", "ruler", "rural", "rusty", "saint", "salad", "sally", "salon", "sandy", "sauce", "scale", "scare", "scene", "scent", "scope", "score", "scout", "scrap", "screw", "seize", "sense", "serum", "serve", "setup", "seven", "shade", "shaft", "shake", "shaky", "shall", "shame", "shape", "share", "sharp", "sheep", "sheer", "sheet", "shelf", "shell", "shift", "shine", "shiny", "shirt", "shock", "shook", "shoot", "shore", "short", "shout", "shown", "sided", "siege", "sight", "sigma", "silly", "since", "sixth", "sixty", "sized", "skies"],
    ["skill", "skirt", "skull", "slate", "slave", "sleek", "sleep", "slept", "slice", "slide", "slope", "slump", "small", "smart", "smash", "smell", "smile", "smith", "smoke", "snack", "snake", "solar", "solid", "solve", "sorry", "sound", "south", "space", "spare", "spark", "speak", "speed", "spell", "spend", "spent", "spike", "spill", "spine", "spite", "split", "spoke", "spoon", "sport", "spray", "squad", "stack", "staff", "stage", "stake", "stall", "stamp", "stand", "stare", "stark", "start", "state", "steak", "steal", "steam", "steel", "steep", "steer", "stein", "stern", "stick", "stiff", "still", "sting", "stock", "stole", "stone", "stood", "stool", "store", "storm", "story", "straw", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "sunny", "super", "surge", "swear", "sweat", "sweep", "sweet", "swell", "swept", "swift", "swing", "sword", "sworn", "swung", "table", "taken", "tales", "taste", "taxes", "teach", "teddy", "teeth", "telco", "tense", "tenth", "terry", "texas", "thank", "theft", "their", "theme", "there", "these", "thick", "thief", "thigh", "thing", "think", "third", "those", "three", "threw", "throw", "thumb", "tiger", "tight", "times", "tired", "title", "toast", "today", "token", "tommy", "tonne", "tooth", "topic", "torch", "total", "touch", "tough", "towel", "tower", "toxic", "trace", "track", "tract", "trade", "trail", "train", "trash", "treat", "trend", "trial", "tribe", "trick", "tried", "tries", "troop", "trout", "truck", "truly", "trunk", "trust", "truth", "tutor", "twice", "twist", "tying", "ultra", "uncle", "under", "undue", "union", "unite", "unity", "until", "upper", "upset", "urban", "urine", "usage", "usual", "utter", "vague", "valid", "value", "valve", "vapor", "vault", "venue", "verge", "verse", "video", "villa", "vinyl", "viral", "virus", "visit", "vista", "vital", "vivid", "vocal", "voice", "voter", "wagon", "waist", "waste", "watch", "water", "weary", "weber", "weigh", "weird", "welsh", "wheat", "wheel", "where", "which", "while", "white", "whole", "whose", "widow", "width", "wired", "witch", "wives", "woman", "women", "world", "worry", "worse", "worst", "worth", "would", "wound", "woven", "wrist", "write", "wrong", "wrote", "yacht", "yield", "young", "yours", "youth"]]

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
let won=0
let streak=0
let lost=0
let attempt=""
let activeLine=1
let wonStat=[0, 0, 0, 0, 0, 0]
let word=ListA[Math.floor(Math.random()*ListA.length)][Math.floor(Math.random()*ListA.length)]
let wordSplit=word.split('')

function focusOnNext(nextLet, val){
    val=val.toLowerCase();
    const regex=/[a-z]/;
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
    console.log(word)
    attempt=document.getElementById(`input${activeLine}1`).value
            +document.getElementById(`input${activeLine}2`).value
            +document.getElementById(`input${activeLine}3`).value
            +document.getElementById(`input${activeLine}4`).value
            +document.getElementById(`input${activeLine}5`).value
    let attemptSplit=attempt.split('')
    for(let i=0; i<5; i++){
        document.getElementById(attemptSplit[i]).style.backgroundColor="lightblue";
        document.getElementById(attemptSplit[i]).style.border="none";
        document.getElementById(`input${activeLine}${i+1}`).style.backgroundColor="lightblue";
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
        won+=1
        document.getElementById("wonScore").innerText=won;
        wonStat[activeLine-1]+=1
        document.getElementById(`stat${activeLine}`).innerText=wonStat[activeLine-1];
        streak+=1
        document.getElementById("streakScore").innerText=streak;
        return (won, streak)
    }else if(activeLine==6 && word!==attempt ){
        document.getElementById("congrats").innerText="You Lost!"
        document.getElementById("submit").style.display="none";
        document.getElementById("playAgain").style.display="block";
        lost+=1
        document.getElementById("lostScore").innerText=lost;
        streak=0
        document.getElementById("streakScore").innerText=streak;
        return (lost, streak)
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
function playAgain(){
    attempt=""
    activeLine=1
    word=ListA[Math.floor(Math.random()*ListA.length)][Math.floor(Math.random()*ListA.length)]
    wordSplit=word.split('')
    for(let i=0; i<5; i++){
        document.getElementById(`input1${i+1}`).removeAttribute('disabled');
        document.getElementById(`input1${i+1}`).value="";
        document.getElementById(`input1${i+1}`).style.backgroundColor="white";
    }
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            document.getElementById(`input${i+2}${j+1}`).value=""
            document.getElementById(`input${i+2}${j+1}`).style.backgroundColor="rgba(239, 239, 239, 0.3)";
            document.getElementById(`input${i+2}${j+1}`).setAttribute('disabled', 'disabled');
        }
    }
    document.getElementById(`input11`).focus();
    document.getElementById("submit").style.display="block";
    document.getElementById("playAgain").style.display="none";
    document.getElementById("congrats").innerText=""
}