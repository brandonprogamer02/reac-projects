

self.addEventListener('install' , (e) => {
    console.log('service worker instalado...',e)
})

self.addEventListener('activate' , (e) => {
    console.log('service worker activado...',e)
})

self.addEventListener('fetch' , (e) => {
    console.log('fetch   activado...',e)
})


