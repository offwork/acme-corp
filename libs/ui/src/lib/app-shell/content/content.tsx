import React, { FC } from 'react';
import { Pane, Heading, Paragraph, Text, Button, Small } from 'evergreen-ui';
import './content.scss';

/* eslint-disable-next-line */
export interface ContentProps {
  contents?: Array<{
    id: number,
    title: string,
    subtitle: string,
    publish_date: string,
    description: string,
    image: string,
  }>
}

export const Content: FC<ContentProps & { className: string }> = ({className, contents}) => {
  return (
    <Pane clearfix className={className}>
      {contents.map(content => (
        <Pane key={content.id}
          elevation={1}
          margin={24}
          padding={24}
          border="default"
          className="item">
          <Heading is="h3">{content.title}</Heading>
          <Text><Small>{content.subtitle}</Small></Text> {/* - <Strong>{content.publish_date}</Strong> */}
          <div className="image">
            <img src={content.image} alt={content.title}/>
          </div>
          <Paragraph className="truncate">{content.description}</Paragraph>
          <div className="more">            
            <Button height={32} appearance="minimal" iconAfter="more">
              More
            </Button>
          </div>
        </Pane>
      ))}
    </Pane>
  );
};

export default Content;
