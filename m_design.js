var def_time = 1300;
function replaceClass(id, oldClass, newClass) {
    var elem = $(`#${id}`);
    if (elem.hasClass(oldClass)) {
        elem.removeClass(oldClass);
    }
    elem.addClass(newClass);
}

function rightOut(id){
    idh = "#"+id;
    $(idh).animate({right: "-100%"}, def_time*2);
    function disp(){
        document.getElementById(id).style.display = "none";
    }
    setTimeout(disp, def_time*2);
}

function leftOut(id){
    idh = "#"+id;
    $(idh).animate({left: "-50%"}, def_time);
    function disp(){
        document.getElementById(id).style.display = "none";
    }
    setTimeout(disp, def_time);
}

function an2abt(){
    document.getElementById("about-info").style.left = "5%";
    leftOut("title");
    $("#project-info").fadeOut(def_time);
    $("#contact-info").animate({top: "94%"}, def_time)
    function fadein_abt(){
        document.getElementById("about-info").style.right = '5%';
        document.getElementById("title").style.left = '10%';
        $("#title").fadeIn(def_time);
        $("#about-info").slideDown(def_time);
    }
    setTimeout(fadein_abt, 500);
}

function an2project(){
    leftOut("title");
    rightOut("social");
    rightOut("about-info");
    $("#contact-info").animate({top: "94%"}, def_time)
    function fadein(){
        $("#project-info").fadeIn(def_time);
    }
    setTimeout(fadein, 300);
}

function an2home(){
    rightOut("about-info");
    $("#project-info").fadeOut(def_time);
    $("#contact-info").animate({top: "94%"}, def_time)
    function fadein(){
        document.getElementById("title").style.left = '10%';
        $("#title").fadeIn(def_time);
    }
    setTimeout(fadein, 300);
}

function an2contact(){
    $("#project-info").fadeOut(def_time);
    leftOut("title");
    rightOut("social");
    rightOut("about-info");
    function fadein(){
        document.getElementById("contact-info").style.display = "block";
        document.getElementById("contact-info").style.top = '94%';
        $("#contact-info").animate({top: "37.5%"}, def_time)
    }
    setTimeout(fadein, 300);
}

$(document).ready(function(){
    $("#about").click(function(){
        replaceClass("home", "current", "top-button");
        replaceClass("project", "current", "top-button");
        replaceClass("contact", "current", "top-button");
        replaceClass("about", "top-button", "current");
        an2abt();
//        leftOut("title");
    });
    $("#home").click(function(){
        replaceClass("about", "current", "top-button");
        replaceClass("project", "current", "top-button");
        replaceClass("contact", "current", "top-button");
        replaceClass("home", "top-button", "current");
        an2home();
    });
    $("#project").click(function(){
        replaceClass("about", "current", "top-button");
        replaceClass("home", "current", "top-button");
        replaceClass("contact", "current", "top-button");
        replaceClass("project", "top-button", "current");
        an2project();
    })
    $("#contact").click(function(){
        replaceClass("about", "current", "top-button");
        replaceClass("home", "current", "top-button");
        replaceClass("project", "current", "top-button");
        replaceClass("contact", "top-button", "current");
        an2contact();
    })
})
