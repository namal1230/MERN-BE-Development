import client from "prom-client";
import { Request, Response, NextFunction } from "express";

const register = new client.Registry();

// Collect default metrics
client.collectDefaultMetrics({
  register,
  prefix: "express_app_",
});

// HTTP Request Counter
export const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
  registers: [register],
});

const activeConnections = new client.Gauge({
    name: 'http_active_connections',
    help: 'Total number of active HTTP connections',
    registers: [register],
});
// HTTP Request Duration
export const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests",
  labelNames: ["method", "route", "status"],
  buckets: [0.1, 0.5, 1, 2, 5],
  registers: [register],
});

export const metricsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const end = httpRequestDuration.startTimer();

  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });

    end({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });
  });

  next();
};

export { register };
