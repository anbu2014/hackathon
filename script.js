
/* 
script for Cat API

author Anbarasan G
*/


let main_URL = "https://cataas.com/api/cats";
let json_arry=[];

/*
IIFE function 
 Used the async/await.
Used try catch to handle errors.
Used fetch() to get the data from

@return array of JSON data 
*/
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

/* 
Create a tr and th on the thead and append the data on thead tag
@para 
@return

*/
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

/*
H6 tag is dynamically changed 
when mouse hover to the all_cat_list button 

*/
all_cat_list.addEventListener("mouseover", ()=>{
  h6.innerHTML="This might take few seconds please wait"
  
})

/*
On click of all_cat_list button 

diaplay all the details of the API data 
H6 tag is dynamically changed 
when json data is displayed on the table 

*/
all_cat_list.addEventListener("click",()=>{
 
    displayDetails(json_arry)
    h6.innerHTML="click to view the cat list"
})

/*
displayDetails method get the data from the json_arry
display all the detail in the table 

@para json_arry
*/

let displayDetails =(json_arry)=>{
    let table_body = document.getElementById("table_body")
    let tablerow=""
    tableHead();
    var i =1;
    for(let arr of json_arry){
      if( i<=270){
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
/*
H6 tag is dynamically changed 
when mouse hover to the search_txt_Box field

*/
search_txt_Box.addEventListener("mouseover",()=>{
 
  h6.innerHTML="click to view the cat list"
})

/*
H6 tag is dynamically changed 
when mouse hover to the search button 

*/
search.addEventListener("mouseover",()=>{
 
  h6.innerHTML="click to view the cat list"
})

/*
on click of search button 
get the value on the search text 
compare with the JSON data and display the details

*/

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

/*
function popup when the View button is clicked 
div tag is appened to the model_content div
display css property is changed to block
on click of span 
display css property is changed to none
*/
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

