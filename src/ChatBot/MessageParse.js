class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  

    parse(message) {
      console.log(message);
      const lowerCase = message.toLowerCase()

      if(lowerCase.includes("hello")){
          this.actionProvider.greet();
      }
      if (lowerCase.includes("javascript") || lowerCase.includes("js")) {
        this.actionProvider.handleJavascriptQuiz();
      }
    }
}

export default MessageParser;  