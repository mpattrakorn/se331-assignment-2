"use strict";
var mocks_1 = require('../mocks');
var StudentDataService = (function () {
    function StudentDataService() {
    }
    StudentDataService.prototype.getStudentsData = function () {
        return mocks_1.STUDENTS;
    };
    return StudentDataService;
}());
exports.StudentDataService = StudentDataService;
//# sourceMappingURL=students-data.service.js.map