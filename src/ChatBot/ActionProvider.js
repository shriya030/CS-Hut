class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello friend.");
        this.addMessageToChat(message);
    }; 


    greet1 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://devdocs.io/javascript/");
        this.addMessageToChat(message);
    };

    greet2= () => {
        const message = this.createChatBotMessage("copy this link and start learning https://reactjs.org/");
        this.addMessageToChat(message);
    };

    greet3= () => {
        const message = this.createChatBotMessage("copy this link and start learning https://angular.io/docs");
        this.addMessageToChat(message);
    };

    greet4 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://docs.djangoproject.com/en/3.2/");
        this.addMessageToChat(message);
    };

    greet5 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://nodejs.org/en/docs/");
        this.addMessageToChat(message);
    };

    greet6 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://devdocs.io/cpp/");
        this.addMessageToChat(message);
    };

    greet7 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://devdocs.io/c/");
        this.addMessageToChat(message);
    };

    greet8 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://docs.oracle.com/javase/tutorial/");
        this.addMessageToChat(message);
    };

    greet9 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://www.python.org/doc/");
        this.addMessageToChat(message);
    };

    greet10 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://www.javatpoint.com/firebase");
        this.addMessageToChat(message);
    };

    greet11 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://docs.mongodb.com/");
        this.addMessageToChat(message);
    };

    greet12 = () => {
        const message = this.createChatBotMessage("copy this link and start learning https://dev.mysql.com/doc/");
        this.addMessageToChat(message);
    };


    addMessageToChat = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
}
  
export default ActionProvider;