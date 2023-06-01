import Heading, { HeadingProps } from '../Heading';

interface ArticleHeadingProps extends HeadingProps {
  children: string;
}

const ArticleHeading = (props: ArticleHeadingProps) => {
  const { children, ...rest } = props;

  return (
    <Heading className="mb-6" {...rest}>
      {children}
    </Heading>
  );
};

export default ArticleHeading;
