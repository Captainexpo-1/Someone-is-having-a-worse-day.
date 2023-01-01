var depth = -1
var loaded = []
var titles = []


function load(){
  (function () {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());

    document.getElementById("bt").innerHTML = 'Feel Better'
    var container = document.querySelector(".container");
    if(depth===-1){
        
    }
    reddit.top("wallstreetbets").t("week").limit(5000).fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        
        var betData = res.data.children[i].data; //get the data for this post
        var bet = document.createElement("img");
        var row = document.createElement("div");
        var right = document.createElement("div");


        row.className = "row";
        right.className = "col-xs-8";
        bet.id = 'row'

        bet.setAttribute("src", betData.url); //set url of image to reddit post

        if(betData.post_hint === 'image' && betData.link_flair_text === 'Loss'){
          loaded.push(bet) //add this image to the list 
          console.log('compatable on #' + i)
          right.appendChild(loaded[depth]);
          titles.push(betData.title)
          row.appendChild(right);
          container.appendChild(row);
        }else{
            console.log("not compatable on: " + i)
        }
        
        

        bet.className = 'bigimg'
        if(i === depth){
          document.getElementById('caption').innerText = titles[depth];
        }
        
        
      }
    });
    depth += 1
    
    
    
  })();
}