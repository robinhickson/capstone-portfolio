// Portfolio//
//-------------------------------------------------------
//========================================================

//Globals

const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalNext = document.querySelector(".modal-next");
const modalPrevious = document.querySelector(".modal-previous");

//Project Objects

const projects = [{
        name: "GetShot",
        genre: "Business",
        theme: "Portfolio",
        url: "",
        repo: "",
        thumbnail: "",
        description: "",
        techniques: {
            responsive: true,
            sass: false,
            html: "html5",
            grid: true,
            animation: true,
            svg: true,
            javascript: true,
            flexbox: true,
            gallery: false,
            search: false,

        }

    },
    {},

];


//Change text for intro animation
//--------------------------

const textGrid = document.querySelector('.textGrid');
//draw first textGrid sentence
setTimeout(function () {
    textGrid.innerHTML = "<svg title='tired of following the herd?' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1596.06 133.12'><rect class='block' /><g><path id='t1'd='M238.44,145.64l.72-.72H252.7v7.92h-7.06Zm31.11,7.2V195H259.18l-7.2-7.2.72-.72h8.93v-42.2h13.53v-8.21l.72-.72,7.2,7.2v9.65Z' transform='translate(-237.73 -135.18)'/><path id='i1'  d='M290.57,195l-7.2-7.2.72-.72H293V136.71l.72-.72,7.2,7.2V195Z'transform='translate(-237.73 -135.18)' /><path id='r1' d='M322.68,195H312.31l-7.2-7.2.72-.72h8.93V167.89h9.65l3.45,7.92h-5.18Zm7-50a2.21,2.21,0,0,1,2.45,2.45V153h-9.43v6.7h-7.92V145.06Zm3.24,42.06h9.22l-8.28-18.94c4.32-1.87,7.2-4.9,7.2-9.79V146.22c0-3.68-.93-6-1.51-6.7l7.27,7.27c1.59,1.59,2.16,4,2.16,6.63v12.17c0,4.89-2.73,8.56-7,9.79L350.55,195H339.39l-7.21-7.2Z'transform='translate(-237.73 -135.18)' /><path id='e1' d='M393,195H359.11l-7.2-7.2.72-.72H385.1v-8.36l.72-.72,7.21,7.2ZM369.48,153v4.18h-7.92v-12.1H385.1v-8.35l.72-.72,7.21,7.2V153Zm11.88,3.46,7.2,7.2v9.79H369.48v5.33h-7.92V165.51h19.08v-8.35Z'transform='translate(-237.73 -135.18)' /><path id='d1'd='M437.23,146.79c1.59,1.59,2.16,4,2.16,6.63v31.39c0,6.05-4.17,10.23-10.22,10.23h-27l-7.21-7.2.73-.72H422c6,0,9.5-3.46,9.5-9.51V146.22c0-3.89-1.15-6.27-1.51-6.7Zm-17.13-1.73a2.2,2.2,0,0,1,2.44,2.45V153h-10v25.78h-7.92v-33.7Z' transform='translate(-237.73 -135.18)' /><path id='o1' d='M503,146.5c1.58,1.59,2.16,4,2.16,6.63v32c0,6.05-4.18,10.22-10.23,10.22H477.55c-3.6,0-5.76-1.29-8.07-3.6l-5.83-5.83c1.8,1.44,4,1.51,6.7,1.51H487.7c6.05,0,9.51-3.45,9.51-9.5v-32a13,13,0,0,0-1.52-6.7Zm-17.14-1.72a2.2,2.2,0,0,1,2.45,2.44v5.48h-8.14a2.21,2.21,0,0,0-2.45,2.45v23.9h-5.47a2.21,2.21,0,0,1-2.45-2.45V147.22a2.2,2.2,0,0,1,2.45-2.44Z' transform='translate(-237.73 -135.18)' /><path id='f1' d='M544.73,173.87H525.64V195H515.28l-7.21-7.2.72-.72h8.93V166h19.09v-8.36l.72-.72,7.2,7.2ZM525.64,153v4.61h-7.92V145.06h23.55v-8.35L542,136l7.2,7.2V153Z' transform='translate(-237.73 -135.18)' /><path id='f2'd='M605.49,173.87H586.41V195H576l-7.2-7.2.72-.72h8.93V166h19.08v-8.36l.72-.72,7.2,7.2ZM586.41,153v4.61h-7.92V145.06H602v-8.35l.72-.72,7.2,7.2V153Z' transform='translate(-237.73 -135.18)' /><path id='o2' d='M651.64,146.5c1.59,1.59,2.16,4,2.16,6.63v32c0,6.05-4.17,10.22-10.22,10.22H626.23c-3.6,0-5.76-1.29-8.07-3.6l-5.83-5.83c1.8,1.44,4,1.51,6.7,1.51h17.35c6,0,9.5-3.45,9.5-9.5v-32a13.08,13.08,0,0,0-1.51-6.7Zm-17.13-1.72a2.2,2.2,0,0,1,2.44,2.44v5.48h-8.13a2.2,2.2,0,0,0-2.45,2.45v23.9H620.9a2.2,2.2,0,0,1-2.45-2.45V147.22a2.2,2.2,0,0,1,2.45-2.44Z' transform='translate(-237.73 -135.18)' /><path id='l1' d='M664,195l-7.2-7.2.72-.72h30.68v-8.36l.72-.72,7.2,7.2V195Zm3.17-59,7.2,7.2v35.57H666.4v-42Z' transform='translate(-237.73 -135.18)' /><path id='l2' d='M703.91,195l-7.2-7.2.72-.72h30.68v-8.36l.72-.72,7.2,7.2V195Zm3.17-59,7.2,7.2v35.57h-7.92v-42Z' transform='translate(-237.73 -135.18)' /><path id='o3' d='M777.14,146.5c1.58,1.59,2.16,4,2.16,6.63v32c0,6.05-4.18,10.22-10.23,10.22H751.72c-3.6,0-5.76-1.29-8.06-3.6l-5.84-5.83c1.8,1.44,4,1.51,6.7,1.51h17.35c6,0,9.51-3.45,9.51-9.5v-32a13.2,13.2,0,0,0-1.51-6.7ZM760,144.78a2.2,2.2,0,0,1,2.45,2.44v5.48h-8.14a2.21,2.21,0,0,0-2.45,2.45v23.9h-5.47a2.21,2.21,0,0,1-2.45-2.45V147.22a2.2,2.2,0,0,1,2.45-2.44Z' transform='translate(-237.73 -135.18)' /><path id='w1' d='M787.58,136.71l.5-.72,7.2,7.2,2.16,23.48-2.16,8.78h-.58Zm9.5,58.33-7.2-7.2.72-.72h8.78l9.22-35.72,4.75,19.23-6,24.41Zm15.19-58.33.44-.72,7.2,7.2,4.17,22.11-1.65,9.36h-.8Zm12,58.33-7.2-7.2.72-.72h8.35l12.89-50.55.72-.58,7.2,7.2L834.09,195Z' transform='translate(-237.73 -135.18)' /><path id='i2'  d='M854,195l-7.2-7.2.72-.72h8.93V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-237.73 -135.18)' /><path id='n1' d='M885.42,195H875.7l-7.2-7.2.72-.72h8.28V150.25l7.92,14.69Zm-6.48-58.33.72-.72,7.2,7.2L899.18,166v6.12h-.87ZM904.5,195l-7.2-7.2.72-.72h9.72V136.71l.72-.72,7.21,7.2V195Z' transform='translate(-237.73 -135.18)' /><path id='g1' d='M957.21,159.9l6.12,6.12V185.1c0,6.05-4.18,10.22-10.23,10.22H936c-3.6,0-5.76-1.29-8.07-3.6l-5.83-5.83c1.8,1.44,4,1.51,6.7,1.51H945.9c6.05,0,9.51-3.45,9.51-9.5V159.54H952.6l-6.84-6.84h-7.13a2.21,2.21,0,0,0-2.45,2.45v3.67l.79.79v7.85h9.51v7.92h-3.31l-7-7v10.66h-5.47a2.21,2.21,0,0,1-2.45-2.45V147.22a2.2,2.2,0,0,1,2.45-2.44H944a2.2,2.2,0,0,1,2.45,2.44V152h8.93v-6c0-3.82-1-6.05-1.44-6.63l7.2,7.2c1.58,1.59,2.16,4,2.16,6.63v6.77Z' transform='translate(-237.73 -135.18)' /><path id='t2' d='M979.45,145.64l.72-.72h13.54v7.92h-7.06Zm31.11,7.2V195h-10.37l-7.2-7.2.72-.72h8.93v-42.2h13.54v-8.21l.72-.72,7.2,7.2v9.65Z' transform='translate(-237.73 -135.18)' /><path id='h1' d='M1042,195h-10.37l-7.2-7.2.72-.72h9l-.07-21.61h19.3v7.92H1042Zm-7.2-59,7.2,7.2v14H1034V136.71Zm25.06,59-7.2-7.2.72-.72h8.93V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-237.73 -135.18)' /><path id='e2' d='M1115.46,195h-33.91l-7.2-7.2.72-.72h32.47v-8.36l.72-.72,7.2,7.2ZM1091.92,153v4.18H1084v-12.1h23.54v-8.35l.72-.72,7.2,7.2V153Zm11.88,3.46,7.2,7.2v9.79h-19.08v5.33H1084V165.51h19.08v-8.35Z' transform='translate(-237.73 -135.18)' /><path id='h2' d='M1154,195h-10.37l-7.2-7.2.72-.72h9l-.07-21.61h19.3v7.92H1154Zm-7.2-59,7.2,7.2v14h-7.92V136.71Zm25.06,59-7.2-7.2.72-.72h8.93V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-237.73 -135.18)' /><path id='e3' d='M1227.49,195h-33.91l-7.2-7.2.72-.72h32.47v-8.36l.72-.72,7.2,7.2ZM1204,153v4.18H1196v-12.1h23.54v-8.35l.72-.72,7.2,7.2V153Zm11.88,3.46,7.2,7.2v9.79H1204v5.33H1196V165.51h19.08v-8.35Z' transform='translate(-237.73 -135.18)' /><path id='r2' d='M1247,195h-10.37l-7.2-7.2.72-.72h8.93V167.89h9.65l3.46,7.92H1247Zm7-50a2.2,2.2,0,0,1,2.44,2.45V153H1247v6.7h-7.92V145.06Zm3.24,42.06h9.21l-8.28-18.94c4.32-1.87,7.2-4.9,7.2-9.79V146.22c0-3.68-.93-6-1.51-6.7l7.27,7.27c1.59,1.59,2.16,4,2.16,6.63v12.17c0,4.89-2.73,8.56-7,9.79l8.64,19.66h-11.16l-7.2-7.2Z' transform='translate(-237.73 -135.18)' /><path id='d2' d='M1318.5,146.79c1.58,1.59,2.16,4,2.16,6.63v31.39c0,6.05-4.18,10.23-10.22,10.23h-27l-7.2-7.2.72-.72h26.28c6,0,9.51-3.46,9.51-9.51V146.22c0-3.89-1.15-6.27-1.51-6.7Zm-17.14-1.73a2.21,2.21,0,0,1,2.45,2.45V153h-10v25.78h-7.92v-33.7Z' transform='translate(-237.73 -135.18)' /><path id='qq' d='M1319.86,151.11h8.93v-3.89a2.17,2.17,0,0,1,2.45-2.44h12.67a2.2,2.2,0,0,1,2.45,2.44v5.48h-7.2a2.21,2.21,0,0,0-2.45,2.45V159h-10.37l-7.2-7.2Zm41.41-4.32c1.51,1.51,1.94,3.89,1.94,6.34V162c0,4.6-5,7-10.22,10.22l-2.88,1.73c-1.37.79-2.45,1.44-2.45,2.45v3.24h-5l5,5V195h-10.37l-7.2-7.2.72-.72h8.93v-8.93h-3.89l-5.76-5.76.72-.72h8.93V169c0-1.08,1.8-2.16,3.17-2.95l2.88-1.73c5.25-3.17,9.5-5,9.5-9.57v-8.86c0-3.6-.86-5.76-1.3-6.41Z' transform='translate(-237.73 -135.18)' /></g></svg>"

}, 1000);

