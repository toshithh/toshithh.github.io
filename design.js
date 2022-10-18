var def_time = 1300;
function replaceClass(id, oldClass, newClass) {
    var elem = $(`#${id}`);
    if (elem.hasClass(oldClass)) {
        elem.removeClass(oldClass);
    }
    elem.addClass(newClass);
}

function load_disp(id, w){
    idh = "#"+id;
    document.getElementById(id).style.width = "0%";
    $(idh).animate({width: w}, 1100);
}

function rightOut(id){
    idh = "#"+id;
    $(idh).animate({right: "-50%"}, def_time);
    function disp(){
        document.getElementById(id).style.display = "none";
    }
    setTimeout(disp, def_time);
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
    rightOut("social");
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
        document.getElementById("social").style.right = '10%';
        $("#social").fadeIn(def_time);
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
    //
    $("#webdev").click(function(){
        if($("#webdiv").css('display')=='none'){ 
            load_disp("wd-py", "100%");
            load_disp("wd-php", "80%");
            load_disp("wd-html", "90%");
            load_disp("wd-css", "96%");
            load_disp("wd-js","90%");
            load_disp("wd-jq","98%");
            load_disp("wd-ajax","70%");
            load_disp("wd-sql", "95%");
        }
        $("#webdiv").slideToggle(500);
    })
    $("#OS").click(function(){
        if($("#OS-div").css('display')=='none'){
            load_disp("os-py", "90%");
            load_disp("os-bash", "70%");
        }
        $("#OS-div").slideToggle(500);
    })
    $("#ML").click(function(){
        if($("#ML-div").css('display')=='none'){
            load_disp("ml-py", "100%");
            load_disp("ml-cv", "80%");
        }
        $("#ML-div").slideToggle(500);
    })
    $("#DS").click(function(){
        if($("#DS-div").css('display')=='none'){
            load_disp("ds-pandas", "100%");
            load_disp("ds-numpy", "100%");
            load_disp("ds-sql", "95%");
        }
        $("#DS-div").slideToggle(500);
    })
    $("#others").click(function(){
        if($("#others-div").css('display')=='none'){
            load_disp("ot-kotlin", "90%");
            load_disp("ot-c", "60%");
        }
        $("#others-div").slideToggle(500);
    })
})