
export function checkEmailFormat(email){
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i)
}

export function checkPassword(pwd){
    return pwd.length > 0
}

export function updateLocalStorage(name,value){
    localStorage.setItem(name,value)
}

export function getLocalStorage(name){
    return JSON.parse(localStorage.getItem(name))
}