"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.countries = exports.universityModel = exports.UniversityDto = void 0;
var axios_1 = require("axios");
var dotenv_1 = require("dotenv");
var mongoose_1 = require("mongoose");
(0, dotenv_1.config)();
main()["catch"](function (err) { return console.log(err); });
var UniversityDto = /** @class */ (function () {
    function UniversityDto() {
    }
    return UniversityDto;
}());
exports.UniversityDto = UniversityDto;
var UniversitySchema = new mongoose_1["default"].Schema({
    domains: [String],
    alpha_two_code: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    web_pages: [String],
    name: {
        type: String,
        require: true
    },
    'state-province': {
        type: String,
        require: false
    }
});
exports.universityModel = mongoose_1["default"].model('Universities', UniversitySchema);
exports.countries = [
    'Argentina',
    'Brazil',
    'Chile',
    'Colombia',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
];
function create() {
    return __awaiter(this, void 0, void 0, function () {
        var promisesArray;
        return __generator(this, function (_a) {
            promisesArray = exports.countries.map(function (country) {
                return findUniversitiesByCountryName(country);
            });
            return [2 /*return*/, Promise.all(promisesArray)];
        });
    });
}
function findUniversitiesByCountryName(country) {
    return __awaiter(this, void 0, void 0, function () {
        var universities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("http://universities.hipolabs.com/search?country=".concat(country))];
                case 1:
                    universities = _a.sent();
                    return [2 /*return*/, saveUniversities(universities.data)];
            }
        });
    });
}
function saveUniversities(universities) {
    return __awaiter(this, void 0, void 0, function () {
        var promisesArray;
        return __generator(this, function (_a) {
            promisesArray = universities.map(function (e) {
                var newUniversity = {
                    domains: e['domains'],
                    alpha_two_code: e['alpha_two_code'],
                    country: e['country'],
                    name: e['name'],
                    web_pages: e['web_pages'],
                    'state-province': e['state-province']
                };
                var university = new exports.universityModel(newUniversity);
                return university.save();
            });
            return [2 /*return*/, Promise.all(promisesArray)];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose_1["default"].connect(process.env.MONGO_URI)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, create()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
