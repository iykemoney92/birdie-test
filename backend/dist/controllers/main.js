"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = void 0;
const express_1 = __importDefault(require("express"));
const eventModel = __importStar(require("../models/event"));
const mainController = express_1.default.Router();
exports.mainController = mainController;
mainController.get("/api", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    eventModel.findAll((err, events) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        return res.status(200).json({ data: events });
    });
}));
mainController.get("/api/event_types", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    eventModel.getEventTypes((err, result) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        return res.status(200).json({ data: result });
    });
}));
mainController.get("/api/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    eventModel.findByRecipientId(id, (err, events) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        return res.status(200).json({ data: events });
    });
    mainController.post("/api/:id/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const to = req.body.to;
        const from = req.body.from;
        eventModel.findByRecipientIdAndDate(id, from, to, (err, events) => {
            if (err) {
                return res.status(500).json({ errorMessage: err.message });
            }
            return res.status(200).json({ data: events });
        });
    }));
    mainController.get("/api/:id/events/:event_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const event_id = req.params.event_id;
        eventModel.findEventByRecipientId(id, event_id, (err, events) => {
            if (err) {
                return res.status(500).json({ errorMessage: err.message });
            }
            return res.status(200).json({ data: events });
        });
    }));
    mainController.post("/api/:id/events/:event_id/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const event_id = req.params.event_id;
        const to = req.body.to;
        const from = req.body.from;
        console.log([event_id, to, from, id]);
        eventModel.findEventByRecipientIdAndDate(id, event_id, from, to, (err, events) => {
            if (err) {
                return res.status(500).json({ errorMessage: err.message });
            }
            return res.status(200).json({ data: events });
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQXFEO0FBQ3JELDREQUE4QztBQUU5QyxNQUFNLGNBQWMsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBaUUvQix3Q0FBYztBQS9EdkIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBTyxDQUFVLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDN0QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQVUsRUFBRSxNQUFvQixFQUFFLEVBQUU7UUFDdEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGNBQWMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBTyxDQUFVLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDekUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUNuRCxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENB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RSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFVLEVBQUUsTUFBb0IsRUFBRSxFQUFFO1lBQ3BHLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDNUQ7WUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVgsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0ICogYXMgZXZlbnRNb2RlbCBmcm9tIFwiLi4vbW9kZWxzL2V2ZW50XCI7XHJcbmltcG9ydCB7IEJhc2ljRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZXZlbnRcIjtcclxuY29uc3QgbWFpbkNvbnRyb2xsZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxubWFpbkNvbnRyb2xsZXIuZ2V0KFwiL2FwaVwiLCBhc3luYyAoXzogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGV2ZW50TW9kZWwuZmluZEFsbCgoZXJyOiBFcnJvciwgZXZlbnRzOiBCYXNpY0V2ZW50W10pID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGV2ZW50cyB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5tYWluQ29udHJvbGxlci5nZXQoXCIvYXBpL2V2ZW50X3R5cGVzXCIsIGFzeW5jIChfOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgZXZlbnRNb2RlbC5nZXRFdmVudFR5cGVzKChlcnI6IEVycm9yLCByZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzdWx0IH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbm1haW5Db250cm9sbGVyLmdldChcIi9hcGkvOmlkXCIsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBpZDogc3RyaW5nID0gcmVxLnBhcmFtcy5pZDtcclxuICBldmVudE1vZGVsLmZpbmRCeVJlY2lwaWVudElkKGlkLCAoZXJyOiBFcnJvciwgZXZlbnRzOiBCYXNpY0V2ZW50W10pID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGV2ZW50cyB9KTtcclxuICB9KTtcclxuXHJcbiAgbWFpbkNvbnRyb2xsZXIucG9zdChcIi9hcGkvOmlkL3NlYXJjaFwiLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBpZDogc3RyaW5nID0gcmVxLnBhcmFtcy5pZDtcclxuICAgIGNvbnN0IHRvOiBzdHJpbmcgPSByZXEuYm9keS50bztcclxuICAgIGNvbnN0IGZyb206IHN0cmluZyA9IHJlcS5ib2R5LmZyb207XHJcbiAgICBldmVudE1vZGVsLmZpbmRCeVJlY2lwaWVudElkQW5kRGF0ZShpZCwgIGZyb20sIHRvLCAoZXJyOiBFcnJvciwgZXZlbnRzOiBCYXNpY0V2ZW50W10pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogZXZlbnRzIH0pO1xyXG4gICAgfSk7IH0pO1xyXG5cclxuICBtYWluQ29udHJvbGxlci5nZXQoXCIvYXBpLzppZC9ldmVudHMvOmV2ZW50X2lkXCIsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IGlkOiBzdHJpbmcgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgZXZlbnRfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuZXZlbnRfaWQ7XHJcbiAgICBldmVudE1vZGVsLmZpbmRFdmVudEJ5UmVjaXBpZW50SWQoaWQsIGV2ZW50X2lkLCAoZXJyOiBFcnJvciwgZXZlbnRzOiBCYXNpY0V2ZW50W10pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogZXZlbnRzIH0pO1xyXG4gICAgfSk7IH0pO1xyXG5cclxuICBtYWluQ29udHJvbGxlci5wb3N0KFwiL2FwaS86aWQvZXZlbnRzLzpldmVudF9pZC9zZWFyY2hcIiwgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICBjb25zdCBldmVudF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5ldmVudF9pZDtcclxuICAgIGNvbnN0IHRvOiBzdHJpbmcgPSByZXEuYm9keS50bztcclxuICAgIGNvbnN0IGZyb206IHN0cmluZyA9IHJlcS5ib2R5LmZyb207XHJcbiAgICBjb25zb2xlLmxvZyhbZXZlbnRfaWQsIHRvLCBmcm9tLCBpZF0pO1xyXG4gICAgZXZlbnRNb2RlbC5maW5kRXZlbnRCeVJlY2lwaWVudElkQW5kRGF0ZShpZCwgZXZlbnRfaWQsIGZyb20sIHRvLCAoZXJyOiBFcnJvciwgZXZlbnRzOiBCYXNpY0V2ZW50W10pID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogZXZlbnRzIH0pO1xyXG4gICAgfSk7IH0pO1xyXG5cclxufSk7XHJcblxyXG5leHBvcnQgeyBtYWluQ29udHJvbGxlciB9O1xyXG4iXX0=