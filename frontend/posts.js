var dataz= fetch('http://127.0.0.1:8000/api/posts/?format=json')
.then((resp) => resp.json())
.then(function(data){
    console.log(data);
    
    var filterData=data
    var alldata=data
     var block= document.querySelector('.pastehere')
     var selector=document.getElementById('select')
     selector.addEventListener('change', filterPosts)
  
    
     
for(i=alldata.length-1; i>=0; i--){
    var smallBlok=document.createElement('div');
      var titlez= alldata[i].title
     
      
     
      if(alldata[i].type_of_post==="text"){
          var title=document.createElement('h4')
          title.innerHTML=titlez
         
        var part2=alldata[i].type_of_post
        var part2andahalf=document.createElement('p')
        part2andahalf.innerHTML=part2
        
       
        var textBlock=document.createElement('h1')
        textBlock.innerHTML=alldata[i].url
        var owner=document.createElement('h4')
        var whoClass='who'+i
        owner.setAttribute('class', whoClass)
        owner.innerHTML="Posted by: "+alldata[i].owner
        smallBlok.appendChild(title)
        smallBlok.appendChild(part2andahalf)
        
        smallBlok.appendChild(textBlock)
        smallBlok.appendChild(owner)
        smallBlok.setAttribute('class', 'smallBlok')
        block.appendChild(smallBlok)
        

      }
      if(alldata[i].type_of_post==='image'){
        var title=document.createElement('h4')
          title.innerHTML=titlez
           
          var part2=filterData[i].type_of_post
          var part2andahalf=document.createElement('p')
          part2andahalf.innerHTML=part2
          var imageBlock=document.createElement('img')
          imageBlock.setAttribute('class', 'smallBlokImage')
          imageBlock.setAttribute('src', alldata[i].url)
          imageBlock.setAttribute('height', '150px')
          imageBlock.setAttribute('width', '250px')
          var owner=document.createElement('h4')
          var whoClass='who'+i
          owner.setAttribute('class', whoClass)
          owner.innerHTML="Posted by: "+alldata[i].owner
          smallBlok.appendChild(title)
          smallBlok.appendChild(part2andahalf)
          
          smallBlok.appendChild(imageBlock)
          smallBlok.appendChild(owner)
          smallBlok.setAttribute('class', 'smallBlok')
          block.appendChild(smallBlok)


      }
     if(alldata[i].type_of_post==="Video"){
        var title=document.createElement('h4')
        title.innerHTML=titlez
         
        var part2=filterData[i].type_of_post
        var part2andahalf=document.createElement('p')
        part2andahalf.innerHTML=part2
        var player=document.createElement('iframe')
        player.setAttribute('class', 'videoplayer')
        player.setAttribute('src', alldata[i].url)
        player.setAttribute('height', '200px')
        player.setAttribute('width', '300px')
        player.setAttribute('frameborder', '0')
        player.setAttribute('allow', 'accelerometer')
      
        var owner=document.createElement('h4')
        var whoClass='who'+i
        owner.setAttribute('class', whoClass)
        owner.innerHTML="Posted by: "+alldata[i].owner
        smallBlok.appendChild(title)
        smallBlok.appendChild(part2andahalf)
        
        smallBlok.appendChild(player)
        smallBlok.appendChild(owner)
        smallBlok.setAttribute('class', 'smallBlok')
        block.appendChild(smallBlok)


     }
      
  
  }


    

var NumberOfPosts=data.length
var datab= fetch('http://127.0.0.1:8000/api/?format=json')
.then((resp) => resp.json())
.then(function(data){
    console.log(data);
      
    console.log(NumberOfPosts)
    for(i=0; i<= NumberOfPosts-1; i++){
      var whoIs = document.querySelector('.who'+i)
       console.log(whoIs.innerHTML)
      
        if(whoIs.innerHTML.includes(data[i].name)){
        var ownerImage=document.createElement('img')
      ownerImage.setAttribute('class', 'smallImage')
         ownerImage.setAttribute('src', data[i].image)

        whoIs.appendChild(ownerImage)
         
      }
    
    }
   });
  
 var optionz=document.getElementById('select1')

   
  
  
  function filterPosts(){
    console.log(selector.value)
    if(selector.value.toLowerCase()==='text'){
      filterData=[]
      block.textContent=' ';
    for(i=0; i<=data.length-1; i++){
      if(data[i].type_of_post.includes('text')){
        filterData[i]=data[i]
      console.log(filterData)
        
        var smallBlok=document.createElement('div');
        var titlez= filterData[i].title
        var title=document.createElement('h4')
        title.innerHTML=titlez
     
        var part2=filterData[i].type_of_post
        var part2andahalf=document.createElement('p')
        part2andahalf.innerHTML=part2
    
   
        var textBlock=document.createElement('h1')
        textBlock.innerHTML=data[i].url
        var owner=document.createElement('h4')
        var whoClass='who'+i
        owner.setAttribute('class', whoClass)
        owner.innerHTML="Posted by: "+filterData[i].owner
        smallBlok.appendChild(title)
        smallBlok.appendChild(part2andahalf)
    
        smallBlok.appendChild(textBlock)
        smallBlok.appendChild(owner)
        smallBlok.setAttribute('class', 'smallBlok')
        block.appendChild(smallBlok)
      }
      
    }
    
  }
    if(selector.value.toLowerCase()==='image'){
      filterData=[]
      block.textContent=' ';
      for(i=0; i<=data.length-1; i++){
        if(data[i].type_of_post.includes('image')){
          filterData[i]=data[i]
          console.log(filterData)

          var smallBlok=document.createElement('div');
          var titlez= filterData[i].title
          var title=document.createElement('h4')
          title.innerHTML=titlez
           
          var part2=filterData[i].type_of_post
          var part2andahalf=document.createElement('p')
          part2andahalf.innerHTML=part2
          var imageBlock=document.createElement('img')
          imageBlock.setAttribute('class', 'smallBlokImage')
          imageBlock.setAttribute('src', filterData[i].url)
          imageBlock.setAttribute('height', '150px')
          imageBlock.setAttribute('width', '250px')
          var owner=document.createElement('h4')
          var whoClass='who'+i
          owner.setAttribute('class', whoClass)
          owner.innerHTML="Posted by: "+filterData[i].owner
          smallBlok.appendChild(title)
          smallBlok.appendChild(part2andahalf)
          
          smallBlok.appendChild(imageBlock)
          smallBlok.appendChild(owner)
          smallBlok.setAttribute('class', 'smallBlok')
          block.appendChild(smallBlok)
        }
        
  
      }

  }
  if(selector.value.toLowerCase()==='video'){
    filterData=[]
    block.textContent=' ';
    for(i=0; i<=data.length-1; i++){
      if(data[i].type_of_post.includes('Video')){
        filterData[i]=data[i]
      console.log(filterData)

      var smallBlok=document.createElement('div');
          var titlez= filterData[i].title
      var title=document.createElement('h4')
        title.innerHTML=titlez
         
        var part2=filterData[i].type_of_post
        var part2andahalf=document.createElement('p')
        part2andahalf.innerHTML=part2
        var player=document.createElement('iframe')
        player.setAttribute('class', 'videoplayer')
        player.setAttribute('src', filterData[i].url)
        player.setAttribute('height', '200px')
        player.setAttribute('width', '300px')
        player.setAttribute('frameborder', '0')
        player.setAttribute('allow', 'accelerometer')
      
        var owner=document.createElement('h4')
        var whoClass='who'+i
        owner.setAttribute('class', whoClass)
        owner.innerHTML="Posted by: "+filterData[i].owner
        smallBlok.appendChild(title)
        smallBlok.appendChild(part2andahalf)
        
        smallBlok.appendChild(player)
        smallBlok.appendChild(owner)
        smallBlok.setAttribute('class', 'smallBlok')
        block.appendChild(smallBlok)
      }
      

    
    }
}
if(selector.value==='all'){
  filterData=data;
  block.textContent=' ';
for(i=alldata.length-1; i>=0; i--){
 var smallBlok=document.createElement('div');
   var titlez= alldata[i].title
  
   
  
   if(alldata[i].type_of_post==="text"){
       var title=document.createElement('h4')
       title.innerHTML=titlez
      
     var part2=alldata[i].type_of_post
     var part2andahalf=document.createElement('p')
     part2andahalf.innerHTML=part2
     
    
     var textBlock=document.createElement('h1')
     textBlock.innerHTML=alldata[i].url
     var owner=document.createElement('h4')
     var whoClass='who'+i
     owner.setAttribute('class', whoClass)
     owner.innerHTML="Posted by: "+alldata[i].owner
     smallBlok.appendChild(title)
     smallBlok.appendChild(part2andahalf)
     
     smallBlok.appendChild(textBlock)
     smallBlok.appendChild(owner)
     smallBlok.setAttribute('class', 'smallBlok')
     block.appendChild(smallBlok)
     

   }
   if(alldata[i].type_of_post==='image'){
     var title=document.createElement('h4')
       title.innerHTML=titlez
        
       var part2=filterData[i].type_of_post
       var part2andahalf=document.createElement('p')
       part2andahalf.innerHTML=part2
       var imageBlock=document.createElement('img')
       imageBlock.setAttribute('class', 'smallBlokImage')
       imageBlock.setAttribute('src', alldata[i].url)
       imageBlock.setAttribute('height', '150px')
       imageBlock.setAttribute('width', '250px')
       var owner=document.createElement('h4')
       var whoClass='who'+i
       owner.setAttribute('class', whoClass)
       owner.innerHTML="Posted by: "+alldata[i].owner
       smallBlok.appendChild(title)
       smallBlok.appendChild(part2andahalf)
       
       smallBlok.appendChild(imageBlock)
       smallBlok.appendChild(owner)
       smallBlok.setAttribute('class', 'smallBlok')
       block.appendChild(smallBlok)


   }
  if(alldata[i].type_of_post==="Video"){
     var title=document.createElement('h4')
     title.innerHTML=titlez
      
     var part2=filterData[i].type_of_post
     var part2andahalf=document.createElement('p')
     part2andahalf.innerHTML=part2
     var player=document.createElement('iframe')
     player.setAttribute('class', 'videoplayer')
     player.setAttribute('src', alldata[i].url)
     player.setAttribute('height', '200px')
     player.setAttribute('width', '300px')
     player.setAttribute('frameborder', '0')
     player.setAttribute('allow', 'accelerometer')
   
     var owner=document.createElement('h4')
     var whoClass='who'+i
     owner.setAttribute('class', whoClass)
     owner.innerHTML="Posted by: "+alldata[i].owner
     smallBlok.appendChild(title)
     smallBlok.appendChild(part2andahalf)
     
     smallBlok.appendChild(player)
     smallBlok.appendChild(owner)
     smallBlok.setAttribute('class', 'smallBlok')
     block.appendChild(smallBlok)


  }
   

}


}    
    

  }
})
