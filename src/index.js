#!/usr/bin/env node

/**
 * MiMo DevHelper - 小米开发者智能助手
 * 基于 MiMo-V2.5 的米家 API 问题解答工具
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const MiMoClient = require('./utils/mimo-client');

// 加载知识库
const knowledge1 = fs.readFileSync(path.join(__dirname, 'knowledge', 'mijia-api.md'), 'utf-8');
const knowledge2 = fs.readFileSync(path.join(__dirname, 'knowledge', 'mimo-platform.md'), 'utf-8');
const knowledge = knowledge1 + '\n\n---\n\n' + knowledge2;

// 配置
const API_KEY = process.env.MIMO_API_KEY || 'your-api-key-here';

// 初始化 MiMo 客户端
const mimo = new MiMoClient(API_KEY);

// 交互式命令行
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 显示欢迎信息
function showWelcome() {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🦞 MiMo DevHelper - 小米开发者智能助手                  ║
║                                                          ║
║   基于 MiMo-V2.5 的米家 API 问题解答工具                  ║
║                                                          ║
║   输入问题开始咨询，输入 'quit' 退出                       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
  `);
}

// 主循环
async function main() {
  showWelcome();

  const askQuestion = () => {
    rl.question('🧑 你: ', async (input) => {
      const trimmed = input.trim();
      
      if (trimmed.toLowerCase() === 'quit' || trimmed.toLowerCase() === 'exit') {
        console.log('\n👋 再见！祝开发顺利！\n');
        rl.close();
        process.exit(0);
      }

      if (!trimmed) {
        askQuestion();
        return;
      }

      console.log('\n🦞 MiMo 思考中...\n');

      try {
        const response = await mimo.ask(trimmed, knowledge);
        
        if (response.choices && response.choices[0]) {
          const answer = response.choices[0].message.content;
          console.log(`\n🦞 MiMo: ${answer}\n`);
          console.log('─'.repeat(50));
        } else {
          console.log('❌ 响应格式异常，请稍后重试');
        }
      } catch (error) {
        console.error(`❌ 错误: ${error.message}`);
        console.log('提示: 请检查 MIMO_API_KEY 是否正确配置');
      }

      askQuestion();
    });
  };

  askQuestion();
}

// 启动
main();
