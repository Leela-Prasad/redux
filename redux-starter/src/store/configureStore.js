import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";

export default function configureAppStore() {
    return configureStore({ reducer });
}