import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from "./middleware/toast";

export default function configureAppStore() {
    return configureStore({ 
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({destination: "Console"}),
            toast
        ]

    });
}