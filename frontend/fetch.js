//var myFetch = new XMLHttpRequest ()
//myFetch.onreadystatechange= function(){
   // if (this.readyState == 4 && this.status== 200){
       // console.log(myFetch.responseText);
      // var block= document.querySelector('.pastehere')
    //for(i=0; i<=myFetch.response.length; i++){
        //var part= myFetch.response[i]
        //var part2= document.createElement('<p>')
       // part2.innerHTML=part
       // block.appendChild(part2)
    //}
    
    //}

//}
//myFetch.open('GET', 'htpp://localhost:8000')
//myFetch.send();
var dataz= fetch('http://127.0.0.1:8000/api/?format=json')
.then((resp) => resp.json())
.then(function(data){
    console.log(data);
var searchPeople=document.getElementById('searchPeople')
searchPeople.addEventListener('change', filterPeople)
var filterPeople1=[]
    var base= document.querySelector('.pastehere')
for(i=0; i<=data.length-1; i++){
    var block= document.createElement('div')
    block.setAttribute('class', 'blok')
      var part= 'NAME: '+data[i].name +" "+ data[i].lastname
     var imgz=document.createElement('img');
      imgz.setAttribute('src', data[i].image)
      
      var part6=document.createElement('h3')
      var part2="AGE: " +data[i].age
      var part7=document.createElement('p')
      var part3="OCCUPATION: "+data[i].ocupation
      var part8=document.createElement('p')
     
      part6.innerHTML=part
      part7.innerHTML=part2
      part8.innerHTML=part3
     block.appendChild(imgz) 
     base.appendChild(block)
     block.appendChild(part6)
     block.appendChild(part7)
     block.appendChild(part8)
     
  }

function filterPeople(){
  base.innerHTML=' '
  filterPeople1=[]
  
  for(i=0; i<=data.length-1; i++){
if(data[i].name.toLowerCase().includes(searchPeople.value) || data[i].lastname.toLowerCase().includes(searchPeople.value)){
    filterPeople1[i]=data[i]
  
    var block= document.createElement('div')
    block.setAttribute('class', 'blok')
      var part= 'NAME: '+filterPeople1[i].name +" "+ filterPeople1[i].lastname
     var imgz=document.createElement('img');
      imgz.setAttribute('src', filterPeople1[i].image)
      
      var part6=document.createElement('h3')
      var part2="AGE: " +filterPeople1[i].age
      var part7=document.createElement('p')
      var part3="OCCUPATION: "+filterPeople1[i].ocupation
      var part8=document.createElement('p')
     
      part6.innerHTML=part
      part7.innerHTML=part2
      part8.innerHTML=part3
     block.appendChild(imgz) 
     base.appendChild(block)
     block.appendChild(part6)
     block.appendChild(part7)
     block.appendChild(part8)
  }
  
    }
    if( filterPeople1.length==0){
        var block23= document.createElement('div')
        block23.setAttribute('class', 'blok')
        var err1= document.createElement('h3')
        err1.innerHTML='SORRY WE DIDN\'t FIND ANY USER BY THAT NAME'
        var err2 = document.createElement('p')
        err2.innerHTML='try someone else'
        block23.appendChild(err1)
        block23.appendChild(err2)
        base.appendChild(block23)

    }



}





})
//var getTHeToken= fetch('http://127.0.0.1:8000/api/3')
//.then((data)=>data.json())
//.then(function(data){
  //  console.log(data);
//})
