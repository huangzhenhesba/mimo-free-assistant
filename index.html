<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MIMO 限时免费 - 小米开发者智能助手</title>
    <link rel="icon" type="image/x-icon" href="https://www.mi.com/favicon.ico">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css">
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/languages/javascript.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/languages/python.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/languages/java.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/languages/css.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/languages/html.min.js"></script>
    <style>
        :root {
            --mi-primary: #FF6700;
            --mi-primary-dark: #E55C00;
            --mi-primary-light: #FF8A33;
            --mi-primary-ultralight: #FFF3E6;
            --mi-gray-50: #F9F9F9;
            --mi-gray-100: #F2F2F2;
            --mi-gray-200: #E5E5E5;
            --mi-gray-300: #D9D9D9;
            --mi-gray-400: #BFBFBF;
            --mi-gray-500: #8C8C8C;
            --mi-gray-600: #595959;
            --mi-gray-700: #333333;
            --mi-gray-800: #1A1A1A;
            --mi-white: #FFFFFF;
            --mi-black: #000000;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: var(--mi-gray-50);
            color: var(--mi-gray-800);
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--mi-gray-200);
        }
        .chat-container {
            background-color: var(--mi-white);
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            overflow: hidden;
            margin-bottom: 1rem;
        }
        .chat-messages {
            height: 500px;
            overflow-y: auto;
            padding: 1.5rem;
        }
        .message {
            margin-bottom: 1rem;
            max-width: 80%;
            padding: 0.8rem 1.2rem;
            border-radius: 18px;
            line-height: 1.5;
        }
        .user-message {
            background-color: var(--mi-primary);
            color: var(--mi-white);
            margin-left: auto;
            border-bottom-right-radius: 4px;
        }
        .assistant-message {
            background-color: var(--mi-gray-100);
            color: var(--mi-gray-800);
            margin-right: auto;
            border-bottom-left-radius: 4px;
        }
        .input-container {
            display: flex;
            padding: 1rem;
            border-top: 1px solid var(--mi-gray-200);
            background-color: var(--mi-white);
        }
        .api-key-input {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid var(--mi-gray-200);
            border-radius: 8px;
            margin-bottom: 1rem;
            font-size: 14px;
        }
        .api-key-input:focus {
            outline: none;
            border-color: var(--mi-primary);
            box-shadow: 0 0 0 2px var(--mi-primary-ultralight);
        }
        .message-input {
            flex: 1;
            padding: 0.8rem 1rem;
            border: 1px solid var(--mi-gray-200);
            border-radius: 24px;
            font-size: 16px;
            resize: none;
            height: 48px;
        }
        .message-input:focus {
            outline: none;
            border-color: var(--mi-primary);
            box-shadow: 0 0 0 2px var(--mi-primary-ultralight);
        }
        .send-button {
            margin-left: 0.8rem;
            padding: 0 1.5rem;
            background-color: var(--mi-primary);
            color: var(--mi-white);
            border: none;
            border-radius: 24px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: background-color 0.2s;
        }
        .send-button:hover {
            background-color: var(--mi-primary-dark);
        }
        .send-button:disabled {
            background-color: var(--mi-gray-300);
            cursor: not-allowed;
        }
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid var(--mi-gray-200);
            border-radius: 50%;
            border-top-color: var(--mi-primary);
            animation: spin 1s infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        pre {
            background-color: var(--mi-gray-800);
            color: var(--mi-white);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 0.5rem 0;
        }
        code {
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 14px;
        }
        .footer {
            text-align: center;
            margin-top: 2rem;
            color: var(--mi-gray-500);
            font-size: 14px;
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--mi-gray-100);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--mi-gray-300);
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="text-4xl font-bold mb-2" style="color: var(--mi-primary);">MIMO 限时免费 - 小米开发者智能助手</h1>
            <p class="text-lg mb-6" style="color: var(--mi-gray-600);">让每个人都能享受科技的乐趣</p>
            <p class="text-gray-600">基于小米MiMo-V2.5-Pro模型打造的免费开发者工具，支持代码生成、Bug修复、文档编写和技术问答</p>
        </div>
        <input type="text" class="api-key-input" id="apiKey" placeholder="请输入你的MiMo API Key">
        <div class="chat-container">
            <div class="chat-messages" id="chatMessages"></div>
            <div class="input-container">
                <textarea class="message-input" id="messageInput" placeholder="输入你的编程问题..."></textarea>
                <button class="send-button" id="sendButton">发送</button>
            </div>
        </div>
        <div class="footer">
            <p>© 2026 小米开发者社区 | Powered by MiMo API</p>
        </div>
    </div>
    <script>
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const apiKeyInput = document.getElementById('apiKey');
        let conversationHistory = [];

        function addMessage(content, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
            if (!isUser) {
                messageDiv.innerHTML = marked.parse(content);
                messageDiv.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightElement(block);
                });
            } else {
                messageDiv.textContent = content;
            }
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addLoadingMessage() {
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'message assistant-message';
            loadingDiv.id = 'loadingMessage';
            loadingDiv.innerHTML = '<div class="loading"></div>';
            chatMessages.appendChild(loadingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeLoadingMessage() {
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.remove();
            }
        }

        async function sendMessage() {
            const message = messageInput.value.trim();
            const apiKey = apiKeyInput.value.trim();
            if (!message || !apiKey) return;

            addMessage(message, true);
            messageInput.value = '';
            sendButton.disabled = true;
            addLoadingMessage();

            conversationHistory.push({
                role: 'user',
                content: message
            });

            try {
                const response = await fetch('https://api.mimollm.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'mimo-v2.5-pro',
                        messages: conversationHistory,
                        stream: true
                    })
                });

                if (!response.ok) {
                    throw new Error('API请求失败');
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let assistantContent = '';
                removeLoadingMessage();
                const assistantMessageDiv = document.createElement('div');
                assistantMessageDiv.className = 'message assistant-message';
                chatMessages.appendChild(assistantMessageDiv);

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    const lines = chunk.split('\n').filter(line => line.trim() !== '');

                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.slice(6);
                            if (data === '[DONE]') continue;

                            try {
                                const parsed = JSON.parse(data);
                                if (parsed.choices && parsed.choices[0].delta.content) {
                                    assistantContent += parsed.choices[0].delta.content;
                                    assistantMessageDiv.innerHTML = marked.parse(assistantContent);
                                    assistantMessageDiv.querySelectorAll('pre code').forEach(block => {
                                        hljs.highlightElement(block);
                                    });
                                    chatMessages.scrollTop = chatMessages.scrollHeight;
                                }
                            } catch (e) {
                                console.error('解析失败:', e);
                            }
                        }
                    }
                }

                conversationHistory.push({
                    role: 'assistant',
                    content: assistantContent
                });

            } catch (error) {
                removeLoadingMessage();
                addMessage('抱歉，发生了错误，请检查你的API Key是否正确。', false);
            } finally {
                sendButton.disabled = false;
            }
        }

        sendButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    </script>
</body>
</html>
