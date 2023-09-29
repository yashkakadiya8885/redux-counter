import { legacy_createStore } from "redux";
import { readucer } from "./Readucer";

export const Store =legacy_createStore(readucer)