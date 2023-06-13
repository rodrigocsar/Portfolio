

function updateProfileInfo(profileDate) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileDate.photo
    photo.alt = profileDate.name

    const name = document.getElementById('profile.name')
    name.innerText = profileDate.name

    const job = document.getElementById('profile.job')
    job.innerText = profileDate.job

    const location = document.getElementById('profile.location')
    location.innerText = profileDate.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileDate.phone
    phone.href = `tel:${profileDate.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileDate.email
    email.href = `mailto:${profileDate.email}`
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



(async () => {

    const profileDate = await fetchProfileDate()
    updateProfileInfo(profileDate)
    updateSoftSkills(profileDate)
    updateHardSkills(profileDate)
    updateLanguages(profileDate) 
    console.log(profileDate)


})()