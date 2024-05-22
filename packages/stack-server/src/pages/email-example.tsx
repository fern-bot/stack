// easy-email-editor does not support app router yet, so use Pages router for this
// https://github.com/zalify/easy-email-editor/issues/222

import dynamic from "next/dynamic";

const EmailEditorComponent = dynamic(
  () =>
    import("@/email-editor-demo").then(
      (lib) => lib.default
    ) as any,
  { ssr: false }
);

export default function Page() {
  return <>
    hello there
    <EmailEditorComponent />;
  </>;
};
