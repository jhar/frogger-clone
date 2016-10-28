/* Resources.js
 * Image loading utility with a "caching" layer
 */
(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Public image loader
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            // If array is passed
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            // Assume the value is a string
            _load(urlOrArr);
        }
    }

    // Private image loader
    function _load(url) {
        if(resourceCache[url]) {
            // Return cached image if it exists
            return resourceCache[url];
        } else {
            // Load image
            var img = new Image();
            img.onload = function() {
                // Add image to cache
                resourceCache[url] = img;

                // Call all onReady() callbacks
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };

            // Set initial cache value to false
            resourceCache[url] = false;
            
            // Set image src to passed in URL
            img.src = url;
        }
    }

    // Get reference to cached image
    function get(url) {
        return resourceCache[url];
    }

    // Determines if image has loaded
    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    // Add function to callback stack called when all images are ready
    function onReady(func) {
        readyCallbacks.push(func);
    }

    // Publicly accessible functions
    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
