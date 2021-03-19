import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { goToHomeScreen } from "../../routes/coordinator";

import { Div, ScreenContainer } from "./styled";

const CompanyDetailsScreen = () => {
  const history = useHistory();
  const pathParams = useParams();
  const [form, setForm] = useState({ name:"", cnpj:"", cep:"", state:"", city:"", district:"", street:"", number:"" , email: ""});

  const handleInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const getCompany = () => {
    axios.get(`${BASE_URL}/${pathParams.id}`).then(response => {
      console.log(response.data)
      setForm(response.data)
    }).catch(error => {
      alert(error.message)
    })
  }

  useEffect(() => {
    getCompany();
  }, []);

  const onSubmitForm = (event) => {
  event.preventDefault();
  goToHomeScreen(history);
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
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
            readOnly
          />
        </Div>
        <button>Voltar</button>
      </form>
    </ScreenContainer>
  );
};

export default CompanyDetailsScreen;