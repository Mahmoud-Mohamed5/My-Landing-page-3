$("document").ready(function(){
    //======= START NAV
    $("#toggel_parent").click(function(){
        let x =  $("#toggel").attr("class")
        if (x == "show") {
            $("#toggel").attr("class", "hide")
            $(".nav ul").attr("class", "active")
        }
        if (x == "hide") {
            $("#toggel").attr("class", "show")
            $(".nav ul").attr("class", "")
        }
    })
    //======= END NAV
})