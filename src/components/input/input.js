import Component from "../../abstractClass/component.js";

class inputs extends Component
{

    static AddInputDom(id, type, placeholder,isRequired)
    {

        if (!this.isStyleLoaded)
        {
            this.loadStyle("../src/components/input/input.css");
            this.isStyleLoaded=true;
        }

        const input=document.createElement("input")
        
            input.id=id;
            input.type=type;
            input.placeholder=placeholder;
            input.isRequired=isRequired;

        const formContainer= document.querySelector("#form-container");
        formContainer.append(input);


    }
}

export default inputs;