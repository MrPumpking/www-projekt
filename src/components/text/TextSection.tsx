import { FC, PropsWithChildren } from 'react';
import { Container } from '../container/Container';
import { Heading } from './Heading';

interface TextSectionProps {
  title: string;
}

export const TextSection: FC<PropsWithChildren<TextSectionProps>> = ({
  title,
  children,
}) => {
  return (
    <section>
      <Container variant="text" className="flex flex-col space-y-8 py-16">
        <Heading>{title}</Heading>
        <div className="flex flex-col space-y-4">{children}</div>
      </Container>
    </section>
  );
};
