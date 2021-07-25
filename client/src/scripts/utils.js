export const scrollColorTrans = (
  bgElem,
  startElem,
  endElem,
  startColorObj,
  endColorObj
) => {
  const page = document.querySelector(`${bgElem}`);
  const start = document.querySelector(`${startElem}`);
  const end = document.querySelector(`${endElem}`);
  const startPosY = start.getBoundingClientRect().top;
  const endPosY = end.getBoundingClientRect().top;
  const rDist = endColorObj.r - startColorObj.r;
  const gDist = endColorObj.g - startColorObj.g;
  const bDist = endColorObj.b - startColorObj.b;

  window.addEventListener("scroll", () => {
    const currStartPosY = start.getBoundingClientRect().top;
    const progressPerc = -currStartPosY / (endPosY - startPosY);

    if (progressPerc <= 1 && progressPerc >= 0) {
      const rVal = Math.round(rDist * progressPerc + startColorObj.r);

      const gVal = Math.round(gDist * progressPerc + startColorObj.g);

      const bVal = Math.round(bDist * progressPerc + startColorObj.b);

      const pageColor = { r: rVal, g: gVal, b: bVal };
      page.style.backgroundColor = `rgb(${pageColor.r}, ${pageColor.g}, ${pageColor.b})`;
    }
  });
};
