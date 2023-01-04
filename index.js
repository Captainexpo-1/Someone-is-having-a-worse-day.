var depth = 0;
var loaded = [];
var titles = [];

var isloaded = false
var test = 0
    

//document.getElementById("bt").innerHTML = 'Feel Better';
var container = document.querySelector(".container");

reddit.top("wallstreetbets").t('week').limit(50000).fetch(function (res) {
  for (var i = 0; i < res.data.children.length; i++) {
        
    var betData = res.data.children[i].data; //get the data for this post
    var bet = document.createElement("img");
    bet.id = 'row';
    bet.setAttribute("src", betData.url); //set url of image to reddit post
    bet.className = 'bigimg';
        
    if(betData.post_hint === 'image'){
        if(betData.link_flair_text === 'Loss' || betData.link_flair_text === 'Meme'){
            loaded.push(bet) //add this image to the list 
            console.log('compatable on #' + i)
            titles.push(betData.title); //push title
        }
        else{
            console.log('not compatable on #' + i)
        }
          
    }else{
        console.log("not compatable on: " + i);
    }
        
        
  }
  isloaded = true
  document.getElementById('caption').innerText = 'go ahead :)'
test+=5
console.log(test)
    
    
});


function load(){
  if(!isloaded){return 0}
  const rows = document.querySelectorAll('.bigimg');
  rows.forEach(row => row.remove());
  if(depth+1 < loaded.length){
    depth++
    console.log(typeof container)
    document.getElementById('container').appendChild(loaded[depth]);
    document.getElementById('caption').innerText = titles[depth];
  }else{
    window.location.href = 'https://www.google.com/search?q=therapists+near+me&rlz=1C5CHFA_enUS1037US1038&oq=therapist&aqs=chrome.0.0i131i433i457i512j69i57j0i402l2j0i433i512j0i131i433i512j0i433i512j0i512j0i433i512j0i512.2375j0j7&sourceid=chrome&ie=UTF-8'
  }
}