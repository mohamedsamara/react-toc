import { ReactNode } from 'react';

interface ArticleSectionProps {
  children: ReactNode;
}

const ArticleSection = (props: ArticleSectionProps) => {
  const { children, ...rest } = props;

  return (
    <section className="mb-16" {...rest}>
      {children}
    </section>
  );
};

export default ArticleSection;
