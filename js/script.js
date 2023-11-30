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


window.onscroll = function() {
  var header = document.querySelector('header');
  var profileImage = header.querySelector('.profile img');
  var profileText = header.querySelector('.profile p');
  var portfolioButton = document.querySelector('.portfolio-portal');
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
  profileText.style.left = newImageSize + 20+ 'px';

  // 调整其他内容的透明度
  var opacity = Math.max(0, (headerHeight - headerMinHeight) / (headerOriginalHeight - headerMinHeight));
  var otherContent = header.querySelectorAll('.header-content > *:not(.profile)');
  otherContent.forEach(function(content) {
      content.style.opacity = opacity;
  });

  portfolioButton.style.top = headerHeight + 'px'
};

// 存储滚动位置
sessionStorage.setItem('scrollPosition', window.scrollY);

// 检查是否有保存的滚动位置
window.onload = function() {
  setTimeout(function() {
      if (sessionStorage.getItem('scrollPosition') !== null) {
          window.scrollTo(0, parseInt(sessionStorage.getItem('scrollPosition')));
      }
  }, 100); // 延迟100毫秒，根据需要调整
};

window.onbeforeunload = function() {
  sessionStorage.setItem('scrollPosition', window.scrollY);
};

