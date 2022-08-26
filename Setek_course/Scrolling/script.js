const topBtn = document.querySelector('#toTopBtn');
const nav = document.querySelector('#first');
const scrollGoal = document.querySelector('#scroll-goal').offsetTop;

window.addEventListener('scroll', function(event) {
  let scrolled = this.window.scrollY;
  // how far I can scroll - 500px
  const scrollable = document.documentElement.scrollHeight - this.window.innerHeight - 500; 
  if(Math.ceil(scrolled) >= scrollable) {
    topBtn.style.display = 'block';
  } else if(Math.ceil(scrolled) <= scrollable) {
    topBtn.style.display = 'none';
  }
});

nav.addEventListener('click', function(event) {
  window.scrollTo({
    top: scrollGoal,
    behavior: 'smooth'
  })
})