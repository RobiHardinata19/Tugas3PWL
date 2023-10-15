import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
    it("renders header", () => {
        render(<Header />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(document.getElementById("berandaTag").getAttribute("href")).toBe("/")
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(document.getElementById("tentangTag").getAttribute("href")).toBe("/tentang")
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(document.getElementById("kontakTag").getAttribute("href")).toBe("/kontak")
    })
})