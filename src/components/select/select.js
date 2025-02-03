import Component from "../../abstractClass/component.js";


class select extends Component
{
    static AddSelectDom()
    {

        if (!this.isStyleLoaded)
        {
            this.loadStyle("../src/components/select/select.css");
            this.isStyleLoaded=true;
        }

        const select=document.createElement("select")
    
        const formContainer= document.querySelector("#form-container");
        formContainer.append(select);


    }
}

export default select;