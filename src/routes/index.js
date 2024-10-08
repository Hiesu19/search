const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const errorsRouter = require("./errors");
const meRouter = require("./me");
const thpt_2024Router = require("./thpt_2024");

function route(app) {
    app.use("/news", newsRouter);

    app.use("/courses", coursesRouter);

    app.use("/me", meRouter);

    app.use("/thpt_2024", thpt_2024Router);

    app.use("/", siteRouter);

    app.use("/*", errorsRouter);
}
module.exports = route;
