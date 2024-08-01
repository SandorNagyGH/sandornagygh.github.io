const display=document.getElementById("display")
let powerOn=true
function switchPower(){
  var x = document.getElementById("switch-power");
  if (powerOn === true) {
    x.style.float = "left";
    powerOn=false
    display.innerText="Power Off"
    return powerOn
  } else {
    x.style.float = "right";
    powerOn=true
    display.innerText="Power On"
    return powerOn
  }
}
let bankOn=false
function switchBank(){
  var y = document.getElementById("switch-bank");
  if (bankOn === false) {
    y.style.float = "right";
    bankOn=true
    display.innerText="Smooth Piano Kit"
    return bankOn
  } else {
    y.style.float = "left";
    bankOn=false
    display.innerText="Heater Kit"
    return bankOn
  }
}
const s = [{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]
, t = [{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Chord-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
}, {
  keyCode: 87,
  keyTrigger: "W",
  id: "Chord-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
}, {
  keyCode: 69,
  keyTrigger: "E",
  id: "Chord-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
}, {
  keyCode: 65,
  keyTrigger: "A",
  id: "Shaker",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
}, {
  keyCode: 83,
  keyTrigger: "S",
  id: "Opened-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
}, {
  keyCode: 68,
  keyTrigger: "D",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
}, {
  keyCode: 90,
  keyTrigger: "Z",
  id: "Punchy-Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
}, {
  keyCode: 88,
  keyTrigger: "X",
  id: "Side-Stick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
}, {
  keyCode: 67,
  keyTrigger: "C",
  id: "Snare",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
}]
function handleKeypress(event){
  if(!bankOn){
    for(let i=0; i<9; i++){
      if (Object.values(s[i]).includes(event.keyCode)){
        playSound(i, s[i].keyTrigger)
        clearPadcolor(s[i].keyTrigger)
      }
    }
  } else {
    for(let i=0; i<9; i++){
      if (Object.values(t[i]).includes(event.keyCode)){
        playSound(i, t[i].keyTrigger)
        clearPadcolor(t[i].keyTrigger)
      }
    }
  }
}
function playSound(e, z){
  if(!powerOn){}else{
    document.getElementById(z).style.backgroundColor="orange";
    if(!bankOn){
      let f=s[e].id
      display.innerText=f.replace(/-/g, " ")
      let a=document.getElementById(f)
      a.currentTime = 0;
      a.volume=sliderVal;
      a.play()
    }else{
      let f=t[e].id
      display.innerText=f.replace(/-/g, " ")
      let a=document.getElementById(f)
      a.currentTime = 0;
      a.play()
    }
  }
}
function clearPadcolor(z){
  setTimeout(() => {
    document.getElementById(z).style.backgroundColor="grey";
  }, 200);
}
let sliderVal=document.getElementById("volume").value
function adjustVolume(event){
  sliderVal=event.target.value;
  display.innerText="Volume: " + Math.round(100*event.target.value)
}
function clearDisplay(){
  setTimeout((()=>{
    display.innerText=""
  }), 2000)
}