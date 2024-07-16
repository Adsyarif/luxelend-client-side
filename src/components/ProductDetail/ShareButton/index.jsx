import React, { useState } from "react";
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

  const toggleShareButtons = () => {
    setShowShareButtons(!showShareButtons);
  };

  return (
    <div>
      <button
        className="rounded-md px-3 py-1 border border-slate-100 bg-yellow-600"
        onClick={toggleShareButtons}
      >
        Share
      </button>
      {showShareButtons && (
        <div className="flex items-center gap-1">
          <WhatsappShareButton url={shareURL}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton url={shareURL}>
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <LineShareButton url={shareURL}>
            <LineIcon size={32} round={true} />
          </LineShareButton>
          <FacebookShareButton url={shareURL}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
      )}
         
    </div>
  );
}