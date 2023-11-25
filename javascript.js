let pgHome = document.getElementById("mC1");
let pg1 = document.getElementById("mC2");
let pg2 = document.getElementById("mC3");
let pg3 = document.getElementById("mC4");
let btnHome = document.getElementById("topMenuHome");
let btn1 = document.getElementById("topMenu1");
let btn2 = document.getElementById("topMenu2");
let btn3 = document.getElementById("topMenu3");
let linkA = document.getElementById("sectiona");
let linkB = document.getElementById("sectionb");
let linkC = document.getElementById("sectionc");
let linkD = document.getElementById("sectiond");
let linkE = document.getElementById("sectione");

// Click Home
btnHome.onclick = function () {
    pgHome.style.visibility = "visible";
    pg1.style.visibility = "hidden";
    pg2.style.visibility = "hidden";
    pg3.style.visibility = "hidden";
    linkA.innerHTML = "<a href='#com1'><p>Components 1-5:</p></a>";
    linkB.innerHTML = "<a href='#com2'><p>Components 6-10:</p></a>";
    linkC.innerHTML = "<a href='#com3'><p>Components 11-15:</p></a>";
    linkD.innerHTML = "";
    linkE.innerHTML = "";
}
// Click Button 1
btn1.onclick = function () {
    pg1.style.visibility = "visible";
    pgHome.style.visibility = "hidden";
    pg2.style.visibility = "hidden";
    pg3.style.visibility = "hidden";
    linkA.innerHTML = "<a href='#com4'><p>Power Supply & Case</p></a>";
    linkB.innerHTML = "<a href='#com5'><p>Hard Drive</p></a>";
    linkC.innerHTML = "<a href='#com6'><p>Random Access Memory</p></a>";
    linkD.innerHTML = "<a href='#com7'><p>Processor/CPU</p></a>";
    linkE.innerHTML = "<a href='#com8'><p>Motherboard</p></a>";
}
// Click Button 2
btn2.onclick = function () {
    pg2.style.visibility = "visible";
    pgHome.style.visibility = "hidden";
    pg1.style.visibility = "hidden";
    pg3.style.visibility = "hidden";
    linkA.innerHTML = "<a href='#com9'><p>Video Card</p></a>";
    linkB.innerHTML = "<a href='#com10'><p>Keyboard and Mouse</p></a>";
    linkC.innerHTML = "<a href='#com11'><p>Printer and Scanner</p></a>";
    linkD.innerHTML = "<a href='#com12'><p>Sound Card</p></a>";
    linkE.innerHTML = "<a href='#com13'><p>Speaker</p></a>";
}
// Click Button 3
btn3.onclick = function () {
    pg3.style.visibility = "visible";
    pgHome.style.visibility = "hidden";
    pg2.style.visibility = "hidden";
    pg1.style.visibility = "hidden";
    linkA.innerHTML = "<a href='#com14'><p>Monitor</p></a>";
    linkB.innerHTML = "<a href='#com15'><p>Port</p></a>";
    linkC.innerHTML = "<a href='#com16'><p>Modem/Router</p></a>";
    linkD.innerHTML = "<a href='#com17'><p>Web Cam</p></a>";
    linkE.innerHTML = "<a href='#com18'><p>Cooling</p></a>";
}
