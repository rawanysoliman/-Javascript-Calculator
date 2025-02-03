

class Component{
        //this part is shared with header , footer and most components so it will be used as a class to inheret from
        static isStyleLoaded = false;


        // a methode to add style sheet to dom created
        static loadStyle(href)
        {
         const link=document.createElement("link");
         link.rel="stylesheet";
         link.href=href;
         document.head.append(link);  //link added in head
    
        }
}

export default Component;


