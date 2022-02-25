// Global variables
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let pageLastModified = new Date(document.lastModified);

// insert the current year to the document
document.getElementById("yearJS").textContent = currentYear;
// insert the document last modifed date
try {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    document.getElementById("lastUpdated").textContent = pageLastModified.toLocaleDateString("en-US", options);
} catch (error) {
    alert("The browser does not support Date locale");
}
