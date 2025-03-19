const toggler = document.getElementsByClassName("toggler")[0]
const nav_links = document.getElementsByClassName("nav-links")[0]
toggler.addEventListener("click",function(){
  nav_links.classList.toggle("active");
})
const home_list = document.getElementsByClassName("lists")[0];
home_list.addEventListener("click",function(){
  nav_links.classList.toggle("active");
})
const skill_list = document.getElementsByClassName("lists")[1];
skill_list.addEventListener("click",function(){
  nav_links.classList.toggle("active");
})
const project_list = document.getElementsByClassName("lists")[2];
project_list.addEventListener("click",function(){
  nav_links.classList.toggle("active");
})
const contact_list = document.getElementsByClassName("lists")[3];
contact_list.addEventListener("click",function(){
  nav_links.classList.toggle("active");
})