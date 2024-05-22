// easy-email-editor does not support app router yet, so use Pages router for this
// https://github.com/zalify/easy-email-editor/issues/222

import dynamic from "next/dynamic";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";

// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";

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
