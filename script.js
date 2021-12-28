let main_URL = "https://cataas.com/api/cats";
let json_arry=[];
( async()=>
{
    try
    {
          const responce = await fetch(main_URL);
          const data = await responce.json();
          for(let cat in data)
          {
            json_arry.push(data[cat])
          }

    }
    catch(err)
    {
       
    }  

})();

let table_head = document.getElementById("table_head");
let err_msg = document.getElementById("err_msg");

function tableHead(){
     table=`<tr>
     <th scope="col">sno</th>
     <th scope="col">ID</th>
     <th scope="col">Tag Name</th>
     <th scope="col">Click to view</th>
   </tr>`
   table_head.innerHTML=table;
}
let h6 = document.getElementById("h6")
let all_cat_list = document.getElementById("all_cat_list")

all_cat_list.addEventListener("mouseover", ()=>{
  h6.innerHTML="This might take few seconds please wait"
  
})


all_cat_list.addEventListener("click",()=>{
 
    displayDetails(json_arry)
    h6.innerHTML="click to view the cat list"
})



let displayDetails =(json_arry)=>{
    let table_body = document.getElementById("table_body")
    let tablerow=""
    tableHead();
    var i =0;
    for(let arr of json_arry){
      if( i<270){
        tablerow +=`
        <tr value="${arr.id}" class="img_2">
        <td>${i}</td>
        <td >${arr.id}</td>
        <td>${arr.tags}</td>
        <td>
        <button id="myBtn" onclick=popup(this) class="btn btn-primary btn-lg active">view</button>
        <img src="https://cataas.com/cat/${arr.id}"> 
        
        </td>
      </tr> 
     
       
          `;
        table_body.innerHTML=tablerow
        i++
    }else{
             break;
    }
  }

    
    }


let search_txt_Box = document.getElementById("search_Box")
let search = document.getElementById("search")

search_txt_Box.addEventListener("mouseover",()=>{
 
  h6.innerHTML="click to view the cat list"
})
search.addEventListener("mouseover",()=>{
 
  h6.innerHTML="click to view the cat list"
})


search.addEventListener("click" , ()=>{
       let enteredValue = search_txt_Box.value;
       let table_body = document.getElementById("table_body")
    let tablerow=""
    
    let sno=1;
    if(enteredValue!="")
    {
      tableHead();
       for(let arr of json_arry){
           for(let filter of arr.tags){
               if(filter==enteredValue)
               {
                tablerow +=`
                <tr value="${arr.id}" class="img_2">
              <td>${sno}</td>
              <td >${arr.id}</td>
              <td>${arr.tags}</td>
              <td>
              <button id="myBtn" onclick=popup(this) class="btn btn-primary btn-lg active">view</button>
              <img src="https://cataas.com/cat/${arr.id}"> 
              
              </td>
            </tr> 
           
             
                `;
                table_body.innerHTML=tablerow
                sno++
            }

               }
           }
    }
       
})


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var model_content = document.getElementById("res")
function popup(r) {
  var i = r.parentNode.parentNode.rowIndex;
 let ans= document.getElementsByClassName("img_2")[i-1].getAttribute("value")
 
  var a = `   <span class="close" id ="span">
  &times;</span>
  <img src="https://cataas.com/cat/${ans}" style="width: 300px;height: 300px;">;`
  
  model_content.innerHTML= a;
  modal.style.display = "block";


let span = document.getElementById("span")
 span.onclick=()=>{
  modal.style.display = "none";
 }
 
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
