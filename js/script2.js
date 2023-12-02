function openTab(tabName) {
  var i, tabcontent, tabbuttons;
  var activeIndex = parseInt(document.getElementById(tabName).getAttribute("data-index"));

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      var index = parseInt(tabcontent[i].getAttribute("data-index"));

      if (index < activeIndex) {
          // 如果在当前激活的左边
          tabcontent[i].style.opacity = "0";
          tabcontent[i].style.transform = "translateX(-100%)";
      } else if (index > activeIndex) {
          // 如果在当前激活的右边
          tabcontent[i].style.opacity = "0";
          tabcontent[i].style.transform = "translateX(100%)";
      } else {
          // 当前激活的选项卡
          tabcontent[i].style.opacity = "1";
          tabcontent[i].style.transform = "translateX(0%)";
      }
      tabcontent[i].style.position = "absolute";
  }

  // 更新按钮状态
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
      tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }
  event.currentTarget.className += " active";
}

// 默认打开第一个标签页
document.addEventListener('DOMContentLoaded', function() {
  openTab('info'); // 打开游戏信息选项卡
  document.querySelector('.tab-button').classList.add('active'); // 将第一个按钮设置为激活状态
});




document.getElementById('home-button').addEventListener('click', function(e) {
  e.preventDefault();

  // 添加渐隐效果
  document.body.classList.add('fade-out');

  setTimeout(function() {
      // 在渐隐完成后跳转到主页
      window.location.href = '../index.html';
  }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
  var gameDownloadButton = document.getElementById('game-download-button');
  var platformButtons = document.getElementById('platform-buttons');

  gameDownloadButton.addEventListener('click', function() {
      platformButtons.classList.toggle('show'); // 切换 show 类
  });
});


// Assuming you have an array of image URLs and a main image container
const images = ['../images/Vein/Vein1.png', '../images/Vein/Vein2.png','../images/Vein/Vein3.png','../images/Vein/Vein4.png','../images/Vein/Vein5.png','../images/Vein/Vein6.png','../images/Vein/Vein7.png','../images/Vein/Vein8.png','../images/Vein/Vein9.png']; // Replace with actual URLs
const mainImageDisplay = document.querySelector('.main-image-display');
const imagePreviewContainer = document.querySelector('.image-preview-container');

// 更换主图像的函数
function changeMainImage(imageUrl) {
  // 移除旧的img元素（如果存在）
  let existingImg = mainImageDisplay.querySelector('img');
  if (existingImg) {
      mainImageDisplay.removeChild(existingImg);
  }

  // 创建新的img元素
  let img = document.createElement('img');
  img.src = imageUrl;
  mainImageDisplay.appendChild(img);
}
// 动态创建并添加预览图片到预览容器
images.forEach((imageUrl, index) => {
  let img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Image preview';
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
      changeMainImage(imageUrl);
      currentImageIndex = index; // 更新当前图片索引
      resetImageSlideShow(); // 重置轮播
  });
  imagePreviewContainer.appendChild(img);
});

// 初始显示第一张图片
changeMainImage(images[0]);

// 自动播放逻辑
let currentImageIndex = 0;
let imageSlideShowInterval = setInterval(nextImage, 5000); // 每5秒切换图片

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeMainImage(images[currentImageIndex]);
}

// 重置轮播计时器
function resetImageSlideShow() {
    clearInterval(imageSlideShowInterval);
    imageSlideShowInterval = setInterval(nextImage, 5000);
}

//相册悬停左右切换图片
function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeMainImage(images[currentImageIndex]);
  resetImageSlideShow(); // 重置轮播
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  changeMainImage(images[currentImageIndex]);
  resetImageSlideShow(); // 重置轮播
}