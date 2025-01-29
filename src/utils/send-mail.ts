export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Erro ao enviar o email');
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(`Erro: ${err.message}`);
    });
}
