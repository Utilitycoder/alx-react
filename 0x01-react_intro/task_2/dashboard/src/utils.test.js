import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Test utils.js file", () => {
    it("Test getFullYear", () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });
    it("Test getFooterCopy with true", () => {
        expect(getFooterCopy(true)).toBe("Holberton School");
    });
    it("Test getFooterCopy with false", () => {
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
    it("Test getLatestNotification", () => {
        expect(getLatestNotification()).toBe(
        "<strong>Urgent requirement</strong> - complete by EOD"
        );
    });
});