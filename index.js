//------------------------------
//-----QUERYSELECTORS
//------------------------------
//LANDING
//------------------------------
const land = document.querySelector('.landing');
const fhh1 = document.querySelector('.fhh1');
const fhp = document.querySelector('.fhp');
const fhst = document.querySelector('#intro .subtext');
const intro = document.getElementById('intro');
const home = document.getElementById('home');
const fltfig = document.getElementById('fig');
const fltadaine = document.getElementById('adaine');
const fltgorgug = document.getElementById('gorgug');
const fltfabian = document.getElementById('fabian');
const fltkristen = document.getElementById('kristen');
const fltriz = document.getElementById('riz');
//------------------------------
//CAST
//------------------------------
const fig = document.querySelector('.fig.card');
const adaine = document.querySelector('.adaine.card');
const gorgug = document.querySelector('.gorgug.card');
const fabian = document.querySelector('.fabian.card');
const kristen = document.querySelector('.kristen.card');
const riz = document.querySelector('.riz.card');
//------------------------------
//CAST BACKGROUNDS
//------------------------------
const bgfig = document.querySelector('.fig.bg');
const bgadaine = document.querySelector('.adaine.bg');
const bggorgug = document.querySelector('.gorgug.bg');
const bgfabian = document.querySelector('.fabian.bg');
const bgkristen = document.querySelector('.kristen.bg');
const bgriz = document.querySelector('.riz.bg');
//------------------------------
//CAST INFO
//------------------------------
const infofig = document.querySelector('.fig.info');
const infoadaine = document.querySelector('.adaine.info');
const infogorgug = document.querySelector('.gorgug.info');
const infofabian = document.querySelector('.fabian.info');
const infokristen = document.querySelector('.kristen.info');
const inforiz = document.querySelector('.riz.info');
const startinfo = document.querySelector('.start.info');

//-----DEBUG
console.log(fig);
//------------------------------


//------------------------------
//-----EVENT LISTENERS
//------------------------------
//ABOUTLOAD
//------------------------------
intro.addEventListener('mouseover', function() {
    introLoad();
});

//------------------------------
//CAST CARDS
//------------------------------
//FIG - HOVER
fig.addEventListener('mouseover', function() {
    reveal(bgfig);
    reveal(infofig);
    hide(startinfo);
});
//FIG - EXIT
fig.addEventListener('mouseout', function() {
    hide(bgfig);
    hide(infofig);
    reveal(startinfo);
});
//ADAINE - HOVER
adaine.addEventListener('mouseover', function() {
    reveal(bgadaine);
    reveal(infoadaine);
    hide(startinfo);
});
//ADAINE - EXIT
adaine.addEventListener('mouseout', function() {
    hide(bgadaine);
    hide(infoadaine);
    reveal(startinfo);
});
//GORGUG - HOVER
gorgug.addEventListener('mouseover', function() {
    reveal(bggorgug);
    reveal(infogorgug);
    hide(startinfo);
});
//GORGUG - EXIT
gorgug.addEventListener('mouseout', function() {
    hide(bggorgug);
    hide(infogorgug);
    reveal(startinfo);
});
//FABIAN - HOVER
fabian.addEventListener('mouseover', function() {
    reveal(bgfabian);
    reveal(infofabian);
    hide(startinfo);
});
//FABIAN - EXIT
fabian.addEventListener('mouseout', function() {
    hide(bgfabian);
    hide(infofabian);
    reveal(startinfo);
});
//KRISTEN - HOVER
kristen.addEventListener('mouseover', function() {
    reveal(bgkristen);
    reveal(infokristen);
    hide(startinfo);
});
//KRISTEN - EXIT
kristen.addEventListener('mouseout', function() {
    hide(bgkristen);
    hide(infokristen);
    reveal(startinfo);
});
//RIZ - HOVER
riz.addEventListener('mouseover', function() {
    reveal(bgriz);
    reveal(inforiz);
    hide(startinfo);
});
//RIZ EXIT
riz.addEventListener('mouseout', function() {
    hide(bgriz);
    hide(inforiz);
    reveal(startinfo);
});
//------------------------------
//------------------------------

//------------------------------
//----FUNCTIONS
//------------------------------
//CAST BACKGROUNDS
//------------------------------
function reveal(card) {
    card.classList.add('show')
}

function hide(card) {
    card.classList.remove('show')
}
//------------------------------
//LOADS/UNLOADS (mouse cheat)
function introLoad() {
    fhh1.classList.add('in');
    fhp.classList.add('in');
    fhst.classList.add('in');
}