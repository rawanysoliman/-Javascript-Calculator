
import AppService from "../services/app.js";

class App{
    static #isRunning=false;
    
    constructor()
    {
        throw new error("initialize singleton class");
        
    }

    static run()
    {
        if (this.#isRunning==true)
        {
            console.error("Application is already running");  // constructor is private (by throwing an error if called directly).
        }
        else{
            this.#isRunning=true;
            AppService.buildComp();
        }
    }
}

App.run();

