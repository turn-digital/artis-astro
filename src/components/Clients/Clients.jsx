import React from "preact";

const Clients = (props) => {
  const title = props.title;
  return (
    <div className="clients">
      <div className="wrapper">
        <h3 className="clients__title title">{title}</h3>
        <div className="clients__list">
          <div className="clients__img">
            <img src="../../images/logo-facebook.svg" alt="Facebook logo" />
          </div>
          <div className="clients__img">
            <img src="../../images/logo-lbp.svg" alt="LBP logo" />
          </div>
          <div className="clients__img">
            <img src="../../images/logo-lu.svg" alt="LU logo" />
          </div>
          <div className="clients__img">
            <img
              src="../../images/ideju-instituts-logo.svg"
              alt="Ideju institūta logo"
            />
          </div>
          <div className="clients__img">
            <img src="../../images/golin-logo.svg" alt="Golin logo" />
          </div>
          <div className="clients__img">
            <img src="../../images/logo-rtu.svg" alt="RTU logo" />
          </div>
          <div className="clients__img">
            <img src="../../images/liaa-logo.svg" alt="LIAA logo" />
          </div>
          <div className="clients__img">
            <img src="../../images/Tet_logo.svg" alt="TET logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
