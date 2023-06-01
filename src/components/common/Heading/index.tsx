import classnames from 'classnames';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  children: string;
  as: HeadingType;
  id?: string;
  className?: string;
}

const Heading = (props: HeadingProps) => {
  const { children, id, className = '', as, ...rest } = props;
  const theId = id ?? getId(children);
  const Element = as;

  return (
    <Element id={theId} className={classnames(as, className)} {...rest}>
      {children}
    </Element>
  );
};

export default Heading;

const getId = (children: string) => {
  return children
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');
};
