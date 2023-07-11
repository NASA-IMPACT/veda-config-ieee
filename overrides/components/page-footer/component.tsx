import React from "$veda-ui/react";
import { format } from "$veda-ui/date-fns";
import { Tip } from "$veda-ui-scripts/components/common/tip";

export default function PageFooter(props) {
  const nowDate = new Date();

  return (
    <p>
      <a href="https://www.grss-ieee.org/">
        <span>By</span> <strong>IEEE GRSS</strong> <span>on</span>{" "}
        <time dateTime={String(nowDate.getFullYear())}>
          {nowDate.getFullYear()}
        </time>
      </a>
      {" • "}
      <Tip
        content={`Released on ${format(new Date(+props.appBuildTime), "PPPP")}`}
      >
        <span>v{props.appVersion}</span>
      </Tip>
    </p>
  );
}
