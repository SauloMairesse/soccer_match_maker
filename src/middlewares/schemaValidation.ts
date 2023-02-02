import { Request, Response, NextFunction } from "express";

export const schemaValidation = (schema: { validate: Function }) => (req: Request, res: Response, next: NextFunction) => { 
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error) {
            console.log('erro schema : ', error)    
            throw "Erro SchemaValidation!"
         };
         console.log('next schema')
        next();
    }
        