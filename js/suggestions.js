let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
let $=document
let input=$.querySelector("input")
let navsearch=$.querySelector(".search-input")
let autoCom=$.querySelector(".autocom-box")
input.addEventListener("keyup",function(){
    
    let inputValue=input.value
    if(inputValue){
        navsearch.className="search-input active"
        let searcWord=suggestions.filter(function(word){
            return word.toLowerCase().includes(inputValue.toLowerCase())
        })
        let makerLi=searcWord.map(function(word){
            return "<li>"+word+"</li>"
        })
        let customeListItem
            if(!makerLi.length){
                customeListItem="<li>"+inputValue+"</li>"
            }else{
                customeListItem=makerLi.join(" ")
            }
            autoCom.innerHTML=customeListItem
            search()
    }else{
        navsearch.className="search-input"
    }
})
function search(){
    let allLi=autoCom.querySelectorAll("li")
    allLi.forEach(function(item){
        item.addEventListener("click",function(event){
            input.value=event.target.textContent
            navsearch.className="search-input"
        })
    })
}