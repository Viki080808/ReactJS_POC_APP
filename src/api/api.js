
const baseURL = process.env.REACT_APP_BASE_URL

export const getCurrentUser = async() => {
    const apiURL = `${baseURL}CurrentUserInfo`
    console.log(apiURL)
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getAllUsers = async() => {
    const apiURL = `${baseURL}AllUsers`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getClients = async() => {
    const apiURL = `${baseURL}Clients`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getSelectedClient = async(clientId) => {
    const apiURL = `${baseURL}SelectedClient`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getJobs = async() => {
    const apiURL = `${baseURL}Jobs`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getFailedJobList = async() => {
    const apiURL = `${baseURL}FailedJobList`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}

export const getOverallJobStatus = async() => {
    const apiURL = `${baseURL}OverallJobStatus`
    const apiResponse = await fetch(apiURL)
    if(apiResponse.ok){
        return await apiResponse.json()
    }
}