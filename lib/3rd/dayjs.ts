import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import duration from "dayjs/plugin/duration";
import customParseFormat from "dayjs/plugin/customParseFormat";

// Apply plugins
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(duration);
dayjs.extend(customParseFormat);

export { dayjs as default, dayjs };
