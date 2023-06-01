import Layout from 'layouts/default';
import TableOfContent from 'components/common/TableOfContent';
import ArticleHeading from 'components/common/ArticleHeading';
import Paragraph from 'components/common/Paragraph';
import { useHeadings, useScrollSpy } from 'hooks';
import { Articles } from 'data/articles';
import ArticleSection from 'components/common/ArticleSection';

export const HOME_TEST_ID = 'home';
const SCROLLABLE_CONTAINER_ID = 'scrollable-container';

const Home = () => {
  const headings = useHeadings(SCROLLABLE_CONTAINER_ID);
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    {
      rootMargin: '-20px 0px -90%',
      root: document.getElementById(SCROLLABLE_CONTAINER_ID),
    },
  );

  return (
    <Layout>
      <div data-testid={HOME_TEST_ID} className="h-full overflow-y-hidden">
        <div className="fixed inset-y-0 left-0 w-2/12">
          <TableOfContent headings={headings} activeId={activeId} />
        </div>
        <section
          className="flex flex-col w-10/12 h-full px-6 ml-auto overflow-y-auto grow"
          id={SCROLLABLE_CONTAINER_ID}
        >
          <article className="pt-12">
            {Articles.map((article, idx) => (
              <ArticleSection key={idx}>
                <ArticleHeading as={article.level}>
                  {article.title}
                </ArticleHeading>
                {[...Array(article.repeat)].map((_, idx) => (
                  <Paragraph key={idx}>{article.description}</Paragraph>
                ))}
              </ArticleSection>
            ))}
          </article>
          <div className="min-h-[35rem]" />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
