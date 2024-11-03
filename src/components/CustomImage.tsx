const CustomImage = (name: string) => {
    switch (name.toUpperCase()) {
        case "BACKGROUND": return require("../static/images/background.jpg");
        case "NCS": return require("../static/images/NCS.png");
        case "NUS-ISS": return require("../static/images/NUS-ISS.png");
        case "UOW": return require("../static/images/UOW.png");
        case "SIM": return require("../static/images/SIM.png");
        case "GOOGLE": return require("../static/images/Google.png");
        case "SHOPEE": return require("../static/images/Shopee.png");
        case "SCRUM": return require("../static/images/Scrum.png");
        case "COURSERA": return require("../static/images/Coursera.png");
        case "JAVA": return require("../static/images/Java.png");
        case "PYTHON": return require ("../static/images/Python.webp");
        case "CPP": return require("../static/images/CPP.png");
        case "R": return require("../static/images/R.png");
        case "SQL": return require("../static/images/SQL.png");
        case "HTML": return require("../static/images/HTML.png");
        case "CSS": return require("../static/images/CSS.png");
        case "JAVASCRIPT": return require("../static/images/JavaScript.png");
        case "JQUERY": return require("../static/images/jQuery.png");
        case "REACT": return require("../static/images/React.png");
        case "MYSQL": return require("../static/images/MySQL.png");
        case "ORACLE DB": return require("../static/images/Oracle DB.png");
        case "JUPYTER NOTEBOOK": return require("../static/images/Jupyter Notebook.png");
        case "AEM": return require("../static/images/AEM.png");
        case "PAD": return require("../static/images/PAD.png");
        case "MS PROJECT": return require("../static/images/MS Project.png");
        case "WORD": return require("../static/images/Word.png");
        case "EXCEL": return require("../static/images/Excel.png");
        case "POWERPOINT": return require("../static/images/PowerPoint.png");
    }

    return null
}

export default CustomImage