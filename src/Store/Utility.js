const BaseApi = process.env.NODE_ENV==='development' ? 'http://localhost:5000/api': 'https://ihdm-api-v2-production.up.railway.app/api'    




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