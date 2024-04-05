const lifestyleGalleryInfo = [
    {
        imgSrc: 'lp-1.jpg',
        altText: 'Lifestyle Photography'
    },
    {
        imgSrc: 'lp-2.jpg',
        altText: 'Lifestyle Photography'
    },
    {
        imgSrc: 'lp-3.jpg',
        altText: 'Lifestyle Photography'
    },
    {
        imgSrc: 'lp-4.jpg',
        altText: 'Lifestyle Photography'
    },
    {
        imgSrc: 'lp-5.jpg',
        altText: 'Lifestyle Photography'
    }
]
let accum = '';

lifestyleGalleryInfo.forEach((imageObj, index) => {
   const html = `
    <div class="centered">
    <div class="frame">
        <img src="${imageObj.imgSrc}" alt="${imageObj.altText}"> <!-- ondblclick="checkFull();" -->
    </div>
        </div>
    <div class="popup-full">
        <span onclick="removeFull()">&#10005</span>
        <div class="centered"><img src="${imageObj.imgSrc}" alt="${imageObj.altText}"></div>
    </div>
   `;
   accum += html;
});
document.querySelector('.lifestyle-gallery').innerHTML = accum;