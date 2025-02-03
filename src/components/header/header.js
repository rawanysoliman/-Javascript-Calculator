
import Component from "../../abstractClass/component.js";

class header extends Component
{
    static AddHeaderDom()
    {
        if (!this.isStyleLoaded)
        {
            this.loadStyle("../src/components/header/header.css");
            this.isStyleLoaded=true;
        }

        const header= document.createElement("header");
        header.innerHTML = `
            <nav>
                <h1>Calculator</h1>
            </nav>
        `;
        
        document.body.prepend(header);

  
    }

}
export default header;