import { screen, render } from "@testing-library/react";
import { expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
    it("renders Footer", () => {
        render(<Footer />);
        expect(screen.getByText("Copyright 2023 All Right Reserve | Built by Robi Hardinata")).toBeInTheDocument();
    })
}) 