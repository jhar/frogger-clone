/* Currently only works for images */
const assets = () => {
    let assetCache = {}
    let loading = []
    let callbacks = []

    return {
        /* Load request */
        load: function(request) {
            if(request instanceof Array) {
                request.forEach((url) => {
                    this.cache(url)
                })
            } else {
                /* Assume the value is a string */
                cache(request)
            }
        },

        /* Load & caching function */
        cache: function(url) {
            if(assetCache[url]) {
                /* Return cached asset if it exists */
                return assetCache[url]
            } else {
                /* Load image */
                let img = new Image()
                img.onload = () => {
                    /* Add image to cache */
                    assetCache[url] = img

                    /* Call all callbacks */
                    this.calling()
                }

                /* Set initial cache value to false */
                assetCache[url] = false

                /* Set image src to passed in URL */
                img.src = url
            }
        },

        /* Calling all callbacks */
        calling: function() {
            if(this.isReady()) {
                callbacks.forEach((callback) => {
                  callback()
                })
            }
        },

        /* Get reference to cached image */
        get: function(url) {
            return assetCache[url]
        },

        /* Determines if image has loaded */
        isReady: function() {
            let ready = true
            for(var c in assetCache) {
                if(assetCache.hasOwnProperty(c) && !assetCache[c]) {
                    ready = false
                }
            }
            return ready
        },

        /* Add callback to end of stack */
        onReady: function(callback) {
            callbacks.push(callback)
        }
    }
}

export default assets
