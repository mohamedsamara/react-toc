import { useEffect, useState } from 'react';

export interface HeadingElement {
  id: string;
  text: string;
  level: number;
}

export const useHeadings = (containerId: string) => {
  const [headings, setHeadings] = useState<HeadingElement[]>([]);
  useEffect(() => {
    const containerElement = document.getElementById(containerId);
    if (!containerElement) return;
    const elements = Array.from(
      containerElement.querySelectorAll('h2, h3, h4, h5, h6'),
    )
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
      }));
    setHeadings(elements);
  }, [containerId]);
  return headings;
};
