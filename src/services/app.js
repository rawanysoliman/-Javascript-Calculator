import { OPERATORS } from "../components/constants/operators.js";
import header from "../components/header/header.js"; 
import footer from "../components/footer/footer.js"; 
import form from "../components/form/form.js"; 
import inputs from "../components/input/input.js";
import select from "../components/select/select.js";
import options from "../components/options/options.js";
import button from  "../components/button/button.js";


class AppService{

    static buildComp()
    {
        header.AddHeaderDom();
        form.AddFormDom();
        inputs.AddInputDom("first-value", "number", "First Value", true);
        select.AddSelectDom();
        
        OPERATORS.forEach(function(value)
    {
        options.AddOptionsDom(value)
    });
 
        inputs.AddInputDom("second-value", "number", "second Value", true);

        button.AddButtonDom("Get Result!", "submit");

        footer.AddFooterDom();

        
    }
}

export default AppService;