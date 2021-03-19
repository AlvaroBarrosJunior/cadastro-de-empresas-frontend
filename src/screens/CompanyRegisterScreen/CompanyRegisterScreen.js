import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/UseForm/UseForm";
import { BASE_URL } from "../../constants/urls";
import { goToHomeScreen } from "../../routes/coordinator";

import { Div, ScreenContainer } from "./styled";

const CompanyRegisterScreen = () => {
  const history = useHistory();

  const { form, onChange } = useForm({ name:"", cnpj:"", cep:"", state:"", city:"", district:"", street:"", number:"" , email: ""});

  const handleInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const body = {
    name: form.name, 
    cnpj: form.cnpj, 
    cep: form.cep, 
    state: form.state, 
    city: form.city, 
    district: form.district, 
    street: form.street, 
    number: form.number,
    email: form.email
  };

  const postCompany = () => {
    axios.post(`${BASE_URL}`, body).then(response => {
      goToHomeScreen(history)
    }).catch(erro => {
      alert("preencha os campos corretamente!")
    })
  }

  const onSubmitForm = (event) => {
  event.preventDefault();
  postCompany();
  }


  return (
    <ScreenContainer>
      <form onSubmit={onSubmitForm}>
        <Div>
          <label>Nome</label>
          <input
            type={"name"}
            placeholder={"Nome"}
            value={form.name}
            onChange={handleInput}
            name={"name"}
            required
          />
        </Div>
        <Div>
          <label>CNPJ</label>
          <input
            type={"cnpj"}
            placeholder={"99.999.999/0001-99"}
            value={form.cnpj}
            onChange={handleInput}
            name={"cnpj"}
            required
          />
        </Div>
        <Div>
          <label>CEP</label>
          <input
            type={"cep"}
            placeholder={"99999-999"}
            value={form.cep}
            onChange={handleInput}
            name={"cep"}
            required
          />
        </Div>
        <Div>
          <label>Estado</label>
          <input
            type={"state"}
            placeholder={"Estado"}
            value={form.state}
            onChange={handleInput}
            name={"state"}
            required
          />
        </Div>
        <Div>
          <label>Cidade</label>
          <input
            type={"city"}
            placeholder={"Cidade"}
            value={form.city}
            onChange={handleInput}
            name={"city"}
            required
          />
        </Div>
        <Div>
          <label>Bairro</label>
          <input
            type={"district"}
            placeholder={"Bairro"}
            value={form.district}
            onChange={handleInput}
            name={"district"}
            required
          />
        </Div>
        <Div>
          <label>Rua</label>
          <input
            type={"street"}
            placeholder={"Logradouro"}
            value={form.street}
            onChange={handleInput}
            name={"street"}
            required
          />
        </Div>
        <Div>
          <label>Número</label>
          <input
            type={"number"}
            placeholder={"Número"}
            value={form.number}
            onChange={handleInput}
            name={"number"}
            required
          />
        </Div>
        <Div>
          <label>E-mail</label>
          <input
            type={"email"}
            placeholder={"exemplo@email.com"}
            value={form.email}
            onChange={handleInput}
            name={"email"}
            required
          />
        </Div>
        <button>Enviar</button>
      </form>
    </ScreenContainer>
  );
};

export default CompanyRegisterScreen;
