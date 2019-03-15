let nav ='<ul class="navbar">'+
    '<li class="nav-item">'+
    '<a class="nav-link active" href="index.html">Home</a>'+
    '</li>'+
    '<li class="nav-item">'+
    '<a class="nav-link" href="#">Blog</a>'+
    '</li>'+
    '<li class="nav-item">'+
    '<a class="nav-link" href="#">Quiz</a>'+
    '</li>'+
    '<li class="nav-item">'+
    '<a class="nav-link" href="contact.html">Contact</a>'+
    '</li>'+
    '</ul>';
let elem = document.querySelector(".navbar");
console.log(elem);
elem.innerHTML = '<div>'+nav+'</div>';