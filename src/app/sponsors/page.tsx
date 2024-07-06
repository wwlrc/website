
import { Metadata } from "next";
import SponsorGallery from "./gallery";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Sponsors",
};

export default function Sponsors() {    
    return (
        <main>
            <h1 className="text-2xl font-bold mb-3">Sponsors</h1>

            <SponsorGallery />            
        </main>
    )
}