let socket=io()

let btnStart=document.getElementById("start")
const params = new URLSearchParams(window.location.search)

btnStart.onclick=function(){
    if (params.has("code")){
        socket.emit("start_btn_clicked",{
            "code":params.get("code")
        })
    }
}
socket.on("start_event",(data)=>{
    let div=document.createElement("div")
    div.innerText="Event started by: " + data.code
    document.body.appendChild(div)
})