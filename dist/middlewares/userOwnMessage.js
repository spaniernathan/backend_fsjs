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
const userOwnMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const room = models_1.Room.findOne({
        where: {
            uuid: req.params.roomId,
        },
        include: {
            model: models_1.Message,
            as: 'messages',
            where: {
                uuid: req.params.messageUuid,
                ownerUuid: (0, lodash_1.get)(req, 'user.uuid'),
            },
        },
    });
    if (!room)
        return res.sendStatus(http_status_codes_1.StatusCodes.UNAUTHORIZED);
    return next();
});
exports.default = userOwnMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck93bk1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvdXNlck93bk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNkI7QUFFN0IseURBQWdEO0FBQ2hELHlDQUE2QztBQUU3QyxNQUFNLGNBQWMsR0FBRyxDQUNyQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLElBQUksR0FBRyxhQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsZ0JBQU87WUFDZCxFQUFFLEVBQUUsVUFBVTtZQUNkLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXO2dCQUM1QixTQUFTLEVBQUUsSUFBQSxZQUFHLEVBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQzthQUNqQztTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsK0JBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzRCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSxDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDIn0=