// Import Modules
import express, { Express, Request, Response } from 'express';

// Define Options
interface HttpHandlerOptions {
    httpHost: string;
    httpPort: number;
};

// Module Class
export default class HttpHandler {
    private static instance: HttpHandler;
    public handlerOptions: HttpHandlerOptions;
    public app: Express;

    private constructor(options: HttpHandlerOptions) {
        this.handlerOptions = options;
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.set('json spaces', 4);

        this.registerRoutes();
    };

    public static getInstance = (options?: HttpHandlerOptions): HttpHandler => {
        if (!HttpHandler.instance) {
            if (!options) throw new Error('HttpHandler has not been initialized yet.');
            HttpHandler.instance = new HttpHandler(options);
        };
        return HttpHandler.instance;
    };

    public listen = (): void => {
        this.app.listen(this.handlerOptions.httpPort, this.handlerOptions.httpHost, () => {
            console.log(`🌐 HTTP Server listening at http://${this.handlerOptions.httpHost}:${this.handlerOptions.httpPort}`);
        });
    };

    private registerRoutes = (): void => {
        this.app.get('/', (_req: Request, res: Response) => {
            return res.status(200).json({ code: 200, message: 'Service is Healthy.' });
        });
        //this.app.all('/*', (_req, res) => res.status(204).end());
    };
};
