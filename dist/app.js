"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const config_1 = __importDefault(require("./config"));
const associations_1 = __importDefault(require("./db/associations"));
const logger_1 = __importDefault(require("./logger"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = require("./middlewares");
const sockets_1 = __importDefault(require("./sockets"));
const port = config_1.default.port;
const host = config_1.default.host;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(middlewares_1.deserializeUser);
const httpServer = http_1.default.createServer(app);
const webSocketServer = new socket_io_1.Server(httpServer); /* , {
  cors: {
    origin: `http://${host}:${port}`,
    methods: ['GET', 'POST'],
  },
}); */
(0, associations_1.default)();
(0, sockets_1.default)(webSocketServer);
httpServer.listen(port, () => {
    logger_1.default.info(`Server running on http://${host}:${port}`);
    (0, routes_1.default)(app);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5QixnREFBd0I7QUFDeEIsZ0RBQXdCO0FBQ3hCLHlDQUFtQztBQUNuQyxzREFBOEI7QUFDOUIscUVBQW1EO0FBQ25ELHNEQUE4QjtBQUM5QixzREFBOEI7QUFDOUIsK0NBQWdEO0FBQ2hELHdEQUFnQztBQUVoQyxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLElBQWMsQ0FBQztBQUNuQyxNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLElBQWMsQ0FBQztBQUVuQyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVqRCxHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUFlLENBQUMsQ0FBQztBQUV6QixNQUFNLFVBQVUsR0FBRyxjQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sZUFBZSxHQUFHLElBQUksa0JBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBOzs7OztNQUt6QztBQUVOLElBQUEsc0JBQWtCLEdBQUUsQ0FBQztBQUVyQixJQUFBLGlCQUFPLEVBQUMsZUFBZSxDQUFDLENBQUM7QUFFekIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzNCLGdCQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4RCxJQUFBLGdCQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQyJ9