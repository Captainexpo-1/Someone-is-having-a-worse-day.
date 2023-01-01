var depth = 0;
var loaded = [];
var titles = [];
var test = 0
    

    //document.getElementById("bt").innerHTML = 'Feel Better';
    var container = document.querySelector(".container");

    reddit.top("wallstreetbets").t("week").limit(5000).fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        
        var betData = res.data.children[i].data; //get the data for this post
        var bet = document.createElement("img");
        bet.id = 'row';
        bet.setAttribute("src", betData.url); //set url of image to reddit post
        bet.className = 'bigimg';
        /* ----- not needed ----- */
        
        if(betData.post_hint === 'image' && betData.link_flair_text === 'Loss'){
          loaded.push(bet) //add this image to the list 
          console.log('compatable on #' + i)
          titles.push(betData.title); //push title
          
        }else{
            console.log("not compatable on: " + i);
        }
        
        
      }
   
    test+=5
    console.log(test)
    
    
  });
  console.log(loaded)

function load(){
    const rows = document.querySelectorAll('.bigimg');
    rows.forEach(row => row.remove());
    depth++
    console.log(typeof container)
    document.getElementById('container').appendChild(loaded[depth]);
    document.getElementById('caption').innerText = titles[depth];
   
}