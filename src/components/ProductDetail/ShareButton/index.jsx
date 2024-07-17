import React, { useState, useEffect, useRef } from "react";

import {
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  LineIcon,
  LineShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

export function ShareButton() {
  const shareURL = window.location.href;
  const [showShareButtons, setShowShareButtons] = useState(false);
  const shareButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareButtonRef.current && !shareButtonRef.current.contains(event.target)) {
        setShowShareButtons(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleShareButtons = () => {
    setShowShareButtons(!showShareButtons);
  };

  const handleShareButtonClick = () => {
    setShowShareButtons(false);
  };

  return (
    <div ref={shareButtonRef}>
      {!showShareButtons && (
        <button className="px-3 py-1 bg-yellow-600" onClick={toggleShareButtons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
          </svg>
        </button>
      )}
      {showShareButtons && (
        <div className="flex items-center gap-1">
          <WhatsappShareButton url={shareURL} onClick={handleShareButtonClick}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton url={shareURL} onClick={handleShareButtonClick}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <LineShareButton url={shareURL} onClick={handleShareButtonClick}>
            <LineIcon size={32} round={true} />
          </LineShareButton>
          <FacebookShareButton url={shareURL} onClick={handleShareButtonClick}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
      )}
    </div>
  );
}
