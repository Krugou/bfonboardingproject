const doFetch = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
const fetchCompanyInfo = async (businessId: string) => {
  try {
    const data = await doFetch(
      `https://avoindata.prh.fi/opendata-ytj-api/v3/companies?businessId=${businessId}`,
    );
    if (!data.companies) {
      console.error('No company data found');
      return;
    }
    const companyInfo = data.companies[0];
    console.log('Company info:', companyInfo);
    return companyInfo;
  } catch (error) {
    console.error('Error fetching company info:', error);
  }
};

export {fetchCompanyInfo};
