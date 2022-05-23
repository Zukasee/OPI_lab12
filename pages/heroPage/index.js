import heroesData from '../../heroes/all.json' assert { type: "json" }

const heroName = window.location.hash.slice(1) //abaddon
const heroData = heroesData[heroName]

document.title = heroName

const heroTitle = document.createElement('h3')
heroTitle.innerHTML = heroName

const heroImage = document.createElement('img')
heroImage.className = 'hero'
heroImage.src = `../../heroes/${heroName}/icon.webp`

const heroDescriptionContainer = document.createElement('h1')
heroDescriptionContainer.className = 'opisanie'
heroDescriptionContainer.innerText = heroData.description

const spellsTitle = document.createElement('h3')
spellsTitle.className = 'spos'
spellsTitle.innerText = 'Способности'

const spellsContainer = document.createElement('div')
spellsContainer.className = 'skili'

const spellsVideosContainer = document.createElement('div')
spellsVideosContainer.className = 'videos'

for (let i = 1; i <= heroData.spellsAmount; i++) {

    const spellContainer = document.createElement('div')
    spellContainer.className = 'skil'

    const spellImage = document.createElement('img')
    spellImage.className='pick'
    spellImage.src=`../../heroes/${heroName}/spells/${i}/icon.png`
    spellContainer.appendChild(spellImage)

    const spellVideoContainer = document.createElement('div')
    spellVideoContainer.className = 'video'
    const spellVideo = document.createElement('video')
    spellVideo.autoplay = true
    spellVideo.muted = true
    spellVideo.loop = true
    spellVideo.src = `../../heroes/${heroName}/spells/${i}/video.webm`
    spellVideoContainer.appendChild(spellVideo)

    if (i === 1){ 
        spellContainer.classList.add('active')
        spellVideoContainer.classList.add('active')
    }

    spellsVideosContainer.appendChild(spellVideoContainer)
    spellsContainer.appendChild(spellContainer)
}

const contentContainer = document.querySelector('.centr')
contentContainer.appendChild(heroTitle)
contentContainer.appendChild(heroImage)
contentContainer.appendChild(heroDescriptionContainer)
contentContainer.appendChild(spellsTitle)
contentContainer.appendChild(spellsContainer)
contentContainer.appendChild(spellsVideosContainer)

let taba = document.querySelectorAll('.skil');

let tabs_info = document.querySelectorAll('.video');
for (let i = 0; i < taba.length; i++) {
   taba[i].addEventListener('click', () => {
      for (let i = 0; i < taba.length; i++) {
         tabs_info[i].classList.remove('active');
      }
      tabs_info[i].classList.add('active');
   });
}


// qweqw
{/* <h3 class="spos">Способности</h3>
			<div class="skili">
				<div class="skil active">
					<img src="skili/abaddon/abaddon_death_coil.png" class="pick">
				</div>
				<div class="skil">
					<img src="skili/abaddon/abaddon_aphotic_shield.png" class="pick">
				</div>
				<div class="skil">
					<img src="skili/abaddon/abaddon_frostmourne.png" class="pick">
				</div>
				<div class="skil">
					<img src="skili/abaddon/abaddon_borrowed_time.png" class="pick">
				</div>
			</div>
		<div class="video active"><video src="skili/abaddon/abaddon_death_coil.webm" autoplay muted loop ></video>
				<h1>dfdsfkklsmfkld</h1>
		</div>
		<div class="video"><video src="skili/abaddon/abaddon_aphotic_shield.webm" autoplay muted loop></video></div>
		<div class="video"><video src="skili/abaddon/abaddon_frostmourne.webm" autoplay muted loop></video></div>
		<div class="video"><video src="skili/abaddon/abaddon_borrowed_time.mp4" autoplay muted loop></video></div> */}
// 