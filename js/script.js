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