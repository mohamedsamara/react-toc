import classNames from 'classnames';

import { HeadingElement } from 'hooks';
import Heading from '../Heading';

interface TableOfContentProps {
  activeId: string;
  headings: HeadingElement[];
}

const TableOfContent = (props: TableOfContentProps) => {
  const { headings, activeId } = props;

  return (
    <nav className="p-8">
      <Heading as="h4" className="mb-6 text-gray-600">
        Table of content
      </Heading>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className="mb-3">
            <a
              className={classNames(
                activeId === heading.id
                  ? 'text-blue-600'
                  : 'dark:text-gray-400',
                activeId === heading.id ? 'font-bold' : 'font-normal',
              )}
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContent;
