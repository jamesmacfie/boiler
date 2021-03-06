import React from 'react';
import App, { Container } from 'next/app';
import '../styles/index.css';

class Boiler extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Boiler;
