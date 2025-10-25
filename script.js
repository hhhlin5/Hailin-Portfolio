// testing:
console.log("Hello! My JavaScript is working!");

// 表单提交拦截与简单验证
// document.querySelector('.contact-form').addEventListener('submit', function(event) {
//     // 阻止表单默认的提交行为（阻止页面刷新）
//     event.preventDefault(); 

//     // 获取用户输入的值
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // 简单的验证
//     if (name === '' || email === '' || message === '') {
//         alert('Please fill in all fields before submitting.');
//         return; 
//     }

//     // 如果验证通过，可以在这里处理数据，比如发送到服务器或打印到控制台
//     console.log('Form Data:', { name, email, message });
// });

// 动态更新版权年份
const copyrightYearElement = document.querySelector('footer p');
if (copyrightYearElement) {
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = `© ${currentYear} Hailin Zeng. All rights reserved.`;
    // 这会自动将 2023 更新为当前年份
}
// 示例 4: 移动端汉堡菜单功能
document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello! My JavaScript is working!");
    
    // 汉堡菜单功能
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("汉堡菜单元素未找到");
    }
    
    // 安全地添加其他事件监听器
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 表单提交处理逻辑
        });
    }
    // 如果元素不存在，不会报错
    
    // 页面特定元素的处理
    const currentPage = window.location.pathname.split('/').pop();
    console.log("当前页面:", currentPage);
    
    // 根据页面执行特定代码
    if (currentPage === 'aboutme.html') {
        console.log("这是在关于我页面");
        // 关于我页面的特定代码
    }
    
    if (currentPage === 'contact.html') {
        console.log("这是在联系页面");
        // 联系页面的特定代码
    }
});