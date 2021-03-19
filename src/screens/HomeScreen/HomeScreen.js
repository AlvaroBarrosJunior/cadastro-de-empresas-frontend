import React, { useEffect, useState } from "react";
import { P, ScreenContainer, Td, Th } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useHistory } from "react-router-dom";
import { goToCompanyDetailsScreen, goToCompanyRegisterScreen, goToCompanyUpdateScreen } from "../../routes/coordinator";

const HomeScreen = () => {
  const history = useHistory();
  const [companiesList, setCompaniesList] = useState([])

  const getCompanies = () => {
    axios.get(`${BASE_URL}`).then(response => {
      setCompaniesList(response.data)
    }).catch(error => {
      alert(error.message)
    })
  }

  useEffect(() => {
    getCompanies();
  }, []);

  const deleteCompany = (id) => {
    axios.delete(`${BASE_URL}/${Number(id)}`).then(response => {
      getCompanies();
    }).catch(error => {
      alert(error.message)
    })
  }
  return (
    <ScreenContainer>
      <P onClick={() => goToCompanyRegisterScreen(history)}>Cadastrar Nova Empresa</P>
      <table>
        <tr>
          <Th>Empresa</Th>
          <Th>Ações</Th>
        </tr>
        {companiesList && companiesList.map(company => {
          return <tr key={company.id}>
            <td>{company.name}</td>
            <Td>
              <P onClick={() => deleteCompany(company.id)}>Deletar</P>
              <P onClick={() => goToCompanyUpdateScreen(history, company.id)}>Atualizar </P>
              <P onClick={() => goToCompanyDetailsScreen(history, company.id)}>Ver</P>
            </Td>
          </tr> 
    })}
      </table>
    </ScreenContainer>
  );
};

export default HomeScreen;
