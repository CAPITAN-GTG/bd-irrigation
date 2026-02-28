"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

const PDF_PATH = "/BDI Christmas Light Flyer 1.pdf";
const PDF_URL = encodeURI(PDF_PATH);

export function ChristmasLightFlyer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="christmas-flyer">
      <button
        type="button"
        className="christmas-flyer__toggle"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-controls="christmas-flyer-pdf"
      >
        <FileText size={20} aria-hidden />
        <span>{expanded ? "Hide flyer" : "View Christmas light flyer (PDF)"}</span>
        {expanded ? <ChevronUp size={20} aria-hidden /> : <ChevronDown size={20} aria-hidden />}
      </button>
      <div
        id="christmas-flyer-pdf"
        className="christmas-flyer__embed"
        aria-hidden={!expanded}
        hidden={!expanded}
      >
        <iframe
          src={PDF_URL}
          title="BDI Christmas Light Flyer"
          className="christmas-flyer__iframe"
        />
        <p className="christmas-flyer__download">
          <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
            Open PDF in new tab
          </a>
        </p>
      </div>
    </div>
  );
}
