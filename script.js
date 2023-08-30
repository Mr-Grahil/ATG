// const axios = require("axios")
var button = document.querySelector(".titlegetbutton");
var title = document.querySelector("#heading");
let links = ["https://www.linkedin.com/in/pratik-kapratwar-7292a3221/","https://www.linkedin.com/in/pratik-kapratwar-7292a3221/","https://www.linkedin.com/in/pratik-kapratwar-7292a3221/"];
button.addEventListener('click',async ()=>{
    var site;
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs) {
        site = tabs[0].title;
        title.innerHTML = site;
        console.log(tabs[0]);
    });

})

let openLinks = document.getElementById("openlink");
openLinks.addEventListener('click',()=>{
    for(let i=0;i<3;i++){
    
        window.open(links[i],"_blank");
    }
})

let importThedata = document.getElementById("import");
importThedata.addEventListener("click",async()=>{
    let [tab] = await chrome.tabs.query({active:true,currentWindow:true});
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        func: getDataFromPage
    })
})
function getDataFromPage(){
    const profile = {
        name:document.getElementsByClassName("text-heading-xlarge inline t-24 v-align-middle break-words")[0].innerText,
        about:document.getElementsByTagName("span")[118].innerText,
        url:document.getElementsByClassName("t-14 t-normal t-black--light pt1 break-words")[0].baseURI,
        location:document.getElementsByClassName("text-body-small inline t-black--light break-words")[0].innerText,
        bio:document.getElementsByClassName("text-body-medium break-words")[0].innerText,
        connections:document.getElementsByClassName("link-without-visited-state")[2].innerText,
        followerCount:document.getElementsByClassName("app-aware-link ")[11].innerText

    }
    // let res = await axios.post("/api/v1/project", profile); 
    console.log(profile);
    chrome.runtime.sendMessage({extensionId:"djnmjjcngibgbpipkihgjhlfpheokfaa",profile});
}

chrome.runtime.onMessage.addListener(
    async (request,sender,sendResponse)=>{
        let data = request.profile
        console.log(data)
        const options = {
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        };
        await fetch('http://localhost:5000/api/v1/project',options)
        alert("Data is imported from this tab")

        // const result = await fetch("http://localhost:5000/api/v1/project")
        // const ans = await result.json();
        // console.log(ans);
        // const req = new XMLHttpRequest();
        // const baseUrl = "localhost:5000/api/v1/project";

        // req.open("POST", baseUrl, true);
        // req.setRequestHeader("Content-type", "application/json");
        // req.send(data)

        // req.onreadystatechange = function() { 
        //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        //         console.log("Got response 200!");
        //     }
        // }
    }
    )
