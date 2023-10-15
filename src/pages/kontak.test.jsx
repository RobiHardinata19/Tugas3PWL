import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Kontak from "./kontak";
describe("Kontak", () => {
    it("renders Kontak", () => {
        render(<Kontak />);
        expect(screen.getByText("Beranda")).toBeInTheDocument();
        expect(screen.getByText("Tentang")).toBeInTheDocument();
        expect(screen.getByText("Kontak")).toBeInTheDocument();
        expect(screen.getByText("Incoming Messages : 0")).toBeInTheDocument();
        expect(screen.getByText("Copyright 2023 All Right Reserve | Built by Robi Hardinata")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByText("Incoming Messages : 1")).toBeInTheDocument();
    })
})