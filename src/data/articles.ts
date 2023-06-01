import { HeadingType } from 'components/common/Heading';

interface IArticle {
  title: string;
  description: string;
  level: HeadingType;
  repeat: number;
}

const Articles: IArticle[] = [
  {
    title: 'The introduction',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 2,
  },
  {
    title: 'How to get started',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 3,
  },
  {
    title: 'Advanced usage',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h2',
    repeat: 4,
  },
  {
    title: 'Using upside-down',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 2,
  },
  {
    title: 'Easter eggs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 4,
  },
  {
    title: 'Contributing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 4,
  },
  {
    title: 'Your first pull request',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 4,
  },
  {
    title: 'Governance',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 4,
  },

  {
    title: 'FAQ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit voluptates assumenda eos accusamus eius magnam similique aspernatur incidunt nulla cum, libero odio rerum ea quibusdam esse asperiores laudantium dignissimos!',
    level: 'h3',
    repeat: 4,
  },
];

export { Articles };
