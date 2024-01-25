const topMenu = document.getElementById('hdk-top-menu')
const toggleTopMenuIcon = document.getElementById('hdk-toggle-top-menu-icon')
document.addEventListener('click', (e) =>{
  if(toggleTopMenuIcon.contains(e.target)){
    topMenu.classList.toggle('hdk-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else{
    if(topMenu.classList.contains('hdk-topmenu-expanded')){
      topMenu.classList.remove('hdk-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})