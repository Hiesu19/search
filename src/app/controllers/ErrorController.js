class ErrorController {
    // GET error page
    show_404(rep, res) {
        res.render("error_404", { title: "Error page" });
    }
}

module.exports = new ErrorController();
