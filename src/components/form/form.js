import Component from "../../abstractClass/component.js";
import AlertService from "../../services/alert.js";
import calculatorLogic from "../../services/calculate.js";

class form extends Component
{
    static AddFormDom()
    {
        if (this.isStyleLoaded == false)
            {
                this.loadStyle("../src/components/form/form.css");
                this.isStyleLoaded=true;
            }
    const formElement = document.createElement("form");
    formElement.innerHTML=`
            <div id="form-container">
                <h1>Form</h1>
            </div>
        `;


        formElement.onsubmit = this.submit;

        const headerElement = document.querySelector("header");
        headerElement.insertAdjacentElement("afterend", formElement);
    }
 

    static submit(event) 
    {
        event.preventDefault();

        const firstValue = parseInt(document.querySelector("#first-value").value);
        const secondValue = parseInt(document.querySelector("#second-value").value);
        const operator = document.querySelector("select").value;

        const result = calculatorLogic.calculate(firstValue, secondValue, operator);

        AlertService.popup(`${firstValue} ${operator} ${secondValue} = ${result}`);
    }
}

export default form;