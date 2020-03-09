import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Heading, Text } from 'evergreen-ui';
import { parse } from 'querystring';

const Books = () => <div>
  <Heading is="h1">Books content is here!!</Heading>
  <Text>1500'lerden beri kullanılan standart Lorem Ipsum pasajı "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
  <Text>M.Ö. 45 tarihinde Çiçero tarafından yazılan "de Finibus Bonorum et Malorum"un 1.10.32 
    sayılı bölümü "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
    ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
    nulla pariatur?"</Text>
</div>;
const BookDetails = () => <div>
  <Heading is="h1">BookDetails content is here!!</Heading>
  <Text>1500'lerden beri kullanılan standart Lorem Ipsum pasajı "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
  <Text>M.Ö. 45 tarihinde Çiçero tarafından yazılan "de Finibus Bonorum et Malorum"un 1.10.32 
    sayılı bölümü "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
    ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
    nulla pariatur?"</Text>
</div>;
const About = () => <div>
  <Heading is="h1">Abouts content is here!!</Heading>
  <Text>1500'lerden beri kullanılan standart Lorem Ipsum pasajı "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
  <Text>M.Ö. 45 tarihinde Çiçero tarafından yazılan "de Finibus Bonorum et Malorum"un 1.10.32 
    sayılı bölümü "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
    ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
    nulla pariatur?"</Text>
</div>;
const Contact = () => <div>
  <Heading is="h1">Contacts content is here!!</Heading>
  <Text>1500'lerden beri kullanılan standart Lorem Ipsum pasajı "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
  <Text>M.Ö. 45 tarihinde Çiçero tarafından yazılan "de Finibus Bonorum et Malorum"un 1.10.32 
    sayılı bölümü "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
    ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
    nulla pariatur?"</Text>
</div>;
const Cart = () => <div>
  <Heading is="h1">Carts content is here!!</Heading>
  <Text>1500'lerden beri kullanılan standart Lorem Ipsum pasajı "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
  <Text>M.Ö. 45 tarihinde Çiçero tarafından yazılan "de Finibus Bonorum et Malorum"un 1.10.32 
    sayılı bölümü "Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex 
    ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
    esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
    nulla pariatur?"</Text>
</div>;
const NotFound = () => <div>
  <Heading is="h1">Sorry, we couldn't find what you were looking for!!</Heading>
</div>;


class ComposedComponent extends Component {}
const Redirecting = (ComposedComponent) => {
  return (props) => {
    const params = parse(props.location.search.replace('?', ''));
    const redirect = params.redirect as string;
    if (redirect) {
      return <Redirect to={{pathname: redirect, state: {from: props.location}}}/>;
    } else {
      return <ComposedComponent props={props} />
    }
  };
}

/* eslint-disable-next-line */
export interface AppRoutingProps {}

export const AppRouting = (props: AppRoutingProps) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Redirecting(Books)} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/:id" component={BookDetails} />
        <Route component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default AppRouting;
