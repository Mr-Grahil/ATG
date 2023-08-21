var button = document.querySelector(".titlegetbutton");
var title = document.querySelector("#heading");
button.addEventListener('click',async ()=>{
var site;
chrome.tabs.query({active:true,currentWindow:true}, function(tabs) {
    site = tabs[0].title;
    title.innerHTML = site;
    console.log(site)
});
   
})