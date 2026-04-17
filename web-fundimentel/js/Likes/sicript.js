function addLike(el){
var like = el.previousElementSibling;
like.innerText = parseInt(like.innerText) + 1 + " like(s)";
}