(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('nav');
  function t(o){b.classList.toggle('open',o);n.classList.toggle('open',o)}
  b.onclick=function(){t(!n.classList.contains('open'))};
  n.querySelectorAll('a').forEach(function(a){a.onclick=function(){t(false)}});
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  var c=document.getElementById('tilt');
  document.addEventListener('mousemove',function(e){
    var x=(e.clientX/innerWidth-.5)*24,y=(e.clientY/innerHeight-.5)*-18;
    c.style.transform='rotateY('+x+'deg) rotateX('+y+'deg)';
  });
  var h=document.querySelector('header'),last=scrollY;
  addEventListener('scroll',function(){
    var y=scrollY;
    if(n.classList.contains('open')){return}
    h.classList.toggle('hide',y>last&&y>60);
    last=y;
  },{passive:true});
})();
