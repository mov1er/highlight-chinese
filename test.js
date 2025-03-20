// src/test.js

// 这是一个测试文件
const message = "你好，世界！";  // 这里有汉字

/* 多行注释
   不应被高亮
*/
function greet() {
  console.log("早上好！");
  console.log("Hello World!");  // 英文不会高亮
}

// HTML注释示例
const htmlContent = `
  <!-- 这里有中文，不应高亮 -->
  <div>欢迎访问网站！</div>
`;

greet();
