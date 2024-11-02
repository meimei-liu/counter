const addButton = document.getElementById('add-button');
const countDisplay = document.getElementById('countDisplay');
let count = 0;

addButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
// 获取变换背景按钮
const changeBgButton = document.getElementById('changeBgButton');

changeBgButton.addEventListener('click', () => {
    // 生成随机的线性渐变颜色
    const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.background = `linear-gradient(to top right, ${color1}, ${color2})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    const card = document.querySelector('.card');
    card.style.backgroundColor = `rgba(${parseInt(newColor.slice(4, -1).split(',')[0])},${parseInt(newColor.slice(4, -1).split(',')[1])},${parseInt(newColor.slice(4, -1).split(',')[2])},0.2)`;
    card.style.border = `2px solid ${newColor}`;
    card.style.boxShadow = `0 8px 32px 0 rgba(${parseInt(newColor.slice(4, -1).split(',')[0])},${parseInt(newColor.slice(4, -1).split(',')[1])},${parseInt(newColor.slice(4, -1).split(',')[2])},0.37)`;
    const buttons = document.querySelectorAll('.button');
      buttons.forEach(button => {
        button.style.backgroundColor = `rgba(${parseInt(newColor.slice(4, -1).split(',')[0])},${parseInt(newColor.slice(4, -1).split(',')[1])},${parseInt(newColor.slice(4, -1).split(',')[2])},0.2)`;
        button.style.border = `1px solid ${newColor}`;
      });
    });