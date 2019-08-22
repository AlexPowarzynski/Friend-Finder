
$("#submitBtn").on("click", function(e){
    e.preventDefault();

    let newFriend = {
        name: $("#name"),
        photo: $("#photoLink"),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val()
        ]
    };

    $.post("/api/friends", newFriend, function (data) {
            $("#name"),
            $("#photoLink"),
            $("#question1").val(""),
            $("#question2").val(""),
            $("#question3").val(""),
            $("#question4").val(""),
            $("#question5").val(""),
            $("#question6").val(""),
            $("#question7").val(""),
            $("#question8").val(""),
            $("#question9").val(""),
            $("#question10").val("")
    })
});