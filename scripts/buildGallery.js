
function buildGallery(containerSelector, imageIndex = 0) {
  const gallery = document.querySelector(containerSelector);

  const lock = Math.floor(Math.random() * 1000);
  const fullSize = `https://loremflickr.com/1024/1024/?lock=${lock}`;
  const thumbSize = `https://loremflickr.com/300/300?lock=${lock}`;

  const a = document.createElement('a');
  a.href = fullSize;
  a.target = "_blank";

  const img = document.createElement('img');
  img.src = thumbSize;
  img.alt = `Filter image ${imageIndex}`;
  img.title = `Click to view image ${imageIndex} in full size`;
  img.classList.add("gallery-item");   // ✅ use gallery-item instead of float-left

  a.appendChild(img);
  gallery.appendChild(a);
}





