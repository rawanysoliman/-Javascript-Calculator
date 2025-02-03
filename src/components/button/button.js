import Component from "../../abstractClass/component.js";

class button extends Component
{
    static AddButtonDom(value,type)
    {
        
        if (!this.isStyleLoaded)
            {
                this.loadStyle("../src/components/button/button.css");
                this.isStyleLoaded=true;
            }

            const buttonElemnt=document.createElement("button");
            buttonElemnt.innerHTML=value;
            buttonElemnt.type=type;

            const formContainer= document.querySelector("#form-container");
            formContainer.append(buttonElemnt);
    }
}

export default button;