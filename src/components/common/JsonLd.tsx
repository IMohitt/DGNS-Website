import { useEffect, useId } from "react";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  const reactId = useId();
  const elementId = `json-ld-${reactId.replaceAll(":", "")}`;
  const serializedData = JSON.stringify(data).replaceAll("<", "\\u003c");

  useEffect(() => {
    const script = document.createElement("script");
    script.id = elementId;
    script.type = "application/ld+json";
    script.text = serializedData;
    document.head.append(script);

    return () => script.remove();
  }, [elementId, serializedData]);

  return null;
}
