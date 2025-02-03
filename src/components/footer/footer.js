
import Component from "../../abstractClass/component.js";

class footer extends Component
{
    static AddFooterDom()
    {
        if (this.isStyleLoaded == false)
        {
            this.loadStyle("../src/components/footer/footer.css");
            this.isStyleLoaded=true;
        }

        const footer= document.createElement("footer");
       footer.innerHTML =  `
        <p>Copyright &copy; - ITI Intake 45</p>
    `;
        
    const formElement = document.querySelector("form");
    formElement.insertAdjacentElement("afterend", footer);

    // document.body.append(footer);
    }

}
export default footer;