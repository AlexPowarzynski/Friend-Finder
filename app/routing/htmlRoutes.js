

app.get("/survey", function(){

});
app.get("*", function(req, res){
    res.redirect("/");
});