import classnames from 'classnames';

export interface ParagraphProps {
  children: string;
  as?: 'p';
  className?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children, className = '', as = 'p', ...rest } = props;
  const Element = as;

  return (
    <Element className={classnames(as, className)} {...rest}>
      {children}
    </Element>
  );
};

export default Paragraph;
