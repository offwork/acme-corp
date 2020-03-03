import React, { FC } from 'react';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

import './app-shell.scss';


const dummyData = [{
  "id": 1,
  "title": "Assistant Professor",
  "subtitle": "FpML",
  "publish_date": "01/07/2020",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 2,
  "title": "Environmental Tech",
  "subtitle": "Corel Draw",
  "publish_date": "07/14/2019",
  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 3,
  "title": "Operator",
  "subtitle": "Environmental Science",
  "publish_date": "06/01/2019",
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 4,
  "title": "Pharmacist",
  "subtitle": "CA Unicenter NSM",
  "publish_date": "07/23/2019",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 5,
  "title": "Help Desk Operator",
  "subtitle": "Zymography",
  "publish_date": "03/05/2019",
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 6,
  "title": "Junior Executive",
  "subtitle": "Pricing",
  "publish_date": "01/01/2020",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 7,
  "title": "Research Nurse",
  "subtitle": "AMSI",
  "publish_date": "12/17/2019",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 8,
  "title": "Chemical Engineer",
  "subtitle": "Youth Marketing",
  "publish_date": "05/21/2019",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 9,
  "title": "Sales Associate",
  "subtitle": "Kinesio Taping",
  "publish_date": "02/21/2020",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 10,
  "title": "Database Administrator III",
  "subtitle": "IOS Firewall",
  "publish_date": "08/11/2019",
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 11,
  "title": "Structural Analysis Engineer",
  "subtitle": "Typesetting",
  "publish_date": "03/17/2019",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 12,
  "title": "Software Consultant",
  "subtitle": "Tcsh",
  "publish_date": "06/25/2019",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 13,
  "title": "Human Resources Manager",
  "subtitle": "QSE",
  "publish_date": "11/11/2019",
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 14,
  "title": "Systems Administrator I",
  "subtitle": "Agile Methodologies",
  "publish_date": "06/25/2019",
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 15,
  "title": "Marketing Manager",
  "subtitle": "Personal Training",
  "publish_date": "01/17/2020",
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 16,
  "title": "Health Coach II",
  "subtitle": "Multi-channel Marketing",
  "publish_date": "04/19/2019",
  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 17,
  "title": "Editor",
  "subtitle": "Amazon EC2",
  "publish_date": "04/02/2019",
  "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 18,
  "title": "VP Marketing",
  "subtitle": "Wastewater Treatment",
  "publish_date": "12/12/2019",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 19,
  "title": "Project Manager",
  "subtitle": "Ocean Freight",
  "publish_date": "05/22/2019",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}, {
  "id": 20,
  "title": "Web Designer I",
  "subtitle": "Environmental Impact Assessment",
  "publish_date": "09/02/2019",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "image": "https://semantic-ui.com/images/wireframe/image.png"
}];

/* eslint-disable-next-line */
export interface AppShellProps {}

export const AppShell = (props: AppShellProps) => {
  return (
    <div className="app-shell">
      <Header />
      <Content contents={dummyData} className="content" />
      <Footer className="footer" />
    </div>
  );
};

export default AppShell;
