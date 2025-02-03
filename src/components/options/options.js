import Component from "../../abstractClass/component.js";

class options extends Component
{
   static AddOptionsDom(value)
   {
    if (!this.isStyleLoaded)
        {
            this.loadStyle("../src/components/options/options.css");
            this.isStyleLoaded=true;
        }

        const optionElement= document.createElement("option");
        optionElement.value=value;
        optionElement.innerHTML = value;

        const select=document.querySelector("select");
        select.append(optionElement);
   }

}

export default options;
