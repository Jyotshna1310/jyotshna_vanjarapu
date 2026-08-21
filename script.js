const html=document.documentElement,theme=document.getElementById('theme'),menu=document.getElementById('menu'),links=document.getElementById('links');
const saved=localStorage.getItem('jyotshna-theme'); if(saved==='dark') html.dataset.theme='dark';
function icon(){theme.textContent=html.dataset.theme==='dark'?'☀':'☾'} icon();
theme.onclick=()=>{if(html.dataset.theme==='dark'){delete html.dataset.theme;localStorage.setItem('jyotshna-theme','light')}else{html.dataset.theme='dark';localStorage.setItem('jyotshna-theme','dark')}icon()};
menu.onclick=()=>links.classList.toggle('open');links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
