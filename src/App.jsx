import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">Cadastro de usuário</p>
            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                 <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
              </svg>
              <input
                type="text"
                className="input-field"
                placeholder="Nome"
                autoComplete="off"
              />
            </div>
            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                type="password"
                className="input-field"
                placeholder="E-mail"
              />
            </div>
            <div className="btn">
              <button className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entrar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button className="button2">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 1.5em;
    background-color: #424242;
    border-radius: 20px;
  }

  #heading {
    text-align: center;
    margin: 5em;
    color: rgb(0, 255, 200);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: rgb(0, 255, 200);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: rgb(0, 255, 200);
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
  }

  .button1:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color: rgb(0, 255, 200);
  }

  .button2 {
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
  }

  .button2:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color: rgb(0, 255, 200);
  }

  .card {
    background-image: linear-gradient(163deg, #00ff75 0%, #d400ff 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;

export default Form;
