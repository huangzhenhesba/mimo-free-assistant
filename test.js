#!/usr/bin/env node

/**
 * MiMo DevHelper 测试脚本
 */

const MiMoClient = require('./src/utils/mimo-client');
const fs = require('fs');
const path = require('path');

// 加载知识库
const knowledgePath = path.join(__dirname, 'src', 'knowledge', 'mijia-api.md');
const knowledge = fs.readFileSync(knowledgePath, 'utf-8');

// 配置
const API_KEY = process.env.MIMO_API_KEY || 'your-api-key-here';

// 测试用例
const testCases = [
  '设备控制返回 -4001 错误怎么办？',
  '如何批量控制多个设备？',
  '米家 API 的请求频率限制是多少？',
  '如何获取设备列表？',
  '属性不可写错误 -4003 如何解决？'
];

async function runTests() {
  console.log('🧪 MiMo DevHelper 测试\n');
  
  const mimo = new MiMoClient(API_KEY);
  
  for (const [index, question] of testCases.entries()) {
    console.log(`测试 ${index + 1}/${testCases.length}: ${question}`);
    console.log('─'.repeat(50));
    
    try {
      const response = await mimo.ask(question, knowledge);
      
      if (response.choices && response.choices[0]) {
        const answer = response.choices[0].message.content;
        console.log(`✅ 回答: ${answer.substring(0, 200)}...\n`);
      } else {
        console.log('❌ 响应格式异常\n');
      }
    } catch (error) {
      console.log(`❌ 错误: ${error.message}\n`);
    }
    
    // 等待一秒再测试下一个
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('✅ 测试完成！');
}

runTests();
