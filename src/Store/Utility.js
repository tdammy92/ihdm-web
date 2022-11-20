const BaseApi = 'https://ihdm-api-v1-production.up.railway.app'
// const BaseApi = 'https://ihdm-api.herokuapp.com'
// const BaseApi = 'http://localhost:1337'


 const types = {
    INFO: 'info',
    SUCCESS: 'success',
    ERROR: 'error'
  }
  
 const transitions = {
    FADE: 'fade',
    SCALE: 'scale'
  }


// function getUser() {

//     const ls = JSON.parse(localStorage.getItem('admin'))
  
//     if (ls) {
//         return ls
//     } else {
//         return null
//     }
    
  
  
//   }

export { BaseApi, types,transitions};