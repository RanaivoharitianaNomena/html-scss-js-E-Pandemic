let tabcontents = document.querySelectorAll(".tabcontent");
let tabs = document.querySelectorAll(".symp-tab");

function changeActiveTab(clickedTab) {
  // remove previous active tabs
  tabs.forEach((tab) => tab.classList.remove("active"));

  clickedTab.classList.add("active");
}

function changeTabContent(symptoms) {
  // remove previous active tabcontents
  tabcontents.forEach((tabcontent) =>
    tabcontent.setAttribute("style", "display: none")
  );

  document.getElementById(symptoms).setAttribute("style", "display: block");
}

function openTabs(e, symptoms) {
  e.stopImmediatePropagation();
  //e.currentTarget - points to the element that you attached the listener
  let clickedTab = e.currentTarget;

  changeActiveTab(clickedTab);
  changeTabContent(symptoms);
}
