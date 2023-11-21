import Accordion from "@/components/Accordion";
import React from "react";
import Dropdown from "@/components/Dropdown";

const dropdowns: {
  link: string;
  linkTitle: string;
  title: string;
  content: React.ReactNode;
}[] = [
  {
    link: "https://help.figma.com/hc/en-us/articles/360039827134-Embed-files-and-prototypes",
    linkTitle: "Embed-files-and-prototypes",
    title: "Show Figma files and prototypes in Next.js",
    content: (
      <>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEICKglz9OLzthlDNqInA22%2FPlayground%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D44Fm5d8H6dy8JqNt-1"
          allowFullScreen
        ></iframe>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEICKglz9OLzthlDNqInA22%2FPlayground%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D51-60%26viewport%3D448%252C1224%252C0.52%26t%3DAqBIGQaU9Ce6Hx57-1%26scaling%3Dmin-zoom%26mode%3Ddesign"
          allowFullScreen
        ></iframe>
        <div className="mx-auto mt-8">Final Next.js component:</div>
        <div className="mx-auto w-48">
          <Dropdown
            data={[
              {
                key: "banana",
                value: "Banana",
              },
              {
                key: "apple",
                value: "Apple",
              },
              {
                key: "orange",
                value: "Orange",
              },
              {
                key: "strawberry",
                value: "Strawberry",
              },
            ]}
          />
        </div>
      </>
    ),
  },
];

export default function AccordionList() {
  return (
    <ul>
      {dropdowns.map((dropdown, index) => (
        <li key={index}>
          <Accordion
            title={dropdown.title}
            link={dropdown.link}
            linkTitle={dropdown.linkTitle}
          >
            {dropdown.content}
          </Accordion>
        </li>
      ))}
    </ul>
  );
}
