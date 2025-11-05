
function buildGallery(containerSelector, imageIndex = 0) {
  
    const gallery = document.querySelector(containerSelector);

    const lock = Math.floor(Math.random() * 1000);                      // random lock value
    const fullSize = `https://loremflickr.com/1024/1024/?lock=${lock}`; // alleatory full size immage
    const thumbSize = `https://loremflickr.com/300/300?lock=${lock}`;   // alleatory thumb size immage


    const a = document.createElement('a');
    a.href = fullSize;                                                  // image in full size
    a.target = "_blank";                                                // new tab in the browser


    const img = document.createElement('img');
    img.src = thumbSize;                                                // thumb size for each image
    img.alt = `Filter image ${imageIndex}`                              // alt customized per image
    img.title = `Click to view image ${imageIndex} in full size`;       // hint customized per image


    a.appendChild(img);
    gallery.appendChild(a);
}



