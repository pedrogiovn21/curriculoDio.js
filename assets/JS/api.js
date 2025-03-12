async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/pedrogiovn21/curriculoDio.js/refs/heads/main/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}
