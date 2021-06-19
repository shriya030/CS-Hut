class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend.");
        this.addMessageToChat(message);
    }; 

    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage( "Fantastic. Here is your quiz. Good luck!",{
                widget: "javascriptQuiz",
            }

        )
        this.addMessageToChat(message)
    }

    addMessageToChat = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}
  
export default ActionProvider;