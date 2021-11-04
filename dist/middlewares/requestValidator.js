"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const logger_1 = __importDefault(require("../logger"));
const validate = (settings) => {
    let errors = [];
    return (req, res, next) => {
        var _a, _b, _c, _d, _e;
        const bodyResult = (_a = settings === null || settings === void 0 ? void 0 : settings.body) === null || _a === void 0 ? void 0 : _a.validate(settings.body, Object.assign({ allowUnknown: false }, settings.options));
        if (bodyResult === null || bodyResult === void 0 ? void 0 : bodyResult.error) {
            errors = errors.concat(bodyResult.error.details);
        }
        const headersResult = (_b = settings === null || settings === void 0 ? void 0 : settings.headers) === null || _b === void 0 ? void 0 : _b.validate(settings.headers, Object.assign({ allowUnknown: false }, settings.options));
        if (headersResult === null || headersResult === void 0 ? void 0 : headersResult.error) {
            errors = errors.concat(headersResult.error.details);
        }
        const paramsResult = (_c = settings === null || settings === void 0 ? void 0 : settings.params) === null || _c === void 0 ? void 0 : _c.validate(settings.params, Object.assign({ allowUnknown: false }, settings.options));
        if (paramsResult === null || paramsResult === void 0 ? void 0 : paramsResult.error) {
            errors = errors.concat(paramsResult.error.details);
        }
        const queryResult = (_d = settings === null || settings === void 0 ? void 0 : settings.query) === null || _d === void 0 ? void 0 : _d.validate(settings.query, Object.assign({ allowUnknown: false }, settings.options));
        if (queryResult === null || queryResult === void 0 ? void 0 : queryResult.error) {
            errors = errors.concat(queryResult.error.details);
        }
        const cookiesResult = (_e = settings === null || settings === void 0 ? void 0 : settings.cookies) === null || _e === void 0 ? void 0 : _e.validate(settings.cookies, Object.assign({ allowUnknown: false }, settings.options));
        if (cookiesResult === null || cookiesResult === void 0 ? void 0 : cookiesResult.error) {
            errors = errors.concat(cookiesResult.error.details);
        }
        if (errors.length) {
            logger_1.default.info({
                errors,
                isJoi: true,
            });
            return next({
                isJoi: true,
                errors,
            });
        }
        return next();
    };
};
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdFZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9yZXF1ZXN0VmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHVEQUErQjtBQVd4QixNQUFNLFFBQVEsR0FBRyxDQUFDLFFBQXFCLEVBQUUsRUFBRTtJQUNoRCxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFDckIsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFOztRQUN6RCxNQUFNLFVBQVUsR0FBRyxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLDBDQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFDdkQsWUFBWSxFQUFFLEtBQUssSUFDaEIsUUFBUSxDQUFDLE9BQU8sRUFDbkIsQ0FBQztRQUNILElBQUksVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLEtBQUssRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsT0FBTywwQ0FBRSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sa0JBQ2hFLFlBQVksRUFBRSxLQUFLLElBQ2hCLFFBQVEsQ0FBQyxPQUFPLEVBQ25CLENBQUM7UUFDSCxJQUFJLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyRDtRQUVELE1BQU0sWUFBWSxHQUFHLE1BQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sMENBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLGtCQUM3RCxZQUFZLEVBQUUsS0FBSyxJQUNoQixRQUFRLENBQUMsT0FBTyxFQUNuQixDQUFDO1FBQ0gsSUFBSSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsS0FBSyxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxNQUFNLFdBQVcsR0FBRyxNQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLDBDQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxrQkFDMUQsWUFBWSxFQUFFLEtBQUssSUFDaEIsUUFBUSxDQUFDLE9BQU8sRUFDbkIsQ0FBQztRQUNILElBQUksV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEtBQUssRUFBRTtZQUN0QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsT0FBTywwQ0FBRSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sa0JBQ2hFLFlBQVksRUFBRSxLQUFLLElBQ2hCLFFBQVEsQ0FBQyxPQUFPLEVBQ25CLENBQUM7UUFDSCxJQUFJLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixnQkFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixNQUFNO2dCQUNOLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsT0FBTyxJQUFJLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUF4RFcsUUFBQSxRQUFRLFlBd0RuQiJ9