export const goToHomeScreen = (history) => {
  history.push("/");
};

export const goToCompanyRegisterScreen = (history) => {
  history.push("/cadastro");
};

export const goToCompanyUpdateScreen = (history, id) => {
  history.push(`/empresa/${id}`);
};

export const goToCompanyDetailsScreen = (history, id) => {
  history.push(`/detalhes/${id}`);
};