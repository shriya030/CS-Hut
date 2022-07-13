import { createChatBotMessage } from "react-chatbot-kit";


const config = {
  initialMessages: [createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
  })],
}

export default config
