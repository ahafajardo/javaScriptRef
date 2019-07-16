"use strict";
import * as stringModule from "capitalize_strings";

import { capitalizeString } from "string_functions";

import subtract from "math_functions";

subtract(7,4);

capitalizeString("hello!");

export const foo = "bar";
export const bar = "foo";

export { foo, bar, capitalizeString };

export default function subtract(x,y) {return x - y;}