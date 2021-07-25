export const scrollBgColorTrans = (
  bgElem,
  borderElem,
  startElem,
  endElem,
  startColorObj,
  endColorObj
) => {
  const bgArea = document.querySelectorAll(`${bgElem}`);
  const borderArea = document.querySelectorAll(`${borderElem}`);
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

      const areaColor = { r: rVal, g: gVal, b: bVal };

      if (bgArea) {
        for (let i = 0; i < bgArea.length; i++) {
          bgArea[
            i
          ].style.backgroundColor = `rgb(${areaColor.r}, ${areaColor.g}, ${areaColor.b})`;
        }
      }

      if (borderArea) {
        for (let i = 0; i < borderArea.length; i++) {
          borderArea[
            i
          ].style.borderColor = `rgb(${areaColor.r}, ${areaColor.g}, ${areaColor.b})`;
        }
      }
    }
  });
};

export const scrollSvgColorTrans = (
  svgFillElem,
  svgStrokeElem,
  svgStopColorElem,
  startElem,
  endElem,
  startColorObj,
  endColorObj
) => {
  const svgFill = document.querySelectorAll(`${svgFillElem}`);
  const svgStroke = document.querySelectorAll(`${svgStrokeElem}`);
  const svgStopColor = document.querySelectorAll(`${svgStopColorElem}`);
  const start = document.querySelector(`${startElem}`);
  const end = document.querySelector(`${endElem}`);
  const startPosY = start.getBoundingClientRect().top;
  const endPosY = end.getBoundingClientRect().top;
  const rDist = endColorObj.r - startColorObj.r;
  const gDist = endColorObj.g - startColorObj.g;
  const bDist = endColorObj.b - startColorObj.b;

  console.log(svgStopColor);

  window.addEventListener("scroll", () => {
    const currStartPosY = start.getBoundingClientRect().top;
    const progressPerc = -currStartPosY / (endPosY - startPosY);

    if (progressPerc <= 1 && progressPerc >= 0) {
      const rVal = Math.round(rDist * progressPerc + startColorObj.r);
      const gVal = Math.round(gDist * progressPerc + startColorObj.g);
      const bVal = Math.round(bDist * progressPerc + startColorObj.b);

      const svgColor = { r: rVal, g: gVal, b: bVal };

      if (svgFill) {
        for (let i = 0; i < svgFill.length; i++) {
          svgFill[
            i
          ].style.fill = `rgb(${svgColor.r}, ${svgColor.g}, ${svgColor.b})`;
        }
      }

      if (svgStroke) {
        for (let i = 0; i < svgStroke.length; i++) {
          svgStroke[
            i
          ].style.stroke = `rgb(${svgColor.r}, ${svgColor.g}, ${svgColor.b})`;
        }
      }

      if (svgStopColor) {
        for (let i = 0; i < svgStopColor.length; i++) {
          svgStopColor[
            i
          ].style.stopColor = `rgb(${svgColor.r}, ${svgColor.g}, ${svgColor.b})`;
        }
      }
    }
  });
};
