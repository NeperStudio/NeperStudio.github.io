// detect when element gets visible on scroll
window.addEventListener("scroll", set_menu_section);

// detect when screen opens for first time
set_menu_section();

function major_on_screen(elem_id) {

    var element = document.getElementById(elem_id);

    var top_of_element = element.offsetTop;
    var bottom_of_element = element.offsetTop + element.offsetHeight + element.style.marginTop;
    var bottom_of_screen = window.scrollY + window.innerHeight;
    var top_of_screen = window.scrollY;

    var mid_of_screen = (top_of_screen + bottom_of_screen) / 2;

    var major_on_screen_bottom = (top_of_screen <= top_of_element) && (top_of_element < mid_of_screen);
    var major_on_screen_top = (bottom_of_element >= mid_of_screen) && (bottom_of_element < bottom_of_screen);

    var major_on_screen = major_on_screen_bottom || major_on_screen_top;

    return major_on_screen;
}

function set_menu_section() {

    const sections = ["home", "about", "work", "services", "contact"];

    for (let i = 0; i < sections.length; i++) {

        if (major_on_screen(sections[i])) {

            for (let j = 0; j < sections.length; j++) {

                if (j != i) {

                    document.getElementById("menu_"+sections[j]).classList.remove("selected");
                }
            }

            document.getElementById("menu_"+sections[i]).classList.add("selected");

            break;
        }
    }    
}
