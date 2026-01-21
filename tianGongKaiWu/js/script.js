document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    const introContainer = document.getElementById('intro-container');
    const mainContent = document.getElementById('main-content');

    // 进入主页面的函数
    const enterSite = () => {
        //视频淡入
        video.style.transition = 'opacity 2s ease-in';
        video.style.opacity = '1';
        // 视频容器淡出
        introContainer.style.transition = 'opacity 2s ease-out';
        introContainer.style.opacity = '0';
        
        // 显示主内容
        mainContent.classList.add('visible');

        // 动画结束后移除视频容器，恢复页面滚动
        setTimeout(() => {
            introContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }, 2000);
    };

    // 监听视频播放结束事件
    video.addEventListener('ended', enterSite);

    // 点击屏幕也可跳过视频直接进入
    introContainer.addEventListener('click', () => {
        video.pause();
        enterSite();
    });

    // 尝试自动播放
    video.play().catch(error => {
        console.log("自动播放被阻止，等待用户交互:", error);
        // 如果自动播放失败（例如未静音且无用户交互），通常浏览器会显示播放按钮或需要用户点击
        // 由于我们设置了 muted，大部分现代浏览器应该允许自动播放
    });
});