//draw second textGrid sentence
setTimeout(function () {
    textGrid.innerHTML = "<svg title='run with baacode!' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1012.66 60.64'><rect class='block' /><path  id='r3' d='M259.9,195H249.53l-7.2-7.2.72-.72H252V167.89h9.65l3.45,7.92H259.9Zm7-50a2.21,2.21,0,0,1,2.45,2.45V153H259.9v6.7H252V145.06Zm3.24,42.06h9.22l-8.28-18.94c4.32-1.87,7.2-4.9,7.2-9.79V146.22c0-3.68-.94-6-1.51-6.7l7.27,7.27c1.58,1.59,2.16,4,2.16,6.63v12.17c0,4.89-2.74,8.56-7.06,9.79L287.76,195H276.6l-7.2-7.2Z' transform='translate(-241.62 -135.18)'/><path  id='u1' d='M332.55,185.1c0,6.05-4.18,10.22-10.23,10.22H305.76c-3.6,0-5.76-1.29-8.06-3.6l-5.84-5.83c1.8,1.44,4,1.51,6.7,1.51h16.56c6.05,0,9.51-3.45,9.51-9.5V136.71l.72-.72,7.2,7.2Zm-32.12-6A2.21,2.21,0,0,1,298,176.6V136.71l.72-.72,7.2,7.2v35.86Z' transform='translate(-241.62 -135.18)'/><path  id='n2' d='M352.85,195h-9.72l-7.2-7.2.72-.72h8.28V150.25l7.92,14.69Zm-6.48-58.33.72-.72,7.2,7.2L366.6,166v6.12h-.86ZM371.93,195l-7.2-7.2.72-.72h9.72V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-241.62 -135.18)'/><path  id='w2' d='M411.6,136.71l.5-.72,7.2,7.2,2.16,23.48-2.16,8.78h-.57ZM421.1,195l-7.2-7.2.72-.72h8.79l9.21-35.72,4.76,19.23L431.33,195Zm15.2-58.33.43-.72,7.2,7.2,4.18,22.11-1.66,9.36h-.79Zm12,58.33-7.2-7.2.72-.72h8.35l12.89-50.55.72-.58,7.2,7.2L458.11,195Z' transform='translate(-241.62 -135.18)'/><path  id='i3' d='M478,195l-7.2-7.2.72-.72h8.93V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-241.62 -135.18)'/><path  id='t3' d='M488.64,145.64l.72-.72h13.53v7.92h-7.05Zm31.1,7.2V195H509.37l-7.2-7.2.72-.72h8.93v-42.2h13.54v-8.21l.72-.72,7.2,7.2v9.65Z' transform='translate(-241.62 -135.18)'/><path  id='h3' d='M551.13,195H540.77l-7.21-7.2.72-.72h9l-.08-21.61h19.3v7.92H551.13Zm-7.2-59,7.2,7.2v14h-7.92V136.71ZM569,195l-7.2-7.2.72-.72h8.93V136.71l.72-.72,7.2,7.2V195Z' transform='translate(-241.62 -135.18)'/><path  id='b1' d='M644.66,170.7a7.34,7.34,0,0,1,2.09,5.33v8.78a10.11,10.11,0,0,1-2.81,7.35,10.32,10.32,0,0,1-7.41,2.88H609.74l-7.2-7.2.72-.72h26.06c6,0,9.51-3.46,9.51-9.51v-8.5a8.35,8.35,0,0,0-5.11-7.77,8.48,8.48,0,0,0,4.53-7.78v-7.34c0-3.32-.57-5.55-1.51-6.7l7.27,7.27c1.59,1.59,2.16,4,2.16,6.63v7.34a8.4,8.4,0,0,1-4,7.49Zm-17.78-25.78a2.17,2.17,0,0,1,2.44,2.45v5.47h-9.21v4.61h-7.92V144.92Zm-.29,20.31c2-.08,3.31.14,3.31,2.3v5.62h-9.79v5.76h-7.92V165.23Z' transform='translate(-241.62 -135.18)'/><path  id='a1' d='M665.54,183.37,662.08,195H651.35l-7.2-7.2.72-.72h9.29l3.46-11.67h18.22l2.08,7.92Zm6.12-20.74-1.3,4.47H660.28l5.84-19.73.72-.72.72.72Zm6.84,25.21.72-.72h9.72l-16.7-50.41L673,136l7.2,7.2L696.86,195H685.7Z' transform='translate(-241.62 -135.18)'/><path  id='a2' d='M713.35,183.37,709.89,195H699.16l-7.2-7.2.72-.72H702l3.46-11.67h18.21l2.09,7.92Zm6.12-20.74-1.3,4.47H708.09l5.83-19.73.72-.72.72.72Zm6.84,25.21.72-.72h9.72L720,136.71l.72-.72,7.2,7.2L744.67,195H733.51Z' transform='translate(-241.62 -135.18)'/><path  id='c1' d='M786.14,185.1c0,6.05-4.18,10.22-10.22,10.22H759.5c-3.6,0-5.76-1.29-8.07-3.6l-5.83-5.83c1.8,1.44,4,1.51,6.7,1.51h16.41c6,0,9.51-3.45,9.51-9.5v-7.63l.72-.72,7.2,7.2Zm-24-32.4a2.21,2.21,0,0,0-2.45,2.45v23.9h-5.47a2.2,2.2,0,0,1-2.45-2.45V147.22a2.2,2.2,0,0,1,2.45-2.44h12.67a2.2,2.2,0,0,1,2.45,2.44v5.48ZM784,146.5c1.58,1.59,2.16,4,2.16,6.63v8.35H775.77l-7.2-7.2.72-.72h8.93v-7.63c0-3.46-.65-5.62-1.51-6.7Z' transform='translate(-241.62 -135.18)'/><path  id='o4' d='M829.77,146.5c1.58,1.59,2.16,4,2.16,6.63v32c0,6.05-4.18,10.22-10.22,10.22H804.35c-3.6,0-5.76-1.29-8.06-3.6l-5.83-5.83c1.8,1.44,4,1.51,6.69,1.51h17.36c6,0,9.5-3.45,9.5-9.5v-32a13.2,13.2,0,0,0-1.51-6.7Zm-17.14-1.72a2.2,2.2,0,0,1,2.45,2.44v5.48h-8.14a2.2,2.2,0,0,0-2.44,2.45v23.9H799a2.2,2.2,0,0,1-2.44-2.45V147.22a2.2,2.2,0,0,1,2.44-2.44Z' transform='translate(-241.62 -135.18)'/><path  id='d3' d='M877.15,146.79c1.58,1.59,2.16,4,2.16,6.63v31.39c0,6.05-4.18,10.23-10.23,10.23h-27l-7.2-7.2.72-.72h26.28c6,0,9.51-3.46,9.51-9.51V146.22c0-3.89-1.16-6.27-1.52-6.7ZM860,145.06a2.21,2.21,0,0,1,2.45,2.45V153h-10v25.78h-7.92v-33.7Z' transform='translate(-241.62 -135.18)'/><path  id='e4' d='M923.37,195H889.45l-7.2-7.2.72-.72h32.48v-8.36l.72-.72,7.2,7.2ZM899.82,153v4.18H891.9v-12.1h23.55v-8.35l.72-.72,7.2,7.2V153Zm11.88,3.46,7.21,7.2v9.79H899.82v5.33H891.9V165.51H911v-8.35Z' transform='translate(-241.62 -135.18)'/><path id='xx' d='M960.81,195H950.73l-7.21-7.2.72-.72h8.65v-8.93L945,170.34l.72-.72h5.61l2.09-33.12.72-.51,7.2,7.2-2.09,34.35h-5.47l7,7Z' transform='translate(-241.62 -135.18)'/></svg>"

}, 12800);

