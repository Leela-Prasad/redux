import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";

export default function configureAppStore() {
    return configureStore({ 
        reducer,
        // middleware: [logger("Console")]
        middleware: [
            logger({destination: "Console"}),
            func
        ]

    });
}