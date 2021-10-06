const BaseApi = 'https://ihdm-api.herokuapp.com'




function getUser() {

    const ls = JSON.parse(localStorage.getItem('admin'))
  
    if (ls) {
        return ls
    } else {
        return null
    }
    
  
  
  }

export { BaseApi, getUser};