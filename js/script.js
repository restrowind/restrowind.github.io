


function openTab(tabName) {
  var i, tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
      tabcontent[i].style.display = "none";
  }

  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
      tabbuttons[i].classList.remove("active");
  }

  setTimeout(function() {
      document.getElementById(tabName).classList.add("active");
      document.getElementById(tabName).style.display = "block";
  }, 100);

  var activeButton = document.querySelector("[onclick='openTab(\"" + tabName + "\")']");
  if (activeButton) {
      activeButton.classList.add("active");
  }
}

// 默认打开第一个标签页
openTab('info');

// 获取所有作品目录项的父元素 ul
const portfolioItems = document.querySelectorAll("work-item");

// 遍历作品目录项，为每个作品目录项添加点击事件监听
portfolioItems.forEach(item => {
  item.addEventListener("click", () => {
    // 获取当前作品目录项的链接地址
    const link = item.querySelector("a").getAttribute("href");
    // 执行页面跳转
    window.location.href = link;
  });
});

window.onscroll = function() {
  var header = document.querySelector('header');
  var profileImage = header.querySelector('.profile img');
  var profileText = header.querySelector('.profile p');
  var headerOriginalHeight = 250; // 初始header高度为250px
  var headerMinHeight = 50; // header的最小高度
  var scrollDistance = window.pageYOffset;

  // 调整header高度
  var headerHeight = Math.max(headerMinHeight, headerOriginalHeight - scrollDistance);
  header.style.height = headerHeight + 'px';

  // 根据header高度调整头像尺寸
  var imageSizeReduction = headerOriginalHeight - headerHeight;
  var newImageSize = Math.max(45, 180 - imageSizeReduction * (180 - 45) / (headerOriginalHeight - headerMinHeight));
  profileImage.style.width = newImageSize + 'px';
  profileImage.style.height = newImageSize + 'px';

  // 根据header高度调整头像位置
  profileImage.style.top = (headerHeight - newImageSize) / 2 + 'px';
  profileText.style.top = (headerHeight-25)/2 + 'px';
  profileText.style.left = newImageSize +20+ 'px';

  // 调整其他内容的透明度
  var opacity = Math.max(0, (headerHeight - headerMinHeight) / (headerOriginalHeight - headerMinHeight));
  var otherContent = header.querySelectorAll('.header-content > *:not(.profile)');
  otherContent.forEach(function(content) {
      content.style.opacity = opacity;
  });
};