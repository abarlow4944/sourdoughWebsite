// for the tab feature on the starter guide

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab"); //the two tab options
    const tabContents = document.querySelectorAll(".tabContent"); //the contents of the two tab options

    tabs.forEach(aTab => {
        aTab.addEventListener("click", () => { //if a tab is clicked
            tabContents.forEach(section => section.classList.remove("active")); //hide each tab content
            tabs.forEach(section => section.classList.remove("active")); //make all tabs inactive

            aTab.classList.add("active"); //make the selected tab active
            
            const dataTab = aTab.dataset.tab; //get the data-tab value of the selected tab
            document.getElementById(dataTab).classList.add("active"); //show the tabContent of the selected menuItem
        });
    });
});