const getSaveVersion = function (func) {
    return (condition, message) => {
        if (condition) {
            return func(message)
        }
    }
}

const saveLog = getSaveVersion(console.log);

saveLog(true, 'hahaha');
