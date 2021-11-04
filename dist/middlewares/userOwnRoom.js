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
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("../db/models");
const userOwnRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const room = yield models_1.Room.findOne({
        where: {
            uuid: req.params.roomId,
            ownerUuid: (0, lodash_1.get)(req, 'user.uuid'),
        },
    });
    if (!room)
        return res.sendStatus(http_status_codes_1.StatusCodes.UNAUTHORIZED);
    return next();
});
exports.default = userOwnRoom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck93blJvb20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvdXNlck93blJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNkI7QUFFN0IseURBQWdEO0FBQ2hELHlDQUFvQztBQUVwQyxNQUFNLFdBQVcsR0FBRyxDQUNsQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGFBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUIsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUN2QixTQUFTLEVBQUUsSUFBQSxZQUFHLEVBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztTQUNqQztLQUNGLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUEsQ0FBQztBQUVGLGtCQUFlLFdBQVcsQ0FBQyJ9