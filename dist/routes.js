"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const middlewares_1 = require("./middlewares");
const schemas_1 = require("./schemas");
const controllers_1 = require("./controllers");
exports.default = (app) => {
    app.get('/api/healthcheck', (req, res) => res.sendStatus(http_status_codes_1.StatusCodes.OK));
    // Session
    app.get('/api/sessions', [], controllers_1.getUserSessionsHandler);
    app.post('/api/sessions', [(0, middlewares_1.validate)(schemas_1.postSessionSchema)], controllers_1.createUserSessionHandler);
    app.delete('/api/sessions/:sessionId', [(0, middlewares_1.validate)(schemas_1.deleteSessionSchema)], controllers_1.invalidateUserSessionHandler);
    // Users
    app.get('/api/users', [(0, middlewares_1.validate)(schemas_1.getUserSchema)], controllers_1.getUserHandler);
    app.post('/api/users', [(0, middlewares_1.validate)(schemas_1.postUserSchema)], controllers_1.postUserHandler);
    // Rooms
    app.get('/api/rooms', [], controllers_1.getRoomsHandler);
    app.post('/api/rooms', [(0, middlewares_1.validate)(schemas_1.postRoomSchema)], controllers_1.createRoomHandler);
    app.post('/api/rooms/:roomId', [(0, middlewares_1.validate)(schemas_1.joinRoomSchema)], controllers_1.joinRoomHandler);
    app.delete('/api/rooms/:roomId', [(0, middlewares_1.validate)(schemas_1.deleteRoomSchema), middlewares_1.userOwnRoom], controllers_1.deleteRoomHandler);
    // Messages
    app.get('/api/rooms/:roomId/messages', [(0, middlewares_1.validate)(schemas_1.getRoomMessageSchema), middlewares_1.userIsInRoom], controllers_1.getRoomMessagesHandler); // BONUS
    app.delete('/api/rooms/:roomId/messages/:messageId', [(0, middlewares_1.validate)(schemas_1.deleteRoomMessageSchema), middlewares_1.userOwnMessage], controllers_1.deleteRoomMessageHandler); // BONUS
    app.all('/*', (req, res) => res.sendStatus(404));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFnRDtBQUNoRCwrQ0FFdUI7QUFFdkIsdUNBSW1CO0FBQ25CLCtDQUl1QjtBQUV2QixrQkFBZSxDQUFDLEdBQVksRUFBRSxFQUFFO0lBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLCtCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3RixVQUFVO0lBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLG9DQUFzQixDQUFDLENBQUM7SUFDckQsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEVBQUMsMkJBQWlCLENBQUMsQ0FBQyxFQUFFLHNDQUF3QixDQUFDLENBQUM7SUFDbkYsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxDQUFDLElBQUEsc0JBQVEsRUFBQyw2QkFBbUIsQ0FBQyxDQUFDLEVBQUUsMENBQTRCLENBQUMsQ0FBQztJQUV0RyxRQUFRO0lBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEVBQUMsdUJBQWEsQ0FBQyxDQUFDLEVBQUUsNEJBQWMsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBQSxzQkFBUSxFQUFDLHdCQUFjLENBQUMsQ0FBQyxFQUFFLDZCQUFlLENBQUMsQ0FBQztJQUVwRSxRQUFRO0lBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLDZCQUFlLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUEsc0JBQVEsRUFBQyx3QkFBYyxDQUFDLENBQUMsRUFBRSwrQkFBaUIsQ0FBQyxDQUFDO0lBQ3RFLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEVBQUMsd0JBQWMsQ0FBQyxDQUFDLEVBQUUsNkJBQWUsQ0FBQyxDQUFDO0lBQzVFLEdBQUcsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFBLHNCQUFRLEVBQUMsMEJBQWdCLENBQUMsRUFBRSx5QkFBVyxDQUFDLEVBQUUsK0JBQWlCLENBQUMsQ0FBQztJQUUvRixXQUFXO0lBQ1gsR0FBRyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLElBQUEsc0JBQVEsRUFBQyw4QkFBb0IsQ0FBQyxFQUFFLDBCQUFZLENBQUMsRUFBRSxvQ0FBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUTtJQUN4SCxHQUFHLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxFQUFFLENBQUMsSUFBQSxzQkFBUSxFQUFDLGlDQUF1QixDQUFDLEVBQUUsNEJBQWMsQ0FBQyxFQUFFLHNDQUF3QixDQUFDLENBQUMsQ0FBQyxRQUFRO0lBRTdJLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQyJ9