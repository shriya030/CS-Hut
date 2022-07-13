class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }


    parse(message) {

        console.log(message);
        const lowerCase = message.toLowerCase()

        if ( lowerCase.includes !== " ") {
            this.actionProvider.msg();
        }

        if (lowerCase.includes("javascript") || lowerCase.includes("js")) {
            this.actionProvider.greet1();
        }
        if (lowerCase.includes("reactjs") || lowerCase.includes("react")) {
            this.actionProvider.greet2();
        }
        if (lowerCase.includes("angularjs") || lowerCase.includes("angular")) {
            this.actionProvider.greet3();
        };

        if (lowerCase.includes("django")) {
            this.actionProvider.greet4();
        };

        if (lowerCase.includes("nodejs") || lowerCase.includes("node")) {
            this.actionProvider.greet5();
        };

        if (lowerCase.includes("cpp")) {
            this.actionProvider.greet6();
        };

        if (lowerCase.includes("c")) {
            this.actionProvider.greet7();
        };

        if (lowerCase.includes("java")) {
            this.actionProvider.greet8();
        };

        if (lowerCase.includes("python")) {
            this.actionProvider.greet9();
        };

        if (lowerCase.includes("firebase")) {
            this.actionProvider.greet10();
        };

        if (lowerCase.includes("mongodb")) {
            this.actionProvider.greet11();
        };

        if (lowerCase.includes("sql")) {
            this.actionProvider.greet12();
        };

    }
}

export default MessageParser;