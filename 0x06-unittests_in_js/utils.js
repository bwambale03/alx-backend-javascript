const calculateNumber = require("./0-calcul");

const Utils = {
    calculateNumber(type, a,b){
        if (type === 'SUM'){
        return Math.round(a) + Math.round(b);
        }
        if (type === 'SUBTRACT'){
            return Math.round(a) - Math.round(b);
        }
        if (type === 'DIVIDE'){
            return Math.round(b) === 0 ? 'Error': Math.round(a) / Math.round(b);
        }
        return 0;
    },
};
moodule.exports = Utils;
