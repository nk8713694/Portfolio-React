import React from 'react';
import './services.css';
import { FaCheckSquare } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build front-end websites </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>
                I collaborate with product owner to get the design and product
                requirements
              </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build web apps using React,Java and mssql server</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>QA and Tests</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Backend Development using Springboot</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>QA and Tests</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
