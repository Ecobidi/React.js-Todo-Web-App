import React, { Component } from 'react';

export default function Header(props) {
  return (
    <header>
      <h2>{props.title} &#x267B;</h2>
      <span>{props.subtitle}</span>
    </header>
  )
}