//----- Sound button toggle switch -----//


function chngImg() {
    var img = document.getElementById('toggle_mute').src;
    if (img.indexOf('Mute_ON') != -1) {
        document.getElementById('toggle_mute').src = 'media/Mute_OFF.svg';
    } else {
        document.getElementById('toggle_mute').src = 'media/Mute_ON.svg';
    }

}

function muteUnmute(muteObj) {
    let mutant = document.getElementById(muteObj);
    mutant.muted = !mutant.muted;
}


function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.currentTime = 0;
    thissound.play();

}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

//manifest modal window

//-----definiton and display

function displayModal() {


    const modalHTML = `
    <div class="modalContainer">
    <input class="searchBox" type="text" name="search" id="search" onkeyup="searchKeywords(value)" placeholder="Search for techniques e.g. grid">
         
    <img class="project_icon" src="media/_preloader.gif" />
    <div class="text-container"></div>
    </div>
`;

    overlay.classList.remove("hidden");
    modalContent.innerHTML = modalHTML;


}

//-----button functions

modal.addEventListener('click', e => {

    if (e.target === modalClose) {

        overlay.classList.add("hidden");
    } else if (e.target === modalNext) {
        if ((index + 1) < projects.length) {
            index += 1;
            displayModal(index);
        }
    } else if (e.target === modalPrevious) {
        if ((index - 1) >= 0)
            index -= 1;
        displayModal(index);
    }

});

//--------search function

let search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let searchValue = search.value.toLowerCase();
    searchKeywords(searchValue);
})


function searchKeywords(value) {
    const displayMatches = [];
    let cardsOff = document.querySelectorAll('.card');
    let container = document.querySelector('main');
    if (value !== '' && value !== undefined) {
        cardsOff.forEach(card => {
            card.style.backgroundColor = "black";
            card.style.opacity = "0.3"
        });
    } else {
        cardsOff.forEach(card => card.style.backgroundColor = "white");
    }

    // iterate through employee names to check for user input text match
    employeesNames.forEach((match, index) => {

        if (match.toLowerCase().includes(value)) {
            displayMatches.push(employees[index]);
            displayMatches.forEach(cardOn => {
                cardOn = document.getElementById(`${index}`);
                container.prepend(cardOn);
                cardOn.style.backgroundColor = "white";
                cardOn.style.opacity = "1";
            });

        }
    });

}