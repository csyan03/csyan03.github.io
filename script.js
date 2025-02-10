// 导航项目数据
const navItems = [
    { name: '首页', url: '#' },
    { name: '关于我们', url: '#' },
    { name: '服务', url: '#' },
    { name: '联系方式', url: '#' },
];

// 生成导航项
const navList = document.querySelector('nav ul');
navItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.url}">${item.name}</a>`;
    navList.appendChild(li);
});

// 点击了解更多按钮的事件处理
document.getElementById('learnMoreButton').addEventListener('click', function() {
    alert('这里是了解更多的内容!');
});

// 为功能模块添加逐渐显示的效果
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = 0;
        feature.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            feature.style.opacity = 1;
        }, index * 300); // 每个功能模块延迟加载
    });
});
