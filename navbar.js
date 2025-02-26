function toggleNavigationBar()
{
    let iconToggledOn = "close";
    let iconToggledOff = "arrow_back_ios_new";

    // can i just sleep?
    var elements = document.getElementsByClassName("navigation-link");

    if (document.getElementById("toggle-button").innerHTML == iconToggledOn)
    {
        document.getElementById("all-navigation-links").setAttribute("style", "grid-template-columns: auto;");

        document.getElementById("toggle-button").innerHTML = iconToggledOff;

        for (var i = 0; i < elements.length; i++)
        {
            elements[i].setAttribute("style", "display: none;");
        }
        // not really my code, but still proud that it works
    }
    else
    {
        document.getElementById("all-navigation-links").setAttribute("style", "grid-template-columns: auto auto auto auto auto;"); // good luck scaling this to more links

        document.getElementById("toggle-button").innerHTML = iconToggledOn;

        for (var i = 0; i < elements.length; i++)
        {
            elements[i].setAttribute("style", "display: static;");
        }
    }
    

}