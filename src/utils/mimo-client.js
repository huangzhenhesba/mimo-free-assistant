/**
 * MiMo API 客户端
 * 用于调用小米 MiMo 大模型 API
 */

const https = require('https');

class MiMoClient {
  constructor(apiKey, baseUrl = 'https://api.xiaomimimo.com/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * 调用 Chat Completion API
   */
  async chat(messages, options = {}) {
    const {
      model = 'mimo-v2.5',
      temperature = 0.7,
      max_tokens = 2048,
      stream = false
    } = options;

    const requestBody = JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens,
      stream
    });

    return new Promise((resolve, reject) => {
      const url = new URL('/chat/completions', this.baseUrl);
      
      const req = https.request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`解析响应失败: ${e.message}`));
          }
        });
      });

      req.on('error', reject);
      req.write(requestBody);
      req.end();
    });
  }

  /**
   * 问答接口
   */
  async ask(question, context = '') {
    const systemPrompt = `你是一个小米米家 IoT 开发专家助手。你的职责是帮助开发者解决米家 API 相关问题。

${context ? `以下是米家 API 相关知识：\n${context}` : ''}

请用简洁、专业的语言回答问题。如果涉及代码，请提供完整的示例。`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: question }
    ];

    return this.chat(messages);
  }
}

module.exports = MiMoClient;
