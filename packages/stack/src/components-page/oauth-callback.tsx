'use client';

import { useRef, useEffect, useState } from "react";
import { useStackApp } from "..";
import { runAsynchronously } from "@stackframe/stack-shared/dist/utils/promises";
import MessageCard from "../components/message-card";

export default function OAuthCallback () {
  const app = useStackApp();
  const called = useRef(false);
  const [showRedirectLink, setShowRedirectLink] = useState(false);

  useEffect(() => runAsynchronously(async () => {
    if (called.current) return;
    called.current = true;
    let hasRedirected = false;
    try {
      hasRedirected = await app.callOAuthCallback();
    } catch (e: any) {
      await app.redirectToSignIn();
    }
    if (!hasRedirected) {
      await app.redirectToSignIn();
    }
  }), []);

  useEffect(() => {
    setTimeout(() => setShowRedirectLink(true), 3000);
  }, []);

  return <MessageCard title='Redirecting...' fullPage>
    {showRedirectLink ? <p>If you are not redirected automatically, <a href={app.urls.home}>click here</a>.</p> : null}
  </MessageCard>;
}
