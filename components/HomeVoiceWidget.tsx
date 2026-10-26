"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function HomeVoiceWidget() {
  useEffect(() => {
    document.body.classList.add("home-page");

    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <Script
      id="retell-widget"
      src="https://dashboard.retellai.com/retell-widget-v2.js"
      type="module"
      strategy="afterInteractive"
      data-voice-public-key="public_key_d47a6de6ed355105d9a68"
      data-voice-agent-id="agent_560e59a357b68a520b8ad6ef07"
      data-title="Talk to VrindraTech"
      data-bot-name="Riya"
      data-fab-text="Ask Riya"
      data-color="#4F46E5"
      data-show-ai-popup="false"
    />
  );
}
