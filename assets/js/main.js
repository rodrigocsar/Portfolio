
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
     

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateFormation(profileData){
    const education = document.getElementById('profile.formationAcad')
    education.innerHTML = profileData.education.formation.map(form => `<li><img src="${form.logo}" alt="${form.name}" title="${form.name}"></li>`).join('')
}

function updateAttributive(profileData){
    const form = document.getElementById('profile.attributive')
    form.innerHTML = profileData.education.attributive.map(proj => {
        return `
            <li>
                <h3 ${proj.description ? 'class="curses"' : ''}>${proj.name}</h3>
                 <a href="${proj.url}" target="_blank">${proj.description}</a>
           </li>
        `
        
    }).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
                   <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                   <a  'class="project"'href="${project.url }" target="_blank">${project.description} </a>
        
         </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    updateFormation(profileData)
    updateAttributive(profileData)
})()