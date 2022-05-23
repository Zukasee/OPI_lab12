import heroesData from '../../heroes/all.json' assert { type: "json" }

const heroes = Object.entries(heroesData).map(hero => ({
    name: hero[0].replace(/_/g, ' '),
    path: hero[0],
    ...hero[1]
}))

const straightContainer = document.querySelector('.sila')
heroes.filter(hero => hero.attribute === 'straight').forEach(hero => { // straight heroes
    const heroContianer = document.createElement('div')
    heroContianer.className = 'hero'
    const heroLink = document.createElement('a')
    heroLink.href= `../heroPage/index.html#${hero.path}`
    const heroImage = document.createElement('img')
    heroImage.alt= hero.name
    heroImage.src = `../../heroes/${hero.path}/icon.webp`
    heroLink.appendChild(heroImage)
    const heroText = document.createElement('div')
    heroText.innerText = hero.name
    heroText.className = 'text'
    heroContianer.appendChild(heroLink)
    heroContianer.appendChild(heroText)
    straightContainer.appendChild(heroContianer)
})
const agilityContainer = document.querySelector('.agility')
heroes.filter(hero => hero.attribute === 'agility').forEach(hero => { // agility heroes
    const heroContianer = document.createElement('div')
    heroContianer.className = 'hero'
    const heroLink = document.createElement('a')
    heroLink.href= `../heroPage/index.html#${hero.path}`
    const heroImage = document.createElement('img')
    heroImage.alt= hero.name
    heroImage.src = `../../heroes/${hero.path}/icon.webp`
    heroLink.appendChild(heroImage)
    const heroText = document.createElement('div')
    heroText.innerText = hero.name
    heroText.className = 'text'
    heroContianer.appendChild(heroLink)
    heroContianer.appendChild(heroText)
    agilityContainer.appendChild(heroContianer)
})
const intelligenceContainer = document.querySelector('.intelligence')
heroes.filter(hero => hero.attribute === 'intelligence').forEach(hero => { // intelligence heroes
    const heroContianer = document.createElement('div')
    heroContianer.className = 'hero'
    const heroLink = document.createElement('a')
    heroLink.href= `../heroPage/index.html#${hero.path}`
    const heroImage = document.createElement('img')
    heroImage.alt= hero.name
    heroImage.src = `../../heroes/${hero.path}/icon.webp`
    heroLink.appendChild(heroImage)
    const heroText = document.createElement('div')
    heroText.innerText = hero.name
    heroText.className = 'text'
    heroContianer.appendChild(heroLink)
    heroContianer.appendChild(heroText)
    intelligenceContainer.appendChild(heroContianer)
})

let scroll_up = document.querySelector('.one_refernce');

scroll_up.addEventListener('click', fun1);
function fun1() {
   window.scroll({
      top: 668,
      behavior: 'smooth',
   });
}

let scroll_up2 = document.querySelector('.two_refernce');
scroll_up2.onclick = scroll_up2.addEventListener('click', fun2);
function fun2() {
   window.scroll({
      top: 1400,
      behavior: 'smooth',
   });
}

let scroll_up3 = document.querySelector('.three_refernce');

scroll_up3.addEventListener('click', fun3);
function fun3() {
   window.scroll({
      top: 2170,
      behavior: 'smooth',
   });
}


// <div class="hero">
// 						<a href="./pages/heroPage/index.html#abaddon">
// 							<img src="sila/Abaddon_icon.webp" alt="Abaddon">
// 						</a>
// 						<div class="text">Abaddon</div>
// 					</div>